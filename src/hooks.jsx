import { useState } from "react"
import axios from "axios"
import {v4 as uuid} from "uuid"

const useFlip = (initialState = true) => {
    const [state, setState] = useState(initialState)

    const flipState = () => {
        setState(state => !state)
    }

    return [state, flipState]
}

const useAxios = (url) => {
    const [state, setState] = useState([])

    console.log(url)

    const addResponse = async (endpoint = null) => {
        console.log(endpoint);
        if (endpoint === null) {
            const response = await axios.get(url);
            setState(state => [...state, {...response.data, id: uuid()}])
        } else {
            const response = await axios.get(url + endpoint)
            setState(state => [...state, {...response.data, id: uuid()}])
        }
    }

    return [state, addResponse]
}

export {useFlip, useAxios}