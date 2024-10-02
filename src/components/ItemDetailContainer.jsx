import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'; 
import objets from "../asyncMock"; 
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const { productId } = useParams(); 
    const [item, setItem] = useState(null);

    useEffect(() => {
        console.log("Fetching products...");
        objets()
            .then((res) => {
                const productFound = res.find(product => product.id === parseInt(productId)); 
                if (productFound) {
                    console.log("Product found:", productFound);
                    setItem(productFound);
                } else {
                    console.error("Product not found");
                }
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
