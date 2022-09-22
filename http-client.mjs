import https from "https";

const endpoint="https://hookb.in/qBLKVp7NWyTEqJGEyz9J";
const request=https.request(endpoint, {
    method:"POST",
    headers:{
        "Content-Tyoe":"application/json",
        "Accept" :"application/json"
    }
},function(response){
    response.addListener("data", function(data){
        console.info(`Receive : ${data.toString()}`);
    })
});

const body=JSON.stringify({
    firstName:"Rama",
    lastName:"Fajar"
});
request.write(body);
request.end();