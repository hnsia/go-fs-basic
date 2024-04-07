import React from "react";
import UserInterface from "@/components/UserInterface";

const Home = () => {
  return (
    <main className="flex flex-wrap justify-center items-start min-h-screen border-r-gray-100">
      <div className="m-4">
        <UserInterface backendName="go" />
      </div>
    </main>
  );
};

export default Home;
