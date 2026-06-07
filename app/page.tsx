'use client'

import { Button } from 'antd'

export default function Home() {
    return (
        <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 mx-auto bg-white dark:bg-black sm:items-start">
            <h1 className="text-6xl font-bold text-center sm:text-left">
                Welcome to K-Buy!
            </h1>
            <h1 className="text-6xl font-normal text-center sm:text-left text-purple-600">
                E-commerce storefront for pre-loved goods
            </h1>
            <Button type="primary" size="large" className="sm:text-left">
                HELOOOOO
            </Button>
            <p className="mt-3 text-2xl text-center sm:text-left">
                Get started by editing{' '}
                <code className="bg-gray-100 rounded-md p-1 font-mono">
                    app/page.tsx
                </code>
            </p>
        </main>
    )
}
