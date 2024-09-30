import React, { useState } from "react";
import Button from '../Buttons/Button';
import AvatarBage from "../AvatarBage/AvatarBage";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import Calendar from "../Calendar/Calendar";
import StockCard from "../Cards/WatchlistCards/StockCard";
import StockCard2 from "../Cards/WatchlistCards/StockCard2";
import Carousel from "../Carousel/Carousel";
import RadarChart from "../Charts/Radar";
import DonutHollow from "../Charts/DonutHollow";
import SellBuy1 from "../Charts/SellBuy1";
import SellBuy2 from "../Charts/SellBuy2";
import SellBuy3 from "../Charts/SellBuy3";
import SellBuy4 from "../Charts/SellBuy4";
import DoubleLine from "../Charts/DoubleLine";
import Line from "../Charts/Line";
import Monte from "../Charts/Monte";
import Checkbox from "../Checkbox/Checkbox";
import Collapse from "../Collapse/Collapse";
import NewsCard from "../Cards/News/NewsCard";
import Inputs from "../Inputs/Inputs";
import Pagination from "../Pagination/Pagination";
import Radio from "../Radio/Radio";
import RegisterForm from "../Forms/RegisterForm";
import Slider from "../Slider/Slider";
import Switch from "../Switch/Switch";
import Tags from "../Tags/Tags";
import TimePicker from "../TimePicker/TimePicker";
import TooltipBtn from "../TooltipBtn/TooltipBtn";
import Upload from "../Upload/Upload";
import Ticker from "../Blocks/TickerInfo/Ticker";
import Watchlist from "../Blocks/Watchlist/Watchlist";
import './sidebar.css'
import Hero from "../Blocks/Hero/Hero";
import About from "../Blocks/About/About";
import About2 from "../Blocks/About/About2";
import Skills from "../Blocks/Skills/Skills";
import Contact1 from "../Blocks/Contact/Contact1";
import Contact2 from "../Blocks/Contact/Contact2";
import Portfolio from "../Blocks/Portfolio/Portfolio";
import Footer2 from "../Blocks/Footers/Footer2";

const componentsAll = () => {
    const [activeItem, setActiveItem] = useState(0);
    const menuItems = [
        { label: "avatar", href: "#avatar" },
        { label: "breadcrumbs", href: "#breadcrumbs" },
        { label: "buttons", href: "#buttons" },
        { label: "calendar", href: "#calendar" },
        { label: "cards(examples)", href: "#cards" },
        { label: "carousel", href: "#carousel" },
        { label: "charts", href: "#charts" },
        { label: "checkbox", href: "#checkbox" },
        { label: "collapse", href: "#collapse" },
        { label: "grid(news)", href: "#grid" },
        { label: "inputs", href: "#inputs" },
        { label: "pagination", href: "#pagination" },
        { label: "radio", href: "#radio" },
        { label: "registration", href: "#registration" },
        { label: "slider", href: "#slider" },
        { label: "switch", href: "#switch" },
        { label: "tags", href: "#tags" },
        { label: "timePicker", href: "#timePicker" },
        { label: "tooltipBtn", href: "#tooltipBtn" },
        { label: "upload", href: "#upload" },
        { label: "ticker", href: "#ticker" },
        { label: "watchlist", href: "#watchlist" },
        { label: "hero", href: "#hero" },
        { label: "about", href: "#about" },
        { label: "skills", href: "#skills" },
        { label: "contact", href: "#contact" },
        { label: "portfolio", href: "#portfolio" },
        { label: "footer", href: "#footer" },
    ];

    const images = [
        'https://via.placeholder.com/600x400?text=Slide+1',
        'https://via.placeholder.com/600x400?text=Slide+2',
        'https://via.placeholder.com/600x400?text=Slide+3',
    ];

    const handleScrollToSection = (index, href) => {
        setActiveItem(index);
        const section = document.querySelector(href);
        if (section) {
            const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = sectionPosition - (window.innerHeight / 2) + (section.offsetHeight / 2);

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
    };


    return (
        <div className=''>

            <div className='pt-[70px]'>
                <div
                    className="fixed top-0 left-0 h-full w-[200px] bg-gradient-to-b from-[#1e1f29] to-[#3e3a49] shadow-lg text-[#CDD7D6] overflow-y-auto no-scrollbar">
                    <div className="flex flex-col items-center space-y-6 py-6">
                        <h2 className="text-2xl font-bold text-white">Menu</h2>
                        <ul className="flex flex-col items-start w-full px-4">
                            {menuItems.map((item, index) => (
                                <li key={index} className="w-full mb-2">
                                    <a
                                        href={item.href}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleScrollToSection(index, item.href);
                                        }}
                                        className={`block w-full py-2 px-4 rounded-lg text-sm transition-all duration-200 ${activeItem === index ? "bg-[#fca311] text-black" : "hover:bg-[#2c2e3e] hover:text-white"}`}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className='ml-[200px]'>
                    <div id="avatar">
                        <AvatarBage
                            imageUrl="https://via.placeholder.com/150"
                            badgeContent="3"
                        />
                    </div>
                    <div id="breadcrumbs">
                        <Breadcrumbs/>
                    </div>
                    <div id="buttons" className="flex flex-wrap justify-center items-center bg-sliderBgColor-500">
                        <Button styleType="purple">Try out</Button>
                        <Button styleType="purpleOutline">Try out</Button>
                        <Button styleType="green">Try out</Button>
                        <Button styleType="greenOutline">Try out</Button>
                        <Button styleType="beige">Try out</Button>
                        <Button styleType="beigeOutline">Try out</Button>
                        <Button styleType="yellow">Try out</Button>
                        <Button styleType="yellowOutline">Try out</Button>
                    </div>
                    <div id="calendar">
                        <Calendar/>
                    </div>
                    <div id="cards" className="bg-sliderBgColor-500 flex items-center justify-center p-4">
                        <StockCard2/>
                    </div>
                    <div id="cards" className="bg-sliderBgColor-500 flex items-center justify-center p-4">
                        <StockCard/>
                    </div>
                    <div id="carousel">
                        <Carousel items={images}/>
                    </div>
                    <div id="charts">
                        <RadarChart/>
                        <DonutHollow/>
                        <SellBuy1/>
                        <SellBuy2/>
                        <SellBuy3/>
                        <SellBuy4/>
                        <DoubleLine/>
                        <Line/>
                        <Monte/>
                    </div>
                    <div id="checkbox">
                        <Checkbox/>
                    </div>
                    <div id="collapse" className="my-5">
                        <Collapse title="Section 1" isOpenDefault={true}>
                            <p>This is the content of section 1.</p>
                        </Collapse>
                        <Collapse title="Section 2">
                            <p>This is the content of section 2.</p>
                        </Collapse>
                        <Collapse title="Section 3">
                            <p>This is the content of section 3.</p>
                        </Collapse>
                    </div>
                    <div id="grid">
                        <NewsCard/>
                    </div>
                    <div id="inputs">
                        <Inputs/>
                    </div>
                    <div id="pagination">
                        <Pagination/>
                    </div>
                    <div id="radio">
                        <Radio/>
                    </div>
                    <div id="registration">
                        <RegisterForm/>
                    </div>
                    <div id="slider">
                        <Slider/>
                    </div>
                    <div id="switch">
                        <Switch/>
                    </div>
                    <div id="tags">
                        <Tags/>
                    </div>
                    <div id="timePicker">
                        <TimePicker/>
                    </div>
                    <div id="tooltipBtn">
                        <TooltipBtn tooltipText="Tooltip on hover" tooltipPosition="hover">
                            Hover Me
                        </TooltipBtn>
                        <TooltipBtn tooltipText="Tooltip on click" tooltipPosition="click">
                            Click Me
                        </TooltipBtn>
                    </div>
                    <div id="upload">
                        <Upload/>
                    </div>
                    <div id="ticker">
                        <Ticker/>
                    </div>
                    <div id="watchlist">
                        <Watchlist/>
                    </div>
                    <div id='hero'>
                        <Hero/>
                    </div>
                    <div id='about'>
                        <About/>
                        <About2/>
                    </div>
                    <div id='skills'>
                        <Skills/>
                    </div>
                    <div id='contact'>
                        <Contact1/>
                        <Contact2/>
                    </div>
                    <div id='portfolio'>
                        <Portfolio/>
                    </div>
                    <div id='footer'>
                        <Footer2/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default componentsAll;