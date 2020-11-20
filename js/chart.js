var ctx = document.getElementById('myChart').getContext('2d');

function chart_city(json,city){
    data = {
        'labels': ["death","hospitalizedCurrently"],
        'datasets':[{
            'data':[json["death"],json["hospitalizedCurrently"]],
            "backgroundColor": ["#3e95cd", "#8e5ea2"]
        }],
    }
    console.log("data 2",data);
    hbar(data,city+" Population : "+json["population"])
}

function chart_state(json){
    
}

function hbar(data,text){
    console.log("data",data);
    var myBarChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: data,
        options: {
            "title":{
                "text":text,
                "display": true,
            },
            "legend": { 
                "display": false,
             },

        }
    });
}