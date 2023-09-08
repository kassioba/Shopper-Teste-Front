import { styled } from "styled-components";

export const RowContainer = styled.div`
    width: 100%;
    height: 36px;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    
    div, button{
        font-size: 14px;
        font-weight: 600;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export const Code = styled.div`
    width: 85px;
    color: #fff;
    border: 1px solid #0DAB77;
`

export const Product = styled.div`
    width: 375px;
    color: #fff;
    border: 1px solid #0DAB77;
`

export const Price = styled.div`
    width: 120px;
    color: #fff;
    border: 1px solid #0DAB77;
`

type Errors = {
    errors?: string[]
}

export const Errors = styled.button<Errors>`    
    width: 85px;
    background-color: ${props => props.errors ? '#0DAB77' : '#969696'};
    color: ${props => props.errors ? '#fff' : '#646363'};
    cursor: ${props => props.errors && 'pointer'};
    border: ${props => props.errors ? '1px solid #0DAB77' : 'none'};

    &:hover{
        text-decoration: ${props => props.errors && 'underline'};
    }
`