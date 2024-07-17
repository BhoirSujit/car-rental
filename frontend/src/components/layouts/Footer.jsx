import "../../assets/styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="f1">
        <div className="col1">
          <div className="head">About Us</div>
          <div className="body">
            <ul>
              <li>
                <a href="about">About</a>
              </li>
              <li>
                <a href="privacy">Privacy</a>
              </li>
              <li>
                <a href="terms">Terms of use</a>
              </li>
              <li>
                <a href="admin">Admin Login</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col1">
          <div className="head">Subscribe newsletter</div>
          <div className="body">
            <input type="email" placeholder="Enter Email Address" />
            <button>Subscibe</button>
            <span>
              We send great deals and latest auto news to our subscibed users
              every week
            </span>
          </div>
        </div>
      </div>
<hr />
      <div className="bottom">
        <div className="logo">
          <span>RentCar</span>
        </div>
        <div className="tail">
          <span>Connect us with: </span>
        </div>
      </div>
    </footer>
  );
}
