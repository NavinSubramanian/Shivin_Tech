import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const CourseListItem = (props) => {
  return (
    <div className='courseListItem'>
        <img src={`${props.imageUrl}`} alt="" />
        <div className='courseTags'>
            <p className='ptagSVG'>
                <FontAwesomeIcon icon={faBook} />
                {props.chapters} chapters
            </p>
            <p>{props.coursetype}</p>
        </div>
        <h2>{props.title}</h2>
        <p>{props.about.length > 100 ? props.about.slice(0, 100) + "..." : props.about}</p>
        <Link to={`/courses/${props.courseLink}`}>View More &gt;</Link>
    </div>
  )
}

export default CourseListItem