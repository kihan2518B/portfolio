import React from 'react';
import './intro.css';
import bg from '../../assets/kishan_image.png'

const Intro = () => {
    return (
        <section id='intro'>
            <div className="introcontent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Kishan</span><br />Website Developer</span>
                <p className="introPara">I'm a computer engineering student passionate about <br /> technology.Currently diving into full-stack web development,<br /> I enjoy creating seamless and engaging digital experiences.</p>
            </div>
            <img src={bg} alt="Me" className='bg' />
        </section>
    )
}

export default Intro;
