import React from 'react';
import "./About.css";

const about = () => {
  return (
    <div className="Ab">
        <div className="Ab-left">
            <div className="Ab-bg"></div>
        </div>
        <div className="Ab-right">
           <div className="Ab-desc">
                <div className="Ab-tittle">About Me</div>
                <br></br>
                <hr className="Ab-Line"/>
                    <p className="des-Cont">
                        Hello, I am Vinay Mourya, Student of Computer Science Engineering
                        at Indore Institute of Science and Technology (2024).
                        I am an Enthusiastic learner. I love to Explore things.
                        I like Problem solving and I have Solved Many Data Structure
                        and algorithms problems at LeetCode, Geeks For Geeks.
                        I am a 3 star Coder at CodeChef and Pupil at CodeForces.
                        Along with Cp and I am also Exploring Web Development.
                    </p>
                    <p className="des-Cont1">Thanks for Visiting My profile let's connect.</p>
           </div>
        </div>
    </div>
  )
}

export default about;
