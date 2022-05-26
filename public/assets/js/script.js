
/*----------------------------------------------------------------Starts at the beggining-------------------------------------------------*/
let allTasks=[]
let selectedTasks = [];
const url = window.location.href;
const idx = url.indexOf("/",8)
const err = url.substring(idx+1)
switch (err) {
  case "not-found":
    alert("Email does not exist!")
    window.location.href = "./";
    break;
  case "not-matched":
    alert("Password is incorrect!")
    window.location.href = "./";
    break;
  case "exists":
    alert("This email already exists!")
    window.location.href = "./";
    break;
  default:
    break;
}


/*----------------------------------------------------------------signup start-------------------------------------------------*/
function checkPassword() {
  document.getElementById("passAlert").style.display = "none";
  document.getElementById("signUpBtn").disabled = false;
  const signUpPass = document.getElementById("signUpInputPassword").value;
  const signUpPass2 = document.getElementById("signUpInputRePassword").value;
  if (!(signUpPass === signUpPass2)) {
    console.log(!signUpPass === signUpPass2);
    document.getElementById("passAlert").style.display = "block";
    document.getElementById("signUpBtn").disabled = true;
  }
  return;
}
/*----------------------------------------------------------------signup end-------------------------------------------------*/

/*----------------------------------------------------------------filter start-------------------------------------------------*/
const radioButtons = document.querySelectorAll('input[name="btnradio"]');

radioButtons.forEach((btn) => {
  if (btn.checked.value === "all") {
    selectedTasks = [...allTasks];
  }
  if (btn.checked.value === "weekly") {
    const day = new Date().getDate();
    selectedTasks = allTasks.filter((task) => {
      return task.finished === false && task.due.day - day <= 7;
    });
  }
  if (btn.checked.value === "monthly") {
    const month = new Date().getMonth() + 1;
    selectedTasks = allTasks.filter((task) => {
      return task.finished === false && task.due.month === month;
    });
  }
});

/*----------------------------------------------------------------filter end-------------------------------------------------*/
// --------------------------------DONE--------------------------------------------------------------------------------------*
//


function taskState(taskId){
  const xhttp = new XMLHttpRequest();
  const url = window.location.pathname
  const urlSplit = url.split('/')
  let userId = urlSplit[3];
  const task= document.getElementById(taskId);
  const checkbox = document.getElementById(`task${taskId}`)
  xhttp.onload=()=>{
    if (xhttp.status >= 200 && xhttp.status < 300){
      // const response = JSON.parse(xhttp.response)
      if (checkbox.checked === true){
        task.classList.add("done");
      } 
      else{
        console.log(checkbox.checked)
        task.classList.remove("done")
      }
    }
    
  }
  xhttp.open("Post", `/api/data/${userId}/${taskId}`,true)

  xhttp.setRequestHeader("content-type", "application/json")
  xhttp.send(JSON.stringify({finished:checkbox.checked}));
}
/*--------------------------------------------------------------render tasks starts-------------------------------------------------*/
function getTasks(){
  const xhttp= new XMLHttpRequest()
  const url = window.location.pathname
  const urlSplit = url.split('/')
  let userId = urlSplit[3];
  xhttp.onload=()=>{
    if (xhttp.status >= 200 && xhttp.status < 300){
      const response = JSON.parse(xhttp.response) 
      selectedTasks=[...response]
      const ul=document.getElementById("tasks-section")
      selectedTasks.forEach(task=>{
      const li=document.createElement("li");
      li.classList.add("list-group-item");
      li.classList.add("d-flex");
      li.innerHTML=`<div class="task d-flex align-content-center align-self-center ">
                      <input id="task${task.id}" class="form-check-input me-1" type="checkbox" value="true" onclick="taskState(${task.id})" aria-label="...">
                      <div for="${task.id}" class="d-flex">
                        <span><strong>Title:</strong></span>
                        <div class="task-title mx-1">
                          ${task.title}
                        </div>
                        <span><strong>Due Date:</strong></span>
                        <div class="task-due mx-1" >
                          <span>${task.due.day} -</span>
                          <span>${task.due.month} -</span>
                          <span>${task.due.year}</span>
                        </div>
                      </div>
                    </div>`
      li.setAttribute("id",task.id)
      ul.appendChild(li)
  
                           

      })
    }
  }
  xhttp.open("GET", `/api/data/${userId}`,true)
  xhttp.send();
}

/*--------------------------------------------------------------render tasks ends-------------------------------------------------*/
