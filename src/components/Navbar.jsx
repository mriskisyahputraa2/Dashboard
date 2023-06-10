import { useEffect } from "react";

// icons
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

// image
import avatar from "../data/avatar.jpg";

// components
import { Cart, Chat, UserProfile } from ".";
import Notification from "../components/Notification";

// contex
import { useStateContext } from "../contexts/ContextProvider";

// function NAvButton
const NavButton = ({ title, customFunc, icon, color, dotColor }) => {
  return (
    <TooltipComponent content={title} position="BottomCenter">
      <button
        type="button"
        onClick={customFunc}
        style={{ color }}
        className="relative text-xl rounded-full p-3 hover:bg-light-gray">
        <span
          style={{ background: dotColor }}
          className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2">
          {icon}
        </span>
      </button>
    </TooltipComponent>
  );
};

const Navbar = () => {
  // use Context
  const {
    activeMenu,
    setActiveMenu,
    isClicked,
    setIsClicked,
    handleClick,
    screenSize,
    setScreenSize,
  } = useStateContext();

  //
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    //
    window.addEventListener("resize", handleResize);

    //
    handleResize();

    //
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //
  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <>
      <div className="flex justify-between p-2 md:mx-6 relative">
        <NavButton
          title="Menu"
          customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
          color="blue"
          icon={<AiOutlineMenu />}
        />

        <div className="flex">
          <NavButton
            title="Cart"
            color="blue"
            icon={<FiShoppingCart />}
            customFunc={() => handleClick("cart")}
          />
          <NavButton
            title="Chat"
            dotColor="#03C9D7"
            color="blue"
            customFunc={() => handleClick("chat")}
            icon={<BsChatLeft />}
          />
          <NavButton
            title="Notification"
            color="blue"
            customFunc={() => handleClick("notification")}
            icon={<RiNotification3Line />}
          />
          <TooltipComponent content="Profile" position="BottomCenter">
            <div
              onClick={() => handleClick("userProfile")}
              className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg">
              <img
                className="rounded-full w-8 h-8 object-cover"
                src={avatar}
                alt="/profile"
              />
              <p>
                <span className="text-gray-400 text-14">Hi, </span>{" "}
                <span className="text-gray-400 font-bold text-14">Michael</span>
              </p>
              <MdKeyboardArrowDown className="text-gray-400 text-14" />
            </div>
          </TooltipComponent>

          {/* conditional */}
          {isClicked.cart && <Cart />}
          {isClicked.chat && <Chat />}
          {isClicked.notification && <Notification />}
          {isClicked.userProfile && <UserProfile />}
        </div>
      </div>
    </>
  );
};

export default Navbar;
