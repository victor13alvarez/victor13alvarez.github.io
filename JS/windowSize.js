console.log("XD2");


function ResizeWindow() {
    var w = window.outerWidth;
    var h = window.outerHeight;
    var txt = "Window size: width=" + w + ", height=" + h;
    document.getElementById("demo").innerHTML = txt;
    var buttons = document.getElementById("myButtons");
    var myName = document.getElementById("myName")
    var navLis = Array.from(document.getElementsByTagName("li"));
    if(w<=1000){
        myName.setAttribute("class","myName_CenterAlign")
        buttons.setAttribute("class","myButtons_CenterAlign")
        navLis.forEach(element => {
            element.setAttribute("class","nav_li_CenterAlign")
        });
    }
    else{
        myName.setAttribute("class","myName_LeftAlign")
        buttons.setAttribute("class","myButtons_RightAlign")
        navLis.forEach(element => {
            element.setAttribute("class","nav_li_RightAlign")
        });
    }

}