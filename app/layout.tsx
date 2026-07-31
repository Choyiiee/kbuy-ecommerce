import type { Metadata } from 'next'
import { Sora, Inter, JetBrains_Mono } from 'next/font/google'
import { ConfigProvider } from 'antd'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import './globals.css'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const sora = Sora({
    variable: '--font-sora',
    subsets: ['latin'],
})

const inter = Inter({
    variable: '--font-inter',
    subsets: ['latin'],
})

const jetbrainsMono = JetBrains_Mono({
    variable: '--font-jetbrains-mono',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'K-Buy',
    description: 'Shop and find pre-loved goods!',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html
            lang="en"
            className={`${sora.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
        >
            <body className="min-h-screen flex flex-col font-sans">
                <AntdRegistry>
                    <ConfigProvider
                        theme={{
                            token: {
                                colorPrimary: '#f97316',
                                borderRadius: 8,
                                fontFamily:
                                    "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
                            },
                        }}
                    >
                        <Navbar />
                        <main className="grow">{children}</main>
                        <Footer />
                    </ConfigProvider>
                </AntdRegistry>
            </body>
        </html>
    )
}