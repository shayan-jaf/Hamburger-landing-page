let menuIcon = document.querySelector('.menu-icon')
let menu = document.querySelector('.menu')
let boxes = document.querySelectorAll('.boxs-main-bottom')
let orderbtn = document.querySelector('.order-now-box')
let menuFirst = document.querySelector('.menu-first')
let menuSec = document.querySelector('.menu-sec')
let addFood = document.querySelector('.add-food')
let countFood = document.querySelector('.count-food')
let removeFood = document.querySelector('.remove-food')
let priceOrderFood = document.querySelector('.price-numi')
let orderFoodBtn = document.querySelector('.order-food-btn')
let menuPart = document.querySelector('.menu-part')
let saleOffPart = document.querySelector('.sale-off-part')
let iconsBaskets = document.querySelectorAll('.icon-basket-food-info')
let foodImgs = document.querySelectorAll('.food-img')
let foodNames = document.querySelectorAll('.food-name')
let foodPrices = document.querySelectorAll('.food-price')

let aryFoodInfos = [
    {id: '1', name: 'Cheese Beef Hamburger', price: '10.65', img: 'img/2.png'},
    {id: '2', name: 'Combo funny', price: '10.3', img: 'img/13.png'},
    {id: '3', name: 'Chicken with Spicy Sauce', price: '7.2', img: 'img/13 (1).png'},
    {id: '4', name: 'Salad mixed vinegar', price: '5.4', img: 'img/20220905-113313 1.png'},
    {id: '5', name: 'Chicken burger', price: '5.39', img: 'img/burger_with_fried_chicken_2021_08_29_03_54_46_utc 1.png'},
    {id: '6', name: 'Lipton', price: '2.8', img: 'img/ice_tea_2021_11_30_16_48_46_utc 1.png'}
]


// start side menu

let flagForMenu = false
menuIcon.addEventListener('click', () => {
    if (!flagForMenu) {
        flagForMenu = true
        menu.style.left = '-50px'
    } else {
        flagForMenu = false
        menu.style.left = '-202px'
    }
})

// finish side menu

// start go to the mainSection

let goToSectionFoods = () => {
    let sectionFood = document.querySelector('.section-food')
    sectionFood.scrollIntoView({behavior: 'smooth'})
}

menuFirst.addEventListener('click', event => {
    event.preventDefault()
    goToSectionFoods()
})

menuPart.addEventListener('click', event => {
    event.preventDefault()
    goToSectionFoods()
})


let goToSectionSaleOff = () => {
    let SectionSaleOff  = document.querySelector('.main-bottom')
    SectionSaleOff.scrollIntoView({behavior: 'smooth'})
}

menuSec.addEventListener('click', event => {
    event.preventDefault()
    goToSectionSaleOff()
})

saleOffPart.addEventListener('click', event => {
    event.preventDefault()
    goToSectionSaleOff()
})

// finsih go to the mainSection

// start add-remove food to cart

let addFoodToBasket = () => {
    addFood.addEventListener('click', () => {

        countFood.innerHTML++

        calcShopBasket()
    })
}
addFoodToBasket()

let removeFoodFromBasket = () => {
    removeFood.addEventListener('click', () => {

        countFood.innerHTML--

        if (countFood.innerHTML == -1) {
            countFood.innerHTML = 0
        }
        
        calcShopBasket()
    })
}
removeFoodFromBasket()

let calcShopBasket = () => {
    let totalPrice = countFood.innerHTML * 5.39
    let fixesPrice = totalPrice.toFixed(2)

    priceOrderFood.innerHTML =  ` $${fixesPrice}`
}

let orderFoodHandler = () => {
    orderFoodBtn.addEventListener('click', () => {

        countFood.innerHTML = 0
        priceOrderFood.innerHTML = ' $0.00'
    })
} 
orderFoodHandler()

let addNewFoodToBasketHandler = () => {
    iconsBaskets.forEach(iconBasket => {
        iconBasket.addEventListener('click', event => {

            if (event.target.dataset.id === aryFoodInfos[0].id) {
                console.log(aryFoodInfos[0]);
                
            }
        })
    })
}

 addNewFoodToBasketHandler()

// finish add-remove food to cart