import { Link } from "react-router-dom";
import abecodes from "../images/abecodes.png";

function NotFound() {
  return (
    <main className="not-found">
      <div>
        <img src={abecodes} className="logo" alt="Abe codes logo" />
        <h1 className="title">Oops!</h1>
        <p className="subtitle on-hover">Something went wrong. Sorry about.</p>
        <Link to="/abecodes">Back to Homepage</Link>
      </div>
    </main>
  );
}

export default NotFound;
