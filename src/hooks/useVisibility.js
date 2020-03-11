import react, { useEffect } from "react"


export default function useVisibility(ref, callbackOnScreen, callbackOffScreen) {
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {

            console.log(entry)

            if (!entry.isIntersecting || entry.intersectionRatio < 0.8) {
                callbackOffScreen()
            } else {
                callbackOnScreen()
            }
        }, {
            root: null,
            rootMargin: "0px",
            threshold: [0, 0.8]
        })

        if (ref.current) {
            console.log("observar")
            observer.observe(ref.current)
        }
    }, [])
}