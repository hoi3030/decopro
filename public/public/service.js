var rangeSlider = document.getElementById("rs-range-line");
var rangeBullet = document.getElementById("rs-bullet");
var rangeSlider1 = document.getElementById("rs-range-line1");
var rangeBullet1 = document.getElementById("rs-bullet1");

rangeSlider.addEventListener("input", showSliderValue, false);
rangeSlider1.addEventListener("input", showSliderValue2, false);


function showSliderValue() {
    if(rangeSlider.value==0){ rangeV = "拉動以選擇預算"}
    if(rangeSlider.value==1){ rangeV = "0 - 50,000"}
    if(rangeSlider.value==2){ rangeV = "50,000 - 100,000"}
    if(rangeSlider.value==3){ rangeV = "100,000 - 150,000"}
    if(rangeSlider.value==4){ rangeV = "150,000 - 200,000"}
    if(rangeSlider.value==5){ rangeV = "200,000 - 250,000"}
    if(rangeSlider.value==6){ rangeV = "250,000 - 300,000"}
    if(rangeSlider.value==7){ rangeV = "300,000 - 350,000"}
    if(rangeSlider.value==8){ rangeV = "350,000 - 400,000"}
    if(rangeSlider.value==9){ rangeV = "450,000 - 500,000"}
    if(rangeSlider.value==10){ rangeV = "500,000 - 600,000"}
    if(rangeSlider.value==11){ rangeV = "600,000 - 700,000"}
    if(rangeSlider.value==12){ rangeV = "700,000 - 800,000"}
    if(rangeSlider.value==13){ rangeV = "800,000 - 900,000"}
    if(rangeSlider.value==14){ rangeV = "900,000 - 1,000,000"}
    if(rangeSlider.value==15){ rangeV = "1,000,000+"}
    
  rangeBullet.innerHTML = "預算："+rangeV;
 
}

function showSliderValue2() {
    if(rangeSlider1.value==0){ rangeT = "拉動以選擇開工時間"}
    if(rangeSlider1.value==1){ rangeT = "一月"}
    if(rangeSlider1.value==2){ rangeT = "二月"}
    if(rangeSlider1.value==3){ rangeT = "三月"}
    if(rangeSlider1.value==4){ rangeT = "四月"}
    if(rangeSlider1.value==5){ rangeT = "五月"}
    if(rangeSlider1.value==6){ rangeT = "六月"}
    if(rangeSlider1.value==7){ rangeT = "七月"}
    if(rangeSlider1.value==8){ rangeT = "八月"}
    if(rangeSlider1.value==9){ rangeT = "九月"}
    if(rangeSlider1.value==10){ rangeT = "十月"}
    if(rangeSlider1.value==11){ rangeT = "十一月"}
    if(rangeSlider1.value==12){ rangeT = "十二月"}
    
    
  rangeBullet1.innerHTML = "預計開工時間："+rangeT;
 
}
var type = "家居裝修"
$("#t1").click(function(){
    $("#t2").css("background","#fff").css("letter-spacing","0px").css("-webkit-box-shadow","none").css("border","2px solid black")
    $("#t2").css("color","#222")
    $("#t3").css("background","#fff").css("letter-spacing","0px").css("-webkit-box-shadow","none").css("border","2px solid black")
    $("#t3").css("color","#222")
    $("#t1").css("background","#990000").css("letter-spacing","3px").css("-webkit-box-shadow","0px 5px 40px -10px rgba(0, 0, 0, 0.57)").css("border","none") 
    $("#t1").css("color","#fff")  
    type = "家居裝修"
    console.log(type)
});
$("#t2").click(function(){
    $("#t1").css("background","#fff").css("letter-spacing","0px").css("-webkit-box-shadow","none").css("border","2px solid black")
    $("#t1").css("color","#222")
    $("#t3").css("background","#fff").css("letter-spacing","0px").css("-webkit-box-shadow","none").css("border","2px solid black") 
    $("#t3").css("color","#222")
    $("#t2").css("background","#007a99").css("letter-spacing","3px").css("-webkit-box-shadow","0px 5px 40px -10px rgba(0, 0, 0, 0.57)").css("border","none") 
    $("#t2").css("color","#fff")    
    type = "室內設計"
    console.log(type)
});
$("#t3").click(function(){
    $("#t2").css("background","#fff").css("letter-spacing","0px").css("-webkit-box-shadow","none").css("border","2px solid black")
    $("#t2").css("color","#222")
    $("#t1").css("background","#fff").css("letter-spacing","0px").css("-webkit-box-shadow","none").css("border","2px solid black")
    $("#t1").css("color","#222")
    $("#t3").css("background","#cc6600") 
    $("#t3").css("color","#fff").css("letter-spacing","3px").css("-webkit-box-shadow","0px 5px 40px -10px rgba(0, 0, 0, 0.57)").css("border","none")
    type = "商業裝修"
    console.log(type)    
});

$("#region").focus(function(){
    $('#region').css("text-indent","45%")
});


    //function to save file
    function uploadFile(){
      
        // Created a Storage Reference with root dir
        var storageRef = firebase.storage().ref();
        // Get the file from DOM
        var file = document.getElementById("files").files[0];
        console.log(file);
        
        //dynamically set reference to the file name
        var uploadTask = storageRef.child(file.name).put(file);
        uploadTask.on('state_changed', function(snapshot){
            // Observe state change events such as progress, pause, and resume
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
              case firebase.storage.TaskState.PAUSED: // or 'paused'
                console.log('Upload is paused');
                break;
              case firebase.storage.TaskState.RUNNING: // or 'running'
                console.log('Upload is running');
                break;
            }
          }, function(error) {
            // Handle unsuccessful uploads
          }, function() {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
              console.log('File available at', downloadURL);
              downloadURL = downloadURL.toString();
              localStorage.setItem("ddl",downloadURL)
              ddk = localStorage.getItem("ddl")
              console.log(ddk)
            });
          });
          
        
        
      }

      



