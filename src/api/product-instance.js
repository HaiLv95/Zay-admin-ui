import instance from "./instance";

const baseURL = "/admin/product";

//get All Account
export const getAllProduct = () => {
    const url = baseURL;
    const headers = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `${localStorage.getItem("token")}`
        }
    }
    return instance.get(url, headers);
}

//get Accouont by Username
export const getProductByID = (id) => {
    const url = `${baseURL}/${id}`;
    const headers = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `${localStorage.getItem("token")}`
        }
    }
    return instance.get(url, headers);
}

//Add account
export const saveProduct = (data) => {
    const url = `${baseURL}/add`;
    const headers = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `${localStorage.getItem("token")}`
        }
    }
    return instance.post(url, data, headers);
}

//Update Account
export const updateProduct = (data) => {
    const url = `${baseURL}/update`;
    const headers = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `${localStorage.getItem("token")}`
        }
    }
    return instance.put(url, data, headers);
}

//Delete Account
export const deleteProduct = (id) => {
    const url = `${baseURL}/delete/${id}`;
    console.log(url);
    const headers = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `${localStorage.getItem("token")}`
        }
    }
    return instance.delete(url, headers);
}

