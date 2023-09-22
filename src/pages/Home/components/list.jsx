// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

import '../index.css'
import React, { useState } from 'react';


export default function List() {
    const [count, setCount] = useState(0);
    function up() {
        setCount(count + 1)
    };

    return (
        <tbody>
            <tr>
                <th data-th="#" scope="row">1</th>
                <td data-th="專輯名稱" >Jay</td>
                <td data-th="售價"><input type="hidden" name="price" value="590" />590</td>
                <td data-th="數量">
                    <button onClick={() => setCount(count - 1)} >-</button>
                    <input type="tel" name="amount" value={count} onChange={e => setCount(e.target.value)} />
                    <button onClick={up}>+</button>
                </td>
                <td data-th="小計" id="price0" ></td>
            </tr>
        </tbody>

    )
}

