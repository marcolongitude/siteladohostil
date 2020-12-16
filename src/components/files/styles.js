import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
    span{
        color: white;
        font-size: 2rem;
        margin: 50px;
    }
`

export const Files = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    justify-content: center;
        align-items: center;
    flex-wrap: wrap;

    div{
        margin: 10px;
        width: 340px;
        height: 100px;
        border: 1px solid white;
        border-radius: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5rem;
    }
    a{
        cursor: pointer;
    }
`