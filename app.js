const dropDown = document.getElementById("drop-down")
const menu = document.querySelector('.menu')
const orderSpan = document.querySelector('.orders')





const products = [
    {
        "product_name" :"t-shirt",
        "product_price":  "100",
        "product_image" : "https://rukminim1.flixcart.com/image/612/612/l1grgcw0/t-shirt/x/o/5/m-t428hs-tm5p-eyebogler-original-imagdf2egzjxeqgk.jpeg?q=70",
        "added_to_cart" :false,
    },
    {
        "product_name" :"Pantallon",
        "product_price":  "112",
        "product_image" : "https://www.texora.cl/2538-large_default/pantalon-cargo-alerce-80-poly-20-alg-gris-s.jpg",
        "added_to_cart" :false,
    },
    {
        "product_name" :"Skirt",
        "product_price":  "155",
        "product_image" : "https://media.capeunionmart.co.za/i/poetrystores/102600108_C94_1?$large_PROD$",
        "added_to_cart" :false,
    },
    {
        "product_name" :"Watch",
        "product_price":  "1155",
        "product_image" : "https://m.media-amazon.com/images/I/51bJSYeOF1S._UY500_.jpg",
        "added_to_cart" :false,
    },
    {
        "product_name" :"Yellow T-shirt",
        "product_price":  "112.55",
        "product_image" : "https://eg.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/14/774712/1.jpg?3044",
        "added_to_cart" :false,
    },
    {
        "product_name" :"Smart phone",
        "product_price":  "112.55",
        "product_image" : "https://m.media-amazon.com/images/I/81ydFP7bKQL.jpg",
        "added_to_cart" :false,
    },

]
let order = [ 
]


dropDown.addEventListener('click', ()=>{
    if(order.length == 0 ){

        menu.innerHTML = 'Your cart is empty'
    }
    if(menu.classList.length > 1){

        menu.classList.remove('hide')
    }else{
        menu.classList.add('hide')
       
    }
})
function updateDropMenu(){
    console.log(order.length)
    menu.innerHTML = ''
    if(order.length == 0 ){

        menu.innerHTML = 'Your cart is empty'
    }

    for(let i = 0 ; i < order.length ; i++){
        let details = document.createElement('div')
        details.classList.add('product-details')
        menu.appendChild(details)

        let name = document.createElement('h2')
        name.innerHTML = order[i].item.product_name
        details.appendChild(name)
        let count = document.createElement('span')
        count.innerHTML = order[i].count

        let increment = document.createElement('button')
        increment.classList.add('count')
        increment.innerHTML = "+"
        increment.addEventListener('click' , ( )=>{
            
             order[i].count++
            count.innerHTML = order[i].count
        })

        
        let decrement = document.createElement('button')
        decrement.classList.add('count')
        decrement.innerHTML = "-"
        decrement.addEventListener('click' , ()=>{
            if (order[i].count > 0){

           
            order[i].count --
            count.innerHTML = order[i].count
        }
        })
        details.appendChild(increment)
        details.appendChild(count)
        details.appendChild(decrement)


    }
}

var view = document.querySelector('.view');
var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');

function addToCard (item){
    order.push({item  , count : 1 , name :item.product_name ,added_to_cart : true})
    console.log('itemAdded')
}

function removeFromCard (item){
    console.log('item removed')
    order = order.filter(function( obj ) {
        return obj.name !== item.product_name;
    });
}
function createAddBtn (item){
    let CTA = document.createElement('button')
    CTA.classList.add('add-to-card')
    if(!order.filter(e => e.name === item.product_name).length > 0){
       
        let basket = document.createElement('img');
        basket.setAttribute('src', 'basket.png');
        basket.classList.add('iconImg')
        CTA.textContent= 'Add to cart'
        CTA.appendChild(basket)
    }else{
        let basket = document.createElement('img');
        basket.setAttribute('src', 'remove.png');
        basket.classList.add('iconImg')
        CTA.textContent= 'Remove From cart'
        CTA.appendChild(basket)

    }

    CTA.addEventListener('click' , ()=>{
        if(order.filter(e => e.name === item.product_name).length > 0){
            console.log('item already in the cart ')
            removeFromCard(item)
            orderSpan.innerHTML= order.length
            updateDropMenu()
            updateProductList()
            CTA.innerHTML= 'Add to cart'
            let basket = document.createElement('img');
            basket.setAttribute('src', 'basket.png');
            basket.classList.add('iconImg')
            CTA.appendChild(basket)
           
        }else{
            console.log('item should be added ')
            addToCard(item )
            orderSpan.innerHTML= order.length
            CTA.innerHTML= 'Remove from cart'
            let basket = document.createElement('img');
            basket.setAttribute('src', 'remove.png');
            basket.classList.add('iconImg')
            CTA.appendChild(basket)
            updateDropMenu()
            updateProductList()

        }

    })

    
    return CTA
}


function openModal(item) {
    console.log(item)
    let img = document.createElement('img');
    img.src = item.product_image

    let name = document.createElement('h1')
    name.innerHTML = item.product_name

    let price = document.createElement('p');
    price.innerHTML = `${item.product_price}\$`

    let details = document.createElement('div')
    details.textContent = 'Pill-resistant cotton material Color Fastness Without Any Change With Washing'
    details.classList.add('item-details')
    modal.appendChild(img)
    modal.appendChild(name)
    modal.appendChild(details)
    modal.appendChild(price)
    let cta = createAddBtn(item)
    modal.appendChild(cta)
    backdrop.style.display = 'block';
    modal.style.display = 'block';
}

function closeModal () {
 
    modal.innerHTML =''
    backdrop.style.display = 'none';
    modal.style.display = 'none';
}


let productsList = document.getElementsByClassName("products-list")

function updateProductList (){
    productsList[0].innerHTML =''

    for (let i =0 ; i < products.length ; i++){
        let cardItem = document.createElement('div');
        cardItem.classList.add('card')
        productsList[0].appendChild(cardItem)
        
        let img = document.createElement('img');
        img.src = products[i].product_image
        cardItem.appendChild(img)

        let details = document.createElement('div')
        details.classList.add('details')
        let productDetails = document.createElement('div')

        productDetails.classList.add('product-detail')
        let name = document.createElement('h2')
        productDetails.appendChild(name)
        name.innerHTML= products[i].product_name
        let price = document.createElement('p')
        price.innerHTML =products[i].product_price + "$"
        productDetails.appendChild(price)


        details.appendChild(productDetails)
        cardItem.appendChild(details)

        let viewbtn = document.createElement('button')
        let imgIcon = document.createElement('img');
        imgIcon.setAttribute('src', 'eye.png');
        imgIcon.classList.add('iconImg')
        viewbtn.appendChild(imgIcon)
        viewbtn.addEventListener('click' ,()=> openModal(products[i]))
        
        viewbtn.classList.add('view')
        details.appendChild(viewbtn)

        let CTA =  createAddBtn(products[i])

        cardItem.appendChild(CTA)


        
    }
}
updateProductList()

backdrop.onclick = closeModal;

