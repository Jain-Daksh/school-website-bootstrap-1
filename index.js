
document.getElementById("old1").onmouseover = function() {mouseontext1()};
document.getElementById("new1").onmouseout = function() {mouseonhide1()};

document.getElementById("old2").onmouseover = function() {mouseontext2()};
document.getElementById("new2").onmouseout = function() {mouseonhide2()};

document.getElementById("old3").onmouseover = function() {mouseontext3()};
document.getElementById("new3").onmouseout = function() {mouseonhide3()};

document.getElementById("old4").onmouseover = function() {mouseontext4()};
document.getElementById("new4").onmouseout = function() {mouseonhide4()};

document.getElementById("old5").onmouseover = function() {mouseontext5()};
document.getElementById('new5').onmouseout = function() {mouseonhide5()};

document.getElementById("old6").onmouseover = function() {mouseontext6()};
document.getElementById('new6').onmouseout = function() {mouseonhide6()};


// mouseontext = document.getElementsByClassName(ShowData())
// mouseonhide = document.getElementsByClassName(HideData())
// mouseontext1 = document.getElementsByClassName(ShowDataNew())
// mouseonhide1 = document.getElementsByClassName(HideDataNew())

function mouseontext1(){
    document.getElementById('new1').style.visibility = "visible"
    document.getElementById('old1').style.visibility = "hidden"
}
function mouseonhide1(){
    document.getElementById('old1').style.visibility = "visible"
    document.getElementById('new1').style.visibility = "hidden"
}

function mouseontext2(){
    document.getElementById('new2').style.visibility = "visible"
    document.getElementById('old2').style.visibility = "hidden"
}
function mouseonhide2(){
    document.getElementById('old2').style.visibility = "visible"
    document.getElementById('new2').style.visibility = "hidden"
}

function mouseontext3(){
    document.getElementById('new3').style.visibility = "visible"
    document.getElementById('old3').style.visibility = "hidden"
}
function mouseonhide3(){
    document.getElementById('old3').style.visibility = "visible"
    document.getElementById('new3').style.visibility = "hidden"
}

function mouseontext4(){
    document.getElementById('new4').style.visibility = "visible"
    document.getElementById('old4').style.visibility = "hidden"
}
function mouseonhide4(){
    document.getElementById('old4').style.visibility = "visible"
    document.getElementById('new4').style.visibility = "hidden"
}

function mouseontext5(){
    document.getElementById('new5').style.visibility = "visible"
    document.getElementById('old5').style.visibility = "hidden"
}
function mouseonhide5(){
    document.getElementById('old5').style.visibility = "visible"
    document.getElementById('new5').style.visibility = "hidden"
}

function mouseontext6(){
    document.getElementById('new6').style.visibility = "visible"
    document.getElementById('old6').style.visibility = "hidden"
}
function mouseonhide6(){
    document.getElementById('old6').style.visibility = "visible"
    document.getElementById('new6').style.visibility = "hidden"
}