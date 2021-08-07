import { useState } from 'react';
 
export  function useLocalStorage(key, inicialValue){
    const [value, setValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key)
            return item != null ? JSON.parse(item) : inicialValue
        } catch (e) {
            return inicialValue
        }
    })

    const setLocalStorage = value => {
        try {
            window.localStorage.setItem(key, JSON.stringify(value))
            setValue(value)
        } catch (e) {
            console.error(e)
        }
    }

    return [value, setLocalStorage]
}