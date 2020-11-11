var ctx = document.getElementById('myChart').getContext('2d');

function chart_city(json,city){
    data = {
        'labels': ["death","hospitalizedCurrently"],
        'datasets':[{
            'label':city+" Population : "+json["population"],
            'data':[json["death"],json["hospitalizedCurrently"]]
        }],
    }
    console.log("data 2",data);
    hbar(data)
}

function chart_state(json){
    
}

function hbar(data){
    console.log("data",data);
    var myBarChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: data,
        options: {}
    });
}