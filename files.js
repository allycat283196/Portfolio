var nav = document.getElementById('nav_bar');
console.log(nav);
window.onscroll = function () {
document.getElementById("")
    scrollFunction();
};

function scrollFunction() {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos < currentScrollPos) {
            document.getElementsByClassName('navigation')[0].style.height = "60px";
            document.getElementById('nav_bar').style.height = "60px";
            document.getElementById('logo_img').style.visibility="hidden";
                document.getElementsByClassName('logo')[0].style.width = "0";
            document.getElementById('letter').style.top = "-173px";
            document.getElementById('letter').style.fontSize = "100pt";
            document.getElementsByClassName('initial')[0].style.height = "122px";
            document.getElementsByClassName('initial')[0].style.width = "133px";
            document.getElementsByClassName('initial')[0].style.top = "0";
        } else {
                document.getElementById('nav_bar').style.height = "125px";
                document.getElementsByClassName('navigation')[0].style.height = "125px";
                document.getElementsByClassName('logo')[0].style.width = "fit-content";
                document.getElementById('logo_img').style.visibility="visible";
                document.getElementById('letter').style.top = "-195px";
                document.getElementById('letter').style.fontSize = "120pt";
                document.getElementsByClassName('initial')[0].style.height = "158px";
                document.getElementsByClassName('initial')[0].style.width = "155px";
        }
        console.log(currentScrollPos);
        console.log(prevScrollpos);
    }
}