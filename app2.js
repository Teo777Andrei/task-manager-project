const session =sessionStorage;

const box =  document.querySelector("div.box");
let top= 15 ,index= 0;
const left = 0;

box.addEventListener('click' , infoFunction);

let taskInfo;
function infoFunction(event){

    if (event.target.getAttribute('src') === 'info.svg'){
        
        taskInfo = event.target.parentElement;
        event.target.remove();
        taskInfo.innerHTML+= `<p style= "position:absolute;left:30%;top:0;">Info:${session[taskInfo.innerText]}`;
       // box.innerHTML.replace("" , event.target.outterHTML);
    }
    if(event.target.getAttribute('src')=== 'trash.svg'){
        let keyToDelete = event.target.parentElement.previousElementSibling.firstElementChild.innerText;
        sessionStorage.removeItem(keyToDelete);
        let rootDiv = event.target.parentElement.parentElement;
        
        function recursionDiv(startDiv){
            if(startDiv === null){
                return;
            }
            else{
                let topParam =  startDiv.style.top.slice(0, -1);
                topParam = String(Number(topParam) - 15) +"%";
                startDiv.style.top = topParam;
                recursionDiv(startDiv.nextElementSibling);
            }

        }
       
       recursionDiv(rootDiv.nextElementSibling); 
       rootDiv.remove(); 
    }
    

}



const tasksDisplay=  function(){
    for(let key in session){
        
        console.log(key ,typeof key);
        if( key !== 'IsThisFirstTime_Log_From_LiveServer' &&  key !== 'length'){
            let taskContent = document.createElement("div");
            taskContent.style= `position:absolute;
                            border-bottom:3px solid #0004;
                            width:100%;
                            height:50px;
                            top :${top}%;
                            left:${left};`;
            box.appendChild(taskContent);
        
            let taskContentHtml = `<img src= "info.svg" class ="none"></img>
                                    <p> <span style='position:absolute; left:10%;top:0'>${key} </span></p>
                                    <span style= 'position:absolute;right:4%;top:0'><img src= 'trash.svg'> </span>`;
                                    
            
                                    top+=15;
            taskContent.innerHTML = taskContentHtml;

        }

        if(key ===  "length" || index === 6){
            break;

        }
        index++;
        
    }


}

tasksDisplay();