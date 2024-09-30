import React from "react";
import NavbarHome from "../../Navbars/NavbarHome";
import img1 from './tusur.png';
import { FaTelegramPlane } from 'react-icons/fa';
import CollapseHome from "../../Collapse/CollapseHome";
import Footer2 from "../Footers/Footer2";

const HomePage = () => {

    return (
        <div>
            <div>
                <NavbarHome />
            </div>

            <div className="flex flex-col justify-center bg-[#e3f2fd] mt-[64px] p-10">
                <div className='flex flex-col items-center text-center'>
                    <h1 className="text-blue-950 text-6xl font-extrabold mb-4">Portfolio Showcase</h1>
                    <p className="text-blue-950 text-2xl mb-6">Crafted with cutting-edge technologies</p>
                    <div className="w-[300px] flex justify-between mb-8">
                        <span className="text-blue-950 text-lg px-4">React</span>
                        <span className="text-blue-950 text-lg px-4">Tailwind</span>
                        <span className="text-blue-950 text-lg px-4">JavaScript</span>
                    </div>
                    <button className="bg-gray-700 text-white w-[160px] px-6 py-3 rounded-full hover:bg-gray-600 hover:scale-105 transform transition duration-300">
                       Go to portfolio
                    </button>
                </div>
            </div>

            <div className="flex flex-col justify-center bg-gradient-to-b from-[#e3f2fd] to-[#B5DEFF] p-10">
                <div className='p-6 border-4 border-[#1D84B5] rounded-lg shadow-xl'>
                    <div className='flex justify-center'>
                        <h1 className='text-[#0A2239] text-5xl font-bold mb-4'>Made by</h1>
                    </div>

                    <div className='flex flex-row justify-between my-5'>
                        <div>
                            <p className="text-blue-950 text-2xl font-semibold mb-2">Vladimir</p>
                            <p className="text-blue-950 text-lg mb-4">A beginner developer, focused on building functional web applications.</p>
                            <div className="space-y-2">
                                <a href="mailto:johndoe@example.com" className="text-blue-950 underline">Contact Me</a>
                                <a href="https://t.me/bigboyvova"
                                   className="text-blue-950 flex items-center mt-1 hover:text-[#0088cc] transition duration-200">
                                    <FaTelegramPlane size={19} />
                                    <span className='ml-[3px]'>Telegram</span>
                                </a>
                            </div>
                        </div>

                        <div className='flex flex-col items-end'>
                            <p className="text-blue-950 text-lg mb-1">Currently pursuing Bachelor's degree, 1st year</p>
                            <p className="text-blue-950 text-lg mb-4">Software Engineering</p>
                            <a href="https://tusur.ru/en/degree-programs/bachelor-programs/bachelor-program-program-engineering">
                                <div
                                    className="flex flex-col w-[200px] h-[200px] justify-center rounded-xl bg-cover bg-center bg-no-repeat transition duration-300 hover:scale-105"
                                    style={{ backgroundImage: `url(${img1})` }}>
                                </div>
                            </a>
                        </div>

                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center bg-gradient-to-t from-[#e3f2fd] to-[#B5DEFF] p-10">
                <div className='flex flex-col justify-center'>
                    <p className="text-blue-950 font-bold text-3xl mb-6">Technologies used in this project:</p>
                </div>

                <div className="flex justify-around mt-6 space-x-8">
                    {[
                        { name: "React", color: "#4A90E2", bgColor: "#EFF8FF", description: "A powerful library for building dynamic UIs." },
                        { name: "Tailwind CSS", color: "#2D9CDB", bgColor: "#E0F7FA", description: "A utility-first CSS framework for rapid development." },
                        { name: "JavaScript", color: "#F29D35", bgColor: "#FFF7E0", description: "The programming language of the web, powering interactivity." }
                    ].map((tech, idx) => (
                        <div key={idx} className={`flex flex-col items-center p-6 border-4 border-[${tech.color}] bg-[${tech.bgColor}] rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105`}>
                            <div className={`text-[${tech.color}] text-4xl font-bold mb-4`}>{tech.name}</div>
                            <p className="text-blue-950 text-md">{tech.description}</p>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col mt-10 space-y-6">
                    <CollapseHome title="React">
                        <div className="p-4 border-2 border-[#4A90E2] bg-[#EFF8FF] rounded-lg shadow-lg">
                            <p className="text-blue-950 text-lg">React is highly flexible and helps build scalable UIs with component-based architecture.</p>
                        </div>
                    </CollapseHome>

                    <CollapseHome title="Tailwind CSS">
                        <div className="p-4 border-2 border-[#2D9CDB] bg-[#E0F7FA] rounded-lg shadow-lg">
                            <p className="text-blue-950 text-lg">Tailwind speeds up development by providing a set of utility classes directly in HTML.</p>
                        </div>
                    </CollapseHome>

                    <CollapseHome title="JavaScript">
                        <div className="p-4 border-2 border-[#F29D35] bg-[#FFF7E0] rounded-lg shadow-lg">
                            <p className="text-blue-950 text-lg">JavaScript enables dynamic web applications, making the web feel alive.</p>
                        </div>
                    </CollapseHome>
                </div>
            </div>

            <div>
                <Footer2 />
            </div>
        </div>
    );
}

export default HomePage;
