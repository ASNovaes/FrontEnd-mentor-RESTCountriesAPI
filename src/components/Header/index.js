import React from 'react';
import StyledHeader from "./styles.js";

export default function Header({toggleTheme, theme}) {
    
    return (
        <>
            <StyledHeader>
                <div> 	
                    <span>Where in the world?</span>
    <span><i className={theme.title === 'Dark' ? 'far fa-moon' : 'far fa-sun'} 
     onClick={() => toggleTheme()}></i>{theme.title} Mode</span>
                </div>
            </StyledHeader>
        </>
    );
}