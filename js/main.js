
const loadPhones = async (searchText, isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data = await res.json()
    const phones = data.data
    
    displayPhone(phones, isShowAll)
}

const displayPhone = (phones,isShowAll)  => {
    const phoneContainer = document.getElementById('phone-container')
    phoneContainer.textContent = '';

    const showBtn = document.getElementById('show-btn')
    if (phones.length > 9 && !isShowAll) {
        showBtn.classList.remove('hidden')
    } else {
        showBtn.classList.add('hidden')
    }
    
    if (!isShowAll) {
        phones = phones.slice(0, 9)
    }

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

    toggleSpinner(false)
}

const searchBtn = (isShowAll) => {
    const searchField = document.getElementById('search-field')
    const searchInput = searchField.value;
    // console.log(searchInput)
    toggleSpinner(true);
    loadPhones(searchInput, isShowAll);
}

const showAllBtn = () => {
    
    searchBtn(true)
}

const toggleSpinner = (isLoading) => {
    const loadingBar = document.getElementById('loading-bar');
    if (isLoading) {
        loadingBar.classList.remove('hidden');
    } else {
        loadingBar.classList.add('hidden');
    }
}

// loadPhones()