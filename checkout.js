

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
                    <p onclick="cartitemstore()" id="cart-count">0</p>
                    <a href="/checkout.html"><i class="fas fa-shopping-cart" aria-hidden="true"></i></a>
                </div>
                <img src="">
            </div>`


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


// *****************************************topbar n footer****************************


var datafromlocalstorage = JSON.parse(localStorage.getItem('cartitem'));



var item_count = document.getElementById('item-count');
item_count.innerText = `${datafromlocalstorage.length}`;

var card_list = document.getElementById('card-list');
var uniqueItems = [];
var countarr = [];
var totalprice=0

for (var i = 0; i < datafromlocalstorage.length; i++) {
    var element = datafromlocalstorage[i].id;
    var count = 1;

    for (var j = i + 1; j < datafromlocalstorage.length; j++) {
        if (element == datafromlocalstorage[j].id) {
            count++;
            datafromlocalstorage.splice(j, 1);
            j--;
        }
    }

    var existingIndex = uniqueItems.findIndex(item => item.id === element);

    if (existingIndex === -1) {
        uniqueItems.push(datafromlocalstorage[i]);
        countarr.push(count);
        totalprice+=datafromlocalstorage[i].price*count
    } else {
        countarr[existingIndex] += count;
    }
}

for (var k = 0; k < uniqueItems.length; k++) {
    card_list.innerHTML += `
    <div class="checkout-card">
        <div><img class="checkout-product-img" src="${uniqueItems[k].picture}"></div>
        <div>
            <h4>${uniqueItems[k].productname}</h4>
            <p >X${countarr[k]}</p>
            <p><span>Amount: Rs </span><span>${uniqueItems[k].price}</span></p>
        </div>
    </div>
    
    
`
}

   

var total_amount=document.getElementById('total-amount')
total_amount.innerHTML=`${totalprice}`

var placeorder=document.getElementById('btn-place-order')
placeorder.addEventListener('click', function() {
    posttingrequest(datafromlocalstorage);
});

function posttingrequest(data) {
    var endpoint = 'https://5d76bf96515d1a0014085cf9.mockapi.io/order'; // Replace with your API endpoint
    var headers = {
        'Content-Type': 'application/json', // Check API documentation for the required content type
    };

    $.ajax({
        url: endpoint,
        method: 'POST',
        headers: headers,
        data: JSON.stringify(data), // Make sure the request body matches the API's expected format
        success: function(response) {
            console.log('Response:', response);
        },
        error: function(xhr, status, error) {
            console.error('Error:', error);
        }
    });
}


