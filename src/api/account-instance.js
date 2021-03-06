import instance from "./instance";

const baseURL = "/admin/account";

//get All Account
export const getAllAccount = () => {
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
export const getAccountByUsername = (username) => {
    const url = `${baseURL}/${username}`;
    const headers = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `${localStorage.getItem("token")}`
        }
    }
    return instance.get(url, headers);
}

//Add account
export const saveAccount = (account) => {
    const url = `${baseURL}/add`;
    const headers = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `${localStorage.getItem("token")}`
        }
    }
    return instance.post(url, account, headers);
}

//Update Account
export const updateAccount = (account) => {
    const url = `${baseURL}/update`;
    const headers = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `${localStorage.getItem("token")}`
        }
    }
    return instance.put(url, account, headers);
}

//Delete Account
export const deleteAccount = (username) => {
    const url = `${baseURL}/delete/${username}`;
    console.log(url);
    const headers = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `${localStorage.getItem("token")}`
        }
    }
    return instance.delete(url, headers);
}

//login
export const logon = (logonData) => {
    const url = '/logon';
    return instance.post(url, logonData);
}
