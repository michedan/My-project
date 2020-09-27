import React from 'react';
import NavBar from '../navBar/NavBar';
import '../navBar/NavBar.css'
//import spot from '../images/spot.jpeg'
import './ModifInfos.css'

function ModifInfos() {
  return (
    <div>
        <NavBar />
        <div class="modifcontainer">
            <form class="modifform">
            <p>Old password</p>
                <input type="password" name="username" placeholder="Enter old password" />
                
                <p>New password</p>
                <input type="password" name="username" placeholder="Enter new password" />

                <p>Confirm password</p>
                <input type="password" name="password" placeholder="Confirm password" /><br />
                <div>
                    <input type="submit" class="modifbtn" value="Cancel" />
                    <input type="submit" class="modifbtn" value="Save" />
                </div>
            </form>
	    </div>
    </div>
  );
}

export default ModifInfos;
