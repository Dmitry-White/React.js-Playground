import React from 'react';

import Header from './Header';

const app = ({children}) => {
    return (
        <div className="container">
            <Header />
            {children}
        </div>
    );
};

export default app;
