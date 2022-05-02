/*
v0.0:   Mini-project that lets you make chat screens (kinda).
        Authentication features and more on the way.
*/

// FROM YOU => REPLY.
// FROM CUSTOMER => MESSAGE.

//Document Objects
//TO INSERT
const middle = document.querySelector('.middle');

//TO INPUT
const msgSender = document.querySelector('.msgSender');
const userMsg = document.querySelector('.userMsg');
const inputForm = document.querySelector('.inputForm');
const txtArea = document.querySelector('textarea');
const formBtn = document.querySelector('.confirmBtn');

//Other Objects

//PROFILE PICTURES
let profilePics = {
    msg : 'man',
    reply : 'woman'
}

//Preventing default refresh
inputForm.addEventListener('submit', e=>{
    e.preventDefault();
})

//Sender selection
msgSender.addEventListener('mouseup', e =>{
    if(msgSender.value === 'msg'){
        txtArea.style.backgroundColor = 'var(--replyColor)';
    }
    else{
        txtArea.style.backgroundColor = 'var(--msgColor)';
    }
})
//Form Event
formBtn.addEventListener('mouseup', e=> {
    putMsg(msgSender.value, userMsg.value);
})

//Appends the message into the 'middle' section.
const putMsg = (sender, message) => {
    console.log(sender);
    //Because HTML elements follow the order of their line.
    if(sender === 'reply'){
        middle.innerHTML +=
        `<div class="${sender}">
            <p>${message}</p>
            <img src="icons/${profilePics.reply}.png" class="${sender}Pic profilePic" />
        </div>`;
    }
    else{
        middle.innerHTML +=
        `<div class="${sender}">    
          <img src="icons/${profilePics.msg}.png" class="${sender}Pic profilePic" />
          <p>${message}</p>
        </div>`;
    }
    inputForm.reset();
}


