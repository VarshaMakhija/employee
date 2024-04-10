const express=require("express");
const cors=require("cors");
const mysql=require("mysql2");

const app=express();
app.use(cors());
app.use(express.json());

const con=mysql.createConnection({
host:"localhost",
user:"root",
password:"abc123",
database:"ems"
});

app.post("/save",(req,res)=>{
let data=[req.body.id,req.body.name,req.body.salary];
let sql="insert into employee values(?,?,?)";
con.query(sql,data,(err,result)=>{
if(err)	res.send(err);
else	res.send(result);
});
})

app.get("/show",(req,res)=>{
let sql="select * from employee";
con.query(sql,(err,result)=>{
if(err)	res.send(err);
else	res.send(result);
});
})


app.delete("/remove",(req,res)=>{
let data=[req.body.id];
let sql="delete from employee where id=?";
con.query(sql,data,(err,result)=>{
if(err)	res.send(err);
else	res.send(result);
});
})

app.put("/change",(req,res)=>{
let data=[req.body.name,req.body.salary,req.body.id];
let sql="update employee set name=?,salary=? where id=?";
con.query(sql,data,(err,result)=>{
if(err)	res.send(err);
else	res.send(result);
});
})

app.listen(9000,()=>{console.log("server ready @ 9000 port");});
