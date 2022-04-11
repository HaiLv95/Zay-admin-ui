import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getAllCategory } from "../../api/category-instance";
import { getProductByID, saveProduct, updateProduct } from "../../api/product-instance";
import { addProductCreator, updateProductCreator } from "../../redux/actionCreator/product/productCreator";

export default function AddProduct() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const dipatch = useDispatch()
    const [product, setProduct] = useState({});
    const [categories, setCategories] = useState([])
    const [isEdit, setEdit] = useState(false);
    //get id from url
    const { id } = useParams();
    useEffect(() => {
        getAllCategory().then(resp => setCategories(resp.data))
        if (id !== undefined) {
            setEdit(true);
            getProductByID(id).then(resp => setProduct(resp.data));
        }
    }, []);

    const onHandleSubmit = async (data) => {
        if (isEdit) {
            console.log('update', data)
            console.log('cate', data.categoryID)
            await updateProduct(data).then(resp => {
                console.log('resp', resp)
                if (resp.status == 200) {
                    dipatch(updateProductCreator(resp.data))
                    navigate('/product/manager')
                }
            })
        } else {
            console.log('add', data)
            await saveProduct(data).then(resp => {
                if (resp.status == 200) {
                    dipatch(addProductCreator(resp.data))
                    navigate('/product/manager')
                }
            })
        }
    }
    const onHandleCancel = () => {
        navigate("/product/manager")
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
                    <div className="row justify-content-center">
                        {isEdit ?
                            <h1 className="text-success">UPDATE PRODUCT</h1>
                            :
                            <h1 className="text-success">ADD PRODUCT</h1>}
                        <div className="col-md-6">
                            <form className="" onSubmit={handleSubmit(onHandleSubmit)}>
                                <div className="form-floating mb-3">
                                    <input type={isEdit ? "text" : "hidden"}
                                        className="form-control"
                                        id="floatingInput"
                                        placeholder="id"
                                        defaultValue={product.id}
                                        readOnly />
                                    <label htmlFor="floatingInput">ID</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text"
                                        className="form-control"
                                        id="productname"
                                        placeholder="Product Name"
                                        {...register("name", { required: true })}
                                        defaultValue={product.name} />
                                    <label htmlFor="productname">Product Name</label>
                                    {errors.name && (
                                        <span className="text-danger">Product name is not empty</span>
                                    )}
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="number"
                                        className="form-control"
                                        id="price"
                                        placeholder="email@example.com"
                                        {...register("price", { required: true })}
                                        defaultValue={product.price} />
                                    <label htmlFor="price">Price</label>
                                    {errors.price && (
                                        <span className="text-danger">Price is not empty</span>
                                    )}
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="number"
                                        className="form-control"
                                        id="size"
                                        placeholder="1234"
                                        {...register("size", { required: true })}
                                        defaultValue={product.size} />
                                    <label htmlFor="size">Size</label>
                                    {errors.size && (
                                        <span className="text-danger">Size is not empty</span>
                                    )}
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="number"
                                        className="form-control"
                                        id="sell"
                                        placeholder="1234"
                                        {...register("sell", { required: true })}
                                        defaultValue={product.sell} />
                                    <label htmlFor="sell">Sell</label>
                                    {errors.sell && (
                                        <span className="text-danger">Sell is not empty</span>
                                    )}
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="number"
                                        className="form-control"
                                        id="quantity"
                                        placeholder="1234"
                                        {...register("quantity", { required: true })}
                                        defaultValue={product.quantity} />
                                    <label htmlFor="sell">Quantity</label>
                                    {errors.quantity && (
                                        <span className="text-danger">Quantity is not empty</span>
                                    )}
                                </div>
                                <div className="text-start  mb-3">
                                    <label className="form-label">Category</label>
                                    <select class="form-select" aria-label="Default select example" {...register("categoryID")}>
                                        {categories && categories.map((item, index) =>
                                            <option value={item.id}>{item.name}</option>
                                        )}
                                    </select>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 text-start mb-3">
                                        <label className="mb-2">Available</label>
                                        <div className="form-check">
                                            <input className="form-check-input"
                                                type="radio"
                                                id="flexRadioDefault3"
                                                value="true"
                                                checked={product.available}
                                            {...register("available")} />
                                            <label className="form-check-label" htmlFor="flexRadioDefault3">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input"
                                                type="radio"
                                                id="flexRadioDefault4"
                                                value="false"
                                            checked={!product.available}
                                            {...register("available")} />
                                            <label className="form-check-label" htmlFor="flexRadioDefault4">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-content-center mt-2">

                                    <button className="col-md-3 btn btn-primary me-2" type="submit">Submit</button>
                                    <button className="col-md-3 btn btn-danger" onClick={onHandleCancel}>Cancel</button>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}