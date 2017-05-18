 

 
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
  
  
  
  //var dbRef = firebase.database().ref().child('blogposts');
  //dbRef.on('value', snap => title.innerText = snap.val());
  
  var postsRef = firebase.database().ref('blogposts/').orderByChild('date').limitToFirst(12);
 // forEach(post in postsRef)
  
postsRef.on('value', function(snapshot) {
  poster(snapshot.val())});
  
function poster(snapshot){
   console.log(snapshot);
   var art = document.getElementById("art");
   var titleNode = document.createElement("h3").className = "title";                 // Create a <li> node
var titleTextNode = document.createTextNode(snapshot.children.title);         // Create a text node
titleNode.appendChild(titleTextNode);                              // Append the text to <li>
art.appendChild(titleNode);
};

  
  
  
  var submitBtn = document.getElementById("submit");
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
 


