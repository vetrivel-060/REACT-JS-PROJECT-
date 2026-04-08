import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">

      <h1>Conference Registration Platform</h1>

      <p>
        This platform allows participants to register for conferences online
        and manage their participation details easily.
      </p>

      <h3>Event Details</h3>

      <p>Date: March 20, 2026</p>
      <p>Venue: College Auditorium</p>

      <Link to="/register">
        <button className="btn">Register Now</button>
      </Link>

    </div>
  );
}

export default Home;