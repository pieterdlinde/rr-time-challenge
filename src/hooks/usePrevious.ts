import { useEffect, useRef } from "react";

function usePrevious(value: any): any {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
}

export {usePrevious};