import Link from "next/link";

export const BorderButton = ({href, value}: {href: string, value: string}) => {
  return <Link href={href} className=" inline shadow-component rounded text-center min-w-[8rem] p-2 bg-white dark:bg-darkElement hover:brightness-95 dark:hover:brightness-125 whitespace-nowrap" >{value}</Link>
}