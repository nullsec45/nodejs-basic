import http from "http";

const server=http.createServer((request,response) => {

    if(request.method === "POST"){
        request.addListener("data", (data) =>{
            response.setHeader("Content-Type","application/json");
            response.write(data);
            response.end();
        })
    }else{
        if(request.url === "login"){
            response.write("Login");
        }else{
            response.write("Register");
        }   
        response.end();
    }

});

const port=3000;
server.listen(port);