import styled from "styled-components"

type OpenErrorWindow = {
    openErrorWindow: boolean
}

export const ErrorWindowBackground = styled.div<OpenErrorWindow>`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: #ffffff99;
    display: ${props => props.openErrorWindow ? 'flex' : 'none'};;
    justify-content: center;
    align-items: center;
`

export const ErrorWindowContent = styled.div`
    height: 400px;
    width: 650px;
    background-color: black;
    border-radius: 20px;
    padding: 35px 40px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    .header{
        width: 100%;
        /* background-color: blue; */
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #fff;
        font-weight: 600;
    }

    .name{
        font-size: 32px;
    }

    .close-button{
        font-size: 20px;
        cursor: pointer;
    }

    .content{
        height: 170px;
        width: 575px;
        text-align: center;
        /* margin-top: 40px; */
        color: #fff;
        font-weight: 600;
        display: flex;
        flex-direction: column;
        justify-content: center;
        
        :not(:first-child){
            margin-top: 35px;
        }
    }
`

export const BottomCloseButton = styled.button`
    height: 45px;
    width: 200px;
    background-color: #0DAB77;
    border: none;
    border-radius: 20px;
    font-size: 20px;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
`