import "./Expertise.css"

import React from 'react'

const Expertise = () => {
    return (
        <div className="expertise" id="expertise">
            <div className="exp-title">
                <h1># Expertise</h1>
            </div>
            <div className="card">
                <div className="tools">
                    <div className="circle">
                        <span className="red box"></span>
                    </div>
                    <div className="circle">
                        <span className="yellow box"></span>
                    </div>
                    <div className="circle">
                        <span className="green box"></span>
                    </div>
                </div>
                <div className="card__content">
                    <h1 style={{ color: "#1ee7f2", fontSize: "1rem", padding: "1rem 0 1rem 1.5rem" }}>Front End Development</h1>
                    <h4 style={{ padding: "0 0 1rem 2rem" }}><ul>
                        <li>HTML5</li>
                        <li>CSS, Bootstrap</li>
                        <li>Javascript, React JS</li>
                    </ul>
                    </h4>
                    <h1 style={{ color: "#1ee7f2", fontSize: "1rem", padding: "1rem 0 1rem 1.5rem" }}>Back End Development</h1>
                    <h4 style={{ padding: "0 0 1rem 2rem" }}>
                        <ul>
                            <li>Python Django</li>
                        </ul>
                    </h4>
                </div>
            </div>
            <div className="card2">
                <div className="tools">
                    <div className="circle">
                        <span className="red box"></span>
                    </div>
                    <div className="circle">
                        <span className="yellow box"></span>
                    </div>
                    <div className="circle">
                        <span className="green box"></span>
                    </div>
                </div>
                <div className="card__content">
                    <h1 style={{ color: "#1ee7f2", fontSize: "1rem", padding: "1rem 0 1rem 1.5rem" }}>Database Management</h1>
                    <h4 style={{ padding: "0 0 1rem 2rem" }}><ul>
                        <li>MySQL</li>
                        <li>Postgre SQL</li>
                    </ul>
                    </h4>
                    <h1 style={{ color: "#1ee7f2", fontSize: "1rem", padding: "1rem 0 1rem 1.5rem" }}>Other Programming Languages</h1>
                    <h4 style={{ padding: "0 0 1rem 2rem" }}>
                        <ul>
                            <li>Python</li>
                            <li>C</li>
                            <li>Java</li>
                        </ul>
                    </h4>
                    <h1 style={{ color: "#1ee7f2", fontSize: "1rem", padding: "1rem 0 1rem 1.5rem" }}>Technologies</h1>
                    <h4 style={{ padding: "0 0 1rem 2rem" }}>
                        <ul>
                            <li>git and github</li>
                            <li>LaTEX</li>
                        </ul>
                    </h4>
                </div>
            </div>
        </div>
    )
}

export default Expertise