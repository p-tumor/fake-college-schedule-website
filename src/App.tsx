import './App.css';
//import { useState } from 'react';

const App = () => {
    return<>
        
        <div style={{border:"2px solid white"}}>
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

                <div style = {{display: "block"}}>
                    <div style={{float: "left", marginRight: "20px"}}>
                        <label htmlFor='classSTime'>Start Time</label>
                        <input type='time' id='classSTime'></input>
                    </div>
                    <div style={{float: "left"}}>
                        <label htmlFor='classETime'>End Time</label>
                        <input type='time' id='classE9Time'></input>
                    </div>
                </div>

                <button type='submit'style={{float: "left", display: "block"}} >Add Course!</button>
            </form>
        </div>
        <div style={{border:"2px solid white"}}>

        </div>
    </>
}

export default App;