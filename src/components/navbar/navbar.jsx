import Logo from "../../assets/image-72-1024x576.png";

const Navbar = () => {
  return (
    <div>
      {/* upper Navbar */}
      <div>
        <div>
          <div>
            <a href="#">
              <img src={Logo} alt="logo" />
            </a>
          </div>
          <div>
            <div>
              <input type="text" />
            </div>
          </div>
        </div>
      </div>
      {/* lower navbar */}
      <div></div>
    </div>
  );
};

export default Navbar;
