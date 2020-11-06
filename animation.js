function move(){
    console.log("move")
    //var title = document.getElementById("Title").style.visibility = "hidden";
    var title = document.getElementById("Title")

    var elem = document.getElementById("Input");
    var pos = 0;
    var opac = 1;
    var id = setInterval(frame, 0.05);

    function frame() {
        if (pos == 350) {
        clearInterval(id);
        } else {
        pos-=2;
        opac-=0.004;
        elem.style.top = pos + 'px';
        elem.style.opacity = opac
        title.style.opacity = opac - 0.4
        }
    }
}


var wage = document.getElementById("Input");
var done = false;
wage.addEventListener("keydown", function (e) {
    if (e.keyCode=== 13 && done == false) {  //checks whether the pressed key is "Enter"
        move()
        done = true;
    }
});