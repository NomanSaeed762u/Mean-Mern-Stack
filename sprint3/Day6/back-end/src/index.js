const express = require('express');
const app = express();
const student=require('./Student')
app.use(express.json())
const jsonData = require('./Data.json');
const cors = require('cors');
const fs = require('fs');
//app.use(bodyParser.json());
// Enable CORS for all routes
app.use(cors());
app.listen(3001,()=>{
  console.log(`You are getting response at port No: ${3001}`)
})

app.get('/students', (req,res)=>{
  res.json(student)
})
app.post('/students', (req,res)=>{
  if(!req.body.email){
    res.status(404)
    res.json({ error: "Email is required..."})
  }
  user={ 
    id : student.length+1,
    first_name : req.body.first_name,
    last_name : req.body.last_name,
    email : req.body.email
  }
  student.push(user)
  res.json(user)
})

app.put('/students/:num',(req,res)=>{
  let id= req.params.num;
  let first_name= req.body.first_name;
  let last_name =req.body.last_name;
  let email= req.body.email;
  let index= student.findIndex((student)=>{
    return (student.id==Number.parseInt(id))
  })
  if (index>=0){
    let std = student[index];
    std.first_name= first_name
    std.last_name=last_name
    std.email=email
    res.json(std)
  }
  else{
    res.status(404)
  }
})

app.delete('/students/:num',(req,res)=>{
  let id= req.params.num;
  let index= student.findIndex((student)=>{
    return (student.id==Number.parseInt(id))
  })
  if (index>=0){
    let std = student[index];
    student.slice(index,1)
    res.json(std)
  }
  else{
    res.status(404)
  }
})


  app.get('/json', (req, res) => {
    console.log('Hello, From NodeJs');
    res.send(jsonData )
  });

  
  app.post('/api', (req,res)=>{
    if(!req.query.email){
      res.status(404)
      res.json({ error: "Email is required..."})
    }
    user={ 
      id : jsonData.student.length+1,
      first_name : req.query.first_name,
      last_name : req.query.last_name,
      email : req.query.email
    }
    jsonData.student.push(user);
//     const jsonData1 = JSON.stringify(jsonData);
//     console.log("the Json OutPut is :",jsonData1)
// // Write the JSON data to a file
//    fs.writeFile('Data.json', student.jsonData1, (err) => {
//   if (err) {
//     console.error('Failed to write data to JSON file:', err);
//     return;
//   }
//   console.log('Data written to JSON file successfully.');
//   });




    res.json(user)
  })

// app.post('/submit', (req, res) => {
//     const name = req.body.name;
//     const email = req.body.email;
//     const queryParam = req.query.param; // Accessing query parameter named 'param'
  
//     // Handle the received data and query parameter as desired
//     // For example, you can log them or send a response back
//     console.log(`Received name: ${name}`);
//     console.log(`Received email: ${email}`);
//     console.log(`Received query parameter: ${queryParam}`);
    
//     res.send('Data received successfully',{name: {name},email: {email}});
//   });
  

// app.get('/message/:number', (req, res) => {
//     console.log('Hello, From NodeJs');
//     let msg;
//     const result= req.params.number;
//     if (result%2==0){
//         msg = "The Number is Even"
//     }
//     else{
//         msg ="The Number is odd"
//     }
//     res.send({
//         message : "Hello from NodeJs",
//         params: result,
//         msg
//     })
//   });
//   const port = 4000; // choose a port number
//   app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
//   });
    