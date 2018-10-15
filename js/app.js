
function clickFunction() {
    
    var fname = document.getElementById("fname");
    console.log("First Name :- " +fname.value); 

    var lname = document.getElementById("lname");
    console.log("Last Name :- " +lname.value); 

    var Male = document.getElementById("Male");
    var Female = document.getElementById("Female");

    if(document.getElementById('Male').checked == true)
       {

           console.log("Gender :- " +Male.id); 
        }else if(document.getElementById('Female').checked == true)
          {

               console.log("Gender :- " +Female.id); 
           }else
           {
              console.log("Gender :- not selected ");
           }
   

    var mobile = document.getElementById("mobile");
    console.log("Contact Number :- " +mobile.value); 

    var email = document.getElementById("email");
    console.log("Email Id :- " +email.value); 

    var address = document.getElementById("address");
    console.log("Address :- " +address.value); 
   
}

$(document).ready(function() {
    $(document).on('submit', '#my-form', function() {
      // do your things
      return false;
     });
});











