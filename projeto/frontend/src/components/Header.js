import React from 'react';

import './Header.css';

import uTask from'../img/uTask.png';
export default function Header() {
    return (
        <header id="main-header">
            <div className="header-content">
                <img src={uTask} alt="uTask"/>
            </div>
        </header>
    );
}
