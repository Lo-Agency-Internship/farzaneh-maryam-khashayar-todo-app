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
