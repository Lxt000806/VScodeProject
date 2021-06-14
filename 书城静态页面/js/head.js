window.onload = function () {
    var flag = true
    var minmenu = document.getElementById("menu");
    var list = document.getElementById("list");
    var one1 = document.getElementById("one");
    var two2 = document.getElementById("two");
    var three3 = document.getElementById("three");
    var search = document.getElementById("search");
    var minser = document.getElementById("minser");
    var cancel = document.getElementById("cancel");
    var topback = document.getElementById("topback");
    window.onscroll = function () {
        if (window.scrollY > 607) {
            topback.style.height = "60px";
        } else {
            topback.style.height = "0px";
        }
    };
    window.onresize = function () {
        if (document.documentElement.clientWidth >= 953) {
            list.style.display = "flex";
        } else {
            list.style.display = 'none';
            one1.style.transform = "rotateZ(0deg)";
            two2.style.opacity = "1";
            three3.style.transform = "rotateZ(0deg)";
        }
    };
    minmenu.onclick = function () {
        if (flag) {
            list.style.display = 'block';
            one1.style.transform = "rotateZ(45deg)";
            two2.style.opacity = "0";
            three3.style.transform = "rotateZ(-45deg)";
            flag = false;
        }
        else {
            list.style.display = 'none';
            one1.style.transform = "rotateZ(0deg)";
            two2.style.opacity = "1";
            three3.style.transform = "rotateZ(0deg)";
            flag = true;
        }
    };
    minser.onclick = function () {
        search.style.height = "220px"
    }
    cancel.onclick = function () {
        search.style.transition = ".5s"
        search.style.height = "0px"
    }

   
};

