import { useEffect } from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {
     const router = useRouter()

     useEffect(() => {
          router.push("/stores")
     }, [])

     return (
          <div>
               not found
          </div>
     )
}

export default NotFound
