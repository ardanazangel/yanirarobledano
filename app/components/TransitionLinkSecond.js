"use client"

import { usePathname, useRouter } from "next/navigation"
import { animatePageOut } from "../utils/transitionAnim"
import Link from "next/link"

const TransitionLinkSecond = ({href}) => {
    const router = useRouter()
    const pathname = usePathname()

    const handleClick = () => {
        if (pathname != href){
            animatePageOut(href, router)
        }
    }

    return(
        <a onClick={handleClick} className="project-link">

        </a>
    )
}

export default TransitionLinkSecond