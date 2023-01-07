export default function Head({ params }: { params: { country: string } }) {
  return <>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>{`Details | ${params.country.replaceAll("-", " ")}`}</title>
  </>
}