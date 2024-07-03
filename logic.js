

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

    const button = document.createElement("input");
    button.setAttribute("type","button");
    button.setAttribute("value","Download html file");
    button.setAttribute("onclick","outputFile()");

    document.getElementById("output").appendChild(document.createElement("p"));
    document.getElementById("output").appendChild(button);

}

function outputFile() {
    const outputDiv = document.getElementById("output");
    const button = outputDiv.querySelector('input[type="button"]');

    // Temporarily remove the button
    outputDiv.removeChild(button);

    // Get the content without the button
    const content = outputDiv.innerHTML;
    const blob = new Blob([content], { type: 'text/html' });
    const link = document.createElement('a');

    link.href = URL.createObjectURL(blob);
    link.download = 'test.html';
    link.click();

    // Reattach the button
    outputDiv.appendChild(button);

    // Clean up the URL object
    URL.revokeObjectURL(link.href);
}



//test text

/*this is gonna be annoying++first paragraph about ***bold characters!!***++second paragraph about++///*-italic words woohoo!///*-++now to the final test++.+changing colours!!.+ ++*/