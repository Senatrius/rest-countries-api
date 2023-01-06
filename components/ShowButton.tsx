export const ShowButton = ({onClick, value}: {onClick: React.MouseEventHandler<HTMLButtonElement>, value: string}) => {
  return <button type="button" onClick={onClick} className="shadow-component rounded py-3 px-6 bg-white dark:bg-darkElement hover:brightness-90 hover:shadow-lg transition-all dark:hover:brightness-125">{value}</button>
}