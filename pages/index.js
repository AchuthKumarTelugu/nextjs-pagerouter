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
        <h1 className="font-bold text-5xl mt-5 lg:text-3xl">Welcome to hunting coder</h1>
        <img src={'/home-coder.jpg'} width={237} height={237} className="rounded-lg" alt="" />
        <p className="text-4xl font-bold text-cente lg:text-2xl">&lt;Hunting Coder &frasl; &gt;</p>
        {/* <Link href={'/about'}>click me</Link> */}
      </div>
      <div className="w-1/2 lg:w-2/3">
        <h1 className="font-bold text-3xl pt-8 pb-4 text-center">Latest Blogs</h1>
        <div className="blog-section grid   gap-4 py-5">
          <div className="blog">
            <h2 className="font-bold text-xl">How to learn javascript ?</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, laborum tenetur possimus dolore eos quo atque eum. Vero, enim. Impedit.</p>
            <div className="bg-black text-white w-fit px-4 py-2 rounded my-3 ">Read more</div>
          </div>
          <div className="blog">
            <h2 className="font-bold text-xl">How to learn javascript ?</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, laborum tenetur possimus dolore eos quo atque eum. Vero, enim. Impedit.</p>
            <div className="bg-black text-white w-fit px-4 py-2 rounded my-3 ">Read more</div>
          </div>
          <div className="blog">
            <h2 className="font-bold text-xl">How to learn javascript ?</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, laborum tenetur possimus dolore eos quo atque eum. Vero, enim. Impedit.</p>
            <div className="bg-black text-white w-fit px-4 py-2 rounded my-3 ">Read more</div>
          </div>
          <div className="blog">
            <h2 className="font-bold text-xl">How to learn javascript ?</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, laborum tenetur possimus dolore eos quo atque eum. Vero, enim. Impedit.</p>
            <div className="bg-black text-white w-fit px-4 py-2 rounded my-3 ">Read more</div>
          </div>
        </div>
      </div>
    </div>
  );
}
