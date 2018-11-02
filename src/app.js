import React from 'react'

import './app.css'
import Navbar from './navbar.js'

export default class App extends React.Component {
        constructor(props)  {
            super(props)
            this.state = {
                email: [
                    {sender:"John Doe",
                subject:"Regarding Meeting"},
                {sender:"John Doe",
                subject:"Regarding Meeting"},
                {sender:"John Doe",
                subject:"Regarding Meeting"},
                ]

            }
            this.display = this.display.bind(this);
            this.remove = this.remove.bind(this);
        }

        display(e) {
            console.log(document.getElementsByClassName(e.target.id))
            document.getElementsByClassName(e.target.id)[0].classList.add('display')
            
        }

        remove(e) {
            console.log(document.getElementsByClassName(e.target.id))
            document.getElementsByClassName(e.target.id)[0].classList.remove('display')
        } 
        render() {
            return(
                <div>
                    <Navbar />
                <div class="email-box">
                    <div class="first-part">
                        <ul class="taskbar">
                            <li  class="taskbar-item"><div id="compose" className=" log comp-logo icon " onMouseEnter={this.display} onMouseLeave={this.remove}><img className="icon-img" src={require("./trash.png")}></img></div><div className="log label compose">Compose</div></li>
                            <li  class="taskbar-item"><div id="inbox" className="log in-logo icon " onMouseEnter={this.display} onMouseLeave={this.remove}><img className="icon-img" src={require("./trash.png")}></img></div><div className="log label inbox">Inbox</div></li>
                            <li  class="taskbar-item"><div id="starred" className="log star-logo icon " onMouseEnter={this.display} onMouseLeave={this.remove}><img className="icon-img" src={require("./trash.png")}></img></div><div className="log label starred">Starred</div></li>
                            <li class="taskbar-item"><div  id="drafts" className="log draft-logo icon " onMouseEnter={this.display} onMouseLeave={this.remove}><img className="icon-img" src={require("./trash.png")}></img></div><div className="log label drafts">Drafts</div></li>
                            <li  class="taskbar-item"><div id="archive" className="log arch-logo icon " onMouseEnter={this.display} onMouseLeave={this.remove}><img className="icon-img" src={require("./trash.png")}></img></div><div className="log label archive">Archive</div></li>
                            <li  class="taskbar-item"><div id="sentItems" className="log sent-logo icon" onMouseEnter={this.display} onMouseLeave={this.remove}><img className="icon-img" src={require("./trash.png")}></img></div><div className="log label sentItems">Sent Items</div></li>
                            <li  class="taskbar-item"><div id="spam" className="log spam-logo icon" onMouseEnter={this.display} onMouseLeave={this.remove}><img className="icon-img" src={require("./trash.png")}></img></div><div className="log label spam">Spam</div></li>
                        </ul>
                    </div>
                   
            <div class="second-part">
            <ul>
                <li>
                    <div class="mini-grid">
                    <div class="circle">
                    </div>
                    <div>
                    <h2 class="mail-sender">
                        John Doe
                    </h2>
                    <p class="mail-subject">Hello there spam mail...</p>
                    </div>
                    <div class="forward-icon">
                    </div>
                    </div>
                </li>
                <li>
                        <div class="mini-grid">
                        <div class="circle">
                        </div>
                        <div>
                        <h2 class="mail-sender">
                            John Doe
                        </h2>
                        <p class="mail-subject">Hello there spam mail...</p>
                        </div>
                        </div>
                    </li>
                    <li>
                            <div class="mini-grid">
                            <div class="circle">
                            </div>
                            <div>
                            <h2 class="mail-sender">
                                John Doe
                            </h2>
                            <p class="mail-subject">Hello there spam mail...</p>
                            </div>
                            </div>
                        </li>
                        <li>
                    <div class="mini-grid">
                    <div class="circle-dark">
                    </div>
                    <div>
                    <h2 class="mail-sender">
                        John Doe
                    </h2>
                    <p class="mail-subject">Hello there spam mail...</p>
                    </div>
                    <div class="forward-icon">
                    </div>
                    </div>
                </li>
                <li>
                    <div class="mini-grid">
                    <div class="circle-dark">
                    </div>
                    <div>
                    <h2 class="mail-sender">
                        John Doe
                    </h2>
                    <p class="mail-subject">Hello there spam mail...</p>
                    </div>
                    <div class="forward-icon">
                    </div>
                    </div>
                </li>
                <li>
                    <div class="mini-grid">
                    <div class="circle">
                    </div>
                    <div>
                    <h2 class="mail-sender">
                        John Doe
                    </h2>
                    <p class="mail-subject">Hello there spam mail...</p>
                    </div>
                    <div class="forward-icon">
                    </div>
                    </div>
                </li>
                <li>
                    <div class="mini-grid">
                    <div class="circle-dark">
                    </div>
                    <div>
                    <h2 class="mail-sender">
                        John Doe
                    </h2>
                    <p class="mail-subject">Hello there spam mail...</p>
                    </div>
                    <div class="forward-icon">
                    </div>
                    </div>
                </li>
                <li>
                    <div class="mini-grid">
                    <div class="circle">
                    </div>
                    <div>
                    <h2 class="mail-sender">
                        John Doe
                    </h2>
                    <p class="mail-subject">Hello there spam mail...</p>
                    </div>
                    <div class="forward-icon">
                    </div>
                    </div>
                </li>
                <li>
                    <div class="mini-grid">
                    <div class="circle">
                    </div>
                    <div>
                    <h2 class="mail-sender">
                        John Doe
                    </h2>
                    <p class="mail-subject">Hello there spam mail...</p>
                    </div>
                    <div class="forward-icon">
                    </div>
                    </div>
                </li>
                <li>
                    <div class="mini-grid">
                    <div class="circle">
                    </div>
                    <div>
                    <h2 class="mail-sender">
                        John Doe
                    </h2>
                    <p class="mail-subject">Hello there spam mail...</p>
                    </div>
                    <div class="forward-icon">
                    </div>
                    </div>
                </li>
                <li>
                    <div class="mini-grid">
                    <div class="circle">
                    </div>
                    <div>
                    <h2 class="mail-sender">
                        John Doe
                    </h2>
                    <p class="mail-subject">Hello there spam mail...</p>
                    </div>
                    <div class="forward-icon">
                    </div>
                    </div>
                </li>
                <li>
                    <div class="mini-grid">
                    <div class="circle-dark">
                    </div>
                    <div>
                    <h2 class="mail-sender">
                        John Doe
                    </h2>
                    <p class="mail-subject">Hello there spam mail...</p>
                    </div>
                    <div class="forward-icon">
                    </div>
                    </div>
                </li>
                <li>
                    <div class="mini-grid">
                    <div class="circle">
                    </div>
                    <div>
                    <h2 class="mail-sender">
                        John Doe
                    </h2>
                    <p class="mail-subject">Hello there spam mail...</p>
                    </div>
                    <div class="forward-icon">
                    </div>
                    </div>
                </li>
            
            </ul>
            </div>
                </div>
                </div>
            )
        }
}