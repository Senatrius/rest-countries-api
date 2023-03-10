import { CountryCard } from "./CountryCard"
import { ICountry } from "./page"

export const Countries = ({countryData, countrySet}: {countryData: ICountry[], countrySet: number}) => {
  return <main className="maxWidthWrapper grid gap-12 px-12 my-9 md:mt-12 md:px-0 md:grid-cols-2 lg:grid-cols-4 xl:gap-[4.5rem]">
    {
      countryData.slice(0, countrySet * 8).map((country, idx) => {
        return <CountryCard key={idx} flag={country.flags.svg} country={country.name.common} population={country.population.toLocaleString()} region={country.region} capital={country.capital[0]}/>
      })
    }
  </main>
}