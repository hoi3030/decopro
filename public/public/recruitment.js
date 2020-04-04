function makeid(length){
    var result = '';
    var characters   = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var charactersLength = characters.length;
    for ( var i = 0 ; i < length; i++ ){
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}


//Reference message collection




$(".more3").click(function () {
   
   
    
    
    
   alert("ok")
  
    
    phone = document.getElementById("phone3").value;
    if (phone == "") {
        alert("no phone")
        return false
    }
    message = document.getElementById("message").value;
   
    if (message == "") {
        
        return false
    }
   
    contact = document.getElementById("contact").value;
    if (contact == "") {
        alert("no c")
        return false
    }
    
   
   
    region = document.getElementById("specialist").value;
    if (region== "") {
        alert("no r")
        return false
    }
    console.log(region)
    address = document.getElementById("address").value;
    if (address== "") {
        alert("no a")
        return false
    }
    console.log(address)
    email = document.getElementById("email").value;
    if (email== "") {
        alert("no e")
        return false
    }
    console.log(email)
    
  
    name = document.getElementById("name").value;
    if (name == "") {
        alert("no e")
        return false
    }
    console.log(name )
    location1 = document.getElementById("location1").value;
    if (location1 == "") {
        
    }
    console.log(location1)
    
   
    
    var code=makeid(6);
    var unix = new Date().getTime();
   
    var messageRef = firebase.database().ref('recruitment');
    var newMessageRef = messageRef.child(code);
    newMessageRef.set({
     name: contact,
     phone: phone,
     specialist: region,
     year:address,
     experience:email, 
     companyname:name,
     location:location1,
     code:code,
     timestamp:unix,
     information:message,
     Source:"Web",
     
     
 
     
     
 });

});
