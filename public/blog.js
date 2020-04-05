

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
      slicecontent = content.substring(0,70)+"…"
      type= "#"+snap.child("type").val()
      console.log(content)


      img = "<img class='articleimg' src='images/sample.jpg' >"

      $("#blogcontent").prepend("<tr><td class='imgtd'>"+img+"</td><td><a class='typea'>"+type+"</a><br>"+title+"<br><a class='sliceclass'>"+slicecontent+"</a></td><td>"+date+"</td></tr>")


  })