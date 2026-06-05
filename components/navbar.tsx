'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Input } from 'antd';
import { SearchOutlined, HeartOutlined, UserOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';

export default function Navbar() {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (value: string) => {
        if (!value.trim()) return;
        router.push(`/search?q=${encodeURIComponent(value)}`);
    };

    return (
        // Changed border-b-2 border-black to shadow-md for a soft, elevated look
        <nav className="w-full py-5 px-10 flex items-center justify-between shadow-md bg-[--color-background] text-[--color-foreground] sticky top-0 z-50 backdrop-blur-md">
            {/* Logo */}
            <Link href="/" className="text-2xl font-extrabold tracking-tighter text-orange-500 hover:opacity-70 transition-opacity">
                K-BUY
            </Link>

            {/* Navigation Links with Hover Animations */}
            <div className="flex items-center gap-10 text-[13px] font-semibold uppercase tracking-[0.15em] text-[--color-foreground]">
                {['Shop', 'Categories', 'Deals', 'Support'].map((item) => (
                    <Link
                        key={item}
                        href={`/${item.toLowerCase()}`}
                        className="relative transition-all duration-300 hover:scale-105 hover:text-orange-600 group"
                    >
                        {item}
                        <span className="absolute -bottom-1 left-0 w-0 h-px bg-black transition-all duration-300 group-hover:w-full" />
                    </Link>
                ))}
            </div>

            {/* Actions: Included for full functionality */}
            <div className="flex items-center gap-6">
                <Input.Search
                    placeholder="Search..."
                    allowClear
                    onSearch={handleSearch}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-60 rounded-full border-zinc-200"
                    enterButton={false}
                />
                <div className="flex items-center gap-5 text-xl">
                    <HeartOutlined className="cursor-pointer hover:text-orange-600" />
                    <UserOutlined className="cursor-pointer hover:text-orange-600" />
                    <div className="relative cursor-pointer hover:text-orange-600">
                        <ShoppingCartOutlined />
                        <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                            2
                        </span>
                    </div>
                </div>
            </div>
        </nav>
    );
}