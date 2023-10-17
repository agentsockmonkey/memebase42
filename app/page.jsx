import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h2 className="flex justify-center">FIVES</h2>
      <p className="flex justify-center">Main Menu</p>

      <div className="flex justify-center my-8">
        <Link href="/setupgame">
          <button className="btn-primary">Play</button>
        </Link>
      </div>

      <div className="flex justify-center my-8">
        <Link href="/rules">
          <button className="btn-primary">Rules</button>
        </Link>
      </div>
    </main>
  )
}
