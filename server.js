const { response } = require('express')
const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    '21 savage':{
        'age': 29,
    'birthName': 'Sheyaa Bin Abraham-Josheph',
    'birthLocation': 'London, England'},

    'chance the rapper':{
        'age': 29,
    'birthName': 'Chancelor Bennett',
    'birthLocation': 'Chicago, IL'},

'dylan':{
    'age': 29,
'birthName': 'Dylan',
'birthLocation': 'Dylan'}

    
}


app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperName', (request, response)=>{
   const rappersName = request.params.rapperName.toLowerCase()
    // response.json(rappers)
    if(rappers[rappersName]){
        response.json(rappers[rappersName])
    }else{
        response.json(rappers['dylan'])
    }
})

app.listen(process.env.port || PORT, ()=>{
    console.log(`the port is running on port ${PORT}`)
})