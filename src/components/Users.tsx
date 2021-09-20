// import React, { useState, useEffect } from "react";

// const URL = "https://jsonplaceholder.typicode.com/users";

// interface User {
//   id: number;
//   name: string;
// }

// const Users = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch(URL)
//       .then((response) => response.json())
//       .then((json) => setUsers(json))
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   return (
//     <>
//       <h1> Users List</h1>
//       {users.map((user: User) => (
//         <div key={user.id}>{user.name}</div>
//       ))}
//     </>
//   );
// };
// export default Users;

import React from "react";
import useFetch from "../hooks/useFetch";

interface User {
  id: number;
  name: string;
}

const REMOTE_URL = "https://jsonplaceholder.typicode.com/users";

const Users = () => {
  const users = useFetch(REMOTE_URL);

  return (
    <>
      <h1> Users List</h1>
      {users.map((user: User) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </>
  );
};
export default Users;
