

// navbar
let navbar = document.querySelector("#navbar");

// Go to top
let GoTop = document.querySelector(".go-top");

window.onscroll = () => {
    // navbar
    if(window.scrollY >= 200){
        navbar.classList.add("navfixed")
    }else{
        navbar.classList.remove("navfixed");
    }

    // Go to top
    if(window.scrollY >= 200){
        GoTop.classList.add("active")
    }else{
        GoTop.classList.remove("active");
    }
}

// Go to top
GoTop.onclick = function (){
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};


// reveal

window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0; i < reveals.length; i++){
        var windowheigh = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheigh - revealpoint) {
            reveals[i].classList.add('active');
        }
    }
}


// landing
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
    autoplay: {
        delay: 4000,
    },
});

// Projects
var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
    },
    autoplay: {
        delay: 3000,
    },
    loop: true,
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 480px
        570: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        // when window width is >= 640px
        930: {
            slidesPerView: 3,
            spaceBetween: 40
        }
    }
});

// Testimonial
var swiper = new Swiper(".mySwiper3", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
    },
    autoplay: {
        delay: 3000,
    },
    loop: true,
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 480px
        570: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        // when window width is >= 640px
        992: {
            slidesPerView: 3,
            spaceBetween: 40
        }
    }
});

// Team
var swiper = new Swiper(".mySwiper4", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
    },
    autoplay: {
        delay: 3000,
    },
    loop: true,
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 480px
        570: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        // when window width is >= 640px
        992: {
            slidesPerView: 3,
            spaceBetween: 40
        }
    }
});



// title section animation

// إنشاء المراقب الذي يكتشف متى يدخل العنصر إلى نطاق العرض
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        const spans = entry.target.querySelectorAll('.title-animation span');
        spans.forEach(span => {
            span.classList.add('show');
        });
        // إيقاف المراقب بعد ظهور التأثير لمنع التكرار
        observer.unobserve(entry.target);
        }
    });
},
{ 
    rootMargin: "-100px 0px" // التأثير يحدث قبل الوصول للقسم بمقدار 100 بكسل
});



// مراقبة جميع الأقسام التي تحمل الفئة .title-section
document.querySelectorAll('.reveal').forEach(section => {
    observer.observe(section);
});



// zoom img

// اختيار جميع الصور التي تحمل الفئة zoom-image
const zoomImages = document.querySelectorAll('.zoom-image');

zoomImages.forEach(zoomImage => {
    // تطبيق تأثير التحريك لكل صورة عند مرور الماوس عليها
    zoomImage.addEventListener('mousemove', (e) => {
        const { width, height, left, top } = zoomImage.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;

        zoomImage.style.transform = `scale(1.5) translate(${x}%, ${y}%)`;
        zoomImage.style.transformOrigin = `${x}% ${y}%`;
        zoomImage.style.transform = 'scale(1.5)';
    });

    // إعادة الصورة لحجمها الطبيعي عند مغادرة الماوس
    zoomImage.addEventListener('mouseleave', () => {
        zoomImage.style.transform = 'scale(1)';
        zoomImage.style.transformOrigin = 'center center';
        zoomImage.style.transform = 'scale(1) translate(0, 0)';
    });
});





// Remove Products
let XMark = document.querySelectorAll(".product-remove a");
XMark.forEach((X) => {
    X.addEventListener("click", (event) => {
        event.preventDefault();
        const trElement = X.closest('tr');
        if (trElement) {
            trElement.remove();
        }
    });
});







// payment and icon heart

let HeartImg = document.querySelectorAll(".heart_icon");
let HeartImg_orClass = "bi bi-heart";
let HeartImg_curClass = "bi bi-heart-fill";

// Cart
let text_exist = document.querySelector(".exist");
let payment_product = document.querySelector(".payment_product");

document.addEventListener('DOMContentLoaded', function () {
    let cartTable = document.querySelector("#product-details tbody");

    // تحميل المنتجات من localStorage وعرضها في السلة
    loadCartItems(cartTable);

    // ضبط حالة القلوب بناءً على حالة سلة المشتريات
    updateHeartsOnLoad();

    HeartImg.forEach(e => {
        const parentDiv = e.closest('.tab-content-box');
        const imageSrc = parentDiv.querySelector('img').src;

        // استعادة حالة الأيقونة من localStorage
        const isFilled = isHeartFilled(imageSrc);
        e.className = isFilled ? HeartImg_curClass : HeartImg_orClass;

        e.addEventListener("click", function (event) {
            const parentDiv = event.currentTarget.closest('.tab-content-box');
            const titleText = parentDiv.querySelector('h2').textContent;

            // التعامل مع تبديل الأيقونة
            if (this.className === HeartImg_orClass) {
                this.className = HeartImg_curClass;
                addToCart(imageSrc, titleText);
                if (cartTable) addProductRow(cartTable, { imageSrc, titleText, price: 55 });
                setHeartFilled(imageSrc, true);
            } else {
                this.className = HeartImg_orClass;
                removeFromCart(imageSrc);
                if (cartTable) removeProductRow(cartTable, imageSrc);
                setHeartFilled(imageSrc, false);
            }
            updateItemCount();
        });
    });

    // تحديد كل المجموعات التي تحتوي على أزرار الزيادة والنقصان وحقل الإدخال
    const counterGroups = document.querySelectorAll('.counter-input-group');
    counterGroups.forEach(group => {
        const decrementButton = group.querySelector('.button.decrement');
        const incrementButton = group.querySelector('.button[data-action="increment"]');
        const numberInput = group.querySelector('input[type="number"]');

        if (decrementButton && incrementButton && numberInput) {
            decrementButton.addEventListener('click', () => {
                let currentValue = parseInt(numberInput.value) || 0;
                if (currentValue > 0) {
                    numberInput.value = currentValue - 1;
                }
            });

            incrementButton.addEventListener('click', () => {
                let currentValue = parseInt(numberInput.value) || 0;
                numberInput.value = currentValue + 1;
            });
        }
    });

    updateItemCount();
});

// دالة لإضافة المنتج إلى localStorage
function addToCart(imageSrc, titleText) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    if (!cartItems.find(item => item.imageSrc === imageSrc)) {
        cartItems.push({ imageSrc, titleText, price: 55 });
        localStorage.setItem('cartItems', JSON.stringify(cartItems));

        let pr_box = createProductBox(imageSrc, titleText);
        payment_product.appendChild(pr_box);
    }
}

// دالة لإزالة المنتج من localStorage وتحديث حالة القلب
function removeFromCart(imageSrc) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems = cartItems.filter(item => item.imageSrc !== imageSrc);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    // إزالة pr_box من قائمة الدفع إذا كانت الصورة متطابقة
    payment_product.querySelectorAll('.pr_box').forEach(pr_box => {
        if (pr_box.querySelector('img').src === imageSrc) pr_box.remove();
    });

    // إعادة ضبط حالة القلب المرتبط بالمنتج
    HeartImg.forEach(e => {
        const parentDiv = e.closest('.tab-content-box');
        const iconImageSrc = parentDiv.querySelector('img').src;
        if (iconImageSrc === imageSrc) {
            e.className = HeartImg_orClass;
            setHeartFilled(imageSrc, false);  // تحديث localStorage
        }
    });

}

// دالة لإنشاء عنصر المنتج في سلة الدفع
function createProductBox(imageSrc, titleText) {
    let pr_box = document.createElement('div');
    let Box_img = document.createElement("img");
    let Box_Title = document.createElement("h2");
    let Box_Title_link = document.createElement("a");
    let Box_iconX = document.createElement("i");

    pr_box.className = "pr_box d-flex align-items-center justify-content-between";
    Box_img.setAttribute("src", imageSrc);
    Box_Title_link.textContent = titleText;
    Box_Title_link.setAttribute("href", "product details.html");
    Box_iconX.className = "fa-solid fa-xmark";

    Box_Title.appendChild(Box_Title_link);
    pr_box.appendChild(Box_img);
    pr_box.appendChild(Box_Title);
    pr_box.appendChild(Box_iconX);

    Box_iconX.onclick = () => {
        pr_box.remove();
        removeFromCart(imageSrc);
        updateItemCount();
    };

    return pr_box;
}


// دالة لإضافة صف للمنتج في الجدول
function addProductRow(cartTable, item) {
    let row = document.createElement('tr');
    row.innerHTML = `
        <td class="product-img"><a href="product details.html"><img src="${item.imageSrc}" alt=""></a></td>
        <td class="product-name"><span><a href="product details.html">${item.titleText}</a></span></td>
        <td class="product-price"><span>${item.price}$</span></td>
        <td class="product-quantity">
            <div id="number" class="number">
                <div class="custom-number-input">
                    <div class="counter-input-group">
                        <button data-action="decrement" class="button decrement">
                            <i class="fa-solid fa-window-minimize"></i>
                        </button>
                        <input type="number" name="custom-input-number" id="custom-input-number" min="0" value="0" />
                        <button data-action="increment" class="button">
                            <i class="fa-solid fa-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
        </td>
        <td class="product-total">${item.price}$</td>
        <td class="product-remove"><a href="#" class="remove-item"><i class="fa-solid fa-xmark"></i></a></td>
    `;
    cartTable.appendChild(row);

    row.querySelector('.remove-item').addEventListener('click', () => {
        row.remove();
        removeFromCart(item.imageSrc);
        updateItemCount();
    });
}


// دالة لضبط حالة القلوب عند تحميل الصفحة
function updateHeartsOnLoad() {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    HeartImg.forEach(e => {
        const parentDiv = e.closest('.tab-content-box');
        const imageSrc = parentDiv.querySelector('img').src;

        // إذا كان المنتج موجودًا في السلة، اجعل القلب مملوءًا
        if (cartItems.some(item => item.imageSrc === imageSrc)) {
            e.className = HeartImg_curClass;
            setHeartFilled(imageSrc, true);
        } else {
            // إذا لم يكن المنتج موجودًا في السلة، اجعل القلب فارغًا
            e.className = HeartImg_orClass;
            setHeartFilled(imageSrc, false);
        }
    });
}

// دالة لتحميل المنتجات من localStorage وعرضها في الجدول
function loadCartItems(cartTable) {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.forEach(item => {
        if (payment_product) {
            payment_product.appendChild(createProductBox(item.imageSrc, item.titleText));
        }
        if (cartTable) {
            addProductRow(cartTable, item);
        }
    });
}

// دالة لتحديث العد في النص
function updateItemCount() {
    const itemCount = JSON.parse(localStorage.getItem('cartItems'))?.length || 0;
    text_exist.innerHTML = `<a href="payment.html">All Elements (${itemCount})</a>`;
}

// دالة لحفظ حالة القلب في localStorage
function setHeartFilled(imageSrc, isFilled) {
    let heartStates = JSON.parse(localStorage.getItem('heartStates')) || {};
    heartStates[imageSrc] = isFilled;
    localStorage.setItem('heartStates', JSON.stringify(heartStates));
}

// دالة للتحقق من حالة القلب في localStorage
function isHeartFilled(imageSrc) {
    let heartStates = JSON.parse(localStorage.getItem('heartStates')) || {};
    return heartStates[imageSrc] || false;
}

