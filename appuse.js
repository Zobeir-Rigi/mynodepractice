const express = require("express");
const app = express();
app.use("/message",(req,res)=>{
    console.log(req.body)
})

app.use(`/`, (req, res) => {
  console.log("I run always");
  res.send(
    `<form action="/message" method="post">
    <label>Search</label>
      <input name="message" type="text"></input>
      <button> submit</button>
    </form>`
  );
});

app.listen(9000, () => console.log("server is listening to port 9000"));
