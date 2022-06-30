import styled from "styled-components"

export const Nav = styled.nav`
    width: 100vw;
    height: 15vh;

    display: flex;
    justify-content: space-around;
    align-items: center;

    @media (max-width: 1025px) {
        height: 8vh;
    }

    @media (max-width: 769px) {
        height: 14vh;
    }

    @media (max-width: 426px) {
        height: 10vh;
    }

    @media (max-width: 376px) {
        height: 6vh;
    }
`

export const SearchLogo = styled.img`
    width: 6%;

    position: absolute;
    top: 5%;
    left: 5%;

    &:hover {
        cursor: pointer;
    }

    @media (max-width: 769px) {
        width: 8%;
    }

    @media (max-width: 426px) {
        width: 16%;
    }
`

export const SearchTitle = styled.h1`
    text-align: center;
    font-size: 2.2em;

    @media (max-width: 769px) {
        font-size: 1.6em;
    }
`

//

export const Form = styled.form`
    width: 30vw;
    height: 10vh;

    display: flex;
    justify-content: space-around;
    align-items: center;

    @media (max-width: 1025px) {
        width: 40vw;
    }

    @media (max-width: 426px) {
        width: 60vw;
    }

    @media (max-width: 321px) {
        width: 70vw;
    }
`

export const Input = styled.input`
    width: 75%;
    height: 60%;
    
    border: solid 3px;
    border-radius: 20px;
    outline: none;
    padding-left: 3%;

    @media (max-width: 769px) {
        border-radius: 15px;

        font-size: 0.7em;
    }

    @media (max-width: 426px) {
        font-size: 0.6em;
    }
`

export const SearchImg = styled.img`
    width: 10%;

    &:hover {
        cursor: pointer;
    }
`

// FormCep

export const Infos = styled.div`
    width: 50vw;
    height: 50vh;

    display: flex;
    justify-content: space-around;
    align-items: center;

    background-color: #fff;
    border: solid 4px;
    border-radius: 30px;

    @media (max-width: 1025px) {
        width: 60vw;
    }

    @media (max-width: 769px) {
        width: 70vw;
    }

    @media (max-width: 426px) {
        width: 90vw;
        height: 40vh;
    }

    @media (max-width: 321px) {
        width: 95vw;
    }
`

export const PInfosBox = styled.div`
    width: 50%;
    height: 80%;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    padding-left: 10%;

    @media (max-width: 426px) {
        padding-left: 5%;
    }
`

export const PInfos = styled.p`
    font-weight: bold;
    font-size: 1em;

    @media (max-width: 769px) {
        font-size: 0.8em;
    }

    @media (max-width: 426px) {
        font-size: 0.7em;
    }

    @media (max-width: 321px) {
        font-size: 0.6em;
    }
`
