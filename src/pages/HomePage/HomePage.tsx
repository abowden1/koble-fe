import LoginButton from "../../components/Utils/LoginButton.tsx";
import SignUpButton from "../../components/Utils/SignUpButton.tsx";

function HomePage() {
  return (
    <>
      <div className="container-fluid">
        <h1>Welcome to Koble!</h1>
        <div className="card-body">
          <LoginButton key="login" />
          <SignUpButton key="signup" />
        </div>
      </div>
    </>
  );
}

export default HomePage;
