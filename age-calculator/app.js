function calc(event) {
  var birthDate =  document.getElementById("birthdate").value;
  var inputDate = new Date(birthDate);
  var todayDate = new Date()

  year = todayDate.getFullYear() - inputDate.getFullYear()
  month = todayDate.getMonth()  - inputDate.getMonth()
  day = todayDate.getDay() - inputDate.getDay()
  
  console.log(day);

  var result = document.getElementById("result")

  if(inputDate > todayDate ){
    alert("Please Enter correct DOB")
  }else{

    result.innerText = `your are ${year} years ${month} months and ${day} days old`
  }
   
  
  event.preventDefault();
  
  
}

