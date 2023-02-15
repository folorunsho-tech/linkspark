import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import AccountMenu from "./AccountMenu";
const Header = () => {
  return (
    <header className="flex justify-end w-full p-2 pr-10 border-b border-b-gray-300">
      <form
        method="post"
        id="seacch-container"
        className="bg-gray-100 py-1 px-4 flex items-center gap-3 w-96 rounded-sm"
      >
        <SearchIcon className="text-gray-600" />
        <input
          className="p-1 border-none outline-none bg-transparent w-full"
          type="search"
          placeholder="search..."
          aria-label="Search"
          name="search"
          id="search"
        />
      </form>
      <AccountMenu />
    </header>
  );
};

export default Header;
