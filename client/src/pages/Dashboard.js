import React from "react";
import Navbar from "../components/dashboard/Navbar";

const Dashboard = () => {
  return (
    <div class="flex flex-1 bg-gray-50">
      <Navbar />

      <div class="flex flex-col flex-1">
        <main>
          <div class="py-6">
            <div class="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
              {/* <!-- ADD YOUR CONTENT HERE --> */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
