import Navbar from "../Fragments/Navbar";
import Header from "../Fragments/Header";
import { useContext } from "react";
import { NotifContext } from "../../context/notifContext";
import SimpleBackdrop from "../Elements/Backdrop";
import CustomizedSnackbars from "../Elements/SnackBar";
import { ThemeContext } from "../../context/themeContext";
import { useDarkMode } from '../../hooks/useDarkMode';

const MainLayout = (props) => {
  const { children } = props;
  const { theme } = useContext(ThemeContext);
  const { msg, setMsg, open, setOpen, isLoading, setIsLoading } = useContext(NotifContext);
  const { darkMode } = useDarkMode();

    return (
      <div className={`flex bg-special-mainBg w-screen min-h-screen max-w-full ${theme.name}`}>
        {/* navbar start*/}
        <Navbar/>
        {/* navbar end*/}
        <div className="w-screen">
          {isLoading && (
            <SimpleBackdrop isLoading={isLoading} setIsLoading={setIsLoading}/>
          )}
          {msg && (
            <CustomizedSnackbars
              severity={msg.severity}
              message={msg.desc}
              open={open}
              setOpen={setOpen}
            />
          )}
        {/* header start*/} 
        <Header/>
        {/* header end*/}
        {/* content start*/}
        <main className={`px-6 py-4 ${darkMode ? 'bg-defaultBlack' : 'bg-special-mainBg'}`}>{ children }</main>
        {/* content end*/}
        </div>
      </div>
    );
  };
  
  export default MainLayout;