import { styled } from "styled-components";

export const RowContainer = styled.div`
    width: 100%;
    height: 36px;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    
    div{
        font-size: 14px;
        font-weight: 600;
        color: #fff;
        border: 1px solid #0DAB77;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    `

export const Code = styled.div`
    width: 85px;
    `

export const Product = styled.div`
    width: 375px;
    `

export const Price = styled.div`
    width: 120px;
    `

export const Errors = styled.div`    
    width: 85px;    
`