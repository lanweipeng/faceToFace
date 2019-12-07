let app = require('express')()
let http = require('http').Server(app)
let io = require('socket.io')(http)
app.get('/',(req,res) => {
  res.sendFile(__dirname+'/index.html')
  // res.send('hh')
})
io.on('connection',socket=>{
  console.log('a user connected')
socket.on('disconnect',()=>{
  console.log('user disconnected')
})
})
http.listen(3000,()=>{
  console.log('http://localhost:3000')
})