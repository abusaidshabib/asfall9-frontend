import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {

    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1613835842551-894cdd236160?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className='text-6xl font-black text-white uppercase'>
                            Buy Car<br />
                            Your best choice<br />
                        </h1>
                        <p className='text-xl text-white pt-8 pb-10'>You can find the best reseller car for yourself. All the payment and other important things are heavy secure.</p>
                        <Link to="/allcars" className="btn colorGray border-none rounded-none bg-colorYellow bg-colorYellowDk mr-5" > sell all products</Link>
                    </div>
                </div>
            </div>
        </div>



    );
};

export default HeroSection;