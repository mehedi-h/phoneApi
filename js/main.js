
const loadPhones = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data = await res.json()
    const phones = data.data
    
    displayPhone(phones)
}

const displayPhone = phones => {
    const phoneContainer = document.getElementById('phone-container')
    phoneContainer.textContent = '';

    const showBtn = document.getElementById('show-btn')
    if (phones.length > 9) {
        showBtn.classList.remove('hidden')
    } else {
        showBtn.classList.add('hidden')
    }
    phones = phones.slice(0, 9)

    phones.forEach(phone => {
        console.log(phone)
        const phoneCard = document.createElement('div')
        phoneCard.classList = `card bg-slate-100 shadow-xl`

        phoneCard.innerHTML = `
            <figure class="px-10 pt-10">
                <img src="${phone.image}" alt="Phone" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                    <h2 class="card-title">${phone.phone_name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        `
        phoneContainer.appendChild(phoneCard)
    });
}

const searchBtn = () => {
    const searchField = document.getElementById('search-field')
    const searchInput = searchField.value;
    // console.log(searchInput)
    loadPhones(searchInput);
}

const showAllBtn = () => {
    const searchField = document.getElementById('search-field')
    const searchInput = searchField.value;
    // console.log(searchInput)
    loadPhones(searchInput);
}

loadPhones()