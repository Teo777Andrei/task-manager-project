const box =  document.querySelector("div.box");

const  inputs = document.querySelectorAll("input");
const inputText1 =  inputs[0];
const inputText2 = inputs[2];

const inputButton1 =inputs[1];
const inputButton2 =inputs[3];

const radioButtonIdle =inputs[5];
const radioButtonImportant=inputs[4];

const radioBox =  document.querySelector("form.none");
let submitBtn ;


if(typeof(inputButton1) ===  typeof(inputButton2) === typeof(radioButtonIdle) === typeof(radioButtonImportant) === 'undefined'){}
else{
    inputButton1.addEventListener("click" ,upperLower1 );
    inputButton2.addEventListener("click" , upperLower2 );
    radioButtonIdle.addEventListener('click' ,radio1);
    radioButtonImportant.addEventListener('click' ,radio2);
}

const tasks= {};

let radioButtonValue ;
function submitButton(event){
    console.log(inputText1.value , inputText2.value );
    event.preventDefault();
    tasks[String(inputText1.value)] = [inputText2.value, radioButtonValue];
    sessionStorage.setItem(inputText1.value , tasks[inputText1.value]);
    inputText1.value = "";
    inputText2.value = "";
    
    
}

let isButton= false;
function radio1(event){
    if(!isButton){
        console.log(event.target.value);
        const newSubmit = document.createElement('input');
        newSubmit.type= "submit";
        newSubmit.className = "btn btn-outline-success";
        newSubmit.style =`position:absolute;
                        width:200px;
                        height:100px;
                        right:0;
                        top:35%;
                        `;
        newSubmit.value ="Submit";

        radioBox.appendChild(newSubmit);
        isButton = true;
        submitBtn =  newSubmit;
        submitBtn.addEventListener("click" ,submitButton);
        
        
    }
    radioButtonValue =event.target.value;
}

function radio2(event){
    if(!isButton){
        console.log(event.target.value);
        const newSubmit = document.createElement('input');
        newSubmit.type= "submit";
        newSubmit.className = "btn btn-outline-success";
        newSubmit.style =`position:absolute;
                        width:200px;
                        height:100px;
                        right:0;
                        top:35%;`;
        newSubmit.value ="Submit";

        radioBox.appendChild(newSubmit);
        isButton = true;
        submitBtn = newSubmit;
        submitBtn.addEventListener("click" ,submitButton);

    }
    radioButtonValue =event.target.value;
}

function upperLower1(event){
    if(event.target.value === "Upper"){
        inputText1.value = (inputText1.value).toUpperCase();
        event.target.value  =  "Lower";
    }
    else{

        inputText1.value = (inputText1.value).toLowerCase();
        event.target.value ="Upper";
    }

    event.preventDefault();
}
    

function upperLower2(event){
    if(event.target.value === "Upper"){
        inputText2.value = (inputText2.value).toUpperCase();
        event.target.value ="Lower";
    }
    else{

        inputText2.value = (inputText2.value).toLowerCase();
        event.target.value = "Upper";
    }
    

    event.preventDefault();
}

