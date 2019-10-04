import React from "react"
import styled from "styled-components"


const Title = styled.div`
    font-size:4em;
    color:#86A0D3;
    margin-left:80px;
    margin-top:50px;
`

const NewBackground = styled.div`
    width:100%;
    height:100%;
    background-color:#1b1b1b;
`
const SucContainer = styled.div`
    width:50vw;
    margin:auto;
`






const SuccessPage = (props) => (

    <NewBackground >
        <SucContainer>
        <Title>
            Thanks for the submission! I will get to is as soon as I can!
        </Title>
        </SucContainer>

    </NewBackground>
)

export default SuccessPage