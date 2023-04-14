function proc1() {

    if (document.getElementById('p1').value < 70) {
        document.getElementById('p1').value++;
        setTimeout(proc1, 100);
    }
    else {
        pendo.onGuideAdvanced()
    }

}


proc1()