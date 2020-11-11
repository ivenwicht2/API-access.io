async function  get_json_city(state,city){
    console.log("value input",state,city);

    let url = "https://server-node-api.herokuapp.com/etat/"+state+"/ville/"+city;
    let get_name_ville = await fetch(url);
    let get_json =  await get_name_ville.json();

    console.log(get_json[Object.keys(get_json)]);
    chart_city(get_json[Object.keys(get_json)],Object.keys(get_json));
}

async function  get_json_state(state){
    console.log("value input",state);

    let url = "https://server-node-api.herokuapp.com/etat/"+state;
    let get_name_ville = await fetch(url);
    let get_json =  await get_name_ville.json();

    console.log(get_json);
}

function safety(state,city,checked){
    if(checked == false){
        get_json_state(state);
    }
    else{
        get_json_city(state,city);
    }

}