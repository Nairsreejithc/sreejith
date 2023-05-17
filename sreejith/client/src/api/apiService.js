//  ******************** Base URL ***********************
let baseUrl = "http://localhost:9000/api/";

export const userRegister = async (body) => {
    const requestOptions = {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
    }
    const response = await fetch(baseUrl + "users/register", requestOptions)
    if (!response.ok) {
        let data = await response.json();
        return { data: data, ok: false }
    }
    let data = await response?.json();
    return { data: data, ok: true }
}
export const getAllUsers = async () => {
    const requestOptions = {
        method: "GET",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
    }
    const response = await fetch(baseUrl + "users/getallusers", requestOptions)
    if (!response.ok) {
        let data = await response.json();
        return { data: data, ok: false }
    }
    let data = await response?.json();
    return { data: data, ok: true }
}
export const getUser = async (id) => {
    const requestOptions = {
        method: "GET",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
    }
    const response = await fetch(baseUrl + `users/getuserbyid?id=${id}`, requestOptions)
    if (!response.ok) {
        let data = await response.json();
        return { data: data, ok: false }
    }
    let data = await response?.json();
    return { data: data, ok: true }
}

export const deleteTheUser = async (id) => {
    const requestOptions = {
        method: "DELETE",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
    }
    const response = await fetch(baseUrl + `users/deleteuser?id=${id}`, requestOptions)
    if (!response.ok) {
        let data = await response.json();
        return { data: data, ok: false }
    }
    let data = await response?.json();
    return { data: data, ok: true }
}
export const updateTheUser = async (body,id) => {
    const requestOptions = {
        method: "PUT",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
    }
    const response = await fetch(baseUrl + `users/deleteuser?id=${id}`, requestOptions)
    if (!response.ok) {
        let data = await response.json();
        return { data: data, ok: false }
    }
    let data = await response?.json();
    return { data: data, ok: true }
}



