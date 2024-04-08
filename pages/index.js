import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  return (
    <div className="flex flex-col items-center  h-screen">
      <Head>
        <title>Hunting coder</title>
      </Head>
      {/* <Navbar/> */}
      <div className=" flex flex-col justify-center items-center gap-5 ">
        <h1 className="font-bold text-5xl mt-5">Welcome to hunting coder</h1>
        <p className="text-xl text-center">a blog for hunting coders by hunting coders</p>
        <img src={'/home-coder.jpg'} width={3000} height={1500} className="w-1/2" alt="" />
        {/* <Link href={'/about'}>click me</Link> */}
      </div>
      <div className="w-1/2">
        <h1 className="font-bold text-3xl pt-8 pb-4 text-center">Latest Blogs</h1>
        <div className="blog-section grid grid-cols-2  gap-4 py-5">
          <div className="blog">
            <h2 className="font-bold text-xl">How to learn javascript ?</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, laborum tenetur possimus dolore eos quo atque eum. Vero, enim. Impedit.</p>
          </div>
          <div className="blog">
            <h2 className="font-bold text-xl">How to learn javascript ?</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, laborum tenetur possimus dolore eos quo atque eum. Vero, enim. Impedit.</p>
          </div>
          <div className="blog">
            <h2 className="font-bold text-xl">How to learn javascript ?</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, laborum tenetur possimus dolore eos quo atque eum. Vero, enim. Impedit.</p>
          </div>
          <div className="blog">
            <h2 className="font-bold text-xl">How to learn javascript ?</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, laborum tenetur possimus dolore eos quo atque eum. Vero, enim. Impedit.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
