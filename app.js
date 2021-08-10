const express = require("express");
//console.log(express);
const app = express();
let data = require("./users.json");
//console.log(data);
app.use(express.json());
app.get("/", (req, res) => {
  return res.send("Welcome to home page");
});

app.post("/user/:id", (req, res) => {
  // res.send("Bro You are not here")
  console.log(req.body);
  data.push(req.body);
  // let id = req.params.id;
  // console.log(id);
  // let require_obj;
  // for (let i = 0; i < data.length; i++) {
  //   if (id == data[i].id) {
  //     // console.log(data[i]);
  //     require_obj = data[i];
  //   }
  // }
  // console.log(require_obj);
  // require_obj.first_name = "mahipal";
  // // require_obj.firs_name = "mahipal";
  // return res.send(require_obj);
  console.log(data);

  return res.send(data);
});
app.get("/user/:id", (req, res) => {
  data.forEach((el) => {
    console.log(el.first_name);
  });
  res.send("list of users shown");
});
// app.post("/user", (req, res) => {
//   return res.send("I will not post the assignments, Today");
// });
app.patch("/user/:id", (req, res) => {
  let myobj = {
    id: req.params.id,
    name: "mahipal singh",
  };
  data.push(myobj);
  return res.send(data);
});
app.delete("/user/:id", (req, res) => {
  let id = req.params.id;
  for (let i = 0; i < data.length; i++) {
    if (id == data[i].id) {
      delete data[i];
    }
  }
  console.log(data);
  console.log(`data for this id ${id} has been deleted from the json file`);
  return res.send("You can not cut this tree, you will die in lac of O2");
});

app.listen(2323, () => {
  console.log("I am listening at 2323");
});
