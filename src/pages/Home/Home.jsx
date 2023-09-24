// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState} from "react";
import "./index.css"
import Product from "./components/list";
import Total from "./components/total";
import Data from './components/product.json'
import Title from "./components/Title";

const Home = () => {
    const [totalCash, setTotalCash] = useState(0);
    // const [Data, setData] = useState([]);

    // useEffect(() => {
    //     fetch('https://raw.githubusercontent.com/hank0824/DemoApi/main/product.json')
    //         .then(response => response.json())
    //         .then(data => setData(data))
    // }, [])

    const calculate = (price) => {
        setTotalCash(parseInt(totalCash + price));
    }



    return (
        <div>
            <div id="a" className="rwd-table  table-responsive-sm mt-3">
                <Title mainTitle={"請選擇要購買的專輯"} />
                <table className="table container">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">專輯名稱</th>
                            <th scope="col">專輯圖片</th>
                            <th scope="col">售價</th>
                            <th scope="col" className="text-center">數量</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Data.map((p) => (
                            <Product
                                key={p.uid}
                                id={p.id}
                                name={p.name}
                                price={p.price}
                                img={p.img}
                                onCalculate={calculate}
                            />
                        ))}

                    </tbody>
                </table>
                <div className="container">
                    <Total totalCash={totalCash} />
                </div>
            </div>
        </div>
    )
}
export default Home;