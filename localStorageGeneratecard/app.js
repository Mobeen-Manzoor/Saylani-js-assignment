



function localStore(){
    var studentName = document.getElementById("name").value;
    var fname = document.getElementById("fname").value;
    var rollNo = document.getElementById("rollno").value;
    var instutite = document.getElementById("instutite").value;
    localStorage.setItem("Name", studentName);
    localStorage.setItem("Father-name", fname);
    localStorage.setItem("rollno", rollNo);
    localStorage.setItem("institute", instutite);
}

function generateCard(){
    var studentName = document.getElementById("name").value;
    var fname = document.getElementById("fname").value;
    var rollNo = document.getElementById("rollno").value;
    var instutite = document.getElementById("instutite").value;

    console.log(studentName)
    console.log(fname)
    console.log(rollNo)
    console.log(instutite)


    localStorage.setItem("Name", studentName);
    localStorage.setItem("Father-name", fname);
    localStorage.setItem("rollno", rollNo);
    localStorage.setItem("institute", instutite);

    var element = document.querySelector(".card-format")
    element.classList.add("show");
    element.classList.remove("hide");



    document.getElementById("show-name").innerText = localStorage.getItem("Name");
    document.getElementById("show-fname").innerText = localStorage.getItem("Father-name");
    document.getElementById("show-rollno").innerText = localStorage.getItem("rollno");
    document.getElementById("show-institute").innerText = localStorage.getItem("institute");
    
}