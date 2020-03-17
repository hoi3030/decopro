

var Ref = firebase.database().ref().child("Blog").orderByChild("timestamp");

  
  Ref.on("child_added", snap => {
      timestamp = snap.child("timestamp").val()
      console.log(timestamp)
      title= snap.child("title").val()
      console.log(title)
      content= snap.child("content").val()
      console.log(content)
      $("#blogcontent").prepend("<tr><td>"+title+"</td></tr>")


  })