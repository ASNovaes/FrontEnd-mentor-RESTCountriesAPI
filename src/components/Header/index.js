import React from 'react';
import StyledHeader from "./styles.js";

export default function Header() {
    return (
        <>
            <StyledHeader>
                <div>
                    <span>Where in the world?</span>
                    <span><i className='far fa-moon'></i>Dark Mode</span>
                </div>
            </StyledHeader>
        </>
    );
}