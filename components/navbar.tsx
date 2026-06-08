'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Input } from 'antd'
import {
    HeartOutlined,
    UserOutlined,
    ShoppingCartOutlined,
    MenuOutlined,
    CloseOutlined,
} from '@ant-design/icons'
import { useRouter } from 'next/navigation'

export default function Navbar() {
    const router = useRouter()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleSearch = (value: string) => {
        if (!value.trim()) return
        setIsMenuOpen(false)
        router.push(`/search?q=${encodeURIComponent(value)}`)
    }

    const navLinks = ['Shop', 'Categories', 'Deals', 'Support']

    return (
        <nav className="w-full py-5 px-6 md:px-10 flex items-center justify-between shadow-md bg-white sticky top-0 z-50 backdrop-blur-md">
            
            {/* Logo: Forced to stay together in a single row and never shrink */}
            <Link 
                href="/" 
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '2px',
                    whiteSpace: 'nowrap',
                    flexShrink: 0, 
                    textDecoration: 'none'
                }}
            >
                <span className="font-extrabold tracking-tighter text-orange-500" 
                      style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)' }}>K-</span>
                <span className="font-extrabold tracking-tighter text-orange-500" 
                      style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)' }}>BUY</span>
            </Link>

            {/* Desktop Navigation Links: Added flexShrink: 0 to keep them intact */}
            <div 
                className="hidden md:flex items-center gap-8 lg:gap-10 text-[13px] font-semibold uppercase tracking-[0.15em]"
                style={{ flexShrink: 0 }}
            >
                {navLinks.map((item) => (
                    <Link 
                        key={item} 
                        href={`/${item.toLowerCase()}`} 
                        className="hover:text-orange-600 transition-colors whitespace-nowrap"
                    >
                        {item}
                    </Link>
                ))}
            </div>

            {/* Desktop Actions: Added flexShrink: 0 to keep search and icons intact */}
            <div 
                className="hidden md:flex items-center gap-4 lg:gap-6"
                style={{ flexShrink: 0 }}
            >
                <Input.Search 
                    placeholder="Search..." 
                    allowClear 
                    onSearch={handleSearch} 
                    className="w-32 lg:w-60" 
                />
                <div className="flex items-center gap-4 lg:gap-5 text-xl">
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
                        onSearch={handleSearch} 
                    />
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
                    <div className="flex items-center justify-around text-2xl pt-2">
                        <HeartOutlined className="hover:text-orange-600" />
                        <UserOutlined className="hover:text-orange-600" />
                        <ShoppingCartOutlined className="hover:text-orange-600" />
                    </div>
                </div>
            )}
        </nav>
    )
}