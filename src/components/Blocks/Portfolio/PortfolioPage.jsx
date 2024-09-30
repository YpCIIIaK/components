import React, { useState } from "react";
import Footer2 from "../Footers/Footer2";
import NavbarHome from "../../Navbars/NavbarHome";

const PortfolioPage = () =>{

    return(
        <div>
            <div>
                <NavbarHome/>
            </div>

            <div className='mt-[64px]'>
                <div className="flex flex-col items-center text-center bg-[#e3f2fd] p-10">
                    <h1 className="text-blue-950 text-6xl font-extrabold mb-4">Welcome to My Portfolio</h1>
                    <p className="text-blue-950 text-2xl mb-6">A collection of my work and skills</p>
                </div>
            </div>

            <div>
                <div className="flex flex-wrap justify-around mt-10 p-10 space-x-6">
                    {[
                        {name: "Project 1", description: "This website", link: "#"},
                        {name: "Project 2", description: "Description of project 2", link: "#"},
                        {name: "Project 3", description: "Description of project 3", link: "#"},
                    ].map((project, idx) => (
                        <div key={idx}
                             className="flex flex-col items-center p-6 border-4 border-blue-500 bg-blue-50 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105">
                            <h2 className="text-blue-950 text-3xl font-bold mb-4">{project.name}</h2>
                            <p className="text-blue-950 mb-6">{project.description}</p>
                            <a href={project.link}
                               className="text-blue-500 underline hover:text-blue-700 transition duration-200">View
                                Project</a>
                        </div>
                    ))}
                </div>

            </div>

            <div>
                <Footer2/>
            </div>
        </div>
    );
};

export default PortfolioPage;