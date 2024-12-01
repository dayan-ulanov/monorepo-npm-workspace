import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h2 style={{ color: 'pink' }}>Home</h2>
      <Link href={'/'}>To Vite</Link>
    </div>
  )
}