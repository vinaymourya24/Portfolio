import React from 'react';
import "./intro.css";

const Intro = () => {
  return (
    <div className="intro">
         <div className="intro-left">
            <div className="intro-left-description">
                <h4 className="intro-sentence">Hi! , I am</h4>
                <h1 className="my-name">Vinay Mourya</h1>
                <div className="intro-tittle">
                    <div className="intro-tittle-wrapper">
                        <div className="tittle-item">Web developer</div>
                        <div className="tittle-item">Competitive Programmer</div>
                        <div className="tittle-item">learner..</div>
                    </div>
                </div>
                <p className="intro-phrase">wake up &rarr; enjoy &rarr; code &rarr; sleep</p>
            </div>
         </div>
         <div className="intro-right">
        
           <div className="intro-bg"></div>
         </div>
    </div>
  )
}

export default Intro;
