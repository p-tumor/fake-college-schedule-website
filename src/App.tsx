import './App.css';
import Class from './components/Class';
import { useState } from 'react';

const App = () => {
    return<>
    <div id='site'>
        <section className='container'>
        <div className="container" >
            <form >
                
                <label htmlFor='className' style={{float: "left", marginRight: "20px"}}>Enter Course Name</label>
                <input type='text' id='className' style={{float: "left", marginRight: "20px"}}></input><br/>
            
                <label htmlFor='weekDays' style={{float: "left", marginRight: "20px"}}>Day</label>
                <select id='weekDays' style={{float: "left", marginRight: "20px"}}>
                    <option value='Mon'>Monday</option>
                    <option value='Tues'>Tuesday</option>
                    <option value='Wed'>Wednesday</option>
                    <option value='Thur'>Thursday</option>
                    <option value='Fri'>Friday</option>
                    <option value='Sat'>Saturday</option>
                    <option value='Sun'>Sunday</option> 
                </select><br/>
                
                <div style={{float: "left", marginRight: "20px"}}>
                    <label htmlFor='classSTime'>Start Time</label>
                    <input type='time' id='classSTime'></input>
                </div>
                    
                <button type='submit'style={{float: "left", display: "block"}} >Add Course!</button>
            </form>
        </div>
        </section>

        <section id='schedule' className='container'>
        <div className="container" >
            <div id='calendar' >
                item
            </div>
        </div>
        </section>
    </div>
    </>;
}

export default App;

/*
<div style={{float: "left"}}>
                        <label htmlFor='classETime'>End Time</label>
                        <input type='time' id='classE9Time'></input>
                    </div>
*/