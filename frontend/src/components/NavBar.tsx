import React from "react";
import MobileScreenShareIcon from "@mui/icons-material/MobileScreenShare";
import InsightsIcon from "@mui/icons-material/Insights";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import LanguageIcon from "@mui/icons-material/Language";
import LinkIcon from "@mui/icons-material/Link";
import SettingsIcon from "@mui/icons-material/Settings";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import AddIcon from "@mui/icons-material/Add";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  const [open, setOpen] = React.useState(true);

  const menuOrientation = open ? "" : "rotate-180 ";
  return (
    <nav
      className={`p-4 pt-2 space-y-4 border-r transition-width ease-in-out duration-300 border-r-gray-300 h-screen ${
        open ? "w-42" : "w-17"
      } relative`}
    >
      <button
        onClick={() => setOpen(!open)}
        className={`${menuOrientation} z-50 absolute translate-y-10 -right-4 shadow-lg bg-gray-100 rounded-full p-1 text-center`}
      >
        <KeyboardArrowLeftIcon />
      </button>
      <section className="border-b border-b-gray-300 py-3 space-y-8">
        <div id="logo" className="text-lg">
          LS
        </div>

        <button
          className={`bg-blue-800 text-white text-base font-meduim p-2 ${
            open ? "px-6 w-max" : "px-3 w-max"
          } text-center  rounded-md shadow-lg hover:bg-indigo-700`}
        >
          {open ? <span>Create new</span> : <AddIcon />}
        </button>
      </section>
      <section id="menu" className="space-y-8 text-sm w-max">
        <NavLink
          to="dashboard"
          className={({ isActive }: any) =>
            isActive
              ? "flex items-center border-l-4 border-l-blue-800 bg-blue-100 text-indigo-900"
              : "flex items-center"
          }
        >
          <li
            className={`flex items-center ${
              open ? "w-full" : "w-max"
            }  gap-6 p-2 rounded-sm bg-transparent hover:bg-blue-100 `}
          >
            <InsightsIcon />
            {open && <span>Dashboard</span>}
          </li>
        </NavLink>
        <NavLink
          to="links"
          className={({ isActive }: any) =>
            isActive
              ? "flex items-center border-l-4 border-l-blue-800 bg-blue-100 text-indigo-900"
              : "flex items-center"
          }
        >
          <li
            className={`flex items-center ${
              open ? "w-full" : "w-max"
            } gap-6 p-2 rounded-sm bg-transparent hover:bg-blue-100 `}
          >
            <LinkIcon />
            {open && <span>Links</span>}
          </li>
        </NavLink>
        <NavLink
          to="qrcodes"
          className={({ isActive }: any) =>
            isActive
              ? "flex items-center border-l-4 border-l-blue-800 bg-blue-100 text-indigo-900"
              : "flex items-center"
          }
        >
          <li
            className={`flex items-center ${
              open ? "w-full" : "w-max"
            } gap-6 p-2 rounded-sm bg-transparent hover:bg-blue-100 `}
          >
            <QrCode2Icon />
            {open && <span>QR Codes</span>}
          </li>
        </NavLink>
        <NavLink
          to="biolink"
          className={({ isActive }: any) =>
            isActive
              ? "flex items-center border-l-4 border-l-blue-800 bg-blue-100 text-indigo-900"
              : "flex items-center"
          }
        >
          <li
            className={`flex items-center ${
              open ? "w-full" : "w-max"
            } gap-6 p-2 rounded-sm bg-transparent hover:bg-blue-100 `}
          >
            <MobileScreenShareIcon />
            {open && <span>Link-in-Bio</span>}
          </li>
        </NavLink>
        <NavLink
          to="customlinks"
          className={({ isActive }: any) =>
            isActive
              ? "flex items-center border-l-4 border-l-blue-800 bg-blue-100 text-indigo-900"
              : "flex items-center"
          }
        >
          <li
            className={`flex items-center ${
              open ? "w-full" : "w-max"
            } gap-6 p-2 rounded-sm bg-transparent hover:bg-blue-100 `}
          >
            <LanguageIcon />
            {open && <span>Custom Links</span>}
          </li>
        </NavLink>
        <NavLink
          to="settings"
          className={({ isActive }: any) =>
            isActive
              ? "flex items-center border-l-4 border-l-blue-800 bg-blue-100 text-indigo-900"
              : "flex items-center"
          }
        >
          <li
            className={`flex items-center ${
              open ? "w-full" : "w-max"
            } gap-6 p-2 rounded-sm bg-transparent hover:bg-blue-100 `}
          >
            <SettingsIcon />
            {open && <span>Settings</span>}
          </li>
        </NavLink>
      </section>
    </nav>
  );
};

export default NavBar;
