import React,{useState} from 'react'


export default function UseToggle(initialValue = false){
    let [state,setState] = useState(initialValue);

    let toggle = () => {
        setState((prev) => ! prev)
    }

    return [state, toggle]
}
