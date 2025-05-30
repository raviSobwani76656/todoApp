let taskList =[];

      function addTask (){

       let Task= document.querySelector("#inputTaskField");
        let addedTask= Task.value.trim();

        let todoDate = document.querySelector("#todoDate").value.trim();

        
           if(addedTask!==""){
             taskList.push({addedTask, todoDate });
                Task.value="";
                console.log(taskList);
                updateTaskDisplay();
        } 

      }
      function updateTaskDisplay() {
      const taskContainer = document.querySelector("#taskContainer");
      taskContainer.innerHTML = ""; 

      for (let i = 0; i < taskList.length; i++) {
        let todoObject = taskList[i];
        const {addedTask, todoDate}= todoObject;
        let task = `<p>${addedTask} ${todoDate}<button
            onclick= "taskList.splice(${i},1);
            updateTaskDisplay();"
            >Delete</button></p>`;
        taskContainer.innerHTML += task;
      }
    }
