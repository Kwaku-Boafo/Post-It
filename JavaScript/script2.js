const usernameElement = document.getElementById("username");
const messageElement = document.getElementById("message");
const button = document.getElementById("submitButton");
button.addEventListener("click", updateDB);

//Set database object here |firebase.database().ref|

const database =  firebase.database().ref();
/**
 * Updates the database with the username and message.
 */
function updateDB(event){
    let link2 = document.getElementById("link2");
    link2.href = "index.html";
    const username        = usernameElement.value;
    const message         = messageElement.value;

    usernameElement.value = "";
    messageElement.value  = "";

    console.log(username + " : " + message);

    //Update database here
    if(username != "" || message != ""){
    const data = {
        USERNAME: username,
        MESSAGE: message
    }
    database.push(data);
    }
    
}

// let subButton = document.getElementById("submitButton");

// function subEvent(){
    
//     let link2 = document.getElementById("link2");
//     link2.href = "index.html";
// }

// subButton.addEventListener("click" , subEvent);