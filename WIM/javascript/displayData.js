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

function fetchData() {
    surveyformDB.on('value', (snapshot) => {
        const data = snapshot.val();
        const tbody = document.querySelector('#dataTable tbody');
        tbody.innerHTML = ''; // Clear previous data

        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                const entry = data[key];
                const row = document.createElement('tr');

                row.innerHTML = `
                    <td>${entry.name}</td>
                    <td>${entry.emailID}</td>
                    <td>${entry.age}</td>
                    <td>${entry.occupation}</td>
                    <td>${entry.recommend}</td>
                    <td>${entry.likeAboutUs.join(', ')}</td>
                    <td>${entry.comments}</td>
                `;
                tbody.appendChild(row);
            }
        }
    });
}

fetchData();