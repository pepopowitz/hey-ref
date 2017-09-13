import React from 'react';

import './Layout.css';

export default function Layout({ children }) {
    return (
        <div id="hey-ref" className="container">
            {children}
        </div>
    );
}
