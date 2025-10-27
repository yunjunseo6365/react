import React from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
    const {productId} = useParams();

    const product = {
        1: {id:1, name:'노트북', price:'3,000,000원'},
        2: {id:2, name:'스마트', price:'1,000,000원'},
        3: {id:3, name:'태블릿', price:'500,000원'},
    }[productId];

    if (!productId) {
        return <div>제품을 찾을 수가 없습니다</div>;
    }

    return (
        <div>
            <h2>{product.name} 상세 정보</h2>
            <p>가격 : {product.price}</p>
        </div>
    )
}

export default ProductDetail;