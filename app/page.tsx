"use client"
import { useRouter } from "next/navigation"
import { useEffect, useEffectEvent } from "react"

export default function Page() {
  const router = useRouter()
  // NOTE: This use effect is important to ensure home page is loaded after mount
  const loadHomePage = useEffectEvent(() => router.push("/home"))
  useEffect(loadHomePage, [])
}
