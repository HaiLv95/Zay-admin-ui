import instance from "./instance";

const baseURL = "/admin/account";

//get All Account
export const getAllAccount = () => {
    const url = baseURL;
    return instance.get(url);
}

//get Accouont by Username
export const getAccountByUsername = (username) => {
    const url = `${baseURL}/${username}`;
    return instance.get(url);
}

//Add account
export const saveAccount = (account) => {
    const url = baseURL;
    return instance.post(url, account);
}

//Update Account
export const updateAccount = (account) => {
    const url = baseURL;
    return instance.put(url, account);
}

//Delete Account
export const deleteAccount = (username) => {
    const url = `${baseURL}/${username}`;
    return instance.delete(url);
}

//login
export const logon = (logonData) => {
    const url = '/login';
    return instance.post(url, logonData);
}
