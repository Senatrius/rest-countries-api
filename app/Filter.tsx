"use client";

import { useState } from "react";

export const Filter = ({filter, setFilter}: {filter: string, setFilter: React.Dispatch<React.SetStateAction<string>>}) => {
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

  const handleFilterSelect = (e:React.MouseEvent<HTMLLIElement>) => {
    setFilter((e.target as HTMLLIElement).innerText);
    setIsFilterOpen(false);
  }

  return <div className="relative md:ml-4 flex-shrink self-start text-[0.875rem]">
      <button type="button" onClick={() => setIsFilterOpen(!isFilterOpen)} className="rounded py-5 px-7 shadow-component bg-white text-lightText dark:bg-darkElement dark:text-white focus:outline-none hover:shadow-lg transition-shadow flex items-center justify-between whitespace-nowrap">
      {filter === "" ? "Filter by Region" : filter}
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className={`w-5 h-5 ml-12 stroke-lightText dark:stroke-white ${isFilterOpen && "rotate-180"} transition-transform`}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
    </button>
    {isFilterOpen && <div className="z-10 right-0 left-0 absolute py-3 mt-1 rounded shadow-component bg-white dark:bg-darkElement">
      <ul>
        <li onClick={handleFilterSelect} className="py-1.5 px-7 w-full cursor-pointer hover:backdrop-brightness-90 dark:hover:backdrop-brightness-125">Africa</li>
        <li onClick={handleFilterSelect} className="py-1.5 px-7 w-full cursor-pointer hover:backdrop-brightness-90 dark:hover:backdrop-brightness-125">America</li>
        <li onClick={handleFilterSelect} className="py-1.5 px-7 w-full cursor-pointer hover:backdrop-brightness-90 dark:hover:backdrop-brightness-125">Asia</li>
        <li onClick={handleFilterSelect} className="py-1.5 px-7 w-full cursor-pointer hover:backdrop-brightness-90 dark:hover:backdrop-brightness-125">Europe</li>
        <li onClick={handleFilterSelect} className="py-1.5 px-7 w-full cursor-pointer hover:backdrop-brightness-90 dark:hover:backdrop-brightness-125">Oceania</li>
      </ul>
    </div>
    }
  </div>
}