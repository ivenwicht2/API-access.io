//var ctx = document.getElementById('myChart').getContext('2d');

function chart_city(json,city){

    let wrapper = document.getElementById("Wrap-chart"); 

    wrapper.style.display = "block";
    document.body.style.display = "contents" ;
    document.body.style.alignItems  = ""


    var canvas1 =document.getElementById("House");

    data = {
        'labels': ["Housing","Environmental Quality","Safety","Tolerance","Leisure & Culture","Internet Access","Education"],
        'datasets':[{
            'data':[json["Housing"],json["Environmental Quality"],json["Safety"],json["Tolerance"],json["Leisure & Culture"],json["Internet Access"],json["Education"]],
            'backgroundColor': ["#F64B34", "#D3422E",'#B43A29','#9F3324','#902E20','#8C2D20','#7F2A1E7F2A1E']
        }],
    }
    console.log("data 2",data);
    hbar(data,"Quality of life",canvas1)

    var canvas2 =document.getElementById("Economy");

    data = {
        'labels': ["Economy","Startups","Taxation","Cost of Living","Venture Capital","Business Freedom"],
        'datasets':[{
            'data':[json["Economy"],json["Startups"],json["Taxation"],json["Cost of Living"],json["Venture Capital"],json["Business Freedom"]],
            'backgroundColor': ["#38B1E8", "#2D93C4",'#2E87B0','#287396','#226280','#1E5670']
        }],
    }
    console.log("data 3",data);
    hbar(data,"Economy",canvas2)


    var canvas3 =document.getElementById("Travel");

    data = {
        'labels': ["Travel Connectivity","Commute","Outdoors"],
        'datasets':[{
            'data':[json["Travel Connectivity"],json["Commute"],json["Outdoors"]],
            'backgroundColor': ["#43F69D", "#34CF82",'#2DA167']
        }],
    }
    console.log("data 4",data);
    hbar(data,"Traveling",canvas3)


    var citywrap = document.getElementById("CityCanva");
    var canvas = document.getElementById("city_info");
    var ctx = canvas.getContext("2d");

    let dpi = window.devicePixelRatio;

    let style_height = +getComputedStyle(canvas).getPropertyValue("height").slice(0, -2);
    let style_width = +getComputedStyle(canvas).getPropertyValue("width").slice(0, -2);
    
    canvas.setAttribute('height', style_height * dpi);
    canvas.setAttribute('width', style_width * dpi);
    /*ctx.fillStyle = "#2149E0";
    ctx.strokeStyle = "#FFFFFF";
    roundRect(ctx,0, 0, canvas.width, canvas.height,20,true)*/
    ctx.font = '35px serif';
    ctx.fillText(city[0].toUpperCase(),5, 50);

    ctx.font = '15px serif';
    ctx.fillText("Population : " + json["population"],20, 100)


    ctx.fillText("COVID19 Information in this state :",20,140)
    ctx.fillText("hospitalized Currently : " + json["hospitalizedCurrently"],20, 170)
    ctx.fillText("negative : " + json["negative"],20, 190)
    ctx.fillText("positive : " + json["positive"],20, 210)
    ctx.fillText("death : " + json["death"],20, 230)



}


function hbar(data,text,canvas){
    console.log("data",data);
    var myBarChart = new Chart(canvas, {
        type: 'horizontalBar',
        data: data,
        options: {
            'maintainAspectRatio': false,
            'title':{
                'text':text,
                'display': true,
            },
            'legend': { 
                'display': false,
             },

        }
    });
}


function roundRect(ctx, x, y, width, height, radius, fill, stroke) {
    if (typeof stroke === 'undefined') {
      stroke = true;
    }
    if (typeof radius === 'undefined') {
      radius = 5;
    }
    if (typeof radius === 'number') {
      radius = {tl: radius, tr: radius, br: radius, bl: radius};
    } else {
      var defaultRadius = {tl: 0, tr: 0, br: 0, bl: 0};
      for (var side in defaultRadius) {
        radius[side] = radius[side] || defaultRadius[side];
      }
    }
    ctx.beginPath();
    ctx.moveTo(x + radius.tl, y);
    ctx.lineTo(x + width - radius.tr, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
    ctx.lineTo(x + width, y + height - radius.br);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
    ctx.lineTo(x + radius.bl, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
    ctx.lineTo(x, y + radius.tl);
    ctx.quadraticCurveTo(x, y, x + radius.tl, y);
    ctx.closePath();
    if (fill) {
      ctx.fill();
    }
    if (stroke) {
      ctx.stroke();
    }
  
  }