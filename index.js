//function button1(){
//    document.getElementById("output").innerHTML="You have Selected Red"
//}
//function button2(){
//    document.getElementById("output").innerHTML="You have Selected Blue"
//}
//function button3(){
//    document.getElementById("output").innerHTML="You have Selected Orange"
//}
//function button4(){
//    document.getElementById("output").innerHTML="You have Selected Green"
//}
//function button5(){
//    document.getElementById("output").innerHTML="You have Selected Yellow"
//}
//function button6(){
//    document.getElementById("output").innerHTML="You have Selected Voilet"
//}
//function button7(){
//    document.getElementById("output").innerHTML="You have Selected Pink"
//}
//Array of object of employees
let employees = [
    {
      id: 1,
      first_name: "Suresh",
      last_name: "Kumar",
      email: "suresh@gmail.com",
      gender: "Male",
      ip_address: "160.192.178.21",
    },
  
    {
      id: 2,
      first_name: "Sourav",
      last_name: "Das",
      email: "sourav@gmail.com",
      gender: "Male",
      ip_address: "160.182.178.21",
    },
  
    {
      id: 3,
      first_name: "John",
      last_name: "paul",
      email: "john@gmail.com",
      gender: "Male",
      ip_address: "160.192.238.21",
    },
    {
      id: 4,
      first_name: "Pavan",
      last_name: "Sai",
      email: "pavan@gmail.com",
      gender: "Male",
      ip_address: "160.192.278.21",
    },
    {
      id: 5,
      first_name: "Sangeetha",
      last_name: "Das",
      email: "sangeetha@gmail.com",
      gender: "Female",
      ip_address: "160.162.178.21",
    },
    {
      id: 6,
      first_name: "Tushar",
      last_name: "Vinocha",
      email: "tushar@gmail.com",
      gender: "Male",
      ip_address: "160.092.178.21",
    },
    {
      id: 7,
      first_name: "Jenny",
      last_name: "Paul",
      email: "jenny@gmail.com",
      gender: "Female",
      ip_address: "160.192.178.21",
    },
  
    {
      id: 8,
      first_name: "Jhansi",
      last_name: "P",
      email: "jhansi@gmail.com",
      gender: "Female",
      ip_address: "160.192.78.11",
    },
    {
      id: 9,
      first_name: "Lavish",
      last_name: "Jain",
      email: "lavish@gmail.com",
      gender: "Male",
      ip_address: "170.192.178.21",
    },
  
    {
      id: 10,
      first_name: "Namrata",
      last_name: "P",
      email: "Namrata@gmail.com",
      gender: "Female",
      ip_address: "160.192.175.21",
    },
  ];
  let allempbutton=document.getElementById("all-emp");
  allempbutton.addEventListener("click",function(){
      displayemployees(employees);
  });
  let maleempbutn=document.getElementById("male-emp");
  maleempbutn.addEventListener("click",function(){
      let maleemployee=employees.filter(function(employee){
            return employee.gender==="Male";
      })
      displayemployees(maleemployee);
  });
  let femaleempbutn=document.getElementById("female-emp");
  femaleempbutn.addEventListener("click",function(){
      let femaleemployee=employees.filter(function(employee){
            return employee.gender==="Female";
      })
      displayemployees(femaleemployee);
  });
  let displayemployees=(employees)=>{
      let tablebody=document.querySelector("#table-body");
      let tablerow="";
      for(let employee of employees){
          tablerow+=`<tr>
          <td>${employee.id}</td>
          <td>${employee.first_name}</td>
          <td>${employee.last_name}</td>
          <td>${employee.email}</td>
          <td>${employee.gender}</td>
          <td>${employee.ip_address}</td>`

          tablebody.innerHTML=tablerow;
      }
  }