import {useEffect, useState} from "react";
import SelectLoginButton from "../../components/Utils/SelectLoginButton.tsx";

import axios from 'axios'
import {backendUrl} from "../../AppConfig.tsx";
import {UsersResponseMapper} from "../../components/Utils/ResponseMappers.ts";


function LoginPage() {
  const [users, setUsers] = useState([] as User[]);
  // const [error, setError] = useState(null)
  const [selectedUserIndex, setSelectedUserIndex] = useState(-1);
  // const [isLoading, setIsLoading] = useState(false);
  // TODO: don't load all users like a dummy. Use actual logins...
  const dataUrl = `${backendUrl}/users`

  useEffect(() => {
    axios.get(dataUrl)
        .then(response => setUsers(UsersResponseMapper(response.data.users)))
  }, [dataUrl])

  return (
    <>
      <div className="container-fluid">
        <h2> Select a User: </h2>
        <ul className="list-group">
          {users.map((user, index) => (
            <li key={user.id}>
              <a
                className={
                  selectedUserIndex === index
                    ? "list-group-item active"
                    : "list-group-item"
                }
                href="#"
                onClick={() => setSelectedUserIndex(index)}
              >
                {user.firstName} {user.lastName}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <SelectLoginButton
          selectedUserId={
            users[selectedUserIndex] && users[selectedUserIndex].id
          }
        />
      </div>
    </>
  );
}

export default LoginPage;
