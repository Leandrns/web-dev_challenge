// MENU DROPDOWN
const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const menuDropDown = document.querySelector('.menu_dropdown');

toggleBtn.onclick = function () {
    menuDropDown.classList.toggle('open');

    const isOpen = menuDropDown.classList.contains('open');
    toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
}

const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark');
})

let count = 1;
document.getElementById("radio1").checked = true;

setInterval (function(){
    nextImage();
}, 5000)

function nextImage(){
    count++;
    if(count>3){
        count = 1
    }
    
    document.getElementById("radio"+count).checked = true;
}

