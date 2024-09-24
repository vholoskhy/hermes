import Logo from "../../assets/image-72-1024x576.png";

const Navbar = () => {
  return (
    <div className="shadow-md bg-white dark:bg-yellow-900 dark:text-white duration-200 relative z-40">
      {/* upper Navbar */}
      <div className="bg-purple-400 py-2">
        <div className="container flex justify-between items-center">
          <div className="p-2">
            <a
              href="#"
              className="font-bold text-2xl sm:text-3xl flex gap-2 flex justify-center items-center"
            >
              <img
                src={Logo}
                alt="logo"
                className="w-100 uppercase h-20 rounded-md"
              />
              VholkhyShops
            </a>
          </div>
          <div>
            <div className="group">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-blue-900 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary "
              />
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
