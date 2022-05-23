/*----------------------------------------------------------------test db-------------------------------------------------*/

const db = [
  {
    id: 1,
    name: "khash",
    email: "khash@gmail.com",
    password: "123456",
    tasks: [
      {
        id: 1,
        title: "reading express.js",
        finished: false,
        dueDate: "19-05-2022",
      },
      {
        id: 2,
        title: "writing express.js",
        finished: false,
        description: "lasgasdgnakjlf",
        dueDate: "25-05-2022",
      },
    ],
  },
  {
    id: 2,
    name: "helia",
    email: "helia@gmail.com",
    password: "123456",
    tasks: [
      {
        id: 1,
        title: "raeding express.js",
        finished: false,
        dueDate: "19-05-2022",
      },
      {
        id: 2,
        title: "writing express.js",
        finished: false,
        description: "lasgasdgnakjlf",
        dueDate: "25-05-2022",
      },
    ],
  },
];

/*----------------------------------------------------------------signup start-------------------------------------------------*/
function checkEmail() {
  document.getElementById("emailAlert").style.display = "none";
  document.getElementById("signUpBtn").disabled = false;
  const signUpEmail = document.getElementById("signUpInputEmail").value;
  let data = db;
  data.forEach((obj) => {
    if (obj.email === signUpEmail) {
      document.getElementById("emailAlert").style.display = "block";
      document.getElementById("signUpBtn").disabled = true;
    }
    return;
  });
}

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
function signUp() {
  const signUpName = document.getElementById("signUpInputName");
  const signUpEmail = document.getElementById("signUpInputEmail");
  const signUpPass = document.getElementById("signUpInputPassword");
  if (
    signUpName.validity.valid &&
    signUpEmail.validity.valid &&
    signUpPass.validity.valid
  ) {
    db.push({
      id: db.length + 1,
      name: signUpName.value,
      email: signUpEmail.value,
      password: signUpPass.value,
    });
    window.location.href = "./pages/tasks.html";
  } else {
    document.getElementById("formAlert").style.display = "block";
  }
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
/*----------------------------------------------------------------login starts-------------------------------------------------*/

function validate() {
  const username= document.getElementById("loginInputEmail").value
  const password= document.getElementById("loginInputPassword").value
  
db.forEach(function(email,password){
  if (username==="loginInputEmail" && password==="loginInputPassword ")
  {
    window.location.href = "./pages/tasks.html";
  }
else{
  document.getElementById("formAlert").style.display = "block";
  
}
console.log("login was successful!")
});

  db.push({
    id: db.length + 1,
    name: signUpName.value,
    email: signUpEmail.value,
    password: signUpPass.value,
  });
  
  
}

function checkEmail() {
  document.getElementById("emailAlert").style.display = "none";
  document.getElementById("signUpBtn").disabled = false;
  const signUpEmail = document.getElementById("signUpInputEmail").value;
  let data = db;
  data.forEach((obj) => {
    if (obj.email === signUpEmail) {
      document.getElementById("emailAlert").style.display = "block";
      document.getElementById("signUpBtn").disabled = true;
    }
    return;
  });
}

function checkInputs() {
  const username = document.getElementById("loginInputEmail");
  const password = document.getElementById("loginInputPassword");

//  username
if (loginInputEmail.value.trim() == '') {
  setError(emailInput, 'Provide email address');
} else if (isEmailValid(loginInputEmail.value)) {
  setSuccessFor(username);
} else {
  setError(loginInputEmail, 'username can not be Blank!');
}

//password
if (loginInputPassword.value.trim() == '') {
  setError(passwordInput, 'Password can not be empty');
} else if (loginInputPassword.value.trim().length < 6 || loginInputPassword.value.trim().length > 20) {
  setError(passwordInput, 'Password min 6 max 20 charecters');
} else {
  setSuccess(password);
}
}

function setError(element, errorMessage) {
  const parent = element.parentElement;
  if (parent.classList.contains('success')) {
    parent.classList.remove('success');
  }
  parent.classList.add('error');
  const paragraph = parent.querySelector('p');
  paragraph.textContent = errorMessage;
}

function setSuccess(element) {
  const parent = element.parentElement;
  if (parent.classList.contains('error')) {
    parent.classList.remove('error');
  }
  parent.classList.add('success');
}
/*----------------------------------------------------------------login end-------------------------------------------------*/


