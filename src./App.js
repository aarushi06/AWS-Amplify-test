import logo from './logo.svg';
import './App.css';
import { Amplify, Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator, Authenticator } from '@aws-amplify/ui-react';
Amplify.configure(awsconfig); 

function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div className="App">
          <p>
            Hey {user.username}, welcome to my channel, with auth!
          </p>
          <button onClick={signOut}>Sign out</button>
        </div>
      )}
    </Authenticator>
  );
}
 

export default withAuthenticator(App);


// import React from 'react';
// import './App.css';

// import { Authenticator } from '@aws-amplify/ui-react';
// import '@aws-amplify/ui-react/styles.css';
// // import import awsconfig from './aws-exports';

// // Authenticator.configure(awsconfig);


// function App() {
//   return (
//     <Authenticator>
//       {({ signOut, user }) => (
//         <div className="App">
//           <p>
//             Hey {user.username}, welcome to my channel, with auth!
//           </p>
//           <button onClick={signOut}>Sign out</button>
//         </div>
//       )}
//     </Authenticator>
//   );
// }

// export default App;