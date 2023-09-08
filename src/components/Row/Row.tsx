import { useState } from "react";
import { Row as RowType } from "../../protocols/Row";
import { ErrorWindow } from "../ErrorWindow/ErrorWindow";
import { Code, Errors, Price, Product, RowContainer } from "./styles";

export function Row({code, name, current_price, new_price, error_message: errors}: RowType){
    const [openErrorWindow, setOpenErrorWindow] = useState(false)
    
    return (
        <>
    <RowContainer>
        <Code>{code}</Code>
        <Product>{name}</Product>
        <Price>{!isNaN(Number(current_price)) ? `R$ ${current_price}` : current_price}</Price>
        <Price>{!isNaN(Number(new_price)) ? `R$ ${new_price}` : new_price}</Price>
        <Errors errors={errors} onClick={() => setOpenErrorWindow(true)}>{errors ? `${errors.length} ERRO(S)` : 'ERROS'}</Errors>
    </RowContainer>
    <ErrorWindow openerrorwindow={openErrorWindow} setOpenErrorWindow={setOpenErrorWindow} errors={errors}/>
    </>
    )
}