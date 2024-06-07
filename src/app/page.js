"use client";
import { useEffect, useState } from "react";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Triplead from "./_components/Triplead";
import Sticky from "./_components/Sticky";
import Features from "./_components/Features";
import GraphicDesign from "./_components/GraphicDesign";
import GetInTouch from "./_components/GetInTouch";
import { Suspense, lazy } from "react";
import Loading from "./loading";
const LazyTechs = lazy(() => import("./_components/Techs"));

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          <div
            id="menu"
            className="z-[100] overflow-hidden flex  text-white border-white fixed w-full h-0 bgd"
          >
            <div className="w-full h-full relative">
              <div className="w-full h-full flex absolute">
                <div className="w-[70%] h-full flex justify-start items-end">
                  <div className="flex flex-col m-0 text-[130px]">
                    <span className="leading-[90px] text-[130px] m-0 ">
                      Whatsapp
                    </span>
                    <span className="m-0 text-[160px] leading-[180px] ">
                      Instagram
                    </span>
                    <span className="flex items-end leading-[150px] text-[180px]">
                      Book a call
                    </span>
                  </div>
                </div>
                <div className="w-[30%] h-full"></div>
              </div>
            </div>
          </div>
          <Sticky />
          <div className=" flex flex-col">
            <Navbar />
            <div className="app">
              <Hero />
              <About />
            </div>
            <Triplead />
            <div className="app">
              {/* <Features /> */}
              {/* <Suspense fallback={<div>Loading...</div>}>
                <LazyTechs />
              </Suspense> */}
              <GraphicDesign />
            </div>{" "}
          </div>
          <GetInTouch />
        </>
      )}
    </>
  );
}
