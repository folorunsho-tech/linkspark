import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { NavLink } from "react-router-dom";
const SettingsNav = () => {
  return (
    <nav className="flex flex-col p-5 gap-6 w-1/4 h-full border-r border-r-gray-300">
      <div aria-label="Your settings Nav" className="">
        <h2 className="font-semibold text-md">Your settings</h2>
        <ul className="flex flex-col gap-1 mt-3">
          <NavLink
            to="/settings/profile"
            className={({ isActive }) =>
              isActive
                ? "text-blue-700 p-2 w-full bg-blue-100 rounded-md"
                : "text-gray-700 p-2 w-full bg-trasnparent rounded-md"
            }
          >
            <li className="text-sm font-semibold">Profile</li>
          </NavLink>
          <NavLink
            to="/settings/integrations"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 p-2 w-full bg-blue-100 rounded-md"
                : "text-gray-700 p-2 w-full bg-trasnparent rounded-md"
            }
          >
            <li className="text-sm font-semibold ">Integrations</li>
          </NavLink>
        </ul>
      </div>
      <div aria-label="Account settings Nav" className="">
        <h2 className="font-semibold text-md">Account settings</h2>
        <Accordion
          sx={{
            background: "none",
            border: "none",
            boxShadow: "none",
            margin: "0",
            padding: "0",
          }}
        >
          <AccordionSummary
            sx={{
              margin: "0",
              padding: "0",
            }}
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="account-content"
            id="account-header"
          >
            <h2 className="font-semibold text-gray-600 text-md">
              o_1shfu7o9uj
            </h2>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              margin: "0",
              padding: "0",
            }}
          >
            <ul className="flex flex-col gap-1">
              <NavLink
                to={`/settings/organization/:org_id/details`}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-700 p-2 w-full bg-blue-100 rounded-md"
                    : "text-gray-700 p-2 w-full bg-trasnparent rounded-md"
                }
              >
                <li className="text-sm font-semibold">Account Details</li>
              </NavLink>
              <NavLink
                to={`/settings/organization/:org_id/custom-domain`}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 p-2 w-full bg-blue-100 rounded-md"
                    : "text-gray-700 p-2 w-full bg-trasnparent rounded-md"
                }
              >
                <li className="text-sm font-semibold ">Custom Domains</li>
              </NavLink>
              <NavLink
                to={`/settings/organization/:org_id/groups`}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 p-2 w-full bg-blue-100 rounded-md"
                    : "text-gray-700 p-2 w-full bg-trasnparent rounded-md"
                }
              >
                <li className="text-sm font-semibold ">Groups</li>
              </NavLink>
              <NavLink
                to={`/settings/organization/:org_id/bulk-upload`}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 p-2 w-full bg-blue-100 rounded-md"
                    : "text-gray-700 p-2 w-full bg-trasnparent rounded-md"
                }
              >
                <li className="text-sm font-semibold ">CSV bulk shortening</li>
              </NavLink>
            </ul>
          </AccordionDetails>
        </Accordion>
      </div>
      <div aria-label="Your settings Nav" className="">
        <h2 className="font-semibold text-md">Developer settings</h2>
        <ul className="flex flex-col gap-1 mt-3">
          <NavLink
            to="/settings/api"
            className={({ isActive }) =>
              isActive
                ? "text-blue-700 p-2 w-full bg-blue-100 rounded-md"
                : "text-gray-700 p-2 w-full bg-trasnparent rounded-md"
            }
          >
            <li className="text-sm font-semibold">API</li>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default SettingsNav;
