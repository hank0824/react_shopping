// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./index.css"
import List from "./components/list";

const Home = () => {
    return (
        <div>
            <div id="a" class="rwd-table  table-responsive-sm mt-3">
                <h1 class="container d-flex justify-content-center" >購買專輯</h1>
                <table class="table container">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">專輯名稱</th>
                            <th scope="col">售價</th>
                            <th scope="col">數量</th>
                            <th scope="col">小計</th>
                        </tr>
                    </thead>
                    <List />
                </table>
            </div>
        </div>
    )
}
export default Home;