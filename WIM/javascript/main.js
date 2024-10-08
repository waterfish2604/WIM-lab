const firebaseConfig = {
    apiKey: "AIzaSyBR8joFrUHYz5ofmCEaO7_WLR226ak_xpw",
    authDomain: "surveyform-khanakhajana.firebaseapp.com",
    databaseURL: "https://surveyform-khanakhajana-default-rtdb.firebaseio.com",
    projectId: "surveyform-khanakhajana",
    storageBucket: "surveyform-khanakhajana.appspot.com",
    messagingSenderId: "511396757047",
    appId: "1:511396757047:web:13b9176d04167e6748c9b2"
  };


firebase.initializeApp(firebaseConfig);

var surveyformDB = firebase.database().ref('serveyform');

const form = document.getElementById('survey-form');
form.addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var name = getElementVal('name');
    var emailID = getElementVal('email');
    var age = getElementVal('age');
    var occupation = getElementVal('dropdown');
    var recommend = document.querySelector('input[name="choice"]:checked').value;
    var likeAboutUs = Array.from(document.querySelectorAll('input[name="like_about_us"]:checked')).map(checkbox => checkbox.value);
    var comments = getElementVal('comments');

    //console.log(name, emailID, age, occupation, recommend, likeAboutUs, comments);

    saveData(name, emailID, age, occupation, recommend, likeAboutUs, comments);

    document.querySelector('.submission').style.display = "block";

    setTimeout(() => {
        document.querySelector('.submission').style.display = "none"
    }, 3000);

    form.reset();

}


const saveData = (name, emailID, age, occupation, recommend, likeAboutUs, comments) => {
    var newserveyform = surveyformDB.push();

    newserveyform.set({
        name: name,
        emailID: emailID,
        age: age,
        occupation: occupation,
        recommend: recommend,
        likeAboutUs: likeAboutUs,
        comments: comments
    });
}

const getElementVal = (id) => {
    return document.getElementById(id).value;
}