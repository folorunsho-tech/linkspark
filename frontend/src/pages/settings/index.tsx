import React from "react";
import SettingsNav from "../../layouts/SettingsNav";
import { Outlet } from "react-router-dom";

const Settings = () => {
  return (
    <main className="flex h-full">
      <SettingsNav />
      <section className="p-6 w-3/4 overflow-y-auto h-screen">
        <Outlet />
      </section>
    </main>
  );
};

export default Settings;
