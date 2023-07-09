import Link from "next/link";
import { Suspense } from "react";


export default function Home() {
  return (
    <main className="w-screen">
      <div style={{height:'calc(100vh - 70px)'}} className="flex  bg-green-50 flex-col items-center justify-center ">
        <div className="CvCreatorLink">
            <Link className="cvlinks" href={`/CreateCV`}>Create CV</Link>
      </div>
        </div>
    </main>
  )
}
