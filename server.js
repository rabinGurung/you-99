const express = require('express')
const app = express()
const port = process.env.PORT || 3001
const bodyParser = require('body-parser') 


app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*')
    res.setHeader('Access-Control-Allow-Headers','content-type')
    next()
})

app.use(bodyParser.json())

app.get('/login',(req,res)=>{
    Data = [
        {
            id:"1",
            name:"Robin Gurung"
        },
        {
            id:"2",
            name:"Mote Maharjan"
        },
        {
            id:"1",
            name:"Kuala Maskey"
        },
        {
            id:"1",
            name:"Raame nagarkoti"
        }
    ]
    res.json(Data)
})

app.listen(port,()=> console.log(`Server is running ar ${port} port.`))
