"use client";

import { useEffect, useState } from "react";
import { Controls } from "../components/Controls";
import { ShowButton } from "../components/ShowButton";
import { Countries } from "./Countries";
import { Filter } from "./Filter";
import { Search } from "./Search";

export interface ICountry {
  flags: {
    png: string,
    svg: string
  },
  name: {
    common: string,
    official: string,
    nativeName: {
      eng?: {
        official?: string,
        common?: string
      }
    }
  },
  capital: string[],
  altSpellings: string[],
  population: string,
  region: string
}

export default function Index() {
  const [query, setQuery] = useState<string>("");
  const [filter, setFilter] = useState<string>("All");
  const [countryData, setCountryData] = useState<ICountry[]>([])
  const [countrySet, setCountrySet] = useState<number>(1)

  useEffect(() => {
    (async () => {
      const data = await fetch("https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags");
      const response = await data.json();
      setCountryData(response)
    })()
  }, [])

  const sortedData = countryData.sort((a, b) => {
    return a.name.common.toLowerCase().localeCompare(b.name.common.toLowerCase())
  });

  const dataByRegion = filter !== "All" ? sortedData.filter(data => data.region === filter) : sortedData;
  const dataBySearch = query !== "" ? dataByRegion.filter(data => data.name.common.toLowerCase().includes(query.toLowerCase())) : dataByRegion;

  return <>
    <Controls>
      <Search value={query} setQuery={setQuery}/>
      <Filter filter={filter} setFilter={setFilter}/>
    </Controls>
    <Countries countrySet={countrySet} countryData={dataBySearch} />
    <div className="flex gap-4 maxWidthWrapper mb-12">
      {
        (countrySet * 8 < countryData.length) && <ShowButton onClick={() => setCountrySet(countrySet + 1)} value="Show More"/>
      }
      {
        (countrySet > 1) && <ShowButton onClick={() => setCountrySet(countrySet - 1)} value="Show Less"/>
      }
    </div>
  </>
}