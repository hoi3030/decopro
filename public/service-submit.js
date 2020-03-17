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
    checkbox=[]

    if (document.getElementById('c1').checked) {
        
        checkbox.push("c1")
        console.log(checkbox)
    } else {
        
    }
    if (document.getElementById('c2').checked) {
       
        checkbox.push("c2")
        console.log(checkbox)
    } else {
       
    }
    if (document.getElementById('c3').checked) {
        
        checkbox.push("c3")
        console.log(checkbox)
    } else {
        
    }
    if (document.getElementById('c4').checked) {
       
        checkbox.push("c4")
        console.log(checkbox)
    } else {
        
    }
    if (document.getElementById('c5').checked) {
        
        checkbox.push("c5")
        console.log(checkbox)
    } else {
        
    }
    checkbox = checkbox.toString()
    if (type == "none") {
        alert("88")
        return false
    }
    console.log(type)
    phone = document.getElementById("phone3").value;
    if (phone == "") {
        alert("no phone")
        return false
    }
    message = document.getElementById("message").value;
    message ="("+type+")"+message;
    if (message == "") {
        
        return false
    }
    console.log(message)
    var rangeSlider = document.getElementById("rs-bullet").textContent;
    if (rangeSlider == "拉動以選擇預算") {
        
        return false
    }
    var rangeSlider1 = document.getElementById("rs-bullet1").textContent;
    if (rangeSlider1 == "拉動以選擇開工時間") {
        
        return false
    }
    console.log(rangeSlider)
    console.log(rangeSlider1)
    contact = document.getElementById("contact").value;
    if (contact == "") {
        alert("no c")
        return false
    }
    
   
   
    region = document.getElementById("region").value;
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
    discount = document.getElementById("discount").value;
    if (discount== "") {
        alert("no d")
        return false
    }
    console.log(discount)
    time1 = document.getElementById("timeselect").value;
    if (time1== "") {
        alert("no t1")
        return false
    }
    console.log(time1)
    time2 = document.getElementById("timeselect2").value;
    if (time2== "") {
        alert("no t2")
        return false
    }
    console.log(time2)
    var code=makeid(6);
    var unix = new Date().getTime();
    var messageRef = firebase.database().ref('leads');
    var newMessageRef = messageRef.child(phone);
    newMessageRef.set({
     
     name: contact,
     phone: phone,
     region: region,
     estate:address,
     budget:rangeSlider,
     estimatemonth:rangeSlider1,
     code:code,
     email:email,
     contacttime:time1+time2,
     timestamp:unix,
     opinion:message,
     Source:"Web",
     items:checkbox
     
 
     
     
 });

});


function saveMessage(){
  }