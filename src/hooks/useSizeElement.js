import { useState, useRef, useEffect } from 'react'

const useSizeElement = () => {
    const elementRef = useRef(null);
    const [width, setWidth] = useState(0);

    useEffect(() => {

        if (elementRef.current) {

            console.log(elementRef.current.clientWidth)

            setWidth(elementRef.current.clientWidth);
        }

    }, [elementRef.current]);

    return { width, elementRef };
}

export default useSizeElement;