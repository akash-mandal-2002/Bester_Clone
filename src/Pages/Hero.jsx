import React from "react";
import "../Style/hero.css";
import { CiGlobe } from "react-icons/ci";
import Dashboard from "../../public/Images/Hero/Hero_1.png";
import { motion, px, useScroll, useTransform } from "motion/react";
import Pic1 from "../../public/Images/Hero/Better_function/pic_1.png";
import Pic2 from "../../public/Images/Hero/Better_function/pic_2.png";
import Pic3 from "../../public/Images/Hero/Better_function/pic_3.png";
import Pic4 from "../../public/Images/Hero/Better_function/pic_4.png";
import Pic5 from "../../public/Images/Hero/Better_function/pic_5.png";
import Pic6 from "../../public/Images/Hero/Better_function/pic_6.png";
import Pic7 from "../../public/Images/Hero/Better_function/pic_7.png";
import { BiChart } from "react-icons/bi";
import { PiPencilSimpleLine } from "react-icons/pi";
import { BsCpu } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";
import Marquee from "react-fast-marquee";
import Left_abstract from "../../public/Images/Hero/Left_abstract.png";
import Left_particles from "../../public/Images/Hero/left_particles.png";
import Right_particles from "../../public/Images/Hero/right_particles.png";
import Right_abstraction from "../../public/Images/Hero/right_abstraction.png";
const Hero = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 3.5]);
  return (
    <div className="hero my-20">
       <div className="bg_abstract relative -z-50">
              <div className="left_abstract absolute -top-44">
                <img src={Left_abstract} alt="Left_abstract" className="md:w-[22rem] w-64"/>
                <img src={Left_particles} alt="Left_particles" className=" absolute top-0 w-30 md:w-[11rem]"/>
              </div>
              <div className="right_abstract absolute -top-44 -right-[0rem]">
              <img src={Right_abstraction} alt="Left_abstract" className="lg:w-[22rem] w-64"/>
              <img src={Right_particles} alt="Left_particles" className=" absolute top-0 md:right-[3rem] -right-[0rem] w-30 lg:w-[11rem]"/>
              </div>
            </div>
      <div className="md:py-14">
        <motion.div  initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }} className="hero_1 flex items-center border-2 border-[#200473] md:w-[20%] w-[75%] space-x-2 text-center mx-auto p-2 rounded-full">
          <img
            src="https://framerusercontent.com/images/k52EDaSXpRKhcJD5IrrFoOy9k.svg"
            alt=""
          />
          <p className="font-semibold text-white text-md">
            Introducing Our Latest Features
          </p>
        </motion.div>
        <motion.div   initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }} className="lg:w-[60%] mx-auto text-center mt-5 space-y-4">
          <h1 className="md:text-[55px] text-[30px] md:leading-20 font-bold text-white">
            Revolutionize Your CRM Experience with Powerful Tools
          </h1>
          <p className="text-gray-500 font-semibold text-md lg:w-[70%] mx-auto">
            Empower your business with Bester’s AI-driven solutions designed to
            streamline operations and enhance customer relationships.
          </p>
          <button className="bg-[#4E12BD] text-md text-gray-200 font-semibold p-3.5 px-4 mt-6 rounded-full">
            Start Your Free Trial
          </button>
          <div className="flex justify-center items-center space-x-2 md:w-[100%]">
            <span className="text-gray-300 text-2xl">
              <CiGlobe />
            </span>
            <p className="text-gray-500 font-semibold text-md">
              Used and helping over more
            </p>
            <p className="text-white font-semibold text-md">2000+ Companies</p>
          </div>
        </motion.div>
        <motion.img
          src={Dashboard}
          alt=""
          style={{ scale }}
          className="md:w-[60%] w-[85%] mx-auto my-20 border-8 border-[#200473] rounded-2xl border-b-0"
        />
      </div>
      <div className="md:py-20">
        <p className="text-lg text-center text-gray-500 font-semibold">
          Trusted by 1000+ businesses across the world
        </p>

        <div className="flex pr-20 lg:w-[50%] mx-auto overflow-hidden py-8 my-4">
          <motion.div
            className="flex shrink-0 pl-12"
            animate={{ x: [0, "-100%"] }}
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: "linear",
            }}
          >
            <img
              className="pr-12"
              src="https://framerusercontent.com/images/zGlQm0coCTb5CpePeqaUxa44RA.svg"
              alt="Logo 1"
            />
            <img
              className="pr-12"
              src="https://framerusercontent.com/images/rOL6aLtlQ9vEyNkjqf6MtMlTTJo.svg"
              alt="Logo 2"
            />
            <img
              className="pr-12"
              src="https://framerusercontent.com/images/OOBN6gTjHjBRSC6PH7onkK5WQ.svg"
              alt="Logo 3"
            />
            <img
              className="pr-12"
              src="https://framerusercontent.com/images/lTWpDeQRqdv1U5zaDtisiJhWZ0.svg"
              alt="Logo 4"
            />
            <img
              className=""
              src="https://framerusercontent.com/images/eefWZrmFn4T3HJCDkbRk5sCo50.svg"
              alt="Logo 5"
            />
          </motion.div>
          <motion.div
            className="flex shrink-0"
            animate={{ x: [0, "-100%"] }}
            transition={{
              repeat: Infinity,
              duration: 10,

              ease: "linear",
            }}
          >
            <img
              className="pr-12"
              src="https://framerusercontent.com/images/zGlQm0coCTb5CpePeqaUxa44RA.svg"
              alt="Logo 1"
            />
            <img
              className="pr-12"
              src="https://framerusercontent.com/images/rOL6aLtlQ9vEyNkjqf6MtMlTTJo.svg"
              alt="Logo 2"
            />
            <img
              className="pr-12"
              src="https://framerusercontent.com/images/OOBN6gTjHjBRSC6PH7onkK5WQ.svg"
              alt="Logo 3"
            />
            <img
              className="pr-12"
              src="https://framerusercontent.com/images/lTWpDeQRqdv1U5zaDtisiJhWZ0.svg"
              alt="Logo 4"
            />
            <img
              className=""
              src="https://framerusercontent.com/images/eefWZrmFn4T3HJCDkbRk5sCo50.svg"
              alt="Logo 5"
            />
          </motion.div>
        </div>
      </div>

      <div className="">
        <div className="rounded-full items-center mx-auto w-30 space-x-2 py-1.5 flex  bg-[#10102D]">
          <img
            src="https://framerusercontent.com/images/nj1VGfVaST7qfmdJ0yBwEZk3O8.svg"
            alt=""
            className="pl-3"
          />
          <p className="text-[#606075] text-md font-semibold">Features</p>
        </div>
        <div className="text-center py-6 space-y-6">
          <h1 className="text-gray-200 text-4xl md:text-6xl font-bold">
            Game-Changing Functionality
          </h1>
          <p className="text-md text-[#606075] font-semibold md:w-[35%] mx-auto">
            Discover innovative tools designed to optimize your workflows and
            drive success.
          </p>
        </div>
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row mx-auto justify-center space-x-2">
            <img src={Pic2} alt="pic_2" className="md:w-[25rem] mx-auto my-2 md:my-0 md:mx-0 w-[20rem] md:h-[50vh]" />
            <img src={Pic3} alt="pic_1" className="md:w-[25rem] mx-auto my-2 md:my-0 md:mx-0 w-[20rem] md:h-[50vh]" />
          </div>
          <div className="flex justify-center">
            <div className="flex flex-col md:flex-row space-x-3 space-y-3">
              <div className="space-y-3">
                <img src={Pic4} alt="" className="md:w-[15rem] mx-auto my-2 md:my-0 md:mx-0 w-[20rem]" />
                <img src={Pic5} alt="" className="md:w-[15rem] mx-auto my-2 md:my-0 md:mx-0 w-[20rem]" />
              </div>
              <img src={Pic6} alt="" className="md:w-[18rem] h-[80vh]" />
              <div className="">
                <img src={Pic1} alt="" className="md:w-[15rem] mx-auto my-2 md:my-0 md:mx-0 w-[20rem]" />
                <img src={Pic7} alt="" className="md:w-[15rem] mx-auto my-2 md:my-0 md:mx-0 w-[20rem]" />
              </div>
            </div>
          </div>
        </div>

        <div className="md:py-32 py-22">
          <div className="rounded-full items-center mx-auto w-32 space-x-2  py-1.5 flex  bg-[#10102D]">
            <img
              src="https://framerusercontent.com/images/b4c7w6KiBT5Sa37NSeH9lm1zXfw.svg"
              alt=""
              className="px-3 w-[2.6rem]"
            />
            <p className="text-slate-400 text-lg font-semibold">Benefits</p>
          </div>
          <div className="py-8">
            <h1 className="text-gray-200 md:text-6xl text-4xl font-bold lg:w-[60%] text-center mx-auto">
              Your Trusted Partner in Business Growth
            </h1>
          </div>
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row space-x-4 justify-center">
              <div className="box lg:w-[25%]  border space-y-3 border-gray-900  rounded-2xl p-4 text-center">
                <img
                  src="https://framerusercontent.com/images/MC62B22M2T63sfO7ZaqRisg.svg"
                  alt=""
                  className="bg-[#7847C0] rounded-full p-1.5 mx-auto"
                />
                <div className="space-y-3">
                  <h2 className="text-gray-200 text-2xl font-bold">
                    Customizable Workflows
                  </h2>
                  <p className="text-gray-500 text-md">
                    Effortlessly collaborate with tools that communication. Stay
                    connected and keep projects moving smoothly.
                  </p>
                </div>
              </div>
              <div className="box lg:w-[25%]  border space-y-3 border-gray-900  rounded-2xl p-4 text-center">
                <img
                  src="https://framerusercontent.com/images/vVywK8GHhaKpmAPHQ1ILO7sE.svg"
                  alt=""
                  className="bg-[#7847C0] rounded-full p-1.5 mx-auto"
                />
                <div className="space-y-3">
                  <h2 className="text-gray-200 text-2xl font-bold">
                    Workflow Management
                  </h2>
                  <p className="text-gray-500 text-md">
                    Easily view, organize, and manage tasks with a simple
                    interface. Focus on what matters most.
                  </p>
                </div>
              </div>
              <div className="box lg:w-[25%]  border space-y-3 border-gray-900  rounded-2xl p-4 text-center">
                <img
                  src="https://framerusercontent.com/images/k52EDaSXpRKhcJD5IrrFoOy9k.svg"
                  alt=""
                  className="bg-[#7847C0] rounded-full p-1.5 mx-auto"
                />
                <div className="space-y-3">
                  <h2 className="text-gray-200 text-2xl font-bold">
                    Data-Driven Insights
                  </h2>
                  <p className="text-gray-500 text-md">
                    Access real-time analytics to make informed decisions. Turn
                    valuable data into actionable strategies.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row space-x-4 justify-center">
              <div className="box lg:w-[25%]  border space-y-3 border-gray-900  rounded-2xl p-4 text-center">
                <img
                  src="https://framerusercontent.com/images/Z27qpH1saTy3zW886XsT5DDG4.svg"
                  alt=""
                  className="bg-[#7847C0] rounded-full p-1.5 mx-auto"
                />
                <div className="space-y-3">
                  <h2 className="text-gray-200 text-2xl font-bold">
                    Real-Time Insights
                  </h2>
                  <p className="text-gray-500 text-md">
                    Get up-to-date data instantly, allowing you to make quick,
                    informed decisions and optimize your strategies effectively.
                  </p>
                </div>
              </div>
              <div className="box lg:w-[25%]  border space-y-3 border-gray-900  rounded-2xl p-4 text-center">
                <img
                  src="https://framerusercontent.com/images/x2HKTNpT4jFAJgHD86jDDQLU4.svg"
                  alt=""
                  className="bg-[#7847C0] rounded-full p-1.5 mx-auto"
                />
                <div className="space-y-3">
                  <h2 className="text-gray-200 text-2xl font-bold">
                    User-Friendly Interface
                  </h2>
                  <p className="text-gray-500 text-md">
                    Navigate tasks with a simple, intuitive interface. Keep your
                    focus on what matters most.
                  </p>
                </div>
              </div>
              <div className="box lg:w-[25%]  border space-y-3 border-gray-900  rounded-2xl p-4 text-center">
                <img
                  src="https://framerusercontent.com/images/8pBCd8jBA5zdlpMIYX37aSSbRaU.svg"
                  alt=""
                  className="bg-[#7847C0] rounded-full p-1.5 mx-auto"
                />
                <div className="space-y-3">
                  <h2 className="text-gray-200 text-2xl font-bold">
                    Seamless Data Integration
                  </h2>
                  <p className="text-gray-500 text-md">
                    Connect your Kanban board with other CRM tools for
                    streamlined processes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="flex flex-col md:flex-row justify-center">
          <div className="space-y-6 md:w-[40%] my-24 mx-4">
            <h1 className="md:w-[80%] text-[#e9e7e7] text-4xl md:text-5xl font-bold">
              Transform Your Workflow
            </h1>
            <p className="md:w-[90%] text-sm text-[#9f9fa4] font-semibold">
              Unlock efficiency and streamline operations with our intuitive
              dashboard, designed to enhance your productivity and deliver
              insights at a glance.
            </p>
            <div className="flex space-x-3">
              <div className="bg-[#18132D] text-gray-400 font-semibold p-2 rounded-full  space-x-4 flex">
                <span className="text-xl">
                  <BiChart />
                </span>
                <p className="text-sm">Real-Time Analysis</p>
              </div>
              <div className="bg-[#18132D] text-gray-400 font-semibold p-2 rounded-full lg:w-[35%] space-x-4 flex">
                <span className="text-xl">
                  <PiPencilSimpleLine />
                </span>
                <p className="text-sm">Customizable Interface</p>
              </div>
            </div>
            <div className="flex space-x-3">
              <div className="bg-[#18132D] text-gray-400 font-semibold p-2 rounded-full lg:w-[35%] space-x-4 flex">
                <span className="text-xl">
                  <BsCpu />
                </span>
                <p className="text-sm">Seamless Intergation</p>
              </div>
              <div className="bg-[#18132D] text-gray-400 font-semibold p-2 rounded-full lg:w-[40%] space-x-6 flex">
                <img
                  src="https://framerusercontent.com/images/XmS6W4M2cRnVpeLxv6yFXSQn3OA.svg"
                  alt=""
                />
                <p className="text-sm">User-Friendly Navigation</p>
              </div>
            </div>
            <div className="flex space-x-3">
              <div className="bg-[#18132D] text-gray-400 font-semibold p-2 rounded-full lg:w-[25%] space-x-4 flex">
                <img
                  src="https://framerusercontent.com/images/8jB5TUALkhfH4p7SqkXQHMnFI.svg"
                  alt=""
                />
                <p className="text-sm">Data Security</p>
              </div>
              <div className="bg-[#18132D] text-gray-400 font-semibold p-2 rounded-full lg:w-[30%] space-x-2 flex">
                <img
                  src="https://framerusercontent.com/images/fNrnSY9NfV1QQPjSYqhEgJ8kp0.svg"
                  alt=""
                />
                <p className="text-sm">Instant Notifications</p>
              </div>
            </div>

            <div className="">
              <button className="bg-[#7A38F4] text-gray-200 font-bold p-3 text-sm rounded-full">
                Start Your Free Trial
              </button>
            </div>
          </div>
          <img
            src="https://framerusercontent.com/images/6v2COVquBvSfFKr6PE2mxFY7Q8.webp?scale-down-to=1024"
            alt=""
            className="md:w-[45%] w-[90%] mx-4 border-t-12 border-l-12 border-purple-500 rounded-2xl"
          />
        </div>

        <div className="flex flex-col md:flex-row justify-center py-44 space-x-24">
          <img
            src="https://framerusercontent.com/images/0V96rTvX3V084RJ4yL1CdQpmP4.webp?scale-down-to=1024"
            alt=""
            className="md:w-[45%] w-[90%] mx-4 border-t-12 border-r-12 border-purple-500 rounded-2xl"
          />
          <div className="space-y-6 lg:w-[40%] my-12 mx-4">
            <h1 className="md:w-[80%] text-[#e9e7e7] text-4xl  md:text-5xl font-bold">
              Maximize Efficiency with Kanban
            </h1>
            <p className="lg:w-[90%] text-sm text-[#9f9fa4] font-semibold">
              Stay updated on every task and deal with a clear, visual layout.
              Customize your board to fit your unique workflow and goals.
            </p>
            <div className="flex space-x-3">
              <div className="border border-gray-800 rounded-xl p-4 space-y-3">
                <img
                  src="https://framerusercontent.com/images/qd5Jyi5sqDCLpDGciwjzYISqlw.svg"
                  alt=""
                  className="bg-[#2d2d3c] p-2 rounded-full"
                />
                <h2 className="text-sm text-[#e9e7e7] font-bold">
                  Integrated Team Collaboration
                </h2>
                <p className="lg:w-[90%] text-[14px] text-[#9f9fa4] font-semibold">
                  Effortless teamwork for productivity.
                </p>
              </div>
              <div className="border border-gray-800 rounded-xl p-4 space-y-3">
                <img
                  src="https://framerusercontent.com/images/QycW6GPNsqkocqEBOjSqIyDt2Q.svg"
                  alt=""
                  className="bg-[#2d2d3c] p-2 rounded-full"
                />
                <h2 className="text-sm text-[#e9e7e7] font-bold">
                  Real-Time Task Updates
                </h2>
                <p className="lg:w-[90%] text-[14px] text-[#9f9fa4] font-semibold">
                  Instant updates for project progress.
                </p>
              </div>
            </div>
            <div className="flex space-x-3">
              <div className="border border-gray-800 rounded-xl p-4 space-y-3 px-8">
                <img
                  src="https://framerusercontent.com/images/QLy0ef8UgwyZZz2Ha8UuY9kZI.svg"
                  alt=""
                  className="bg-[#2d2d3c] p-2 rounded-full"
                />
                <h2 className="text-sm text-[#e9e7e7] font-bold">
                  Drag-and-Drop Functionality
                </h2>
                <p className="lg:w-[100%] text-[14px] text-[#9f9fa4] font-semibold">
                  Easily organize tasks with drag.
                </p>
              </div>
              <div className="border border-gray-800 rounded-xl p-4 space-y-3 px-8">
                <img
                  src="https://framerusercontent.com/images/nca5I6rIuJsWMqjPm1qxuHevQQ.svg"
                  alt=""
                  className="bg-[#2d2d3c] p-2 rounded-full"
                />
                <h2 className="text-sm text-[#e9e7e7] font-bold">
                  Customizable Board Layout
                </h2>
                <p className="lg:w-[100%] text-[14px] text-[#9f9fa4] font-semibold">
                  Personalize task boards to fit.
                </p>
              </div>
            </div>

            <div className="">
              <button className="bg-[#7A38F4] text-gray-200 font-semibold p-3 text-sm rounded-full">
                Start Your Free Trial
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="relative">
          <img
            src="https://framerusercontent.com/images/gLylbnDPRchCsxu41kT5AgIB3w.webp?scale-down-to=512"
            alt=""
            className=" mx-auto absolute md:right-[28rem] md:-top-[4rem] -top-[4rem]"
          />
        </div>
        <div className="rounded-full items-center mx-auto w-25 space-x-2 py-1.5 flex  bg-[#10102D]">
          <span className="pl-3 text-xl text-[#4e33a1]">
            <HiUserGroup />
          </span>
          <p className="text-[#9595dc] text-md font-semibold">Team</p>
        </div>
        <div className="text-center space-y-8 md:space-y-2 my-6">
          <h1 className="md:text-[50px] text-4xl md:leading-20 font-bold text-white">
            Game-Changing Functionality
          </h1>
          <p className=" text-gray-500 font-semibold text-md lg:w-[35%] mx-auto">
            Discover innovative tools designed to optimize your workflows and
            drive success.
          </p>
        </div>
        <div className="">
          <div className="flex flex-col md:flex-row ml-4 md:ml-0 space-y-2 items-center justify-center space-x-5">
            <div className="border border-gray-700 rounded-2xl lg:w-[30%] bg-[#02021B]">
              <div className="flex flex-col md:flex-row  space-y-5 md:space-y-1 items-center justify-around py-6">
                <img
                  src="https://framerusercontent.com/images/XWYAc2UuZHHg77KerZpmNKvO0.webp?scale-down-to=512"
                  alt=""
                  className="rounded-full w-[6rem] md:w-[5rem]"
                />
                <div className="">
                  <h1 className="text-gray-100 font-semibold text-xl">
                    John Doe
                  </h1>
                  <p className="text-gray-600 font-semibold text-md">
                    Co-Founder
                  </p>
                </div>
                <div className="flex items-center space-x-2 bg-[#2d2945] rounded-full p-2 hover:bg-[#3E395F] hover:cursor-pointer ease-in duration-75 transition-all px-4.5">
                  <p className="text-gray-200 font-semibold">Follow</p>
                  <img
                    src="https://framerusercontent.com/images/d3NizU29EQ35NFaOP97WmBvPNQ.svg"
                    alt=""
                  />
                </div>
              </div>
              <p className="text-gray-600 text-lg text-center font-semibold px-4 py-3">
                Jhon Doe brings expertise in operational excellence, ensuring
                seamless project execution and a focus on delivering top-quality
                solutions.
              </p>
            </div>
            <div className="border border-gray-700 mr-4 md:mr-0 rounded-2xl lg:w-[30%] bg-[#02021B]">
              <div className="flex flex-col md:flex-row space-y-5 md:space-y-1 items-center justify-around py-6">
                <img
                  src="https://framerusercontent.com/images/wEbqjeN4F6yy5rUHjV9EJlsd40.webp?scale-down-to=512"
                  alt=""
                  className="rounded-full w-[6rem] md:w-[5rem]"
                />
                <div className="">
                  <h1 className="text-gray-100 font-semibold text-xl">
                    Emily Davis
                  </h1>
                  <p className="text-gray-600 font-semibold text-md">
                    Co-Founder
                  </p>
                </div>
                <div className="flex items-center space-x-2 bg-[#2d2945] rounded-full p-2 hover:bg-[#3E395F] hover:cursor-pointer ease-in duration-75 transition-all px-4.5">
                  <p className="text-gray-200 font-semibold">Follow</p>
                  <img
                    src="https://framerusercontent.com/images/d3NizU29EQ35NFaOP97WmBvPNQ.svg"
                    alt=""
                  />
                </div>
              </div>
              <p className="text-gray-600 text-center text-lg font-semibold px-4 py-3">
                Jhon Doe brings expertise in operational excellence, ensuring
                seamless project execution and a focus on delivering top-quality
                solutions.
              </p>
            </div>
          </div>
          <div className="md:flex  md:flex-col items-center">
            <div className="md:grid md:grid-cols-3 space-y-3 ml-4 md:ml-0   py-6 space-x-4">
              <div className="flex items-center justify-around space-x-3 p-4 border border-gray-700 rounded-2xl  bg-[#02021B]">
                <img
                  src="https://framerusercontent.com/images/GqcG765U8Yh6J9PJjdc4WtETY.png"
                  alt=""
                  className="rounded-full w-[4rem] md:w-[3rem]"
                />
                <div className="">
                  <h1 className="text-gray-100 font-semibold text-xl">
                    Sarah Evans
                  </h1>
                  <p className="text-gray-600 font-semibold text-md">
                    Lead UI/UX Designer
                  </p>
                </div>

                <img
                  src="https://framerusercontent.com/images/d3NizU29EQ35NFaOP97WmBvPNQ.svg"
                  alt=""
                  className="bg-[#2d2945] rounded-full p-2 hover:bg-[#3E395F] hover:cursor-pointer ease-in duration-75 transition-all"
                />
              </div>
              <div className=" flex items-center justify-around p-4 border border-gray-700 rounded-2xl  bg-[#02021B]">
                <img
                  src="https://framerusercontent.com/images/SAu5blCnowCgh6xbhjMJywcKs.png"
                  alt=""
                  className="rounded-full w-[4rem] md:w-[3rem]"
                />
                <div className="">
                  <h1 className="text-gray-100 font-semibold text-xl">
                    Anna Smith A
                  </h1>
                  <p className="text-gray-600 font-semibold text-md">
                    Project Manager
                  </p>
                </div>

                <img
                  src="https://framerusercontent.com/images/d3NizU29EQ35NFaOP97WmBvPNQ.svg"
                  alt=""
                  className="bg-[#2d2945] rounded-full p-2 hover:bg-[#3E395F] hover:cursor-pointer ease-in duration-75 transition-all"
                />
              </div>
              <div className="flex items-center justify-around p-4 border mr-4 md:mr-0 border-gray-700 rounded-2xl  bg-[#02021B]">
                <img
                  src="https://framerusercontent.com/images/DYZM5ajw2niNISV79f1W7kub2zY.png"
                  alt=""
                  className="rounded-full w-[4rem] md:w-[3rem]"
                />
                <div className="">
                  <h1 className="text-gray-100 font-semibold text-xl">
                    David Kim
                  </h1>
                  <p className="text-gray-600 font-semibold text-md">
                    Full-Stack Developer
                  </p>
                </div>

                <img
                  src="https://framerusercontent.com/images/d3NizU29EQ35NFaOP97WmBvPNQ.svg"
                  alt=""
                  className="bg-[#2d2945] rounded-full p-2 hover:bg-[#3E395F] hover:cursor-pointer ease-in duration-75 transition-all"
                />
              </div>
            </div>
            <div className="md:grid md:grid-cols-3 py-6 space-y-3 space-x-4 ml-4 md:ml-0">
              <div className="px-6 space-x-4 flex items-center justify-around p-4 border border-gray-700 rounded-2xl  bg-[#02021B]">
                <img
                  src="https://framerusercontent.com/images/EO124XeoxvpduS1ld0UbZslH2E.png"
                  alt=""
                  className="rounded-full w-[4rem] md:w-[3rem]"
                />
                <div className="">
                  <h1 className="text-gray-100 font-semibold text-xl">
                    James Wright
                  </h1>
                  <p className="text-gray-600 font-semibold text-md">
                    Data Scientist
                  </p>
                </div>

                <img
                  src="https://framerusercontent.com/images/d3NizU29EQ35NFaOP97WmBvPNQ.svg"
                  alt=""
                  className="bg-[#2d2945] rounded-full p-2 hover:bg-[#3E395F] hover:cursor-pointer ease-in duration-75 transition-all"
                />
              </div>
              <div className=" flex items-center justify-around p-4 border border-gray-700 rounded-2xl  bg-[#02021B]">
                <img
                  src="https://framerusercontent.com/images/GjSJCoSvt33719IfcJRfAtUkbd4.png"
                  alt=""
                  className="rounded-full w-[4rem] md:w-[3rem]"
                />
                <div className="">
                  <h1 className="text-gray-100 font-semibold text-xl">
                    Sophia Patel
                  </h1>
                  <p className="text-gray-600 font-semibold text-md">
                    Graphic Designer
                  </p>
                </div>

                <img
                  src="https://framerusercontent.com/images/d3NizU29EQ35NFaOP97WmBvPNQ.svg"
                  alt=""
                  className="bg-[#2d2945] rounded-full p-2 hover:bg-[#3E395F] hover:cursor-pointer ease-in duration-75 transition-all"
                />
              </div>
              <div className="flex items-center justify-around mr-4 md:mr-0 p-4 border border-gray-700 rounded-2xl  bg-[#02021B]">
                <img
                  src="https://framerusercontent.com/images/4BYIZghBRV9i8TfPoS9zA22o.png"
                  alt=""
                  className="rounded-full w-[4rem] md:w-[3rem]"
                />
                <div className="">
                  <h1 className="text-gray-100 font-semibold text-xl">
                    Rachel Moore
                  </h1>
                  <p className="text-gray-600 font-semibold text-md">
                    Content Strategist
                  </p>
                </div>

                <img
                  src="https://framerusercontent.com/images/d3NizU29EQ35NFaOP97WmBvPNQ.svg"
                  alt=""
                  className="bg-[#2d2945] rounded-full p-2 hover:bg-[#3E395F] hover:cursor-pointer ease-in duration-75 transition-all"
                />
              </div>
            </div>
          </div>
          <p className="text-center text-gray-600 md:text-lg text-sm font-semibold">
            Stay connected with us on LinkedIn. For any inquiries or
            collaborations, don’t hesitate to get in touch with our team.
          </p>
        </div>
      </div>
      <div className="md:py-20">
        <div className="relative py-12">
          <img
            src="https://framerusercontent.com/images/gLylbnDPRchCsxu41kT5AgIB3w.webp?scale-down-to=512"
            alt=""
            className="mx-auto absolute right-[28rem] "
          />
        </div>
        <div className="rounded-full items-center mx-auto w-25 space-x-2 pl-3 py-1.5 flex  bg-[#10102D]">
          <img
            src="https://framerusercontent.com/images/nj1VGfVaST7qfmdJ0yBwEZk3O8.svg"
            alt=""
          />
          <p className="text-[#9595dc] text-md font-semibold">Pricing</p>
        </div>

        <div className="text-center space-y-2 my-4">
          <h1 className="md:text-[50px] text-4xl md:leading-20 leading-14 font-bold text-white">
            Game-Changing Functionality
          </h1>
          <p className=" text-gray-500 font-semibold text-md lg:w-[35%] mx-auto">
            Discover innovative tools designed to optimize your workflows and
            drive success.
          </p>
        </div>
        <div className="flex flex-col md:flex-row space-y-4 justify-center items-center space-x-4 my-12">
          <div className="space-y-6 border w-[90%] ml-3 md:w-[22%] border-gray-700 rounded-2xl">
            <div className="space-y-3 border border-b-gray-500 p-2">
              <p className="text-gray-500 font-semibold">Business Plan</p>
              <h1 className="text-[50px] leading-20 font-bold text-[#e0e0eb]">
                $19
              </h1>
              <p className="text-[#e0e0eb] font-semibold text-sm">
                Basic features for up to 10 users.
              </p>
              <button className="bg-[#141439] text-white p-3 my-6 px-24 rounded-full font-semibold text-md">
                Get Started
              </button>
            </div>
            <div className="p-4">
              <p className="text-[#e0e0eb] font-semibold text-lg">Features</p>
              <p className="text-gray-600 font-semibold text-md">
                Everything in our free plan plus...
              </p>
              <div className="space-y-5 py-4">
                <div className="flex items-center space-x-4">
                  <img
                    src="https://framerusercontent.com/images/tmTgNWqpJWLdmdOGFVoHrlKwxw.svg"
                    alt=""
                  />
                  <p className="text-gray-500 font-semibold text-md">
                    AI-Powered Insights
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <img
                    src="https://framerusercontent.com/images/tmTgNWqpJWLdmdOGFVoHrlKwxw.svg"
                    alt=""
                  />
                  <p className="text-gray-500 font-semibold text-md">
                    Seamless Integrations
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <img
                    src="https://framerusercontent.com/images/tmTgNWqpJWLdmdOGFVoHrlKwxw.svg"
                    alt=""
                  />
                  <p className="text-gray-500 font-semibold text-md">
                    Customizable Dashboards
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <img
                    src="https://framerusercontent.com/images/aAo0oEydHhKAadZ6qiX2T8bECfM.svg"
                    alt=""
                  />
                  <p className="text-gray-500 font-semibold text-md">
                    24/7 Customer Support
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <img
                    src="https://framerusercontent.com/images/aAo0oEydHhKAadZ6qiX2T8bECfM.svg"
                    alt=""
                  />
                  <p className="text-gray-500 font-semibold text-md">
                    Scalable Solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6 border w-[90%] ml-3 md:w-[22%] border-gray-700 rounded-2xl">
            <div className="space-y-3 border border-b-gray-500 p-2">
              <p className="text-gray-500 font-semibold">Business Plan</p>
              <h1 className="text-[50px] leading-20 font-bold text-[#e0e0eb]">
                $49
              </h1>
              <p className="text-[#e0e0eb] font-semibold text-sm">
                Basic features for up to 10 users.
              </p>
              <button className="bg-[#6820DE] text-white p-3 my-6 px-24 rounded-full font-semibold text-md">
                Get Started
              </button>
            </div>
            <div className="p-4">
              <p className="text-[#e0e0eb] font-semibold text-lg">Features</p>
              <p className="text-gray-600 font-semibold text-md">
                Everything in our free plan plus...
              </p>
              <div className="space-y-5 py-4">
                <div className="flex items-center space-x-4">
                  <img
                    src="https://framerusercontent.com/images/tmTgNWqpJWLdmdOGFVoHrlKwxw.svg"
                    alt=""
                  />
                  <p className="text-gray-500 font-semibold text-md">
                    AI-Powered Insights
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <img
                    src="https://framerusercontent.com/images/tmTgNWqpJWLdmdOGFVoHrlKwxw.svg"
                    alt=""
                  />
                  <p className="text-gray-500 font-semibold text-md">
                    Seamless Integrations
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <img
                    src="https://framerusercontent.com/images/tmTgNWqpJWLdmdOGFVoHrlKwxw.svg"
                    alt=""
                  />
                  <p className="text-gray-500 font-semibold text-md">
                    Customizable Dashboards
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <img
                    src="https://framerusercontent.com/images/aAo0oEydHhKAadZ6qiX2T8bECfM.svg"
                    alt=""
                  />
                  <p className="text-gray-500 font-semibold text-md">
                    24/7 Customer Support
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <img
                    src="https://framerusercontent.com/images/aAo0oEydHhKAadZ6qiX2T8bECfM.svg"
                    alt=""
                  />
                  <p className="text-gray-500 font-semibold text-md">
                    Scalable Solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6 border w-[90%] ml-3 md:w-[22%] border-gray-700 rounded-2xl">
            <div className="space-y-3 border border-b-gray-500 p-2">
              <p className="text-gray-500 font-semibold">Business Plan</p>
              <h1 className="text-[50px] leading-20 font-bold text-[#e0e0eb]">
                $21
              </h1>
              <p className="text-[#e0e0eb] font-semibold text-sm">
                Basic features for up to 10 users.
              </p>
              <button className="bg-[#141439] text-white p-3 my-6 px-24 rounded-full font-semibold text-md">
                Get Started
              </button>
            </div>
            <div className="p-4">
              <p className="text-[#e0e0eb] font-semibold text-lg">Features</p>
              <p className="text-gray-600 font-semibold text-md">
                Everything in our free plan plus...
              </p>
              <div className="space-y-5 py-4">
                <div className="flex items-center space-x-4">
                  <img
                    src="https://framerusercontent.com/images/tmTgNWqpJWLdmdOGFVoHrlKwxw.svg"
                    alt=""
                  />
                  <p className="text-gray-500 font-semibold text-md">
                    AI-Powered Insights
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <img
                    src="https://framerusercontent.com/images/tmTgNWqpJWLdmdOGFVoHrlKwxw.svg"
                    alt=""
                  />
                  <p className="text-gray-500 font-semibold text-md">
                    Seamless Integrations
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <img
                    src="https://framerusercontent.com/images/tmTgNWqpJWLdmdOGFVoHrlKwxw.svg"
                    alt=""
                  />
                  <p className="text-gray-500 font-semibold text-md">
                    Customizable Dashboards
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <img
                    src="https://framerusercontent.com/images/aAo0oEydHhKAadZ6qiX2T8bECfM.svg"
                    alt=""
                  />
                  <p className="text-gray-500 font-semibold text-md">
                    24/7 Customer Support
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <img
                    src="https://framerusercontent.com/images/aAo0oEydHhKAadZ6qiX2T8bECfM.svg"
                    alt=""
                  />
                  <p className="text-gray-500 font-semibold text-md">
                    Scalable Solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-3 space-x-8 flex flex-col md:flex-row justify-between items-center border border-gray-800 w-[90%]  md:w-[80%] mx-auto rounded-2xl space-y-4">
          <div className="space-y-3 md:w-[50%] px-3">
            <h1 className="text-2xl md:text-xl font-semibold text-gray-300">
              Try it free for 7 days
            </h1>
            <p className="text-gray-500 text-md md:text-sm font-medium">
              Experience the power of Bester with no commitment. Sign up today
              and unlock all features free for 7 days, risk-free!
            </p>
            <button className="text-white mt-3 bg-[#641EE6] p-2 font-medium px-6 rounded-full">
              Get Started
            </button>
          </div>

          <div className="myGredient p-3 space-y-4 rounded-2xl w-[100%] md:w-[50%]">
            <Marquee className="flex items-center space-x-2">
              <div className="bg-[#16162A] flex p-2  rounded-full mx-2">
                <img
                  src="https://framerusercontent.com/images/O57LSbWZwmloCyIBpxPaMnS6EI.svg"
                  alt=""
                />
                <p className="text-gray-400 text-sm font-medium px-3">
                  Upgrade Anytime
                </p>
              </div>

              <div className="bg-[#16162A] flex p-2  rounded-full mx-2">
                <img
                  src="https://framerusercontent.com/images/O57LSbWZwmloCyIBpxPaMnS6EI.svg"
                  alt=""
                />
                <p className="text-gray-400 text-sm font-medium px-3">
                  No Credit Card Required
                </p>
              </div>
              <div className="bg-[#16162A] flex p-2  rounded-full mx-2">
                <img
                  src="https://framerusercontent.com/images/O57LSbWZwmloCyIBpxPaMnS6EI.svg"
                  alt=""
                />
                <p className="text-gray-400 text-sm font-medium px-3">
                  Hassle Free SignUp
                </p>
              </div>
            </Marquee>
            <Marquee className="flex items-center space-x-2" direction="right">
              <div className="bg-[#16162A] flex p-2  rounded-full mx-2">
                <img
                  src="https://framerusercontent.com/images/O57LSbWZwmloCyIBpxPaMnS6EI.svg"
                  alt=""
                />
                <p className="text-gray-400 text-sm font-medium px-3">
                  Upgrade Anytime
                </p>
              </div>

              <div className="bg-[#16162A] flex p-2  rounded-full mx-2">
                <img
                  src="https://framerusercontent.com/images/O57LSbWZwmloCyIBpxPaMnS6EI.svg"
                  alt=""
                />
                <p className="text-gray-400 text-sm font-medium px-3">
                  No Credit Card Required
                </p>
              </div>
              <div className="bg-[#16162A] flex p-2  rounded-full mx-2">
                <img
                  src="https://framerusercontent.com/images/O57LSbWZwmloCyIBpxPaMnS6EI.svg"
                  alt=""
                />
                <p className="text-gray-400 text-sm font-medium px-3">
                  Hassle Free SignUp
                </p>
              </div>
            </Marquee>
            <Marquee className="flex items-center space-x-2">
              <div className="bg-[#16162A] flex p-2  rounded-full mx-2">
                <img
                  src="https://framerusercontent.com/images/O57LSbWZwmloCyIBpxPaMnS6EI.svg"
                  alt=""
                />
                <p className="text-gray-400 text-sm font-medium px-3">
                  Upgrade Anytime
                </p>
              </div>

              <div className="bg-[#16162A] flex p-2  rounded-full mx-2">
                <img
                  src="https://framerusercontent.com/images/O57LSbWZwmloCyIBpxPaMnS6EI.svg"
                  alt=""
                />
                <p className="text-gray-400 text-sm font-medium px-3">
                  No Credit Card Required
                </p>
              </div>
              <div className="bg-[#16162A] flex p-2  rounded-full mx-2">
                <img
                  src="https://framerusercontent.com/images/O57LSbWZwmloCyIBpxPaMnS6EI.svg"
                  alt=""
                />
                <p className="text-gray-400 text-sm font-medium px-3">
                  Hassle Free SignUp
                </p>
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
