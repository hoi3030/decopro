

var Ref = firebase.database().ref().child("Blog").orderByChild("timestamp");

function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
  return time;
}

  
  Ref.on("child_added", snap => {




      timestamp = snap.child("timestamp").val() / 1
      date= timeConverter(timestamp)
      console.log(timestamp)
      urlx= snap.child("image").val()
      title= snap.child("title").val()
      console.log(title)
      content= snap.child("content").val()
      type= "#"+snap.child("type").val()
      console.log(content)


      img = "<img class='articleimg' src='https://www.google.com/images/srpr/logo4w.png' >"

      $("#blogcontent").prepend("<tr><td>"+img+"</td><td>"+type+"<br>"+title+"</td><td>"+date+"</td></tr>")


  })