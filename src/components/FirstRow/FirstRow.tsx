
import { Code, Errors, Price, Product, RowContainer } from "./styles";

export function FirstRow(){
    return (
    <RowContainer>
        <Code>CÓDIGO</Code>
        <Product>PRODUTO</Product>
        <Price>PREÇO ATUAL</Price>
        <Price>NOVO PREÇO</Price>
        <Errors>ERROS</Errors>
    </RowContainer>
    )
}