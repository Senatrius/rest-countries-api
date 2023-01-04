export const MaxWidthContainer = ({children}: {children: React.ReactNode}) => {
  return <div suppressHydrationWarning={true} className="mx-auto max-w-[80rem] w-[87%]">{children}</div>
}