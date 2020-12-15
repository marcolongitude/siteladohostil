import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px 0 40px;
    height: 80px;
    background-color: #24292e;
    position: fixed;
    width: 100%;
    opacity: 0.7;
    div > a {
        margin: 10px;   
    }
    div > ul {
        display: flex;
    }
    div > ul > li {
        cursor: pointer;    
        margin: 10px;
        color: white;
    }
`

export const ContainerLogo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 160px;   
    color: white;
    font-size: 1rem;
`