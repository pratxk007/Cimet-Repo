'use client'
import { link } from 'fs'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'


interface childrenDataTypes {
    children: React.ReactNode
}

const navLink = [
    { name: 'Register', href: '/register' },
    { name: 'Login', href: '/login' },
    { name: 'Forgot password', href: '/forgot-password' }

]

function AuthLayout({ children }: childrenDataTypes) {
    const pathName = usePathname();
    return (
        <>
            <div>layout</div>
            {navLink.map((link) => {
                const isActive = pathName.startsWith(link.href)

                return (
                    < Link href={link.href} key={link.name} className={isActive ? 'font-bold mr-4' : 'text-blue-500 mr-4'}  > {link.name}</Link >
                )
            })
            }
        </>
    )
}

export default AuthLayout