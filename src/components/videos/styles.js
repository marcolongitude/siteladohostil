import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
`

export const ContainerVideos = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`

export const Videos = styled.div`
    margin: 10px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: row;
    iframe{
        width: 33%;
        min-width: 400px;
        max-width: 550px;
        margin: 15px;
    }
` 

export const TitleVideos = styled.div`
    color: white;
    text-align: center;
    margin: 20px;
    font-size: 2rem;
`

export const ContainerLogo = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 50px;
`