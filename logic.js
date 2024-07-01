


function syntaxChange(){
    const input = document.getElementById("user-input").innerHTML;
    const output = document.getElementById("output");

    let newHtml;

    let open = false;

    console.log(input[5]);

    for(let i = 0; i<input.length;i++){

        if(input[i] == "+" && input[i+1] == "+"){

            if(!open){
                //if open is false, open a p tag, change the value to true and increment to skip the second "+"
                newHtml+="<p>";
                open = true;
                i++;
            }
            else{
                //if open is true, close a p tag, change the value to false and increment to skip the second "+"
                newHtml+="</p>";
                open = false;
                i++
            }
        }
        else{
            newHtml+=input[i];
        }
    }

    output.innerHTML = newHtml


}