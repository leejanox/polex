import { useState } from "react";


export const useCopy = ({text}:{text:string}) => {

    const [ isCopied, setIsCopied ] = useState<boolean>(false);

    const copy = () => {
        navigator.clipboard.writeText(text);
        setIsCopied(true);
        setTimeout(()=>{
            setIsCopied(false);
        },10000);
    }

    return {isCopied,copy};
}
