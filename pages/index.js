import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-white md:h-screen flex justify-center items-center">
      <div className="flex max-md:flex-col ">
        <div className="bg-indigo-600 max-md:w-full max-md:rounded-t-none rounded-3xl w-[24rem]">
          <p className="flex justify-center p-10 max-md:p-5 text-slate-300 font-semibold text-3xl">
            Your Result
          </p>
          <div className="rounded-full bg-gradient-to-b from-indigo-800 to-indigo-600 size-52 mx-auto">
            <p className="flex justify-center font-bold text-7xl text-white px-16 pt-12 ">
              76
            </p>
            <p className="flex justify-center p-4 text-slate-400 font-semibold text-2xl">
              of 100
            </p>
          </div>
          <p className="flex justify-center px-8 pt-8 max-md:pt-5 font-semibold text-4xl">
            Great
          </p>
          <p className="flex justify-center px-14 pt-5 pb-14 max-md:pt-2 max-md:pb-5 text-slate-300 text-center font-semibold text-lg">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
        <div className="rounded-r-3xl w-[24rem] max-md:w-full shadow-[25px_25px_50px_-12px_rgba(0,0,0,0.3)] shadow-indigo-300">
          <div className="p-10 max-md:p-4">
            <p className="font-bold text-3xl text-black">Summary</p>
            <div className="flex rounded-xl bg-red-100 w-full p-4 my-4 mt-10 max-md:mt-5 max-md:p-3 ">
              <img src="/images/icon-reaction.svg" alt="logo" />
              <p className="text-red-400 font-medium px-4">Reaction</p>
              <div className="flex w-full  justify-end">
                <p className="text-black font-medium ">80 </p>
                <p className="text-slate-400 font-medium pl-2">/ 100</p>
              </div>
            </div>

            <div className="flex rounded-xl bg-yellow-100 w-full my-4 p-4 max-md:p-3">
              <img src="/images/icon-memory.svg" alt="logo" />
              <p className="text-yellow-400 font-medium px-4">Memory</p>
              <div className="flex w-full  justify-end">
                <p className="text-black font-medium ">92 </p>
                <p className="text-slate-400 font-medium pl-2">/ 100</p>
              </div>
            </div>

            <div className="flex rounded-xl bg-green-100 w-full my-4 p-4 max-md:p-3">
              <img src="/images/icon-verbal.svg" alt="logo" />
              <p className="text-green-400 font-medium px-4">Verbal</p>
              <div className="flex w-full  justify-end">
                <p className="text-black font-medium ">61 </p>
                <p className="text-slate-400 font-medium pl-2">/ 100</p>
              </div>
            </div>

            <div className="flex rounded-xl bg-blue-100 w-full my-4 p-4 max-md:p-3">
              <img src="/images/icon-visual.svg" alt="logo" />
              <p className="text-blue-400 font-medium px-4">Visual</p>
              <div className="flex w-full  justify-end">
                <p className="text-black font-medium ">72 </p>
                <p className="text-slate-400 font-medium pl-2">/ 100</p>
              </div>
            </div>

            <button
              type="button"
              className="w-full rounded-full my-10 max-md:my-1 bg-indigo-900 p-4 hover:bg-indigo-600"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
