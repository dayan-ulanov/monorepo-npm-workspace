import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h2 style={{ color: 'pink' }}>List</h2>
      <Link href={'/'}>To Vite</Link>
    </div>
  )
}