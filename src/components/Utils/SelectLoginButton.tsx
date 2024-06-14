import { useOutletContext } from "react-router-dom";

interface Props {
  selectedUserId?: string;
}

function SelectLoginButton({ selectedUserId }: Props) {
  const [userId, setUserId] = useOutletContext();
  console.log(userId);
  return (
    <a
      className="btn btn-primary"
      href={`/user/${selectedUserId}/home`}
      role="button"
      onClick={() => setUserId(selectedUserId)}
    >
      Login
    </a>
  );
}

export default SelectLoginButton;
