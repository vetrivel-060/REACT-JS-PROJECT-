import { Link } from "react-router-dom";

function Success() {
  return (
    <div className="container">

      <h1>Registration Successful</h1>

      <p>
        Thank you for registering for the conference.
      </p>

      <p>
        You will receive a confirmation email soon.
      </p>

      <Link to="/">
        <button className="btn">Go Home</button>
      </Link>

    </div>
  );
}

export default Success;