import NavBar from "../components/NavLink";

import { useState, useEffect} from 'react';
import { useParams } from "react-router-dom";

const UserProfile = () => {
  const [user, setUser] = useState([]);
  const params = useParams();
  // console.log(params); //=> {id: 1}
  const userId = params.id;

  useEffect(() => {
    fetch(`http://localhost:4000/users/${userId}`)
    .then(resp => resp.json())
    .then(data => setUser(data))
    .catch(err => console.error(err))
  }, [userId]);

  // conditional rendering to make sure the app doesn't error out while it's waiting for the user to be fetched
  if (!user.name) {
    return <h1>Loading...</h1>
  };

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{user.name}</h1>
      </main>
    </>
  );
}

export default UserProfile;