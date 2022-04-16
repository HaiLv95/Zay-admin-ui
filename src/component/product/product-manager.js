import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";
import { deleteProduct, getAllProduct } from "../../api/product-instance";
import { getAllProductCreator, updateProductCreator } from "../../redux/actionCreator/product/productCreator";
import { productSelector } from "../../redux/actionCreator/product/productSelector";
export default function ProductManage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = localStorage.getItem('');
    if (token === '') {
        navigate('/login')
    }
    useEffect(() => {
        try {
            if (token === '') {
                navigate('/login')
            } else {
                getAllProduct().then(resp => {
                    console.log('resp', resp)
                    console.log('resp', resp)
                    if (resp.status === 200) {
                        dispatch(getAllProductCreator(resp.data));
                        console.log(resp)
                    }
                });
            }
        } catch (error) {
            console.log('errors', error)

        }
    }, []);
    const products = useSelector(state => productSelector(state));
    console.log(products)
    const onHandleLock = async (id) => {
        if (token === null) {
            navigate('/login')
        }
        await deleteProduct(id).then(resp =>       
            {
            console.log(resp)
            dispatch(updateProductCreator(resp.data))
            }        
            )
    }
    const onHandleEdit = (id) => {
        if (token === null) {
            navigate('/login')
        }
        navigate(`/product/edit/${id}`)
    }
    return (
        <div className="container-fluid">
            <div className="row mt-4 justify-content-center">
                <div className="col-md-2" style={{ borderRight: '1px solid black', minHeight: '600px' }}>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <Link className="link-dark text-decoration-none fw-bold" to="/product/manager">All Product</Link>
                        </li>
                        <li className="list-group-item">
                            <Link className="link-dark text-decoration-none fw-bold" to="/product/add">Add Product</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-md-10">
                    <table className="table table-striped table-bordered border-primary">
                        <thead>
                            <tr>
                                <th>ID  </th>
                                <th class="col-2">Name </th>
                                <th class="">Create Date</th>
                                <th class="">Available </th>
                                <th class="">Price </th>
                                <th class="">Size</th>
                                <th class="">Color</th>
                                <th class="">Sell</th>
                                <th class="">Quantity</th>
                                <th class="">Category</th>
                                <th class="col-1">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((item, index) =>
                                <tr>
                                    <th scope="row">{item.id}</th>
                                    <td>{item.name}</td>
                                    <td>{item.createDate}</td>
                                    <td>{item.available ? 'Yes' : 'No'}</td>
                                    <td>{item.price}</td>
                                    <td>{item.size}</td>
                                    <td>{item.color}</td>
                                    <td>{item.sell}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.categoryID.name}</td>
                                    <td>
                                        <button className="me-1" style={{ border: 'none', background: 'none' }} onClick={() => onHandleLock(item.id)}>
                                            {item.available ?
                                                <span className="material-icons-outlined" style={{ color: 'blue' }}>lock_open</span>
                                                :
                                                <span className="material-icons-outlined" style={{ color: 'red' }}>lock</span>}
                                        </button>
                                        <button className="me-1" style={{ border: 'none', background: 'none' }} onClick={() => onHandleEdit(item.id)}>
                                            <span className="material-icons-outlined" style={{ color: 'blue' }}>
                                                edit
                                            </span>
                                        </button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}