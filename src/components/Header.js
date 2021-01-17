import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Logo from './Logo';

const ContenedorHeader = styled.header`
    background-color: #26C6DA;
    padding: 10px;
    font-weight: bold;
    color: #FFF;
`;

const TextoHeader = styled.h2`
    font-size: 1rem;
    margin:0;
    margin-bottom:10px;
    font-family: 'Slabo 27px', serif;
    text-align: center;

`;

const Header = ({titulo}) => {
    return (
        <ContenedorHeader>
            <Logo />           
            <TextoHeader>{titulo}</TextoHeader>
        </ContenedorHeader>
    );
}

Header.propTypes = {
    titulo: PropTypes.string.isRequired
}
 
export default Header;