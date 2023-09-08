import { styled } from "styled-components";

interface updateButton {
    updatebutton: boolean
  }

  interface showTable {
    showtable: boolean
  }

export const Container = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
`
export const UploadContainer = styled.div<showTable>`
height: 100%;
width: 75vw;
display: flex;
flex-direction: column;
justify-content: ${props => !props.showtable && 'center'};
align-items: center;
position: relative;

input[type="file"]{
    display: none;
}


.custom-file-upload {
    width: 125px;
    height: 25px;
    background-color: black;
    color: #FFFFFF;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    cursor: pointer;
}

.custom-file-upload:hover{
    background-color: #111111;
}

.options-title{
    width: 250px;
    position: absolute;
    top: 40px;
    left: 55px;
    display: flex;
    justify-content: space-between;
}

.options{
    font-size: 30px;
    color: #0DAB77;
    cursor: pointer;
}

.title{
    font-weight: 600;
    font-size: 24px;
    color: #000;
}
`

export const Buttons = styled.div`
height: 110px;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
`

export const Button = styled.button<updateButton>`
    width: 200px;
    height: 45px;
    border: none;
    border-radius: 20px;
    background-color: ${props=> !props.updatebutton ? '#0DAB77' : '#969696'};
    font-size: 20px;
    font-weight: 600;
    color: #fff;
    cursor: ${props=> !props.updatebutton && 'pointer'};

    &:hover{
      background-color: ${props=> !props.updatebutton && '#0ec98c'};
    }
`

export const FileUploadContainer = styled.div<showTable>`
height: 175px;
width: 360px;
margin-top: 20px;
display: flex;
flex-direction: column;
justify-content: space-between;
`
export const FileInput = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`

export const TableUpload = styled.div<showTable>`
margin-top: ${props => props.showtable && '100px'};
display: flex;
flex-direction: column;
align-items: center;
padding-bottom: 40px;

 /* width */
 ::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
`