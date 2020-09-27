import React from 'react';
import NavBar from '../navBar/NavBar';
import '../navBar/NavBar.css'
//import spot from '../images/spot.jpeg'
import './PaieConges.css'

function PaieConges() {
  return (
    <div>
        <NavBar />
        <div class="paieccontainer">
            <form>
                <div class="top">
                <label for="mstatus">First name:</label>
                <input type="text" class="nom" />
                
                <label for="mstatus">Last name:</label>
                <input type="text" class="pnom" /><br/><br />
                
                <label for="startrdate">Reference date from:</label>
                <input type="date" name="startrdate" />
                <label for="endrdate">To:</label>
                <input type="date" name="endrdate" /><br />
                </div>
            <div class="leftrightcont">
                <div class="congright">
                    <label for="ancien">Seniority</label>
                    <input type="text" class="deux" /><br />
                    
                    <label for="csalary">Start date of leave</label>
                    <input type="date" class="trois" /><br />
                    
                    <label for="csalary">End day of leave</label>
                    <input type="date" class="quatre" /><br />
                    
                    <label for="csalary">Number of days</label>
                    <input type="text" class="cinq" /><br />

                    <label for="csalary">Number of days allowance</label>
                    <input type="text" class="un" /><br />
                    
                    <label for="csalary">Total number of days</label>
                    <input type="text" class="six" />
                </div>
                
                <div class="congleft">
                    <label for="csalary">Cumylative salary</label>
                    <input type="text" class="un" /><br />

                    <label for="csalary">Main allowance</label>
                    <input type="text" class="cinq" /><br />
                    
                    <label for="csalary">Supplement allowance</label>
                    <input type="text" class="cinq" /><br />
                    
                    <label for="csalary">Gross</label>
                    <input type="text" class="cinq" /><br />
                    
                    <label for="csalary">Deductions</label>
                    <input type="text" class="cinq" /><br />
                    
                    <label for="csalary">Net amout payable</label>
                    <input type="text" class="cinq" />
                </div>
            </div>
            </form>
	    </div>
    </div>
  );
}

export default PaieConges;
