import React from "react"
import styled from 'styled-components'


const Background = styled.div`
    background-color:#1B1B1B;
    height:100vh;
    width:100vw;
    z-index:-10;
`;

const Layout = ({ children }) => (
	<>
		<Background>
        {children}
        </Background>
	</>
)

export default Layout