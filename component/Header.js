import { Link } from "react-router-dom";
const Title = () => {
  return (
    <div className="title">
      <a href="/">
        <img
          alt="logo"
          className="logo"
          src="https://play-lh.googleusercontent.com/9Selca8QGhyn_1BUMJLNNnvVUQkrOJPALI4hEk8ys5DuotLDXDt4ayLBbSjsFzonNoUp=w240-h480-rw"
        ></img>
      </a>
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div>
        <nav className="nav-items">
          <ul>
            <Link to={"/"}>
              <li key={1}>Home</li>
            </Link>
            <Link to={"/about"}>
              <li key={2}>About</li>
            </Link>
            <Link to={"/contact"}>
              <li key={3}>Contact</li>
            </Link>
            <li key={4}>Cart</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
