import { Products } from '../../protocols/Products';
import { FirstRow } from '../FirstRow/FirstRow';
import { Row } from "../Row/Row";
import { TableContainer } from "./styles";

export function Table({ products }: Products){
    console.log()
    return (
    <TableContainer>
        <FirstRow/>
        {products?.response.map(prod => (
        <Row 
            code={prod.code} 
            name={prod.name}
            current_price={prod.current_price}
            new_price={prod.new_price}
            error_message={prod.error_message}
        />
        ))}
    </TableContainer>
    )
}