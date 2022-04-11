import instance from "./instance";

const baseURL = "/admin/category";

//get All Account
export const getAllCategory = () => {
    const url = baseURL;
    const headers = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `${localStorage.getItem("token")}`
        }
    }
    return instance.get(url, headers);
}

//get Category by ID
export const getCategoryByID = (id) => {
    const url = `${baseURL}/${id}`;
    const headers = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `${localStorage.getItem("token")}`
        }
    }
    return instance.get(url, headers);
}

//Add category
export const saveCategory = (data) => {
    const url = `${baseURL}/add`;
    const headers = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `${localStorage.getItem("token")}`
        }
    }
    return instance.post(url, data, headers);
}

//Update category
export const updateCategory = (data) => {
    const url = `${baseURL}/update`;
    const headers = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `${localStorage.getItem("token")}`
        }
    }
    return instance.put(url, data, headers);
}

//Delete category
export const deleteCategory = (id) => {
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

