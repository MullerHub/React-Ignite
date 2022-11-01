import styled from "styled-components";

export const Container = styled.div`
    background: #5429CC;
`

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    padding: 2rem 1rem 12rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
        font-size: 1rem;
        color: #fff;
        background: #6933ff;
        border: 0;
        border-radius: 0.25rem;
        height: 3rem;
        padding: 0 1rem;
        transition: filter 0.2s;
    &:hover{
        filter: brightness(0.9);
    }    
    }
`