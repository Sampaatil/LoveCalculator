
let names = ""

function getname(){
    names=document.querySelector(".name1").value;
    names=names+document.querySelector(".name2").value;

}



function calculate(){
    let num_result = 27;
    getname();
    for(let i=0;i<names.length;i++){
        num_result+=names.charCodeAt(i);
    }
    if(num_result==1300){
        document.getElementById("result1").innerHTML = "Error";
    }else {
        document.getElementById("result1").innerHTML = num_result%100+"% compatible";
    }
   

   
   
}

