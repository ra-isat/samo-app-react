import React from "react";
import "../index.css";
import { Header } from "./Header";
import { Sidenav } from "./Sidenav";
import { WeekResult } from "./WeekRes";
import { MonthResult } from "./MonthRes";
import axios from 'axios'

export const Wrapper = () => {
    return (
        <>
            <div className = "grid_container grid_active" >
                <Header/>
                <Sidenav/>
                <div className="App result-content">
                    <WeekResult/>
                    {/* <MonthResult/> */}
                    {
                        
                    }
                </div>
            </div>
        </>
    )
}