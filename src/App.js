import React, { createContext, useState } from 'react';
import MyRoute from './Components/MyRoute/MyRoute';
export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <MyRoute></MyRoute>
    </UserContext.Provider>
  );
}

export default App;
