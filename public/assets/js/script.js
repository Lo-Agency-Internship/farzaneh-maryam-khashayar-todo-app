/*----------------------------------------------------------------Starts at the beggining-------------------------------------------------*/
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
const selectedTasks = [];
radioButtons.forEach((btn) => {
  if (btn.checked.value === "all") {
    const personId = localStorage.getItem(id);
    const tasks = db[personId - 1].tasks;
    selectedTasks = [...tasks];
  }
  if (btn.checked.value === "weekly") {
    const personId = localStorage.getItem(id);
    const tasks = db[personId - 1].tasks;
    const day = new Date().getDate();
    selectedTasks = tasks.filter((task) => {
      return task.finished === false && task.dueDate.day - day <= 7;
    });
  }
  if (btn.checked.value === "monthly") {
    const personId = localStorage.getItem(id);
    const tasks = db[personId - 1].tasks;
    const month = new Date().getMonth() + 1;
    selectedTasks = tasks.filter((task) => {
      return task.finished === false && task.dueDate.month === month;
    });
  }
});

/*----------------------------------------------------------------filter end-------------------------------------------------*/
// --------------------------------DONE--------------------------------------------------------------------------------------*
//


function one(){
  const details= document.querySelectorAll(".explain")
  const checked= document.getElementById("defaultCheck1").checked
  console.log(details);
if (checked){
 details.forEach(item =>{
   item.classList.add("lowopacity")
 } )

} 
else{
  details.forEach(item =>{
    item.classList.remove("lowopacity")
  } )

}
}