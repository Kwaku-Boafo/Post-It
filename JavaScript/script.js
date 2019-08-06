// clicking the create Post button 

let postButton = document.getElementById("createPostIcon");

function postEvent(){
    let link = document.getElementById("link");
    link.href = "../HTML/post.html";
}

postButton.addEventListener("click" , postEvent);

// set database object 
const database = firebase.database().ref();

database.on("child_added",addMessage);

function addMessage(rowData){
   const row = rowData.val();
   const name = row.USERNAME;
   const msg = row.MESSAGE;
   let messageDiv = document.getElementById("posts");
   let para = document.createElement("p");
   para.className = "postIt2";
   para.innerText = `${name}: ${msg}`;
   messageDiv.appendChild(para)
}
