import React from "react";
import LogoutButton from "../Utils/LogoutButton.tsx";
import AgentNavImage from "../agents/AgentNavImage.tsx";



interface Props {
  userId: string;
  setUserId: React.Dispatch<React.SetStateAction<string>>;
}

function Navbar({ userId, setUserId }: Props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
          <div className="container-fluid">
              <a className="navbar-brand" href="/">
                  <i className="bi bi-bezier2 koble-blue h3"> Koble</i>
              </a>
              <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
              >
                  <span className="navbar-toggler-icon"></span>
              </button>
          </div>
          <div className="px-2">
              <LogoutButton userId={userId} setUserId={setUserId} />
          </div>
      </nav>
    </>
  );
}

export default Navbar;
