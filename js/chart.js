//var ctx = document.getElementById('myChart').getContext('2d');

function chart_city(json,city){

    let div = document.getElementById("title");
    let para = document.createElement("P");               // Create a <p> element
    para.innerText = "city";                        // Insert text
    div.appendChild(para);                      // Append <p> to <body>

    ctx = create_ctx(1) // create canvas for each graph and return context in an array  
    data = {
        'labels': ["death","hospitalizedCurrently","positive"],
        'datasets':[{
            'data':[json["death"],json["hospitalizedCurrently"],json["positive"]],
            'backgroundColor': ["#3E2F2F", "#B32525",'#E39C9C']
        }],
    }
    console.log("data 2",data);
    hbar(data,city+" Population : "+json["population"])
}


function hbar(data,text){
    console.log("data",data);
    var myBarChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: data,
        options: {
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