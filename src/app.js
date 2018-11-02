import React from 'react'

import './app.css'
import Navbar from './navbar.js'

export default class App extends React.Component {
        constructor(props)  {
            super(props)
            this.state = {
                name: []

            }
        }
        render() {
            return(
                <div class="email-box">
                    <div class="first-part">
                        <ul class="taskbar">
                            <li id="compose" class="taskbar-item">Compose</li>
                            <li id="inbox" class="taskbar-item">inbox</li>
                            <li id="starred" class="taskbar-item">starred</li>
                            <li id="drafts" class="taskbar-item">Drafts</li>
                            <li id="archive" class="taskbar-item">Archive</li>
                            <li id="sentItems" class="taskbar-item">Sent Items</li>
                            <li id="spam" class="taskbar-item">Spam</li>
                        </ul>
                    </div>
                    <div class="second-part">hi</div>
                    <div class="third-part">hi</div>
                </div>
            )
        }
}