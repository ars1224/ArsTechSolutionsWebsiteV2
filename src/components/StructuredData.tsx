import { Head } from 'vite-react-ssg'

type StructuredDataProps = {
  data: object
}

function StructuredData({
  data
}: StructuredDataProps) {
  return (
    <Head>
      <script type="application/ld+json">
        {JSON.stringify(data)}
      </script>
    </Head>
  )
}

export default StructuredData