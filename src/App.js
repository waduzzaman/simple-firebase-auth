
import './App.css';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import app from './firebase/firebase.init';
import { useState } from 'react';

const auth = getAuth( app );

function App ()
{

  const [ user, setUser ] = useState( {} )

  const googleProvider = new GoogleAuthProvider();
  const githubProvider= new GithubAuthProvider();

  const handleGoogleSignIn = () =>
  {
    signInWithPopup( auth, googleProvider )
      .then( result =>
      {

        const user = result.user;
        setUser( user );
        console.log( user );


      } )
      .catch( error =>
      {
        console.error( 'error', error );
      } )

  }

  const handleSignOut = () =>
  {
    signOut( auth )
      .then( () =>
      {
        setUser( {} );
      } )

      .catch( () =>
      {

        setUser( {} );
      } )

  }

  const handleGithubSignIn=()=>{
    signInWithPopup(auth, githubProvider)
    .then(result=>{
      const user=result.user;
      setUser( user );
      console.log( user );

    })
    .catch(error=>{
      console.error('error:', error)

    })


  }

  return (
    <div className="App">

      {/* conditional ? ture: false
      */}

      { user.uid ? 
      <button onClick={ handleSignOut }>Sign Out</button> :

      //we can use <div></div>. or we can use fragment <> </>
      <>
        <button onClick={ handleGoogleSignIn }> Google Sign In </button>
        <button onClick={ handleGithubSignIn }> Github Sign In </button>
      </>
      

      }
      { user.uid && <div>
        <h3>UserName:{ user.displayName }</h3>
        <p>Email Address: { user.email }</p>
        <img src={ user.photoURL } alt="photo" />

      </div> }

    </div>
  );
}

export default App;
