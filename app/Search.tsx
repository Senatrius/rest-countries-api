import { ChangeEvent } from "react";

export const Search = ({value, setQuery}: {value: string, setQuery: React.Dispatch<React.SetStateAction<string>>}) => {
  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    setQuery(e.currentTarget.value);
  }
  
  return <label className="relative block flex-grow">
    <span className="sr-only">Search for a country</span>
    <span className="absolute left-9 top-5">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 stroke-grey dark:stroke-white"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
    </span>
    <input type="text" placeholder="Search for a country..." value={value} onChange={handleChange} className="w-full md:max-w-[30rem] flex basis-full rounded shadow-component text-[0.875rem] placeholder:text-grey pl-24 py-5 pr-4 dark:placeholder:text-white dark:bg-darkElement focus:outline-none focus:shadow-lg transition-shadow" />
  </label>
}