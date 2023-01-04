import { Link } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1 data-testid="mainHeading">KP Social</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
            rem praesentium necessitatibus laudantium cumque asperiores
            recusandae, ipsum iusto reprehenderit deserunt eaque magni dolor
            rerum. Velit, sequi pariatur similique reprehenderit vero veniam,
            nesciunt impedit maxime dolorem nam atque laboriosam commodi enim
            odit quis animi adipisci id laudantium voluptates recusandae odio.
          </p>
          <span>Don't have an account?</span>
          <Link to={"/register"}>
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
