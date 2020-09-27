import React from 'react';
import NavBar from '../navBar/NavBar';
import '../navBar/NavBar.css'
//import spot from '../images/spot.jpeg'
import './TraiteDmde.css'

function TraiteDmde() {
  return (
    <div>
        <NavBar />
        <div class="traitecontainer">
            <form class="traiteform">
                <label for="mstatus">Applicant:</label>
                <input type="text" class="applicant" /><br/>
                
                <label for="mstatus">Iterim provided by:</label>
                <input type="text" class="interim" /><br/>
                
                <label for="startrdate">Reference date from:</label>
                <input type="date" name="startrdate" />
                <label for="endrdate">To:</label>
                <input type="date" name="endrdate" /><br />
                
                <label for="rdate">Request date:</label>
                <input type="date" name="rdate" /><br />
                
                <label for="sdate">Start date of leave:</label>
                <input type="date" name="sdate" /><br />
                
                <label for="edate">End date of leave:</label>
                <input type="date" name="edate" /><br />
                
                <label for="ndate">Number of days:</label>
                <input type="text" name="ndate" />
                
                <div class="modifdiv">
                    <textarea type="text" class="traitmodif"></textarea><br />
                    <textarea type="text" class="observation" placeholder="Observation"></textarea><br />
                    <input type="submit" class="refusebtn" value="Refuse" />
                    <input type="submit" class="acceptbtn" value="Accept" />
                </div>
            </form>
	    </div>
    </div>
  );
}

export default TraiteDmde;
