export const ShowButton = ({onClick, value}: {onClick: React.MouseEventHandler<HTMLButtonElement>, value: string}) => {
  return <button type="button" onClick={onClick} className="shadow-component rounded text-sm py-4 px-12 md:py-3 md:px-9 bg-white dark:bg-darkElement hover:brightness-95 hover:shadow-lg transition-shadow dark:hover:brightness-125">{value}</button>
}