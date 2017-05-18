 

 
 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA_UwnK15GF9F317cX_1NCCdLr1BvAIvSM",
    authDomain: "blog-b77f8.firebaseapp.com",
    databaseURL: "https://blog-b77f8.firebaseio.com",
    projectId: "blog-b77f8",
    storageBucket: "blog-b77f8.appspot.com",
    messagingSenderId: "724051638897"
  };
  firebase.initializeApp(config);
  
  //var title = document.getElementById("title").value;
  //var content = document.getElementById("content").value;
  //var dbRef = firebase.database().ref().child('blogposts');
 // var dbRef2 = firebase.database().ref().child('content');
  //dbRef.on('value', snap => title.innerText = snap.val());
  //dbRef2.on('value', snap => content.innerText = snap.val());
  var submitBtn = document.getElementById("submit");
 // var file= document.getElementById("file").value;
 if (submitBtn)
 {submitBtn.addEventListener("click", function(){submitBlogPost()});
 }
 
 
 
 //new submit function
 function submitBlogPost(){
  
   var title = document.getElementById("title");
  var content = document.getElementById("content");
  var file= document.getElementById("file");
  
  console.log(title.value + "LOL" + content.value + file.value + Date.now());
  var blogPost = {
   title: title.value,
   content: content.value,
   file: file.value,
   date: Date.now()
  };
  // return a key for individual post
  var newBlogKey = firebase.database().ref().child('blogposts').push().key;
  // place in array in case multiple users/ new functionality are added in the future.
  var updates = {};
  updates['blogposts/' + newBlogKey] = blogPost;
  //return updates to database
  return firebase.database().ref().update(updates);
 }
 


