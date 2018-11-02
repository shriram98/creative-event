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
        }
        render() {
            return(
                <div>
                    <Navbar />
                <div class="email-box">
                    <div class="first-part">
                        <ul class="taskbar">
                            <li id="compose" class="taskbar-item"><div className="label">Compose</div></li>
                            <li id="inbox" class="taskbar-item"><div className="label">Inbox</div></li>
                            <li id="starred" class="taskbar-item"><div className="label">Starred</div></li>
                            <li id="drafts" class="taskbar-item"><div className="label">Drafts</div></li>
                            <li id="archive" class="taskbar-item"><div className="label">Archive</div></li>
                            <li id="sentItems" class="taskbar-item"><div className="label">Sent Items</div></li>
                            <li id="spam" class="taskbar-item"><div className="label">Spam</div></li>
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