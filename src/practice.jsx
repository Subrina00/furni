// import React from "react";
import React, { useState } from "react";
import Button from "./components/Button";
import Product from "./components/Product";
import Review from "./components/Review";
import Footer from "./components/Footer";

import { FiShoppingCart } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";

import smartWatch from "./assets/smartWatch.webp";
import logo from "./assets/logo.jpg";
import home from "./assets/home.jpg";

import cabinet from "./assets/cabinet.webp";
import chair from "./assets/chair.jpg";
import dining from "./assets/dining.webp";
import dressing from "./assets/dressing.jpeg";
import foldbed from "./assets/foldBed.webp";
import office from "./assets/office.jpeg";
import sofa from "./assets/sofa.webp";
import tv from "./assets/tv.webp";
import wardrobe from "./assets/wardrobe.jpeg";
import chole from "./assets/chole.avif";
import eddie from "./assets/eddie.webp";
import kentu from "./assets/kentu.webp";


function Practice() {

    const [open, setOpen] = useState(false);

  return (

    <div>

    {/* header section */}


    <header id="header">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 shadow-sm fixed w-full top-0 z-100 bg-white">
            <div className="flex justify-between items-center h-18">
            <img src={logo} alt="" className="w-[150px] m-2" />
            <ul className=" hidden md:flex space-x-6">
                <li className="font-semibold text-gray-800 cursor-pointer hover:text-gray-900 duration-300"><a href="#">About</a></li>
                <li className="font-semibold text-gray-800 cursor-pointer hover:text-gray-900 duration-300"><a href="#">Product</a></li>
                <li className="font-semibold text-gray-800 cursor-pointer hover:text-gray-900 duration-300"><a href="#">Review</a></li>
                <li className="font-semibold text-gray-800 cursor-pointer hover:text-gray-900 duration-300"><a href="#">Contact</a></li>
            </ul>
            <div className="flex items-center space-x-3">
                <div className="flex justify-center items-center gap-2 relative">
                    <button onClick={() => setOpen(!open)} className="p-2 rounded-full hover:bg-gray-200 transition"><FaSearch className="text-gray-500" /></button>
                    <input type="text" placeholder="Search..." className={`transition-all duration-300 absolute right-0 top-0 ${open ? "w-64 px-2 py-1 border rounded-lg" : "w-0 p-0 border-0"} outline-none`} />
                </div>
                <button className="p-2 rounded-xl hover:bg-gray-200 cursor-pointer transition"><FiShoppingCart className="text-black" /></button>
                <Button>Log In</Button>
                <Button>Sign Up</Button>
            </div>
            <div className="sm:hidden">
                <button className="p-2 rounded-md hover: bg-gray-200 transition">☰</button>
            </div>
        </div>
        </div>
    </header>



    {/* home page */}


    <section id="home">
        <div className="items-center md:flex md:space-x-3 md:mx-20 mx-4 my-6 p-2 lg:space-x-5">
            <div className="py-10 px-20 my-8">
                <h1 className="text-gray-800 text-shadow-2xs font-bold text-3xl md:text-4xl lg:text-5xl my-4">FurniHome Furniture Shop</h1>
                <h4 className="text-gray-700 font-semibold text-xl md:text-2xl my-4">Decorate Your Home and Office Gorgeously</h4>
                <p className="text-gray-600 text-sm my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, amet similique 
                    rem hic facilis dolores beatae sequi nulla ipsam pariatur magnam, et ducimus 
                    tempore laborum a perferendis vero dicta natus?</p>
                <Button>Read More</Button>
            </div>
            <div className="py-10 my-8">
                <img src={home} alt="" />
            </div>
        </div>
    </section>



    {/* collection page */}


    {/* Loop could be used with database here */}


    <section id="product" className="mb-10">
        <div className="flex items-center justify-center my-6">
            <h4 className="text-2xl font-bold text-gray-700 md:text-3xl">Collections</h4>
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20 py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-between items-center gap-20">
                <div>
                    <Product image={tv} name="TV Cabinet" price="25000"/>
                </div>
                <div>
                    <Product image={office} name="Office Table" price="42000"/>
                </div>
                <div>
                    <Product image={foldbed} name="Foldable Bed" price="71500"/>
                </div>
                <div>
                    <Product image={chair} name="Easy Chair" price="17000"/>
                </div>
                <div>
                    <Product image={cabinet} name="Kitchen Cabinet" price="39000"/>
                </div>
                <div>
                    <Product image={dressing} name="Dressing Table" price="27000"/>
                </div>
                <div>
                    <Product image={dining} name="Dining Table" price="68000"/>
                </div>
                <div>
                    <Product image={sofa} name="Sofa Set" price="163000"/>
                </div>
                <div>
                    <Product image={wardrobe} name="Wardrobe Cabinet" price="121000"/>
                </div>
            </div>
        
        </div>
    </section>


    {/* Review section */}



    <section id="review" className="my-10">
        <div className="flex items-center justify-center my-12">
            <h4 className="text-2xl font-bold text-gray-700 md:text-3xl">What Our Customers Say</h4>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20 py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div>
                    <Review name="Chole Sprouse" image={chole} rating={4}
                        text="Absolutely love this product! Great quality and fast delivery."/>
                </div>
                <div>
                    <Review name="Kentu Yamazaki" image={kentu} rating={5}
                        text="Absolutely love this product! Great quality and fast delivery."/>
                </div>
                <div>
                    <Review name="Eddie Redmayne" image={eddie} rating={3}
                        text="Absolutely love this product! Great quality and fast delivery."/>
                </div>
            </div>
        </div>

         

    </section>



    {/* footer section */}


    <footer id="footer">
         <Footer />
    </footer>

    </div>
  
  
  );
}

export default Practice;
