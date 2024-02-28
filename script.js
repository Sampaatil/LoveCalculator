
let names = ""

function getname(){
    names=document.querySelector(".name1").value;
    names=names+document.querySelector(".name2").value;
    names = names.toLowerCase();

}



function calculate(){
    let num_result = 27;
    getname();
    for(let i=0;i<names.length;i++){
        num_result+=names.charCodeAt(i);
    }
    if(num_result==1300 || num_result==27){
        document.getElementById("result1").innerHTML = "Error";
    }else {
        document.getElementById("result1").innerHTML = num_result%100+"% compatible";
    }
   

   
   
}

// script.js


const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the 'public' directory
 app.use(express.static('public'));

 // Serve index.html for the root path '/'
 app.get('/', (req, res) => {
     res.sendFile('index.html', { root: './' });
     });

     // Serve style.css file
     app.get('/style.css', (req, res) => {
         res.sendFile('style.css', { root: './' });
         });

         // Serve script.js file
         app.get('/script.js', (req, res) => {
             res.sendFile('script.js', { root: './' });
             });

             app.listen(port, () => {
                 console.log(`Love Calculator app listening at http://localhost:${port}`);
                 });
