'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Input } from 'antd'
import {
    SearchOutlined,
    HeartOutlined,
    UserOutlined,
    ShoppingCartOutlined,
    MenuOutlined,
    CloseOutlined,
} from '@ant-design/icons'
import { useRouter } from 'next/navigation'

export default function Navbar() {
    const router = useRouter()
    const [searchQuery, setSearchQuery] = useState('')
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleSearch = (value: string) => {
        if (!value.trim()) return
        setIsMenuOpen(false)
        router.push(`/search?q=${encodeURIComponent(value)}`)
    }

    const navLinks = ['Shop', 'Categories', 'Deals', 'Support']

    return (
        <nav className="w-full py-5 px-6 md:px-10 flex items-center justify-between shadow-md bg-white sticky top-0 z-50 backdrop-blur-md">
            {/* Logo (Referencing image_853c63.png style) */}
            <Link 
                href="/" 
                className="text-2xl font-extrabold tracking-tighter text-orange-500"
            >
                K-BUY
            </Link>

            {/* Desktop Navigation Links (Referencing image_853c0a.png style) */}
            <div className="hidden md:flex items-center gap-10 text-[13px] font-semibold uppercase tracking-[0.15em]">
                {navLinks.map((item) => (
                    <Link 
                        key={item} 
                        href={`/${item.toLowerCase()}`} 
                        className="hover:text-orange-600 transition-colors"
                    >
                        {item}
                    </Link>
                ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-6">
                <Input.Search 
                    placeholder="Search..." 
                    allowClear 
                    onSearch={handleSearch} 
                    className="w-60" 
                />
                <div className="flex items-center gap-5 text-xl">
                    <HeartOutlined className="cursor-pointer hover:text-orange-600" />
                    <UserOutlined className="cursor-pointer hover:text-orange-600" />
                    <ShoppingCartOutlined className="cursor-pointer hover:text-orange-600" />
                </div>
            </div>

            {/* Mobile Hamburger Button */}
            <button 
                className="md:hidden text-2xl" 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
            >
                {isMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
            </button>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-white p-6 flex flex-col gap-6 shadow-lg md:hidden border-t">
                    <Input.Search 
                        placeholder="Search..." 
                        allowClear 
                        onSearch={handleSearch} 
                    />
                    
                    {/* Mobile Navigation Links */}
                    {navLinks.map((item) => (
                        <Link
                            key={item}
                            href={`/${item.toLowerCase()}`}
                            className="text-lg font-semibold uppercase border-b pb-2 text-center"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item}
                        </Link>
                    ))}

                    <div className="flex items-center justify-between text-2xl pt-4 border-t px-10">
                        <HeartOutlined className="hover:text-orange-600" />
                        <UserOutlined className="hover:text-orange-600" />
                        <ShoppingCartOutlined className="hover:text-orange-600" />
                    </div>
                </div>
            )}
        </nav>
    )
}