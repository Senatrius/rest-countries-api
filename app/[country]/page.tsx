"use client";

import { useEffect, useState } from "react";
import { BackButton } from "./BackButton";
import { usePathname } from 'next/navigation'
import { BorderButton } from "./BorderButton";
import Image from "next/image";

interface ICurrencies {
  [key: string]: {
    name: string,
    symbol?: string
  }
}

interface INativeName {
  [key: string]: {
    official: string,
    native?: string,
    common?: string
  }
}

interface ILanguages {
  [key: string]: string
}

interface ICountryInfo {
  flags: {
    png: string,
    svg: string
  },
  name: {
    common: string,
    official: string,
    nativeName: INativeName
  },
  tld: string[],
  currencies: ICurrencies,
  capital: string[],
  altSpellings: string[],
  region: string,
  subregion: string,
  languages: ILanguages,
  borders: string[],
  population: string
}

export default function CountryInfo() {
  const [countryData, setCountryData] = useState<ICountryInfo[] | null>(null)
  const [borderCountries, setBorderCountries] = useState<Partial<ICountryInfo[]> | null>(null);

  const path = usePathname()

  useEffect(() => {
    (async () => {
      const countryDataRes = await fetch(`https://restcountries.com/v3.1/name${path!.replaceAll("-", " ")}?fields=flags,name,population,region,subregion,capital,languages,tld,currencies,borders`);
      const countryData = await countryDataRes.json();

      setCountryData(countryData)
      
      if (countryData[0].borders.length !== 0) {
        const borderCountriesRes = await fetch(`https://restcountries.com/v3.1/alpha?codes=${countryData[0].borders.join(',')}&fields=name`);
        const borderData = await borderCountriesRes.json();

        setBorderCountries(borderData);
      }
    })()
  }, [path])

  {if (countryData == null) return <p>Loading</p>}

  const nativeNameKey: string | null = Object.keys(countryData[0].name.nativeName)[0];
  const currencyKey: string | null = Object.keys(countryData[0].currencies)[0];
  const languages: string[] | null = (Object.values(countryData[0].languages));

  return <main className="maxWidthWrapper flex flex-col">
    <BackButton />
    <div className="w-full flex flex-col lg:flex-row lg:items-center">
      <div className="relative w-full lg:max-w-[35rem] h-auto aspect-[5/3] grow">
        <Image src={countryData[0].flags.svg} alt="" fill priority/>
      </div>
      <section className="my-14 lg:ml-28 grow">
        <p className="block w-full text-2xl md:text-4xl font-extrabold mb-8">{countryData[0].name.common}</p>
        <div className="flex flex-col md:flex-row lg:justify-between md:gap-16 lg:gap-8">
          <div className="mb-14 md:mb-0">
            <p className="mb-3"><span className="font-bold">Native Name:</span> {countryData[0].name.nativeName[nativeNameKey]?.common || "-"}</p>
            <p className="mb-3"><span className="font-bold">Population:</span> {countryData[0].population.toLocaleString() || "-"}</p>
            <p className="mb-3"><span className="font-bold">Region:</span> {countryData[0].region || "-"}</p>
            <p className="mb-3"><span className="font-bold">Subregion:</span> {countryData[0].subregion || "-"}</p>
            <p><span className="font-bold">Capital:</span> {countryData[0].capital[0] || "-"}</p>
          </div>
          <div>
            <p className="mb-3"><span className="font-bold">Top Level Domain:</span> {countryData[0].tld[0] || "-"}</p>
            <p className="mb-3"><span className="font-bold">Currencies:</span> {countryData[0].currencies[currencyKey]?.name || "-"}</p>
            <p><span className="font-bold">Languages:</span> {languages.join(', ') || "-"}</p>
          </div>
        </div>
        {borderCountries !== null && <div className="flex flex-col mt-12 md:flex-row md:mt-[4.5rem] md:items-center flex-wrap">
          <p className="block md:inline text-[1.25rem] font-bold whitespace-nowrap mr-4 mb-7">Border Countries:</p>
          <div className="flex items-center gap-2 flex-wrap">
              {
              borderCountries.map((country, idx) => <BorderButton key={idx} href={country!.name.common.replaceAll(" ", "-")} value={country!.name.common}/>)
              }
          </div>
        </div>}
      </section>
    </div>
  </main>
}