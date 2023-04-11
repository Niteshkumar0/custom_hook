import React,{useState} from 'react'

 let UseCount = (initialValue = 0) => {
    let [state , setState] = useState(initialValue)

    let count = () => {
        setState(state + 1)
    }



    return [state, count]

}
export default UseCount