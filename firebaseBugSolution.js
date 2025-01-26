import { onAuthStateChanged, auth } from './firebaseConfig'; //Import firebase config

const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in
    console.log('User signed in:', user.uid);
  } else {
    // User is signed out
    console.log('User signed out');
  }
});

// Clean up listener when component unmounts or is no longer needed. (Lifecycle Method)
// Example of use in a React component:

useEffect(() => {
  return () => {
    unsubscribe();
  };
}, []);

//If not using React, unsubscribe when its no longer needed
//For Example 
//function cleanupListener() {
//  unsubscribe();
//} 
//cleanupListener()