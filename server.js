const express = require('express')
const app = express();
const PORT = process.env.PORT || 8001
const multer = require('multer')
const upload = multer({dest:'uploads/'})


app.get('/', (req, res) =>{
  res.sendFile(__dirname + '/index.html')
})

app.post('/upload-profile-pic', upload.single('profile_pic'),(req, res)=>{
  if(!req.file){
    res.send({message: "You Did not provide a file"})
  }
  console.log(req.file);
  res.send(req.file)
})

app.listen(PORT, ()=>console.log(`server listening on http://localhost:${PORT}`))