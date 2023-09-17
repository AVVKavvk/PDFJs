import React, { useState } from "react";
import Aluminai from "./assets/Aluminai.json";
import { AiFillLinkedin } from "react-icons/ai";

function Profile() {
  const [searchQuery, setSearchQuery] = useState(""); // State to store the search query

  // Function to handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter the Aluminai based on the search query
  const filteredAluminai = Aluminai.filter((temp) =>
    temp.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-tertiary min-h-[100vh] overflow-hidden px-6 ">
      <div className="max-w-[1200px] mx-auto mt-5">
        <input
          type="text"
          placeholder="Search by name"
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full px-4 py-2 mb-4 border rounded-md"
        />
      </div>
      <div className="max-w-[1200px] justify-center grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mx-auto pb-8 mt-4">
        {filteredAluminai?.map((temp) => {
          return (
            <div
              key={temp.name}
              className="border shadow-md hover:shadow-lg shadow-green-400 flex flex-col justify-center items-center mx-auto w-[280px] h-[280px] md:w-[270px] md:h-[270px] gap-3"
            >
              <div className="w-[100px] h-[100px] rounded-full border border-blue-500">
                <a href={temp.image_url} target="_blank">
                  <img
                    src={temp.image_url}
                    alt=""
                    className="w-[100px] h-[100px] rounded-full"
                  />
                </a>
              </div>
              <h1 className="font-serif text-lg">{temp.name}</h1>
              <div className="flex justify-between items-center px-2 space-x-8">
                <div className="p-1 flex justify-center items-center gap-2">
                  <a href={temp.linkedin_url} target="_blank">
                    <AiFillLinkedin size={30} />
                  </a>
                </div>
                <h1 className="font-bold text-lg border bg-blue-400 rounded-md p-1 px-2">
                  {temp.company}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Profile;
