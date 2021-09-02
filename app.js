const btn = document.querySelectorAll('.btn');
const slide = document.querySelector('#slider1'); 
const formContainer = document.querySelector('.form-container');
const landingPage = document.getElementById('landing-page');
const homePage = document.querySelector('#land')
const logIn = document.querySelector('#login')
const catalog = document.getElementById('catalog');
const catalogCnt = document.querySelector('.catalog-cont');
const products = document.querySelector('.products');

const cartBtn = document.querySelectorAll('.add-cart');
const cartItem = document.querySelector('.cart-item');


// ui for catalog
// prd-title, add-cart, price, img-card

const imgCard = document.querySelector('img-card');
const price = document.querySelector('price');
const addCart = document.querySelector('add-cart');
const prdTitle = document.querySelector('prd-title');



let cartNumber = 0;

cartBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
            // cartNumber ++;
            // cartItem.innerHTML = cartNumber
            cartNumbers()
            
    })
} )

function onLoadCartNumbers() {
    let productsNumbers = localStorage.getItem('cartNumbers');

    if(productsNumbers) {
        cartItem.textContent = productsNumbers;
    }
}

function cartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    //  console.log(productNumbers);
    productNumbers = parseInt(productNumbers);
      
    if( productNumbers ) {
         localStorage.setItem('cartNumbers', productNumbers + 1);
         cartItem.textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        cartItem.textContent = 1;
    }

}






// cartBtn.
var hidden = true

// Array.from(btn).forEach(function(btnEl){
//     for(var i = -800; i <= -1600; i++)

// });
// for(let i = 0; i < btn.length; i++){
//     btn[i].addEventListener('click', ()=> {
//         for(let j = 0; j > -1600; j = j -800){
//             slide.style.transform = translateX(j +='px')
//         }
//         if (j = -1600) {
//             slide.style.transform = translateX(j +=px)
//             break;
//         }
//         btn.forEach((btnEl) => {
//         btnEl.classList.remove("active");
//     })
//     btnEl.classList.add("active");
// })
// }

// btn[0].addEventListener('click', function() {
//         slide.style.transform = "translateX(0px)"
//         for (var i = 0; i < 3; i++) { 
//             btn[i].classList.remove("active");
//         }  
//         this.classList.add("active");
//     })

// btn[1].addEventListener('click',   function() {
//         slide.style.transform = "translateX(-800px)"
//         for (var i = 0; i < 3; i++) {
//             btn[i].classList.remove("active");
//         }
//             this.classList.add("active") ;
            
//         })
            
    

// btn[2].addEventListener('click', function() {
//         slide.style.transform = "translateX(-1600px)"
//         for (var i = 0; i < 3; i++) {
//             btn[i].classList.remove("active");
//         }
//         this.classList.add("active");
//     })

    


// EVENT LISTENER

var navLinks = document.querySelectorAll('.nav-left ul li a');
console.log(navLinks);
const nav = document.getElementsByClassName('nav-link');

for(let i = 0; i < nav.length; i++) {
    navLinks[i].addEventListener('click', () => {
       navLinks.forEach(el => {
        el.classList.remove('active-link');
       })
       navLinks[i].classList.add('active-link');      
        }     
    )}



logIn.addEventListener('click',  ()=> {
    landingPage.hidden = true;
    catalogCnt.hidden = true;
    formContainer.hidden = false;
})


homePage.addEventListener('click', () => {
    landingPage.hidden = false;
    formContainer.hidden = true;
    catalogCnt.hidden = true;


 })


function showCatalog(){
    landingPage.hidden = true;
    formContainer.hidden = true;
    catalogCnt.hidden = false;


}




//  Add event listener
catalog.addEventListener('click', showCatalog)


 console.log(catalog)
//  console.log(btn[1])
// console.log(logIn)
// console.log(home.firstChild)
// console.log(slide);
// console.log(formContainer)




// function printPrimeNumbers () {
//     for(let i = 2; i<=100; i++){
//         let primeNumber = true;
//         for(let j = 2; j <= (i-1); j++){
//             if(i % j === 0){
//                 primeNumber = false;
//             }
//         }
//         if (primeNumber === true){
//             console.log(i)
//         }
//     }
// }

// printPrimeNumbers(100)

// function printPrimeNumbers () {
//     for(let i = 2; i<=100; i++){          
                                                
//         let notPrimeNumber = false;
//         for(let j = 2; j <= (i-1); j++){     
//             if(i % j === 0){
//                 notPrimeNumber = true;
//             }
//         }
//         if (notPrimeNumber === true){
//             console.log(i)
//         }
//     }
// }      

// printPrimeNumbers(100)


// function printPrimeNumbers () {
//     for(let i = 2; i<=100; i++){ 
//         let notPrimeNumber = false;
//         if(i % 2 == 0) {
//             notPrimeNumber = true;
//         }
//     }
//     if(notPrimeNumber == false){
//         console.log(i)
//     }

// }



//getting our products

async function getProducts() {
    try {
        let result = await fetch('./products.json');
        let data = await result.json();
        const productCards = data
        
        console.log(data);
        // console.log(productCards);

        // populate the catalog page
 // return productCards;
  
        // productCards.forEach(product => {
        //     // imgCard.textContent.src = 'data.url';
        //     prdTitle.textContent = 'product.product-title';
        //     price.innerHTML = 'product.price';
            
        // })
        
        // return productCards;

    }catch(error) {
        console.log('Product not fetched', error);
    }
    
};

getProducts()
// console.log(result);
// console.log(productCards);




// pagination
const params = {
    numberOfCards: products.children,
    cardsPerPage : 6,
    currentPage : 4,
    numberOfButtons : 4
};


// console.log(products.children);
const createPagination = (params) => {
    const {
        numberOfCards,
        cardsPerPage,
        currentPage,
        numberOfButtons 
    } = params;

    const numberOfPages = Math.ceil(numberOfCards / cardsPerPage);

    if(currentPage > numberOfPages || currentPage < 1) return {
        pagination: [],
        currentPage
    }


    const buttons = Array(numberOfPages).fill(1 ).map((e, i) => e + i);
    const sideButtons = numberOfButtons % 2 === 0 ? numberOfButtons/2 : (numberOfButtons - 1);


    console.log(sideButtons)
    console.log(buttons)
    const calculLeft =  (rest = 0) => {
        return {
            array : buttons
            .slice(0, currentPage - 1)
            .reverse()
            .slice(0, sideButtons + rest)
            .reverse(),   

            rest: function () {
               return sideButtons - this.array.length
            }
        };
    };


    const calculRight =  (rest = 0) => {
        return {
            array : buttons
            .slice(currentPage)
            .slice(0, sideButtons + rest),
            
            rest: function () {
               return sideButtons - this.array.length;
            }
        };
    };

    const leftButton = calculLeft(calculRight().rest()).array;
    const rightButton = calculRight(calculLeft().rest()).array;

    return {
        pagination: [...leftButton, "current page", ...rightButton],
        currentPage
    }

    // return {leftButton, rightButton}
    return ; 
}


// const pagination = createPagination(params);

// console.log(pagination);

onLoadCartNumbers();