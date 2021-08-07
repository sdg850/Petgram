import { useEffect, useRef, useState } from 'react'

export function useNearScreen() {

    const [show, setShow] = useState(false)
    const ref = useRef(null)

    useEffect(function () {
        Promise.resolve(
            typeof window.IntersectionObserver != 'undefined'
                ? window.IntersectionObserver
                : import('intersection-observer'))
            .then(() => {
                const observer = new window.IntersectionObserver(function (entries) {
                    const { isIntersecting } = entries[0]
                    if (isIntersecting) {
                        setShow(isIntersecting)
                        observer.disconnect()
                    }
                })
                observer.observe(ref.current)
            })
    }, [ref])

    return [show, ref]

}


