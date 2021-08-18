const btn = document.querySelectorAll('.btn');
const slide = document.querySelector('#slider1'); 
const formContainer = document.querySelector('.form-container');
const landingPage = document.getElementById('landing-page');
const homePage = document.querySelector('#land')
const logIn = document.querySelector('#login')
const catalog = document.getElementById('catalog');
const catalogCnt = document.querySelector('.catalog-cont');




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

