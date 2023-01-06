import Image from "next/image"
import Link from "next/link"

export const CountryCard = ({flag, country, population, region, capital}: {flag: string, country: string, population: string, region: string, capital: string}) => {
  return <Link href={country.toLowerCase().replaceAll(" ", "-")} className="block rounded bg-white shadow-component hover:shadow-lg dark:bg-darkElement">
    <div className="relative w-full pb-[60%] rounded-tl rounded-tr overflow-hidden">
      <Image src={flag} alt={`${country} flag`} fill/>
    </div>
    <div className="px-7 pt-8 pb-12 rounded-bl rounded-br lg:px-6 lg:pt-6 lg:pb-11">
      <h2 className="font-bold text-[1.375rem] mb-6 lg:mb-4">{country}</h2>
      <p className="mb-3 lg:mb-2"><span className="font-bold">Population:</span> {population}</p>
      <p className="mb-3 lg:mb-2"><span className="font-bold">Region:</span> {region}</p>
      <p><span className="font-bold">Capital:</span> {capital}</p>
    </div>
  </Link>
}