import { BrowserRouter, Route, Routes } from "react-router-dom"
import { UploadPage } from "./pages/UploadPage/uploadPage"
import { createGlobalStyle } from "styled-components"

function App() {
  return (
    <BrowserRouter>
     <GlobalStyle/>
      <Routes>
        <Route path="/" element={<UploadPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

const GlobalStyle = createGlobalStyle`
body{
  margin: 0;
  padding: 0;
  font-family: 'Inter', sans-serif;
  background-color: #E8F3D8;
}
`

export default App
