
function move(json,city){
    var pos = 0;
    var opac = 1;
    var id = setInterval(frame, 0.05);

    function frame() {

        if (pos == -356){
            clearInterval(id);
            chart_city(json,city);

        }
        else {
        pos-=2;
        opac-=0.004;
        wrapper.style.opacity = opac - 0.4
        }
    }


}



var title = document.getElementById("title");
var wrapper = document.getElementById("Wrapper");
var input_state = document.getElementById("input");
var input_city = document.getElementById("city-input");

let done_input = false;

title.style.top= "10%";
title.style.left = "40%"; 



document.addEventListener("keydown", function (e) {
    if (e.keyCode=== 13 && done_input == false) {  //checks whether the pressed key is "Enter"
    if(input_city.value != "" && input_state.value != ""){
        exist(input_state.value,input_city.value)        
        }
    }
});



