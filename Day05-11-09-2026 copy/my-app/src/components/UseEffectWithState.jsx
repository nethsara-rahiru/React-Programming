import { useEffect } from "react";
import { useState } from "react";

export default function UseEffectWithState() {
    const[count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]);

    return(
        <button onClick={() => setCount(count + 1)}>
            Count: {count}
        </button>
    )
}