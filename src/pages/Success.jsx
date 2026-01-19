import { Link } from "react-router-dom";
import abecodes from "../images/abecodes.png";

function Success() {
  return (
    <main className="success">
      <div>
        <img src={abecodes} className="logo" alt="Abe codes logo" />
        <h1 className="title">Your Message has been sent</h1>
        <p className="subtitle on-hover">
          Thank you for taking the time to get in touch. I will get back to you
          briefly.
        </p>
        <Link to="/">Back to Homepage</Link>
      </div>
    </main>
  );
}

export default Success;
