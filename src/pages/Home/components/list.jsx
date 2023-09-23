// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import '../index.css'
import React, { useState } from 'react';
import { Link } from "react-router-dom";

export default function Product({ name, price, img, id, onCalculate }) {

    const [count, setCount] = useState(0);

    const up = () => {
        setCount(pre => pre + 1);
        onCalculate(+price);
    };
    const down = () => {
        if (count > 0) {
            setCount(pre => pre - 1);
            onCalculate(-price);
        }
    };

    return (
        <>
            <tr>
                <th data-th="#" scope="row">{id}</th>
                <td data-th="專輯名稱" >{name}</td>
                <td data-th="專輯圖片">
                    <Link to={'/product/'+id}>
                    <img className="img-fluid" src={img} alt="" width="100" height="100" /><div>查看詳情</div>
                    </Link>
                </td>
                <td data-th="售價">{price}</td>
                <td data-th="數量">
                    <div className="text-center" >
                        {count}
                    </div>
                    <div className="d-flex justify-content-center " >
                        <button onClick={down} >-</button>
                        <button className="ms-2" onClick={up}>+</button>
                    </div>
                </td>
            </tr>
        </>
    )
}

