import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import instance from "../../api/instance";
export default function OrderManage() {
    const navigate = useNavigate();
    const headers = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `${localStorage.getItem("token")}`
        }
    }
    const token = localStorage.getItem('token');
    if (token === '') {
        navigate('/login')
    }
    const [orderList, setOrderList] = useState([])
    useEffect(() => {
        setOrderList([])
        try {
            if (token === null) {
                navigate('/login')
            } else {
                instance.get('admin/order', headers).then(resp => {
                    console.log('order resp', resp.data)
                    setOrderList(resp.data)
                })
            }
        } catch (error) {
            console.log('errors', error)

        }
    }, []);
    const allOrderClick = () => {
        setOrderList([])
        instance.get('admin/order', headers).then(resp => {
            console.log('order resp', resp.data)
            setOrderList(resp.data)
        })
    }
    const allOrderSucess = () => {
        setOrderList([])
        instance.get('admin/order?status=success', headers).then(resp => {
            console.log('order resp', resp.data)
            setOrderList(resp.data)
        })
    }
    const allOrderPending = () => {
        setOrderList([])
        instance.get('admin/order?status=pending', headers).then(resp => {
            console.log('order resp', resp.data)
            setOrderList(resp.data)
        })
    }
    const allOrderCancel = () => {
        setOrderList([])
        instance.get('admin/order?status=cancel', headers).then(resp => {
            console.log('order resp', resp.data)
            setOrderList(resp.data)
        })
    }

    return (
        <div className="container-fluid">
            <div className="row mt-4 justify-content-center">
                <div className="col-md-2" style={{ borderRight: '1px solid black', minHeight: '600px' }}>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <button className="link-dark text-decoration-none fw-bold" style={{ border: 'none', background: 'none' }} onClick={allOrderClick}>All Order</button>
                        </li>
                        <li className="list-group-item">
                            <button className="link-dark text-decoration-none fw-bold" style={{ border: 'none', background: 'none' }} onClick={allOrderPending}>Add Order Pending</button>
                        </li>
                        <li className="list-group-item">
                            <button className="link-dark text-decoration-none fw-bold" style={{ border: 'none', background: 'none' }} onClick={allOrderSucess}>Add Order Success</button>
                        </li>
                        <li className="list-group-item">
                            <button className="link-dark text-decoration-none fw-bold" style={{ border: 'none', background: 'none' }} onClick={allOrderCancel}>Add Order Cancel</button>
                        </li>
                    </ul>
                </div>
                <div className="col-md-10">
                    <table className="table table-striped table-bordered border-primary">
                        <thead>
                            <tr>
                                <th>ID  </th>
                                <th className="col-2">Username </th>
                                <th className="">Name Received</th>
                                <th className="">Phone Number </th>
                                <th className="">Order Date</th>
                                <th className="">Address</th>
                                <th className="">Status</th>
                                <th className="col-2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orderList.map((item, index) =>
                                <tr>
                                    <th scope="row">{item.id}</th>
                                    <td>{item.username}</td>
                                    <td>{item.nameReceived}</td>
                                    <td>{item.phoneNumber}</td>
                                    <td>{item.orderDate}</td>
                                    <td>{item.address}</td>
                                    <td>
                                        {item.status === 'pending' ? <span style={{ color: 'green', fontWeight: 'bold' }}>Chờ xác nhận</span> : ''}
                                        {item.status === 'delivering' ? <span style={{ color: 'blue' }}>Đang giao hàng</span> : ''}
                                        {item.status === 'success' ? <span>Thành công</span> : ''}
                                        {item.status === 'cancel' ? <span style={{ color: 'red' }}>Đã hủy</span> : ''}
                                    </td>
                                    <td>
                                        {item.status === 'pending' ?
                                            <>
                                                <button className="me-2" style={{ border: 'none', background: 'none' }} >
                                                    <span className="material-icons-outlined" style={{ color: 'green' }}>done</span>
                                                </button>
                                                <button className="me-2" style={{ border: 'none', background: 'none' }} >
                                                    <span className="material-icons-outlined" style={{ color: 'red' }}>close</span>
                                                </button>
                                            </> : ''}
                                        <button className="me-2" style={{ border: 'none', background: 'none' }} >
                                            <span className="material-icons-outlined" style={{ color: 'blue' }}>info</span>
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