import Image from 'next/image'
import NavigationLink from './navigation'
export default function Home() {
  return (
    <div className="container">
        <NavigationLink/>
        <h1>The Landing Page</h1>
    </div>
  )
}
