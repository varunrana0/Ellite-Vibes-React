import React from "react";
import { Link, useLocation } from "react-router-dom";
import FollowUs from "../followUs/FollowUs";
import Map from "../map/Map";

function MainFooter() {
  const params = useLocation();

  return (
    <>
      <div className="bg-gray-900">
        <div className=" p-2  py-10">
          {params.pathname === "/contact" ? null : (
            <div className="max-w-6xl mx-auto rounded-lg overflow-hidden">
              <Map />
            </div>
          )}
          <div className="flex  flex-col  md:items-center justify-between mt-8  bg-gray-800 bg-opacity-20 backdrop-blur-lg gap-10 md:max-w-7xl px-5  mx-auto md:py-10 py-5  rounded-2xl">
            <div className="flex flex-col md:items-center gap-4">
              <div className="text-gray-600 text-opacity-40 uppercase tracking-wider font-[900] text-3xl">
                our address
              </div>
              <div className="flex  text-gray-400 tracking-widest font-medium">
                <p className="md:text-base text-sm">
                  Office No. 715, 7<sup>th</sup> Floor, Global Business Hub,
                  Near EON IT Park, Kharadi, Pune-411014
                </p>
              </div>
            </div>
            <div className="flex flex-col md:items-center justify-center gap-4">
              <div className="text-gray-600 text-opacity-40 uppercase tracking-wider font-[900] md:text-3xl text-2xl">
                our {params.pathname === "/" ? null : " other"} brands
              </div>
              <div className="bg-gray-800 bg-opacity-30 rounded-lg flex md:flex-row lg:py-0 py-2 flex-col ">
                {params.pathname === "/elitevibes" ? null : (
                  <Link
                    to="elitevibes"
                    className={` tracking-[2px] capitalize text-gray-400 ${
                      params.pathname === "/elitegames"
                        ? "hover:text-blue-600"
                        : " hover:text-pink-600"
                    } transition-all md:text-base text-sm  overflow-hidden duration-700 ease-in-out py-2 px-3 font-[700] `}
                    title="Elite Vibes">
                    elite vibes
                  </Link>
                )}
                {params.pathname === "/elitegames" ? null : (
                  <Link
                    to="elitegames"
                    className={` tracking-[2px] capitalize text-gray-400 ${
                      params.pathname === "/elitegames"
                        ? "hover:text-blue-600"
                        : " hover:text-pink-600"
                    } transition-all md:text-base text-sm  overflow-hidden duration-700 ease-in-out py-2 px-3 font-[700] `}
                    title="Elite Games">
                    elite games
                  </Link>
                )}
                {params.pathname === "/elitedivine" ? null : (
                  <Link
                    to="elitedivine"
                    className={` tracking-[2px] capitalize text-gray-400 ${
                      params.pathname === "/elitegames"
                        ? "hover:text-blue-600"
                        : " hover:text-pink-600"
                    } transition-all md:text-base text-sm  overflow-hidden duration-700 ease-in-out py-2 px-3 font-[700] `}
                    title="Elite Divine">
                    elite divine
                  </Link>
                )}
                {params.pathname === "/elitegold" ? null : (
                  <Link
                    to="elitegold"
                    className={` tracking-[2px] capitalize text-gray-400 ${
                      params.pathname === "/elitegames"
                        ? "hover:text-blue-600"
                        : " hover:text-pink-600"
                    } transition-all md:text-base text-sm  overflow-hidden duration-700 ease-in-out py-2 px-3 font-[700] `}
                    title="Elite Gold">
                    elite gold
                  </Link>
                )}
              </div>
            </div>
            <div className="flex flex-col md:items-center justify-center">
              <div className="text-gray-600 text-opacity-40 uppercase tracking-wider font-[900] text-3xl">
                contact us
              </div>
              <div className="mt-2 flex items-center justify-center w-full bg-gray-800 bg-opacity-30 overflow-hidden rounded-lg">
                <a
                  className={`py-2 px-3 text-gray-400 font-medium ${
                    params.pathname === "/elitegames"
                      ? "hover:text-blue-600"
                      : " hover:text-pink-700"
                  } transition-all duration-500 ease-in tracking-widest inline-flex items-center justify-center `}
                  href="tel:+91-779-8824-168"
                  title="call us">
                  779-8824-168
                </a>
                <span className="text-white">|</span>
                <a
                  className={`py-2 px-3 text-gray-400 font-medium ${
                    params.pathname === "/elitegames"
                      ? "hover:text-blue-600"
                      : " hover:text-pink-700"
                  } transition-all duration-500 ease-in tracking-widest inline-flex items-center justify-center `}
                  href="tel:+91-988-1497-774"
                  title="call us">
                  988-1497-774
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center mt-7 bg-gray-800 bg-opacity-50 rounded-md max-w-xs mx-auto">
            <FollowUs />
          </div>
        </div>
        <div className="text-white font-medium border-t border-gray-800 border-opacity-40 text-opacity-30 capitalize text-center p-4 tracking-widest">
          Copyright&nbsp;
          <Link
            className={`${
              params.pathname === "/elitegames"
                ? " text-blue-600"
                : "text-pink-600"
            }  tracking-wider capitalize font-semibold`}
            to="/">
            elitevibes.in
          </Link>
          &nbsp;Pvt Ltd. {new Date(Date.now()).getUTCFullYear()}
        </div>
      </div>
    </>
  );
}

export default MainFooter;
