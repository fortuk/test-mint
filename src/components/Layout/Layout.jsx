import React from 'react';
import PropTypes from 'prop-types';
import Container from '../Comtainer/Container'

const Layout = ({ children }) => (
    <>
        <Container  >{children}</Container>
    </>
);

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;