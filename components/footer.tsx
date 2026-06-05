import React from 'react';
import Link from 'next/link';
import { ShareAltOutlined, InstagramOutlined, MailOutlined, GlobalOutlined } from '@ant-design/icons';

export default function Footer() {
    return (
        <footer className="w-full py-16 px-10 bg-zinc-50 border-t border-zinc-200">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* Branding Section */}
                <div className="flex flex-col gap-4">
                    <h2 className="text-2xl font-extrabold tracking-tighter text-orange-500">K-BUY</h2>
                    <p className="text-sm text-zinc-600 max-w-50">
                        Defining the intersection of modern shopping and functional carry since 2026.
                    </p>
                    <div className="flex gap-4 text-lg text-zinc-600">
                        <ShareAltOutlined className="cursor-pointer hover:text-orange-600 transition-colors" />
                        <InstagramOutlined className="cursor-pointer hover:text-orange-600 transition-colors" />
                        <MailOutlined className="cursor-pointer hover:text-orange-600 transition-colors" />
                    </div>
                </div>

                {/* Customer Care */}
                <div className="flex flex-col gap-4">
                    <h3 className="font-semibold text-sm uppercase tracking-wider text-[--color-foreground]">Customer Care</h3>
                    <ul className="flex flex-col gap-3 text-sm text-zinc-600">
                        {['Shipping Info', 'Returns', 'Contact', 'Warranty'].map((link) => (
                            <li key={link}><Link href="#" className="hover:text-orange-600 transition-colors">{link}</Link></li>
                        ))}
                    </ul>
                </div>

                {/* Information */}
                <div className="flex flex-col gap-4">
                    <h3 className="font-semibold text-sm uppercase tracking-wider text-[--color-foreground]">Information</h3>
                    <ul className="flex flex-col gap-3 text-sm text-zinc-600">
                        {['About Us', 'Privacy Policy', 'Terms of Service', 'Retailers'].map((link) => (
                            <li key={link}><Link href="#" className="hover:text-orange-600 transition-colors">{link}</Link></li>
                        ))}
                    </ul>
                </div>

                {/* Language & Copyright */}
                <div className="flex flex-col gap-4">
                    <h3 className="font-semibold text-sm uppercase tracking-wider text-[--color-foreground]">Language</h3>
                    <div className="flex items-center gap-2 text-sm text-zinc-600">
                        <GlobalOutlined />
                        <span>United States (USD)</span>
                    </div>
                    <p className="text-[11px] text-zinc-500 mt-auto">
                        © 2026 K-Buy. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}