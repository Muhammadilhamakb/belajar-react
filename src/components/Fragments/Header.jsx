import { useContext } from "react";
import Input from "../Elements/LabeledInput/Input";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { ThemeContext } from "../../context/themeContext";
import { AuthContext } from "../../context/authContext";
import { Icon } from "../Elements/Icon";
import { DarkModeContext } from '../../context/darkModeContext';


const Header = () => {
  const { theme } = useContext(ThemeContext);
  const { name } = useContext(AuthContext);
  
  const date = new Date().toDateString().slice(4);
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header className={`border-b-2 py-4 px-6 flex items-center justify-between ${theme.name} ${darkMode ? 'bg-defaultBlack' : 'bg-special-mainBg'} ${darkMode ? 'text-white' : 'text-gray-900'}`}>
      <div className="flex">
        <div className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>{name}</div>
        <div className="ms-6 text-gray-03">{date}</div>
        <div className="flex justify-center items-center ms-6">
          <span className="cursor-pointer" onClick={handleDarkModeToggle}>
            <Icon.DarkMode />
          </span>
        </div>
      </div>
      <div className="flex">
        <div className="self-center">
          <NotificationsIcon className="text-primary scale-110" />
        </div>
        <div className="ms-10 hidden sm:block">
          <Input variant="bg-white w-80" />
        </div>
      </div>
    </header>
  );
};

export default Header;
