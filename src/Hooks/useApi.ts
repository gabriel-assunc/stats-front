import { BASE_URL } from "@/Api/apiEndpoints"

const HEADERS = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
}

export const doGet = async (url: string, headers?: any): Promise<Response> => {
    headers = {
        ...HEADERS,
        ...headers
    }
    const res = await fetch(BASE_URL + url, {
        headers: headers
    })
    return res
}

export const doPost = async (url: string, body: string, headers?: any) => {
    headers = {
        ...HEADERS,
        ...headers
    }
    const res = await fetch(BASE_URL + url, {
        method: "post",
        headers,
        body: body
    })

    return res
}