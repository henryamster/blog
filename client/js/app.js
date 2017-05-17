 

 
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
  
  var title = document.getElementById("title");
  var content = document.getElementById("content");
  var dbRef = firebase.database().ref().child('title');
  var dbRef2 = firebase.database().ref().child('content');
  //dbRef.on('value', snap => title.innerText = snap.val());
  //dbRef2.on('value', snap => content.innerText = snap.val());
  var submitBtn = document.getElementById("submit");
  var file= document.getElementById("file");
 //submitBtn.onclick(submitBlogPost(title, content));


//old submit function 
function submitBlogPost(title, content, file){
   firebase.database().ref('blogposts/').set(
   {
    file: file,
    title: title,
    content: content,
    date: Date.now(),
   } )
 
 
 //new submit function
 

}