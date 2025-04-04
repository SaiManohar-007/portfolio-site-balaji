import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_image from '../../assets/about_profile.svg'

const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About Me</h1>
                <img src={theme_pattern} alt='' />
            </div>
            <div className="about-section">
                <div className="about-left">
                    {/* <img src={profile_image} /> */}
                    <h1>Education</h1>
                    <h2>Graduation:</h2>
                    <p> Kakinada Institute Of Engineering And Technology (2020-2024)</p>
                    <h2>Intermediate:</h2>
                    <p>Aditya Junior College (2018-2020)</p>
                    <h2>SSC:</h2>
                    <p>Sri Vivekananda High School (2017-2018)</p>
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p><span>Summary:</span> Recent 2024 graduate in Computer Science and Engineering (CSE) with specialization in Artificial Intelligence and Machine Learning (AI-ML). A passionate data analyst with expertise in data visualization and insights generation. Proficient in Power BI, Tableau, Excel, SQL and Python. Seeking a challenging entry-level role to apply my skills and knowledge in driving business growth through data-driven decision making.</p>
                    </div>
                    <div className="about-skills">
                        <h1>My Skills</h1>
                        <div className="about-skill">
                            <p>Excel</p> <hr style={{ width: "95%" }} />
                        </div>
                        <div className="about-skill">
                            <p>Python</p> <hr style={{ width: "55%" }} />
                        </div>
                        
                        <div className="about-skill">
                            <p>PowerBi</p> <hr style={{ width: "90%" }} />
                        </div>
                        <div className="about-skill">
                            <p>SQL</p> <hr style={{ width: "65%" }} />
                        </div>
                        <div className="about-skill">
                            <p>Tableu</p> <hr style={{ width: "80%" }} />
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="about-achievements">
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p> years of experience</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>90+</h1>
                    <p> Projects done</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>15+</h1>
                    <p> happy cliens</p>
                </div>
            </div> */}
        </div>
    )
}

export default About