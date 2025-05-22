// Firebase konfiguration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
};

// Initialiser Firebase
firebase.initializeApp(firebaseConfig);

// Login funktion
function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      document.getElementById('login-form').style.display = 'none';
      document.getElementById('editor-container').style.display = 'block';
      initEditor();
    })
    .catch(error => {
      console.error('Login fejl:', error);
    });
}

// Opret bruger funktion
function signup() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
      alert('Bruger oprettet!');
    })
    .catch(error => {
      console.error('Opret bruger fejl:', error);
    });
}

// Initialiser kodeeditor
function initEditor() {
  require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.30.1/min/vs' }});
  
  require(['vs/editor/editor.main'], function() {
    const editor = monaco.editor.create(document.getElementById('editor'), {
      value: '// Skriv din kode her\nfunction solution() {\n  // Din løsning\n}',
      language: 'javascript',
      theme: 'vs-dark',
      automaticLayout: true
    });
  });
}

// Indsend løsning
function submitSolution() {
  alert('Løsning indsendt!');
  // Her vil vi senere tilføje logik til at gemme løsningen
}

// Vis login form ved load
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('login-form').style.display = 'block';
});
