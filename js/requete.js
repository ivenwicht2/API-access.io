async function  get_json_city(state,city){
    console.log("value input",state,city);

    let url = "https://server-node-api.herokuapp.com/etat/"+state+"/ville/"+city+".json";
    console.log("url",url);
    let get_name_ville = await fetch( url,{"Access-Control-Allow-Origin": "*"});
    let get_json =  await get_name_ville.json();

    console.log(get_json[Object.keys(get_json)]);
    return [get_json[Object.keys(get_json)],Object.keys(get_json)]
    //chart_city(get_json[Object.keys(get_json)],Object.keys(get_json));
}


function exist(state,city){
    
    var data = null;

    const promise = new Promise((resolve, reject) => {
        // Make a network request
          resolve(get_json_city(state,city))
    })

    promise.then(res => {
        console.log("res",res);
        data = res;
        if(Object.keys(data[0]).length >= 25){
                move(data[0],data[1]);
                done_input = true; 
        }
    }).catch(err => {
        console.log(err)
    })
    
}

/*
async function  get_json_state(state){
    console.log("value input",state);

    let url = "https://server-node-api.herokuapp.com/etat/"+state;
    let get_name_ville = await fetch(url);
    let get_json =  await get_name_ville.json();

    console.log(get_json);
}*/




function create_ctx(nb){
    
    let canvas = document.createElement('canvas');
    let context = []
    div = document.getElementById("Display-chart"); 
    for(let i=0;i<=nb;i++){
        canvas.id     = "CursorChart"+i;
        div.appendChild(canvas)
        let ctx = document.getElementById("CursorChart"+i).getContext('2d');
        context.push(ctx)
    }
    return context
}