// alert("ggs")
const input = document.querySelector('#input-box');
const search = document.querySelector('#search');
const cross = document.querySelector('#cross');
const login = document.querySelector('#login');
const signUp = document.querySelector('#signup');
const setPassword = document.querySelector('#set-password');
const confirmPassword = document.querySelector('#confirm-password');
const checkBox = document.querySelector('#checkbox');
const cartItems = document.querySelector('#cart-items')
function signupValidation(){
    if(setPassword.value != confirmPassword.value){
        alert("passwords dont match")
    }
    if(checkBox.checked == false){
        alert("please accept the terms and conditions")
    }
}

function validation(){
    signupValidation();
    validateForm();
}

function showSignup(){
    signUp.classList.remove('hidden');
    login.classList.add('hidden');
}
function loginform(){
    login.classList.remove('hidden');
    signUp.classList.add('hidden');
}
function closeLogin(){
    login.classList.add('hidden');
    signUp.classList.add('hidden');
}



//product data
const productData = [
    {
        id: 0,
        link : '/product1.html',
        name : 'Item 1',
        oldPrice : '699',
        price : '599',
        image: "https://img.freepik.com/premium-photo/modern-stylish-female-new-fashion-court-shirt-ai-generated_719255-10786.jpg?w=740"
    },
    {
        id: 1,
        link : '/product2.html',
        name : 'Item 2',
        oldPrice : '3500',
        price : '2999',
        image: "https://img.freepik.com/free-photo/young-woman-with-shopping-bags-city_1303-16805.jpg?t=st=1714630196~exp=1714633796~hmac=60a1a4b26326f2918a8bc8821af783e5b6a4c8b31c5245af9ecf422be8b60c6f&w=1060"
    },
    {
        id: 2,
        link : '/product3.html',
        name : 'Item 3',
        oldPrice : '800',
        price : '699',
        image: "https://qph.cf2.quoracdn.net/main-qimg-c4b0d32e44aba0d453698555ab15d8ab-lq"
    },
    {
        id: 3,
        link : '/product4.html',
        name : 'Item 4',
        oldPrice : '699',
        price : '599',
        image: "https://img.freepik.com/free-photo/woman-with-shopping-bags-studio-yellow-background-isolated_1303-14285.jpg?t=st=1714630137~exp=1714633737~hmac=c696d5dff679c07b965867bd00cd32ea1f45ab31ca589afcabc8f40f8f6fede5&w=1060"
    },
    {
        id: 4,
        link : '/product5.html',
        name : 'Item 5',
        price : '2500',
        oldPrice : '4000',
        image: "https://img.freepik.com/free-photo/young-woman-beautiful-red-dress_1303-17508.jpg?t=st=1714630042~exp=1714633642~hmac=8a050cfcbf3bf06813956fd9aeca616b874dbf3fff4d895e2250b8571c952dbe&w=1060"
    }
]


//    cart  
const cartNo = document.querySelector('#cart-no')
let count=0;
function add1ToCart(){
    count++;
    cartNo.innerHTML=`${count}`
    cartItems.innerHTML+=`<div class="flex gap-5 mb-2">
    <div>
        <img class="h-12 w-20" src="${productData[0].image}" alt="">
    </div>
    <p>${productData[0].name}</p>
</div>`
}
function add2ToCart(){
    count++;
    cartNo.innerHTML=`${count}`
    cartItems.innerHTML+=`<div class="flex gap-5 mb-2">
    <div>
        <img class="h-12 w-20" src="${productData[1].image}" alt="">
    </div>
    <p>${productData[1].name}</p>
</div>`
}
function add3ToCart(){
    count++;
    cartNo.innerHTML=`${count}`
    cartItems.innerHTML+=`<div class="flex gap-5 mb-2">
    <div>
        <img class="h-12 w-20" src="${productData[2].image}" alt="">
    </div>
    <p>${productData[2].name}</p>
</div>`
}
function add4ToCart(){
    count++;
    cartNo.innerHTML=`${count}`
    cartItems.innerHTML+=`<div class="flex gap-5 mb-2">
    <div>
        <img class="h-12 w-20" src="${productData[3].image}" alt="">
    </div>
    <p>${productData[3].name}</p>
</div>`
}
function add5ToCart(){
    count++;
    cartNo.innerHTML=`${count}`
    cartItems.innerHTML+=`<div class="flex gap-5 mb-2">
    <div>
        <img class="h-12 w-20" src="${productData[4].image}" alt="">
    </div>
    <p>${productData[4].name}</p>
</div>`
}












//search section
search.addEventListener('click', ()=>{

    // input.classList.remove('translate-x-12')
    
    input.value = ''
    input.classList.remove('w-9')
    input.classList.add('w-[300px]')
    cross.classList.remove('-translate-x-12')
    if(input.classList.contains('active')){
        // future use
    }
    else{
        //future use
    }
    input.classList.add('active')
    
})
cross.addEventListener('click', ()=>{
    input.classList.remove('active')
    input.value = ''
    input.classList.add('w-9')
    input.classList.remove('w-[300px]')
    cross.classList.add('-translate-x-12')
})
