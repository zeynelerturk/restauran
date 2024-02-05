 const searchFrom = document.querySelector(".search-form");
 const cartItem = document.querySelector(".cart-items-container");
 const navbar = document.querySelector(".navbar");
 //!bunttons

 const searchBtn = document.querySelector("#search-btn");
 const cartBtn = document.querySelector("#cart-btn");
 const menuBtn = document.querySelector("#menu-btn");


searchBtn.addEventListener("click", function(){
    searchFrom.classList.toggle("active");
    document.addEventListener("click", function(){
        if (
            !e.composedPath().includes(searchBtn) && 
            !e.composedPath().includes(searchFrom)
        ) {
            searchFrom.classList.remove("active");  
        }
    })
});


cartBtn.addEventListener("click", function(){
    cartItem.classList.toggle("active");
    document.addEventListener("click", function(){
        if (
            !e.composedPath().includes(cartBtn) && 
            !e.composedPath().includes(cartItem)
        ) {
            cartItem.classList.remove("active");  
        }
    })
});

menuBtn.addEventListener("click", function(){
    navbar.classList.toggle("active");
    document.addEventListener("click", function(){
        if (
            !e.composedPath().includes(menuBtn) && 
            !e.composedPath().includes(navbar)
        ) {
            navbar.classList.remove("active");  
        }
    })
});