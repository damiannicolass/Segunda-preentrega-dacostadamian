import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'; 
import { objetId } from "../asyncMock";
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const { productId } = useParams(); 
    const [item, setItem] = useState(null);

    useEffect(() => {
        console.log("Fetching product with id:", productId);
        objetId(parseInt(productId))  
            .then((res) => {
                console.log("Product found:", res);
                setItem(res);
            })
            .catch((error) => {
                console.error("Error fetching product:", error);
            });
    }, [productId]);

    return (
        <div>
            <ItemDetail item={item}/> 
        </div>
    )
}

export default ItemDetailContainer;
