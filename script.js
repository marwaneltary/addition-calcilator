function add(){
       var x = document.getElementById("x").value;
       var y = document.getElementById("y").value;

       if(x == "" || y == ""){
              document.getElementById("r").innerHTML = "PLEASE ENTER NUMBERS";
       }

       else if(x != "" && y !=""){
             document.getElementById("r").innerHTML = Number(x) + Number(y);
       }


}