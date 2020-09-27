import React from 'react';
import NavBar from '../navBar/NavBar';
import '../navBar/NavBar.css'
//import spot from '../images/spot.jpeg'
import './CreateProfile.css'

function PaieConges() {
  return (
    <div>
        <NavBar />
        <div class="proficontainer">
            <form>
            <div class="topprofil">
                <label>Profile name:</label>
                <input type="text" class="nomprofil" /><br/><br />
                
                <label>Features:</label>
                <select name="profile">
                    <option></option>
                    <option>TCHAKOUMI Lorrain</option>
                    <option>NANKAP Keshia</option>
                    <option>KOMGUEM Michele</option>
                </select><br /><br />
            </div>  
            <p>Graphic objets</p>
            <div class="list1">
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                </div>
                        
            <div class="list2">
                <ul>
                        
                </ul>
            </div>

            <div>
                <button><i class="far fa-arrow-alt-circle-right"></i></button>
                <button><i class="far fa-arrow-alt-circle-left"></i></button>
            </div>
                
                <input type="submit" class="applybtn" value="Apply" />
            </form>
	    </div>
    </div>
  );
}

export default PaieConges;
