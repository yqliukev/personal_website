import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import "../styles/Home.css" 
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component" 
import "react-vertical-timeline-component/style.min.css"
import SchoolIcon from "@material-ui/icons/School"


function Home() {
    return (
        <div className="home">
            <div className="about">
                <h2>Hello, I'm Kevin</h2>
                <div classNasme = "prompt">
                    <p> Full Stack Developer, Data Analyst, ML Developer </p>
                    <LinkedInIcon />
                    <GitHubIcon />
                    <EmailIcon />   
                </div>
            </div> 

            <div className="experience"> 
            <VerticalTimeline lineColor="black">
                <VerticalTimelineElement 
                className="vertical-timeline-element--education"
                date="2014-2021"
                iconStyle={{background: "darkgrey", colo: "black"}}
                icon={<SchoolIcon/>}>
                <h3 className="vertical-timeline-element-title">
                    University of Toronto Schools, Toronto Canada
                </h3>
                <p>
            
                </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
            </div>

            <div className ="skills">
                <h1> Skills </h1>
                <ol className = "list">
                    <li className = "item">
                        <h2> Development </h2>
                        <span> HTML, CSS, C++, React </span>
                    </li>
                    <li className = "item">
                        <h2> Data Analysis </h2>
                        <span> Tableau, PowerBI, Python, Apache Spark </span>
                    </li>
                    <li className = "item">
                        <h2> Machine Learning </h2>
                        <span> R, Pytorch, Tensorflow </span>
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default Home