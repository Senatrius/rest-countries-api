export const ShowButton = ({onClick, value}: {onClick: React.MouseEventHandler<HTMLButtonElement>, value: string}) => {
  return <button type="button" onClick={onClick} className="shadow-component rounded py-3 px-6 bg-white dark:bg-darkElement hover:brightness-95 hover:shadow-lg transition-shadow dark:hover:brightness-125">{value}</button>
}