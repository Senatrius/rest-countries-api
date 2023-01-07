export const Controls = ({children}: {children: React.ReactNode}) => {
  return <div className="maxWidthWrapper mt-8 flex flex-col gap-12 md:mt-12 md:gap-0 md:flex-row md:items-start md:justify-between">{children}</div>
}