import { motion, useMotionValue } from "framer-motion";
import { useEffect } from "react";

export default function Spotlight(){

    const x=useMotionValue(0);
    const y=useMotionValue(0);

    useEffect(()=>{

        const move=(e)=>{
            x.set(e.clientX-250);
            y.set(e.clientY-250);
        }

        window.addEventListener("mousemove",move);

        return ()=>window.removeEventListener("mousemove",move);

    },[])

    return(

        <motion.div

        style={{x,y}}

        className="
        fixed
        w-[500px]
        h-[500px]
        rounded-full
        pointer-events-none
        bg-red-600/10
        blur-[180px]
        z-0
        "

        />

    )

}