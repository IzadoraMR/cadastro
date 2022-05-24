import React from 'react';
//import {Link} from 'react-router-dom';
//import firebase from '../../config/firebase';

import './card.css';

function Card({nome, email}){


    return(
        <div className="card col-md-12 col-sm-12">
            <div className="card-body">
                <p className=" text-center">Nome: {nome}</p>
                <p className=" text-center">Email: {email}</p>                   
            </div>

        </div>
        
    )
}

export default Card;