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
import { Cart, Chat, Notification, UserProfile } from ".";

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
  const { activeMenu, setActiveMenu } = useStateContext();

  return (
    <>
      <div className="flex justify-between p-2 md:mx-6 relative ">
        <NavButton
          title="Menu"
          customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
          color="blue"
          icon={<AiOutlineMenu />}
        />

        <div className="flex">
          <NavButton
            title="Cart"
            customFunc={() => handleClick("cart")}
            color="blue"
            icon={<FiShoppingCart />}
          />
          <NavButton
            title="Chat"
            customFunc={() => handleClick("chat")}
            dotColor="#03C9D7"
            color="blue"
            icon={<BsChatLeft />}
          />
          <NavButton
            title="Notifications"
            customFunc={() => handleClick("notifications")}
            // dotColor="#03C9D7"
            color="blue"
            icon={<RiNotification3Line />}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
