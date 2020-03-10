import react, { useEffect } from "react"


export default function useVisibility(ref, callbackOnScreen, callbackOffScreen) {
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {

            if (!entry.isIntersecting) {
                callbackOffScreen()
            } else {
                callbackOnScreen()
            }
        }, {
            root: null,
            rootMargin: "0px",
            threshold: [0, 0.1]
        })

        if (ref.current) {
            observer.observe(ref.current)
        }
    }, [])
}