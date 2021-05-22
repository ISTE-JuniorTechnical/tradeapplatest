import React from "react"
import { NavLink } from "react-router-dom"

import LogOut from "../components/LogOut"
import { getMarketStatus, setUserName } from "../utils/utils"
import LiveClock from "../components/clock";


export default class Header extends React.Component {

    componentDidMount() {
        getMarketStatus()
        setUserName()
        setTimeout(() => {
            this.forceUpdate()
        }, 2000);
    }

    render() {
        return (
            <div>

                <nav className="navbar navbar-expand-sm" id="mainNavigation" role="navigation" aria-label="main navigation">
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                        aria-expanded="false" aria-label="Toggle navigation"><i className="fas fa-bars text-warning"></i></button>


                    <div className="collapse navbar-collapse" id="collapsibleNavId">


                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0 pl-2 pl-sm-0">


                            <li className="nav-item ">


                                <NavLink to="/" className="navbar-item nav-link ">Home</NavLink>


                            </li>

                            <li className="nav-item ">


                                <NavLink to="/buy" className="navbar-item nav-link ">Buy</NavLink>


                            </li>

                            <li className="nav-item ">


                                <NavLink to="/view" className="navbar-item nav-link ">View</NavLink>


                            </li>


                            <li className="nav-item ">



                                <NavLink to="/leaderboard" className="navbar-item nav-link ">Leaderboard</NavLink>

                            </li>

                            <li className="nav-item">



                                <a href="https://zerodha.com/varsity/" className="navbar-item nav-link " target="_blank">Learn About Investing</a>


                            </li>
                            <li className="nav-item">



                            <a href="/stock.pdf" className="navbar-item nav-link " target="_blank">Symbol pdf</a>


                            </li>

















                        </ul>


                        <li className="nav-item">

                            <div className="navbar-item" id="clock">
                                <LiveClock />
                            </div>

                        </li>

                        <li className="nav-item">
                            <div className="navbar-item ">
                                <a href="http://isnasdaqopen.com" target="_blank" className = "text-warning" id="status_label">Market Status:</a>
                                {sessionStorage.getItem("status") === "CLOSE"
                                    ? <span id="close">CLOSED</span>
                                    : <span id="open">LIVE</span>}
                            </div>
                        </li>

                        <li className="nav-item">
                            <div className="navbar-item">
                                <h5 className="title is-6">
                                    <span className="icon" id="usericon">
                                        <img src={require("../assets/avatar.png")} alt="" />
                                    </span>
                                    <span className="has-text-weight-normal text-warning" id="name">
                                        {sessionStorage.getItem("name")}
                                    </span>
                                </h5>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="navbar-item nav-link">
                                <LogOut />
                            </div>
                        </li>





                    </div>
                </nav>

                {/* <a id="github" href="https://github.com/Jigar3/Wall-Street" target="_blank"> <img src={require("../assets/github-logo.png")} alt=""/> View Me on Github</a> */}
            </div>
        )
    }
}
