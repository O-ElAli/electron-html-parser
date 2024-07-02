

var paragraph = "";
var bold = "";
var italic = "";
var span = "";
var color = "";

function parsing(){

    paragraph = document.getElementById("paragraph").value;
    bold = document.getElementById("bold").value;
    italic = document.getElementById("italic").value;
    span = document.getElementById("span").value;
    
    color = document.getElementById("color").value;
}


function syntaxChange(){
    const input = document.getElementById("user-input").value;
    const output = document.getElementById("output");

    let newHtml = "";

    let openP = false;
    let openB = false;
    let openI = false;
    let openS = false;

    for(let i = 0; i<input.length;i++){

        if(input[i] == paragraph[0] && input[i+1] == paragraph[1]){

            if(!openP){
                //if open is false, open a p tag, change the value to true and increment to skip the second "+"
                newHtml+="<p>";
                openP = true;
                i++;
            }
            else{
                //if open is true, close a p tag, change the value to false and increment to skip the second "+"
                newHtml+="</p>";
                openP = false;
                i++
            }
        }

        else if(input[i] == bold[0] && input[i+1] == bold[1]){
            if(!openB){
                //if open is false, open a p tag, change the value to true and increment to skip the second "*"
                newHtml+="<strong>";
                openB = true;
                i++;
            }
            else{
                //if open is true, close a p tag, change the value to false and increment to skip the second "*"
                newHtml+="</strong>";
                openB = false;
                i++
            }
        }

        else if(input[i] == italic[0] && input[i+1] == italic[1]){
            if(!openI){
                //if open is false, open a p tag, change the value to true and increment to skip the second "*"
                newHtml+="<i>";
                openI = true;
                i++;
            }
            else{
                //if open is true, close a p tag, change the value to false and increment to skip the second "*"
                newHtml+="</i>";
                openI = false;
                i++
            }
        }

        else if(input[i] == span[0] && input[i+1] == span[1]){
            if(!openS){
                //if open is false, open a p tag, change the value to true and increment to skip the second "*"
                newHtml+="<span style=\"color:"+color+"\">";
                openS = true;
                i++;
            }
            else{
                //if open is true, close a p tag, change the value to false and increment to skip the second "*"
                newHtml+="</span>";
                openS = false;
                i++
            }
        }

        else{
            newHtml+=input[i];
        }
    }

    output.innerHTML = newHtml


}