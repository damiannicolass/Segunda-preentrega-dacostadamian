/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import objets from "../asyncMock";
import ItemList from "./ItemList";

const ItemListContainer = ({ category }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        objets()
            .then((res) => {
                if (category) {
                    const filteredProducts = res.filter(product => product.category.toLowerCase() === category.toLowerCase());
                    setProducts(filteredProducts);
                } else {
                    setProducts(res);
                }
            });
    }, [category]); 

    return (
        <>
            <ItemList products={products} />
        </>
    );
}

export default ItemListContainer;
