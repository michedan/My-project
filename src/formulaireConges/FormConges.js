import React from 'react';
import NavBar from '../navBar/NavBar';
import '../navBar/NavBar.css'
//import spot from '../images/spot.jpeg'
import './FormConges.css'

function FormConges() {
  return (
    <div>
        <NavBar />

        <div class="dmdecontainer">
            <form class="dmdeform">
                <p>Request date</p>
                <input type="date" name="req" placeholder="Enter request date" />
        
                <p>Start date of leave</p>
                <input type="date" name="start" placeholder="Enter start date of leave" />

                <p>End date of leave</p>
                <input type="date" name="end" placeholder="Enter end date of leave" /><br />
                
                <p>Iterim provided by</p>
                <select name="interim">
                    <option>TCUHENKAM Danielle</option>
                    <option>TCHAKOUMI Lorrain</option>
                    <option>NANKAP Keshia</option>
                    <option>KOMGUEM Michele</option>
                </select><br />
                
                <div class="motifdiv">
                <textarea type="text" class="motif" placeholder="Reason of the request"></textarea><br />
                <input type="submit" class="dmdebtn" value="Send" />
                </div>
            
            </form>
	    </div>
    </div>
  );
}

export default FormConges;
