

// var slider=document.getElementById('slider')
// var topbar=document.getElementById('topbar')


// topbar.innerHTML+=`<div id="left-menu">
// <div id="logo">
//     <a href="./homrpage.html"><span>SHOP</span>lane</a>
// </div>
// <a href="">Clothing</a>
// <a href="">Accessories</a>
// </div>
// <div id="search-wrapper">
// <i class="fa-solid fa-magnifying-glass"></i>
// <input id="search-box" type="text" name="search" placeholder="Search for Clothing and Accessories">
// </div>
// <div id="right-menu">
//                 <div id="cart-wrapper">
//                     <p id="cart-count">0</p>
//                     <a href="/checkout.html"><i class="fas fa-shopping-cart" aria-hidden="true"></i></a>
//                 </div>
//                 <img src="./user.jpg">
//             </div>`




var clothing_section=document.getElementById('clothing-section')
clothing_section.innerHTML=` <h3 class="section-heading">Clothing for Men and Women</h3>  
<div id="clothing-grid" class="product-grid"></div>`
var clothing_grid=document.getElementById('clothing-grid')


var accessory_section=document.getElementById('accessory-section')
accessory_section.innerHTML=` <h3 class="section-heading">Accessories for Men and Women</h3>
<div id="accessory-grid" class="product-grid"></div>`
var accessory_grid=document.getElementById('accessory-grid')



$.get('https://5d76bf96515d1a0014085cf9.mockapi.io/product',function(response){
    var product=response
    for(var i=0;i<product.length;i++){

        if(product[i].isAccessory==false){
            clothing_grid.innerHTML+=`
            <div class="product-card" onclick="storeinlocal(${product[i].id})">
            <a href="./product_detalis.html?p=" + product[i].id>
            <img class="product-image" src="${ product[i].preview}" alt="Men Navy Blue Solid Sweatshirt Pic">
            </a>
            <div class="product-meta">
            <h4>${ product[i].name}</h4>
            <h5>${ product[i].brand}</h5>
            <p>Rs${ product[i].price}</p>
            </div>
            </div>`
        }else{
            accessory_grid.innerHTML+=`
            <div class="product-card" onclick="storeinlocal(${product[i].id})">
            <a href="./product_detalis.html?p=" + product[i].id>
            <img class="product-image" src="${ product[i].preview}" alt="Men Navy Blue Solid Sweatshirt Pic">
            </a>
            <div class="product-meta">
            <h4>${ product[i].name}</h4>
            <h5>${ product[i].brand}</h5>
            <p>Rs${ product[i].price}</p>
            </div>
            </div>`
        }

    }

    
})

function storeinlocal(data){
    localStorage.setItem('productid',data)

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




// `<div class="owl-carousel owl-theme owl-loaded owl-drag">
            
// <div class="owl-stage-outer">
  
//   <div class="owl-stage" style="transform: translate3d(-1527px, 0px, 0px); transition: all 0.25s ease 0s; width: 3334px;">
    
//     <div class="owl-item cloned" style="width: 128.906px; margin-right: 10px;"><div class="item">
//        <h4>1</h4>
//      </div>
//   </div>
  
//   <div class="owl-item cloned" style="width: 128.906px; margin-right: 10px;"><div class="item">
//        <h4>2</h4>
//      </div></div>
    
//     <div class="owl-item cloned" style="width: 128.906px; margin-right: 10px;"><div class="item">
//        <h4>3</h4>
//      </div></div>
    
//     <div class="owl-item cloned" style="width: 128.906px; margin-right: 10px;"><div class="item">
//        <h4>4</h4>
//      </div></div>
    
//     <div class="owl-item cloned" style="width: 128.906px; margin-right: 10px;"><div class="item">
//        <h4>5</h4>
//      </div></div>
    
//     <div class="owl-item cloned" style="width: 128.906px; margin-right: 10px;"><div class="item">
//        <h4>6</h4>
//      </div></div>
    
//     <div class="owl-item" style="width: 128.906px; margin-right: 10px;"><div class="item">
//        <h4>7</h4>
//      </div></div><div class="owl-item" style="width: 128.906px; margin-right: 10px;"><div class="item">
//        <h4>8</h4>
//      </div></div>
    
//     <div class="owl-item" style="width: 128.906px; margin-right: 10px;"><div class="item">
//        <h4>9</h4>
//      </div></div>
    
//     <div class="owl-item" style="width: 128.906px; margin-right: 10px;"><div class="item">
//        <h4>10</h4>
//      </div></div><div class="owl-item" style="width: 128.906px; margin-right: 10px;"><div class="item">
//        <h4>11</h4>
//      </div></div>
    
//     <div class="owl-item active" style="width: 128.906px; margin-right: 10px;"><div class="item">
//        <h4>12</h4>
//      </div></div>
    
//     <div class="owl-item active" style="width: 128.906px; margin-right: 10px;"><div class="item">
//        <h4>13</h4>
//      </div></div>
    
//     <div class="owl-item active" style="width: 128.906px; margin-right: 10px;"><div class="item">
//        <h4>14</h4>
//      </div></div>
    
//     <div class="owl-item active" style="width: 128.906px; margin-right: 10px;"><div class="item">
//        <h4>15</h4>
//      </div></div>
    
//     <div class="owl-item" style="width: 128.906px; margin-right: 10px;"><div class="item">
//        <h4>16</h4>
//      </div></div>
    
//     <div class="owl-item" style="width: 128.906px; margin-right: 10px;"><div class="item">
//        <h4>17</h4>
//      </div>
//      </div>
//      <div class="owl-item" style="width: 128.906px; margin-right: 10px;"><div class="item">
//        <h4>18</h4>
//      </div></div>
    
//     <div class="owl-item cloned" style="width: 128.906px; margin-right: 10px;"><div class="item">
//        <h4>19</h4>
//      </div></div>
    
//     <div class="owl-item cloned" style="width: 128.906px; margin-right: 10px;"><div class="item">
//        <h4>20</h4>
//      </div></div>
    
//     <div class="owl-item cloned" style="width: 128.906px; margin-right: 10px;"><div class="item">
//        <h4>21</h4>
//      </div></div>
    
//     <div class="owl-item cloned" style="width: 128.906px; margin-right: 10px;"><div class="item">
//        <h4>22</h4>
//      </div></div>
    
//     <div class="owl-item cloned" style="width: 128.906px; margin-right: 10px;"><div class="item">
//        <h4>23</h4>
//      </div></div>
    
//     <div class="owl-item cloned" style=""><div class="item">
//        <h4>24</h4>
//      </div></div></div></div><div class="owl-nav disabled">

// </div>

// </div>
// `
// var owl = $('.owl-carousel');
// owl.owlCarousel({
//     items:1, 
//   // items change number for slider display on desktop
  
//     loop:true,
//     margin:10,
//     autoplay:true,
//     autoplayTimeout:1000,
//     autoplayHoverPause:true
// });


$(document).ready(function() {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 1, // Adjust the number of items displayed per slide
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000, // Adjust autoplay timeout in milliseconds
        autoplayHoverPause: true,
        dots: true // Show dots for navigation
    });
});
