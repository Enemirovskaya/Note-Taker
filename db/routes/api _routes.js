const fs = require("fs");
const uniqId= require("uniqid");

module.exports=function(app){
//api get req
app.get("/api/notes", (req,res)=>{
    console.log("Get notes request is firing");

    const data = fs.readFileSync("./db/db.json", "utf8");
    res.json(JSON.parse(data));

});

    //API POST
    app.post("/api/notes", (req,res)=> {
        const
    })
}