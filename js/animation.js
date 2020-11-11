
function move(){
    var pos = 0;
    var opac = 1;
    var id = setInterval(frame, 0.05);

    function frame() {

        if (pos == -356){
            clearInterval(id);
            wrapper.style.display = "none";
            myChart.style.display = "block";
            if(input_city.value != "" && done_loop == false){
                done_loop = true;
            safety(input_state.value,input_city.value,checked);
            }
        }
        else {
        pos-=2;
        opac-=0.004;
        wrapper.style.opacity = opac - 0.4
        }
    }


}

var wrapper = document.getElementById("Wrapper");
var input_state = document.getElementById("input");
var input_city = document.getElementById("city-input");
var checkbox = document.getElementById("check-ville");
var myChart = document.getElementById("Display-chart");

input_city.style.display = "none";
myChart.style.display = "none";
myChart.style.height = "50%";
myChart.style.width = "50%";
myChart.style.backgroundColor = "white";
var checked = false;
var done_input = false;
var done_loop = false;

input_state.addEventListener("keydown", function (e) {
    if (e.keyCode=== 13 && done_input == false) {  //checks whether the pressed key is "Enter"
        move()
        done_input = true;
    }
});

input_city.addEventListener("keydown", function (e) {
    if (e.keyCode=== 13 && done_input == false) {  //checks whether the pressed key is "Enter"
        move()
        done_input = true;
    }
});




checkbox.addEventListener( 'change', function() {
    if(this.checked) {
        input_city.style.display = "block";
        checked = true;
    } else {
        input_city.style.display = "none";
        checked = false;
    }
});