// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import '../index.css'
import React, { useState } from 'react';

const List = () => {
    const[count,setCount]=useState(0);

    function up(){
        setCount(count + 1)
    }
    return (
        <tbody>
            <tr>
                <th data-th="#" scope="row">1</th>
                <td data-th="專輯名稱" onclick="">Jay</td>

                <td data-th="售價"><input type="hidden" name="price" value="590"/>590</td>
                <td data-th="數量">
                    <input type="button" name="minus" value="-" onclick="minus(0)" />
                    <input type="tel" name="amount" value={count} onChange={(e) => { setCount(e.target.value) }} />
                    <input type="button" name="plus" value="+" onclick={up} />
                </td>
                <td data-th="小計" id="price0" ></td>
            </tr>
        </tbody>

    )
}
export default List;
