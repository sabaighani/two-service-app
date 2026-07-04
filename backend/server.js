const express= require ('express')
const app= express();
const port =5000;

function getMessage (req,res){
   res.json({ text: 'CI/CD works! Backend v2', status: 'ok' });
}
app.get('/api/message',getMessage)
app.listen(port,()=>{
    console.log(`backend listening on port ${port}`)
})