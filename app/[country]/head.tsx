export default function Head({ params }: { params: { country: string } }) {
  return <title>{`Details | ${params.country.replaceAll("-", " ")}`}</title>
}