//Mudar tema
const themeBtn = document.querySelector("body")

function changeTheme(){
    if( themeBtn.id == "bg-light"){
        themeBtn.id = "bg-dark";
    }else{
        themeBtn.id = "bg-light"
    }
}
