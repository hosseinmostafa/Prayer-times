let startScroll = document.querySelector("#start")


startScroll.onclick = function(){
    window.scrollBy({
        top: window.innerHeight - -400,
        behavior: "smooth"
    })
}

const UP = document.querySelector(".UP");



window.onscroll = function(){
    this.scrollY >= 1000 ? UP.classList.add("show") : UP.classList.remove("show")
}

UP.onclick = function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}





function contactBottom(url){
    if (url !== ''){
        window.location = url
    }
}






// ---------------------------------------
// // scroll animation back leter
// function checkBoxes(){
//     const triggerBottom = window.innerHeight / 5 * 4;
//     boxes.forEach((box, idx) => {
//         const boxTop = box.getBoundingClientRect().top;

//         if (boxTop < triggerBottom){
//             box.classList.add('show');
//         }else{
//             box.classList.remove('show');
//         }
//     });
// }