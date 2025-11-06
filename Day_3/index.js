import http, { createServer } from "http"

const server = createServer()

const PORT = 3000

server.listen(PORT,()=>{
    console.log(`succesfully running :http://localhost/${PORT}`);
    
})
