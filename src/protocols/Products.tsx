import { Row } from "./Row";

export type Products = {
    products: {
        error: string[],
        response: Row[]
    }  | undefined;
  }