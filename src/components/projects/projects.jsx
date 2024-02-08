import React from 'react';
import './projects.css';
import LMS from "../../assets/LMS.png"
import Todo from "../../assets/Todoapp.png"

const Projects = () => {
    return (
        <section id='projects'>
            <h2 className="projectTitle">My Portfolio</h2>
            <span className="projectDisc">I am a dedicated web developer committed to continuous learning and growth. With each passing day, I strive to enhance my skills and knowledge in the field of web development, driven by a passion for crafting exceptional digital experiences. Eager to embark on new challenges, I am excited about the prospect of securing a job where I can apply my expertise and contribute to innovative projects."</span>
            <div className="projectImgs">
                <div className="Imgs">
                    <img src={LMS} alt="" className="projectImg" />
                    <a href="https://learning-management-system-kbrl.onrender.com" target='blank'>
                        <h3 className="projectImgHeading">Learning Management System</h3>
                    </a>
                </div>
                <div className="Imgs">
                    <img src={Todo} alt="" className="projectImg" />
                    <a href="https://todo-app-huuo.onrender.com" target='blank' className="projectImgHeading">
                        <h3>Todo Management App</h3>
                    </a>
                </div>
            </div>
            <button className="projectBtn">See More</button>
        </section>
    )
}

export default Projects
