
// const { log } = require("console");

const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.listen(3000, ()=>
{
    console.log("server is listening");
}
);

app.get("/dashboard",(req, res)=>

{
    res.render("dashboard");
}
);

app.get("/g",(req, res)=>
{
    res.render("g");
}
);

app.get("/g2",(req, res)=>
{
    res.render("g2");
}
);

app.get("/login",(req, res)=>
{
    res.render("login");
}
);
