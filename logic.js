


function syntaxChange(){
    const input = document.getElementById("user-input").value;
    const output = document.getElementById("output");

    let newHtml = "";

    let openP = false;
    let openB = false;
    let openU = false;

    for(let i = 0; i<input.length;i++){

        if(input[i] == "+" && input[i+1] == "+"){

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

        else if(input[i] == "*" && input[i+1] == "*"){
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

        else{
            newHtml+=input[i];
        }
    }

    output.innerHTML = newHtml


}