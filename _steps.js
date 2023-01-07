/*
-----------------
INITIAL SETUP: 
------------------
1. visit: console.firebase.com
2. Create a new firebase project
3. Visit{ Go to docs)>  Build> Authentication> Web> Get Started

4.  Install the Firebase JS SDK and initialize Firebase.>Create Firebase Project (DONE)> 
5. Register your app >Web icon (plat_web): give a name: project similar name > Register App>
6. Install firebase in the project running:  npm install firebase
7. DANGEROUS: Get firebase config and put it in firebase.init.js
8. export app from firebase.init.js > export default app;
9. Create an app: 
10. Create auth using getAuth from firebase by using app from firebase.init.js

-----------------------
SETUP PROVIDER
-----------------------
11. create a google auth provider in app.js : before function(app()

// const auth = getAuth(app). here import app from firebase init

12. Go to https://console.firebase.google.com/u/0/project/simple-firebase-auth-36447/authentication and get started which authentication you want to use . first sign in method select Enable it . use project support email
13. Enable google signin method and providing your gmail address. . 
14. Create an onClick Button 
15. create a method. 
16. import signInWithPopUP import in the method, give two parameter. auth, provider. it will give promise 
16. after signInWithPopup .then result ,error 

----------------------
DISPLAY USER DATA
----------------------

------------------------
ADD A NEW SIGN IN METHOD
------------------------
1. Enable a new sign in method with github
2. Git hub>Setting>DeveloperSetting> NewGitHubApp>Name the app>
3. Homepage URL provide
4. Callback url from firebase 
5. uncheck active button
6. When your app will be ready you have to get Client Id and have to Generate a new client secret 




*/ 