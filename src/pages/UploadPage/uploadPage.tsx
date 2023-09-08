import axios from "axios";
import { Button, Buttons, Container, FileInput, FileUploadContainer, TableUpload, UploadContainer } from "./styles";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { Header } from "../../components/Header/Header";
import IonIcon from "@reacticons/ionicons";
import { Table } from "../../components/Table/Table";

  export function UploadPage(){
      const [file, setFile] = useState<File>()
      const [fileName, setFileName] = useState<string>()
      const [updateButton, setUpdateButton] = useState<boolean>(true)
      const [showTable, setShowTable] = useState<boolean>(false)
      const [products, setProducts] = useState()

      const inputRef = useRef<HTMLInputElement>(null)

      useEffect(() => {
        setUpdateButton(true)
        setShowTable(false)
        if(!file) setFileName(undefined)
      },[file])

      function handleFileChange(e: ChangeEvent<HTMLInputElement>){
        if (e.target.files && e.target.files[0]) {
          setFile(e.target.files[0])
          setFileName(e.target.files[0]?.name)
        };
      };

    function validateFile(){
        if (!file) {
          return alert('Por favor, selecione um arquivo.')
        }
    
    const formData = new FormData();
        formData.append("file", file);
         
        axios.post(`${import.meta.env.VITE_API_URL}/validate`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }).then(res => {
            setProducts(res.data)
            setShowTable(true)
            if(!res.data.error) setUpdateButton(false)
            if(inputRef.current !== null && res.data.error) inputRef.current.value = ''
          })
          .catch(err => {
            if(err.response.status === 400) alert('As linhas do arquivo precisam estar no formato |product_code,new_price|, sendo product_code um número inteiro positivo e new_price um número positivo. Por favor, corrija o arquivo e tente novamente.')
            else alert(err.response.data)

            if(inputRef.current !== null) inputRef.current.value = ''
            setFile(undefined)
          })
      }

    function updateData(){
      if (!file) {
        return alert('Por favor, selecione um arquivo.')
      }

      const formData = new FormData();
        formData.append("file", file);
         
        axios.put(`${import.meta.env.VITE_API_URL}/update`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }).then(res => {
            alert('Produtos atualizados com sucesso!')
            if(inputRef.current !== null) inputRef.current.value = ''
            setFile(undefined)
            setShowTable(false)
          })
          .catch(err => alert(err.response.data))
    }

    return (
    <Container>
      <Header/>
        <UploadContainer showtable={showTable}>
          <div className="options-title">
            <IonIcon name="menu" className="options" onClick={() => alert('Opções em breve!')}/>
            <span className="title">Área do Vendedor</span>
          </div>
          <TableUpload showtable={showTable}>
          {showTable && (<Table products={products}/>)}
            <FileUploadContainer showtable={showTable}>
              <FileInput>
                <label className="custom-file-upload">
                  <input type="file" accept=".csv" ref={inputRef} onChange={handleFileChange}/>
                  Adicionar Arquivo
                </label>
                <span className="file-name">{fileName}</span>
              </FileInput>
              <Buttons>
                    <Button updatebutton={false} onClick={validateFile}>Validar</Button>
                    <Button updatebutton={updateButton} disabled={updateButton} onClick={updateData}>Atualizar</Button>
              </Buttons>
            </FileUploadContainer>  
          </TableUpload>
        </UploadContainer>
    </Container>
    )
}