const locationNA = document.querySelector(".nav-address");
const locationList = document.querySelector(".location-list");

const selectBtn = document.querySelector(".select");
const dropdown = document.querySelector(".dropdown");
const dropdownIcon = document.querySelector(".drop-down-icon");

const navSignin = document.querySelector(".nav-signin");
const signinList = document.querySelector(".signin-list");

const navLanguages = document.querySelector(".nav-languages");
const languageLabels = document.querySelector(".languages-labels");

const navRtnOdr = document.querySelector(".nav-return-order");

const signinBtn = document.querySelector("#signin-btn");

const signinTsyaBtn = document.querySelector("#sitsya-btn");


//First Slider images
const imgList = document.querySelector(".slider .list");
const imgItems = document.querySelectorAll(".img-item");
const prevBtn = document.querySelector(".left-chevron");
const nextBtn = document.querySelector(".right-chevron");



//Second slider images
const scndBoxCont = document.querySelector(".second-boxes-container .second-all-boxes-container");
const scndBox = document.querySelectorAll(".second-box");
const leftBtn = document.querySelector(".left-prev");
const rightBtn = document.querySelector(".right-next");
//second slider scrollbar thumb position
const sliderScrollbar = document.querySelector(".slider-scrollbar");
const scrollbarThumb = document.querySelector(".scrollbar-thumb");
const maxScrollLeft = scndBoxCont.scrollWidth - scndBoxCont.clientWidth;



//Third slider images
const thirdBoxCont = document.querySelector(".third-boxes-container .third-all-boxes-container");
const thirdBox = document.querySelectorAll(".third-box");
const thirdLeftBtn = document.querySelector(".third-left-prev");
const thirdRightBtn = document.querySelector(".third-right-next");
//third slider scrollbar thumb position
const thirdSliderScrollbar = document.querySelector(".third-slider-scrollbar");
const thirdScrollbarThumb = document.querySelector(".third-scrollbar-thumb");
const thirdMaxScrollLeft = thirdBoxCont.scrollWidth - thirdBoxCont.clientWidth;



//fifth slider images
const fifthBoxCont = document.querySelector(".fifth-boxes-container .fifth-all-boxes-container");
const fifthBox = document.querySelectorAll(".fifth-box");
const fifthLeftBtn = document.querySelector(".fifth-left-prev");
const fifthRightBtn = document.querySelector(".fifth-right-next");
//sixth slider scrollbar thumb position
const fifthSliderScrollbar = document.querySelector(".fifth-slider-scrollbar");
const fifthScrollbarThumb = document.querySelector(".fifth-scrollbar-thumb");
const fifthMaxScrollLeft = fifthBoxCont.scrollWidth - fifthBoxCont.clientWidth;



//sixth slider images
const sixthBoxCont = document.querySelector(".sixth-boxes-container .sixth-all-boxes-container");
const sixthBox = document.querySelectorAll(".sixth-box");
const sixthLeftBtn = document.querySelector(".sixth-left-prev");
const sixthRightBtn = document.querySelector(".sixth-right-next");
//sixth slider scrollbar thumb position
const sixthSliderScrollbar = document.querySelector(".sixth-slider-scrollbar");
const sixthScrollbarThumb = document.querySelector(".sixth-scrollbar-thumb");
const sixthMaxScrollLeft = sixthBoxCont.scrollWidth - sixthBoxCont.clientWidth;



//eight slider images
const eightBoxCont = document.querySelector(".eight-boxes-container .eight-all-boxes-container");
const eightBox = document.querySelectorAll(".eight-box");
const eightLeftBtn = document.querySelector(".eight-left-prev");
const eightRightBtn = document.querySelector(".eight-right-next");
//eight slider scrollbar thumb position
const eightSliderScrollbar = document.querySelector(".eight-slider-scrollbar");
const eightScrollbarThumb = document.querySelector(".eight-scrollbar-thumb");
const eightMaxScrollLeft = eightBoxCont.scrollWidth - eightBoxCont.clientWidth;




//nine slider images
const nineBoxCont = document.querySelector(".nine-boxes-container .nine-all-boxes-container");
const nineBox = document.querySelectorAll(".nine-box");
const nineLeftBtn = document.querySelector(".nine-left-prev");
const nineRightBtn = document.querySelector(".nine-right-next");
//nine slider scrollbar thumb position
const nineSliderScrollbar = document.querySelector(".nine-slider-scrollbar");
const nineScrollbarThumb = document.querySelector(".nine-scrollbar-thumb");
const nineMaxScrollLeft = nineBoxCont.scrollWidth - nineBoxCont.clientWidth;




//ten slider images
const tenBoxCont = document.querySelector(".ten-boxes-container .ten-all-boxes-container");
const tenBox = document.querySelectorAll(".ten-box");
const tenLeftBtn = document.querySelector(".ten-left-prev");
const tenRightBtn = document.querySelector(".ten-right-next");
//ten slider scrollbar thumb position
const tenSliderScrollbar = document.querySelector(".ten-slider-scrollbar");
const tenScrollbarThumb = document.querySelector(".ten-scrollbar-thumb");
const tenMaxScrollLeft = tenBoxCont.scrollWidth - tenBoxCont.clientWidth;





//navbar first box 
locationNA.addEventListener("click", () => {
    locationList.classList.toggle("active");
});

// navbar second box
selectBtn.addEventListener("click", () => {
    dropdown.classList.toggle("active");
    dropdownIcon.classList.toggle("active");
});

//navbar fourth box 
navSignin.addEventListener("mouseover", () => {
    if(navSignin){
        signinList.style.display = "block";
    }
});
navSignin.addEventListener("mouseout", () => {
    if(navSignin){
        signinList.style.display = "none";
    }
});


navLanguages.addEventListener("mouseover", () => {
    if(navLanguages){
        languageLabels.style.display = "block";
    }
});
navLanguages.addEventListener("mouseout", () => {
    if(navLanguages){
        languageLabels.style.display = "none";
    }
});


// Go to Login page
navRtnOdr.addEventListener("click", () => {
    window.open("http://127.0.0.1:5500/login%20page/login.html", "_top");
});



//Go to Login page
signinBtn.addEventListener("click", () => {
    window.open("http://127.0.0.1:5500/login%20page/login.html", "_top");
});


//Go to Login page
signinTsyaBtn.addEventListener("click", () => {
    window.open("http://127.0.0.1:5500/login%20page/login.html", "_top");
});





// Slider images
let active = 0;
let lengthItems = imgItems.length-1;

function reloadSlider(){
    let checkLeft = imgItems[active].offsetLeft;
    imgList.style.left = -checkLeft + "px";

    clearInterval(refreshSlider);
    refreshSlider = setInterval(() => {
        nextBtn.click()
    },5000);
}

// image slide automatically after 5 sec
let refreshSlider = setInterval(() => {
    nextBtn.click()
},5000);

nextBtn.addEventListener("click", () => {
    if(active + 1 > lengthItems){
        active = 0;
    }else{
        active = active + 1;
    }
    reloadSlider();
});

prevBtn.addEventListener("click", () => {
    if(active - 1 < 0){
        active = lengthItems;
    }else{
        active = active - 1;
    }
    reloadSlider();
});




//Second slider images

const initSlider = () => {
    rightBtn.addEventListener("click",() => {
        let direction = rightBtn === "next-slide" ? -1 : 1;
        let scrollAmount = scndBoxCont.clientWidth * direction;
        scndBoxCont.scrollBy({left: scrollAmount, behavior: "smooth"});
    });


    leftBtn.addEventListener("click",() => {
        let direction = leftBtn === "prev-slide" ? 1 : -1;
        let scrollAmount = scndBoxCont.clientWidth * direction;
        scndBoxCont.scrollBy({left: scrollAmount, behavior: "smooth"});
    });

    //update scrollbar thumb position based on image scroll
    const updateScrollThumbPosition = () => {
        const scrollPosition = scndBoxCont.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosition}px`;
    }

    scndBoxCont.addEventListener("scroll", () => {
        updateScrollThumbPosition();
    });
    
}

window.addEventListener("load",initSlider);



//Third slider images

const thirdInitSlider = () => {
    thirdRightBtn.addEventListener("click",() => {
        let direction = thirdRightBtn === "next-slide" ? -1 : 1;
        let scrollAmount = thirdBoxCont.clientWidth * direction;
        thirdBoxCont.scrollBy({left: scrollAmount, behavior: "smooth"});
    });


    thirdLeftBtn.addEventListener("click",() => {
        let direction = thirdLeftBtn === "prev-slide" ? 1 : -1;
        let scrollAmount = thirdBoxCont.clientWidth * direction;
        thirdBoxCont.scrollBy({left: scrollAmount, behavior: "smooth"});
    });

    //update scrollbar thumb position based on image scroll
    const updateScrollThumbPosition = () => {
        const scrollPosition = thirdBoxCont.scrollLeft;
        const thumbPosition = (scrollPosition / thirdMaxScrollLeft) * (thirdSliderScrollbar.clientWidth - thirdScrollbarThumb.offsetWidth);
        thirdScrollbarThumb.style.left = `${thumbPosition}px`;
    }

    thirdBoxCont.addEventListener("scroll", () => {
        updateScrollThumbPosition();
    });
    
}

window.addEventListener("load",thirdInitSlider);



//Fifth slider images

const fifthInitSlider = () => {
    fifthRightBtn.addEventListener("click",() => {
        let direction = fifthRightBtn === "next-slide" ? -1 : 1;
        let scrollAmount = fifthBoxCont.clientWidth * direction;
        fifthBoxCont.scrollBy({left: scrollAmount, behavior: "smooth"});
    });


    fifthLeftBtn.addEventListener("click",() => {
        let direction = fifthLeftBtn === "prev-slide" ? 1 : -1;
        let scrollAmount = fifthBoxCont.clientWidth * direction;
        fifthBoxCont.scrollBy({left: scrollAmount, behavior: "smooth"});
    });

    //update scrollbar thumb position based on image scroll
    const updateScrollThumbPosition = () => {
        const scrollPosition = fifthBoxCont.scrollLeft;
        const thumbPosition = (scrollPosition / fifthMaxScrollLeft) * (fifthSliderScrollbar.clientWidth - fifthScrollbarThumb.offsetWidth);
        fifthScrollbarThumb.style.left = `${thumbPosition}px`;
    }

    fifthBoxCont.addEventListener("scroll", () => {
        updateScrollThumbPosition();
    });
    
}

window.addEventListener("load",fifthInitSlider);





//Sixth slider images

const sixthInitSlider = () => {
    sixthRightBtn.addEventListener("click",() => {
        let direction = sixthRightBtn === "next-slide" ? -1 : 1;
        let scrollAmount = sixthBoxCont.clientWidth * direction;
        sixthBoxCont.scrollBy({left: scrollAmount, behavior: "smooth"});
    });


    sixthLeftBtn.addEventListener("click",() => {
        let direction = sixthLeftBtn === "prev-slide" ? 1 : -1;
        let scrollAmount = sixthBoxCont.clientWidth * direction;
        sixthBoxCont.scrollBy({left: scrollAmount, behavior: "smooth"});
    });

    //update scrollbar thumb position based on image scroll
    const updateScrollThumbPosition = () => {
        const scrollPosition = sixthBoxCont.scrollLeft;
        const thumbPosition = (scrollPosition / sixthMaxScrollLeft) * (sixthSliderScrollbar.clientWidth - sixthScrollbarThumb.offsetWidth);
        sixthScrollbarThumb.style.left = `${thumbPosition}px`;
    }

    sixthBoxCont.addEventListener("scroll", () => {
        updateScrollThumbPosition();
    });
    
}

window.addEventListener("load",sixthInitSlider);





//eight slider images

const eightInitSlider = () => {
    eightRightBtn.addEventListener("click",() => {
        let direction = eightRightBtn === "next-slide" ? -1 : 1;
        let scrollAmount = eightBoxCont.clientWidth * direction;
        eightBoxCont.scrollBy({left: scrollAmount, behavior: "smooth"});
    });


    eightLeftBtn.addEventListener("click",() => {
        let direction = eightLeftBtn === "prev-slide" ? 1 : -1;
        let scrollAmount = eightBoxCont.clientWidth * direction;
        eightBoxCont.scrollBy({left: scrollAmount, behavior: "smooth"});
    });

    //update scrollbar thumb position based on image scroll
    const updateScrollThumbPosition = () => {
        const scrollPosition = eightBoxCont.scrollLeft;
        const thumbPosition = (scrollPosition / eightMaxScrollLeft) * (eightSliderScrollbar.clientWidth - eightScrollbarThumb.offsetWidth);
        eightScrollbarThumb.style.left = `${thumbPosition}px`;
    }

    eightBoxCont.addEventListener("scroll", () => {
        updateScrollThumbPosition();
    });
    
}

window.addEventListener("load",eightInitSlider);





//nine slider images

const nineInitSlider = () => {
    nineRightBtn.addEventListener("click",() => {
        let direction = nineRightBtn === "next-slide" ? -1 : 1;
        let scrollAmount = nineBoxCont.clientWidth * direction;
        nineBoxCont.scrollBy({left: scrollAmount, behavior: "smooth"});
    });


    nineLeftBtn.addEventListener("click",() => {
        let direction = nineLeftBtn === "prev-slide" ? 1 : -1;
        let scrollAmount = nineBoxCont.clientWidth * direction;
        nineBoxCont.scrollBy({left: scrollAmount, behavior: "smooth"});
    });

    //update scrollbar thumb position based on image scroll
    const updateScrollThumbPosition = () => {
        const scrollPosition = nineBoxCont.scrollLeft;
        const thumbPosition = (scrollPosition / nineMaxScrollLeft) * (nineSliderScrollbar.clientWidth - nineScrollbarThumb.offsetWidth);
        nineScrollbarThumb.style.left = `${thumbPosition}px`;
    }

    nineBoxCont.addEventListener("scroll", () => {
        updateScrollThumbPosition();
    });
    
}

window.addEventListener("load",nineInitSlider);










//ten slider images

const tenInitSlider = () => {
    tenRightBtn.addEventListener("click",() => {
        let direction = tenRightBtn === "next-slide" ? -1 : 1;
        let scrollAmount = tenBoxCont.clientWidth * direction;
        tenBoxCont.scrollBy({left: scrollAmount, behavior: "smooth"});
    });


    tenLeftBtn.addEventListener("click",() => {
        let direction = tenLeftBtn === "prev-slide" ? 1 : -1;
        let scrollAmount = tenBoxCont.clientWidth * direction;
        tenBoxCont.scrollBy({left: scrollAmount, behavior: "smooth"});
    });

    //update scrollbar thumb position based on image scroll
    const updateScrollThumbPosition = () => {
        const scrollPosition = tenBoxCont.scrollLeft;
        const thumbPosition = (scrollPosition / tenMaxScrollLeft) * (tenSliderScrollbar.clientWidth - tenScrollbarThumb.offsetWidth);
        tenScrollbarThumb.style.left = `${thumbPosition}px`;
    }

    tenBoxCont.addEventListener("scroll", () => {
        updateScrollThumbPosition();
    });
    
}

window.addEventListener("load",tenInitSlider);