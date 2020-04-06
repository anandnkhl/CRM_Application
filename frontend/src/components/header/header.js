import React from 'react';
import './header.css';
import {HashRouter, Link} from 'react-router-dom';

const header = () => {
    return (
        <div>
            <h1>Logo CRM Application</h1>
            <HashRouter>
            <ul>
                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                    <Link to="/registerCustomer">Register Customer</Link>
                </li>
                <li>
                    Logout
                </li>
            </ul>
            </HashRouter>
        </div>
    )
}

export default header;