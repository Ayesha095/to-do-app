document.querySelector('#push').onclick = function() {


    if(document.querySelector('#newtask input').value.lenght == 0){
        alert("please enter a task");
    }
     else{
        document.querySelector('#tasks').innerHTML+=`<div class="task">
        <span id="taskname">
        ${document.querySelector('#nwetask input').value}
        </span>
        <button class="delete">x</button>
        </div>`;
        var current_tasks=document.querySelector('.delete');


        for(var i=0; i<current_tasks.lenght; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
        var tasks=document.querySelector('#taskname');
        for(var i=0; i< tasks.lenght; i++){
            tasks[i].onclick = function(){
                this.classList.toggle('completed');
            }
        }
        document.querySelector('#nwetask input').value="";


     }

}
