"use client"

import { useEffect } from "react"
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime"
import { animatePageIn } from "@/app/utils/transitionAnim"

export default function Template({children}){

    useEffect (()=>{
        animatePageIn()
    }, [])

    return(
        <>
        <div id="container">
            {children}
        </div>
        </>
    )
}