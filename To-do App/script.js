let input = document.getElementById("inp");
let container = document.getElementById("container");

input.addEventListener("keydown", function(event){
    if(event.key === 'Enter'){
        const tasks = container.querySelectorAll('.task');


        if(tasks.length >= 8){
            alert("8 tasks is the maximum")
            return;
        }

        else if(input.value == ""){
            alert("Please input a value")
            return;
        }

        const task = document.createElement('div');
        const del = document.createElement("button");
        del.classList.add("del")
        del.textContent = "X"
        task.textContent = input.value;
        task.classList.add("task")


        container.appendChild(task)
        task.appendChild(del)

        input.value = "";

        task.onclick = function(){
            task.classList.toggle("complete")
        }

        del.onclick = function(){
            task.classList.add("fade-out");

            setTimeout(() => { task.remove()
                
            }, 300);
            
        }
    }


});


