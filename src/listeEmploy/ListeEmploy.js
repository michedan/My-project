// import ReactDOM from 'react-dom'
import React from 'react';
import NavBar from '../navBar/NavBar';
import '../navBar/NavBar.css'
//import spot from '../images/spot.jpeg'
import './ListeEmploy.css'

function ListeEmploy ({employes}) {
    
    return( 
        <div>
        <NavBar />
        
        <table className="liste">
            <thead>
                <tr>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Registration number</th>
                    <th>Function</th>
                    <th>Category</th>
                    <th>Option</th>
                </tr>
            </thead>
            <tbody>
            {employes.map((employe, index) => (
                <tr data-index={index}>
                    <td> {employe.name} </td>
                    <td> {employe.pname} </td>
                    <td> {employe.number} </td>
                    <td> {employe.fonction} </td>
                    <td> {employe.category} </td>
                    <td>
                        <i className="fa fa-eye"></i>
                        <i className="fa fa-edit"></i>
                        <i className="fa fa-trash"></i>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
        </div>
    );
}

export default ListeEmploy;