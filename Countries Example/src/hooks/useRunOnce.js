import { useEffect } from "react";

export function useRunOnce(process){
    useEffect(process,[]);
}