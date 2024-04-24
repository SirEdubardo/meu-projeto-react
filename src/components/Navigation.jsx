// src/components/Navigation.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link> {/* Adicione um link para a nova página */}
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;
