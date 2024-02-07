import React from 'react';
import "./skills.css";
import frontendlogo from "../../assets/Frontendlogo.png";
import backendlogo from "../../assets/backendlogo.png";

const Skills = () => {
    return (
        <div>
            <section id='skills'>
                <span className='skillTitle'>What I do</span>
                <span className="skillDesc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi aliquid explicabo inventore adipisci voluptates quisquam iusto ipsa iure earum, minima deleniti officia laudantium dicta minus beatae nulla libero cumque ullam.</span>
                <div className="skillBars">
                    <div className="skillBar">
                        <img src={frontendlogo} alt="Frontend Developer" className='skillBarImg' />
                        <div className="skillBarText">
                            <h2>FrontEnd designer</h2>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>
                <div className="skillBars">
                    <div className="skillBar">
                        <img src={backendlogo} alt="Backend Developer" className='skillBarImg' />
                        <div className="skillBarText">
                            <h2>server-side developer</h2>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Skills
