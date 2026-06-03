import type { Metadata } from 'next'
import { Sora, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

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
            <body className="min-h-full flex flex-col font-sans">
                {children}
            </body>
        </html>
    )
}
