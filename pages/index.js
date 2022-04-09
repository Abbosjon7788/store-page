import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function App() {
  const router = useRouter()

  useEffect(() => {
    router.push('/stores')
  }, [])

  return <p>Loading...</p>
}
