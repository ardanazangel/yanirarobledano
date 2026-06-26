"use client"

import { usePathname, useRouter } from "next/navigation"
import { animatePageOut } from "../utils/transitionAnim"

const TransitionLinkSecond = ({href}) => {
    const router = useRouter()
    const pathname = usePathname()

    const handleClick = (e) => {
        e.preventDefault()
        if (pathname !== href) {
            animatePageOut(href, router)
        }
    }

    return (
        <a onClick={handleClick} className="project-link" href={href} />
    )
}

export default TransitionLinkSecond