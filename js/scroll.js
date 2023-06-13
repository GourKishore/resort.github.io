

window.onscroll=function(){
    scrollFunction();
}

function scrollFunction(){
    if(document.body.scrollTop > 150 || document.documentElement.scrollTop > 150)
    {
        document.getElementById("nav").style.marginTop = "3px";
        document.getElementById("logo").style.width = "27%";
        document.getElementById("head").style.backgroundColor="#000000b2";
    }
    else{
        document.getElementById("nav").style.marginTop = "55px";
        document.getElementById("logo").style.width = "70%";
        document.getElementById("head").style.backgroundColor="#00000059";
    }
}

