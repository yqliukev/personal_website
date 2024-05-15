import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component" 
import "react-vertical-timeline-component/style.min.css"
import SchoolIcon from "@material-ui/icons/School"

function Experience() {
  return (
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
  )
}

export default Experience