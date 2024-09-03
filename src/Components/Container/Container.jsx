import React from 'react'
    
function Container({children,className=""}) {
    return (
        <div className={`bg-green w-full max-w-6xl mx-auto px-4
         ${className}`}>
            {children}
        </div>
    );
}

export default Container