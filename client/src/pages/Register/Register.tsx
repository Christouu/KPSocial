import "./Register.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Hello world</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
            rem praesentium necessitatibus laudantium cumque asperiores
            recusandae, ipsum iusto reprehenderit deserunt eaque magni dolor
            rerum. Velit, sequi pariatur similique reprehenderit vero veniam,
            nesciunt impedit maxime dolorem nam atque laboriosam commodi enim
            odit quis animi adipisci id laudantium voluptates recusandae odio.
          </p>
          <span>Have an account ?</span>
          <button>Login</button>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Name" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;