function toggleIcon(){
    let checkBox = document.getElementById("btn-menu");
    let menuIcon = document.getElementById("burger-button");

    if(!checkBox.checked){
        menuIcon.src = "/img/icons/close-menu.png";
    }else{
        menuIcon.src = "/img/icons/burger-menu.png";
    }
}