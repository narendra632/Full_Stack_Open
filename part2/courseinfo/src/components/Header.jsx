import React from 'react';

const Header = ({ text, Ct }) => {
    if (!Ct) {
        return <h1>{text}</h1>;
    }
    return <Ct>{text}</Ct>;
};

export default Header;