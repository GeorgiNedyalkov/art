import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="copy">
        <p>
          Developed by
          <a href="www.georginedyalkov.com"> Georgi Nedyalkov &copy;</a>
        </p>
        <div>
          <a href="https://github.com/GeorgiNedyalkov">
            <img
              className="social-icon"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Github-circle_%28CoreUI_Icons_v1.0.0%29.svg/2048px-Github-circle_%28CoreUI_Icons_v1.0.0%29.svg.png"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
