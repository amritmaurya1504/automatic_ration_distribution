import React from "react";
import img from "../img/img1.png";
import Nav from "../components/navbar/Nav";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <div>
        <Nav />
        <section className="text-gray-600 body-font px-16 ">
          <div className="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src={img}
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="text-left text-4xl font-bold mt-10 text-gray-800">
                Welcome to <br />
                <span className="text-[#5b955d] text-6xl mt-5">
                  Automated{" "}
                </span>
                <span className="text-6xl text-gray-800">
                  Ration Distribution System
                </span>
              </h1>

              <section class="text-gray-600 body-font">
                <div class="py-8 mx-auto">
                  <div class="flex flex-col ">
                    <div class="w-full">
                      <div class=" rounded flex p-4 h-full items-center">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="3"
                          class="text-[#5b955d] w-6 h-6 flex-shrink-0 mr-4"
                          viewBox="0 0 24 24"
                        >
                          <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                          <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                        <span class="title-font font-medium">
                          Efficient and secure support for those in need.
                        </span>
                      </div>
                    </div>
                    <div class="w-full">
                      <div class=" rounded flex p-4 h-full items-center">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="3"
                          class="text-[#5b955d] w-6 h-6 flex-shrink-0 mr-4"
                          viewBox="0 0 24 24"
                        >
                          <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                          <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                        <span class="title-font font-medium">
                          Quick and accurate grocery assistance.
                        </span>
                      </div>
                    </div>
                    <div class="w-full">
                      <div class=" rounded flex p-4 h-full items-center">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="3"
                          class="text-[#5b955d] w-6 h-6 flex-shrink-0 mr-4"
                          viewBox="0 0 24 24"
                        >
                          <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                          <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                        <span class="title-font font-medium">
                          Implements secured authentication.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <div className="flex justify-center gap-4">
                <Link to="/register/info">
                  <button className="inline-flex items-center text-white bg-[#5b955d] border-0 py-2 px-6 focus:outline-none hover:bg-green-700 rounded-full text-md font-medium">
                    Get Started
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-1"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Home;
