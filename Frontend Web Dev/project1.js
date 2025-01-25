const inputBox=document.getElementById("myInput");
const listContainer=document.getElementById("list-container");
const btn=document.getElementById("addBtn");


inputBox.addEventListener("input",stateHandle);

function stateHandle(){
  if(inputBox.value.trim()!==""){
    btn.disabled=false;
    btn.classList.add("enabled");
  }  
}

function newElement(){
  if(inputBox.value!==""){
    let li=document.createElement("li");
    li.innerHTML=inputBox.value;
    listContainer.appendChild(li);
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  }
  inputBox.value="";
  btn.disabled=true;
  btn.classList.remove("enabled");
}

listContainer.addEventListener("click",function(e){
  if(e.target.tagName==="LI"){
    e.target.classList.toggle("checked");
  }
  else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
  }

},false);




