import Link from "next/link"

export const BackButton = () => {
  return <Link href="/" className="flex items-center self-start shadow-component rounded text-sm mt-12 mb-20 py-4 px-12 md:my-20 md:py-3 md:px-9 bg-white dark:bg-darkElement hover:brightness-95 hover:shadow-lg transition-shadow dark:hover:brightness-125">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-3"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" /></svg>
    Back
  </Link>
}