var topbar=document.getElementById('topbar')


topbar.innerHTML+=`<div id="left-menu">
<div id="logo">
    <a href="./homrpage.html"><span>SHOP</span>lane</a>
</div>
<a href="./homrpage.html">Clothing</a>
<a href="./homrpage.html">Accessories</a>
</div>
<div id="search-wrapper">
<i class="fa-solid fa-magnifying-glass"></i>
<input id="search-box" type="text" name="search" placeholder="Search for Clothing and Accessories">
</div>
<div id="right-menu">
                <div id="cart-wrapper">
                    <p  id="cart-count"></p>
                    <a href="/checkout.html"><i class="fas fa-shopping-cart" aria-hidden="true"></i></a>
                </div>
                <img src="./user.jpg">
            </div>`



var product_wrapper=document.getElementById('wrapper')

var pid=JSON.parse(localStorage.getItem('productid'))

$.get(`https://5d76bf96515d1a0014085cf9.mockapi.io/product/${pid}`,function(response){
    var product=response
    product_wrapper.innerHTML+=`<div id="product-image">
    <div class="image-wrapper">
    <img id="product-preview" src="${product.preview}" alt="">
    </div>
    </div>

    <div id="product-details">
                    <h1 id="product-title">${product.name}</h1>
                    <h1 id="product-brand">${product.brand}</h1>
                    <h4 class="section-heading">Price: Rs <p id="product-price">${product.price}</p></h4>
                    <h4 class="section-heading">Description</h4>
                    <p id="description">${product.description}</p>
                    <h4 class="section-heading">Product Preview</h4>
                    <div id="product-images">
                        
                    
                    </div>

                    

                    <button onclick="cartitemstore('${product.name}','${product.price}','${product.preview}','${product.id}') ; setvalue()" id="btn-add-to-cart">Add to Cart</button>

                </div>`


     var productImagewrapper=document.getElementById('product-images')

     var photos=product.photos
     for (let i = 0; i < photos.length; i++) {
        var img = document.createElement('img');
        img.id = "img" + i;
        img.src = photos[i];
    
        
        img.addEventListener('click', function() {
            addactiveclass(i);
        });
    
        productImagewrapper.appendChild(img);
    
        var activeimg = document.getElementById('img' + i);

       if(i==0){
           activeimg.classList.add('active-image')
        }

        

        

        
        
    }
        

     var previewimage=document.getElementById('product-preview')

    function addactiveclass(num) {
        console.log(num);
        var periviousactiveimg=document.getElementsByClassName('active-image')[0]
        periviousactiveimg.classList.remove('active-image')
        var currentactiveimg=document.getElementById('img'+num)
        currentactiveimg.classList.add('active-image')
        previewimage.src=photos[num]


    }


    
        
})
var productfromlocalstorage=JSON.parse(localStorage.getItem('cartitem'))



function cartitemstore(name,price,photo,id){
   
    var obj={
        
        productname:name,
        price:price,
        picture:photo,
        id:id,
       
    }

    if(productfromlocalstorage==null){
        var cartitem=[]
        cartitem.push(obj)

        console.log(cartitem)
      localStorage.setItem('cartitem',JSON.stringify(cartitem))

    }else{
        productfromlocalstorage.push(obj)
        localStorage.setItem('cartitem',JSON.stringify(productfromlocalstorage))
    }
    
    

}




var footer=document.getElementById('footerpage')
footer.innerHTML=`<div>
            
<p class="footer-heading">Online Store</p>
<a href="http://127.0.0.1:5501/homrpage.html" class="footer-link">Men Clothing</a>
<a href=http://127.0.0.1:5501/homrpage.html/" class="footer-link">Women Clothing</a>
<a href="http://127.0.0.1:5501/homrpage.html" class="footer-link">Men Accessories</a>
<a href="http://127.0.0.1:5501/homrpage.html" class="footer-link">Women Accessories</a>

</div>
<div>
<p class="footer-heading">Helpful Links</p>
<a href="http://127.0.0.1:5501/homrpage.html" class="footer-link">Home</a>
<a href="http://127.0.0.1:5501/homrpage.html" class="footer-link">About</a>
<a href="http://127.0.0.1:5501/homrpage.html" class="footer-link">Contact</a>
</div>
<div>
<p class="footer-heading">Partners</p>
<a href="http://127.0.0.1:5501/homrpage.html" class="footer-link">Zara</a>
<a href="http://127.0.0.1:5501/homrpage.html" class="footer-link">Pantaloons</a>
<a href="http://127.0.0.1:5501/homrpage.html" class="footer-link">Levis</a>
<a href="http://127.0.0.1:5501/homrpage.html" class="footer-link">UCB</a>
<a href="http://127.0.0.1:5501/homrpage.html" class="footer-link">+ Many More</a>
</div>
<div>
<p class="footer-heading">Address</p>
<p href="http://127.0.0.1:5501/homrpage.html" class="footer-link">Building 101</p>
<p href="http://127.0.0.1:5501/homrpage.html" class="footer-link">Central Avenue</p>
<p href="http://127.0.0.1:5501/homrpage.html" class="footer-link">LA - 902722</p>
<p href="http://127.0.0.1:5501/homrpage.html" class="footer-link">United States</p>
</div>`
        



        

function setvalue(){
    var cartcount = document.getElementById('cart-count')
    cartcount.innerText = `${parseInt(productfromlocalstorage.length)}`

}

    
setvalue()