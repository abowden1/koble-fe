import React from "react";

interface Props {
  userId: string;
  setUserId: React.Dispatch<React.SetStateAction<string>>;
}
function LogoutButton({ userId, setUserId }: Props) {
  return (
    <a
      className="btn btn-outline-primary"
      href={`/`}
      role="button"
      onClick={() => setUserId("")}
    >
      Logout
    </a>
  );
}

export default LogoutButton;
