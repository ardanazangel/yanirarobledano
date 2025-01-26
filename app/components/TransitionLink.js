"use client"

import { usePathname, useRouter } from "next/navigation"
import { animatePageOut } from "../utils/transitionAnim"

const TransitionLink = ({href, label}) => {
    const router = useRouter()
    const pathname = usePathname()

    const handleClick = () => {
        if (pathname != href){
            animatePageOut(href, router)
        }
    }

    return(
        <button className="nav-buttons" onClick={handleClick}>
            {label}
        </button>
    )
}

export default TransitionLink