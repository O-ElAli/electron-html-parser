

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

var input = "";
var output="";
function syntaxChange(){
    
    input = document.getElementById("user-input").value;
    output = document.getElementById("output");

    let newHtml = "";

    let openP = false;
    let openB = false;
    let openI = false;
    let openS = false;

    console.log(input[3].substring())

    for(let i = 0; i<input.length;i++){

        if(input.substring(i,i+paragraph.length)==paragraph){
            if(!openP){
                newHtml+="<p>";
                openP = true;
                i+=paragraph.length-1;
            }
            else{
                newHtml+="</p>";
                openP = false;
                i+=paragraph.length-1;
            }
        }

        else if(input.substring(i,i+bold.length)==bold){
            if(!openB){
                //if open is false, open a p tag, change the value to true and increment to skip the second "*"
                newHtml+="<strong>";
                openB = true;
                i+=bold.length-1;
            }
            else{
                //if open is true, close a p tag, change the value to false and increment to skip the second "*"
                newHtml+="</strong>";
                openB = false;
                i+=bold.length-1;
            }
        }

        else if(input.substring(i,i+italic.length)==italic){
            if(!openI){
                //if open is false, open a p tag, change the value to true and increment to skip the second "*"
                newHtml+="<i>";
                openI = true;
                i+=italic.length-1;
            }
            else{
                //if open is true, close a p tag, change the value to false and increment to skip the second "*"
                newHtml+="</i>";
                openI = false;
                i+=italic.length-1;
            }
        }

        else if(input.substring(i,i+span.length)==span){
            if(!openS){
                //if open is false, open a p tag, change the value to true and increment to skip the second "*"
                newHtml+="<span style=\"color:"+color+"\">";
                openS = true;
                i+=span.length-1;
            }
            else{
                //if open is true, close a p tag, change the value to false and increment to skip the second "*"
                newHtml+="</span>";
                openS = false;
                i+=span.length-1;
            }
        }

        else{
            newHtml+=input[i];
        }
    }

    output.innerHTML = newHtml


}

//test text

/*this is gonna be annoying++first paragraph about ***bold characters!!***++second paragraph about++///*-italic words woohoo!///*-++now to the final test++.+changing colours!!.+ ++*/