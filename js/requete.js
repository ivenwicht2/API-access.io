async function  get_json(value){
    console.log("value input",value);

    let url = "https://server-node-api.herokuapp.com/etat/california/ville/"+value;
    let get_name_ville = await fetch(url);
    let get_json =  await get_name_ville.json();

    console.log(get_json);
    var test = document.getElementById("Test");
    test.innerHTML = get_json[value]["Business Freedom"]; 
}