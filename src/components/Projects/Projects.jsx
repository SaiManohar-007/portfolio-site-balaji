import React from 'react'
import './Projects.css'
import theme_pattern from '../../assets/theme_pattern.svg'
// import p1 from '../../assets/blinkit-balaji.png'
import p1 from '../../assets/bl.png'
import p2 from '../../assets/veh.png'

const Projects = () => {
    return (
        <div>
            <div id='projects' className='projects'>
                <div className="projects-title">
                    <h1>My Projects</h1>
                    <img src={theme_pattern} />
                </div>
                <div className="projects-showcase">
                    <div className='projects-one'>
                        <h1>Blink It Dashboard</h1>
                        <img src={p1} />
                        <p> <span>Description:</span>Analyzed EV datasets to evaluate market trends, consumer preferences and regional adoption rates using Power BI.
                            Developed interactive dashboards with KPIs like total vehicles, BEV/PHEV market share, and average electric range.
                              </p>
                        <p><span>Technologies Used:</span> PowerBI </p>
                        <br />
                        <a href='https://app.powerbi.com/view?r=eyJrIjoiNWI3Mzk0ODUtNzk4Mi00ZDVlLWEyMDUtNDhmMzMyMzM5ZGFkIiwidCI6ImUwNjA3OWRiLWM4ZTAtNDc1Yi1iNDFjLTQ2Y2E0MmEwMmZkYSJ9' target='_blank'>Project Link</a>
                    </div>
                    <div className="projects-two">
                        <h1>Electric Vehicle Market Analysis</h1>
                        <img src={p2} />
                        <p> <span>Description:</span> Conducted an end-to-end analysis of electric vehicle (EV) data using Power BI to evaluate market trends, technological advancements, and consumer preferences.
                        </p>
                        <p><span>Technologies Used:</span> PowerBI </p>
                        <br />
                        <a href='https://app.powerbi.com/view?r=eyJrIjoiYzBmN2JhMTYtMGY2YS00M2Q0LTkwM2MtMzUzY2Q3NGQwMDQ4IiwidCI6ImUwNjA3OWRiLWM4ZTAtNDc1Yi1iNDFjLTQ2Y2E0MmEwMmZkYSJ9' target='_blank'>Project Link</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects