const inputBox=document.querySelector(".inputFeild input");
const addBtn=document.querySelector(".inputFeild button");


inputBox.onkeyup = () =>{
    let userData = inputBox.Value;
    if(userData.trim() != 0){
      addBtn.classList.add("active");
    }
    else{
      addBtn.classList.remove("active");
    }
}


addBtn.onclick=() =>{
   let userData=inputBox.value;
   let getLocalStorage=localStorage.getItem("NewTodo");
   if(getLocalStorage==null){
     listArr=[];
   }
   else{
     listArr=JSON.parse(getLocalStorage);
   }
   listArr.push(userData);
   localStorage.setItem("NewTodo",JSON.stringify(listArr));
   
}

