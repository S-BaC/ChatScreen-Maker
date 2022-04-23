// This script is for communicating with Firebase services.

// NOTE TO SELF:

/*  How to attach an event listener to a div and select its
    adjacent sibling.....? */
// const formHeader = document.querySelectorAll('.head');
// console.log(formHeader);
// formHeader.forEach(header=>{
//     header.addEventListener('click', e => {
//         console.log(e.target);
//     })
// })

//REAL CODE STARTS FROM HERE:

// Showing forms
const forms = document.querySelectorAll('.body');
const show = (formNumber) => {
    //Switching the disply on/off using ternary operators.
    forms[formNumber].style.display === 'block'?
    forms[formNumber].style.display = 'none':
    forms[formNumber].style.display = 'block';
}

// Variables to access Firebase:

// make auth and firestore references
const auth = firebase.auth();
const db = firebase.firestore();
// update firestore settings
db.settings({ timestampsInSnapshots: true });

//Document Objects To Get Input
const form1 = document.querySelector('#SIF1');
const form2 = document.querySelector('#SIF2');
const form3 = document.querySelector('#SIF3');
const welcomeMsg = document.querySelector('.logo h3');
const logoImg = document.querySelector('#logoImg');

// Welcome Section and displaying account name:
const showName = name => document.querySelector('.logo h3').textContent = `Hello ${name}`;

//Snapshot Listener, kinda, for authentication states:
auth.onAuthStateChanged((user)=>{
    if(user){
        logoImg.src = "icons/happy.png";
    }
    else{
        logoImg.src = 'icons/four-dots.png';
    }
})
//Sign in (1)
form1.addEventListener('submit', e => {
    e.preventDefault();
    const username = form1['name1'].value;
    const email = form1['email1'].value.trim();
    const password = form1['password1'].value;
    signIn(username, email, password);
    form1.reset();
})
//Sign Up (2)
form2.addEventListener('submit', e => {
    e.preventDefault();
    const username = form2['name2'].value;
    const email = form2['email2'].value.trim();
    const password = form2['password2'].value;
    signUp(username,email,password);
    form2.reset();
})
//Sign Out (3)
form3.addEventListener('submit', e => {
    e.preventDefault();
    welcomeMsg.textContent = "Welcome! Please log in.";
    auth.signOut();
})

const signIn = (username,email,password) => {
    /*  NOTE: it doesn't work if the parameters(username,etc.) are accessed here.
        Probably because these functions are compiled with variables assigned in advance.....?? */
   auth.signInWithEmailAndPassword(email,password)
        .then(()=>showName(username));
}

const signUp = (username,email,password) => {
    console.log(username,email,password);
    auth.createUserWithEmailAndPassword(email,password)
        .then(()=>showName(username));
}