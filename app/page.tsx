'use client'

import Link from 'next/link'
import { Button, Input, Card, Tag, Rate, Steps } from 'antd'
import {
    SearchOutlined,
    ShoppingCartOutlined,
    SafetyOutlined,
    ThunderboltOutlined,
    ExperimentOutlined,
    HeartOutlined,
    TeamOutlined,
    StarOutlined,
    RightOutlined,
    ArrowRightOutlined,
} from '@ant-design/icons'

const stats = [
    { value: '12K+', label: 'Items Sold' },
    { value: '4.8', label: 'Avg. Rating' },
    { value: '3K+', label: 'Happy Customers' },
    { value: '95%', label: 'Satisfaction Rate' },
]

const categories = [
    { name: 'Clothing', icon: '👗', href: '/categories', count: '240+ items' },
    { name: 'Electronics', icon: '📱', href: '/categories', count: '180+ items' },
    { name: 'Home & Garden', icon: '🏡', href: '/categories', count: '120+ items' },
    { name: 'Books & Media', icon: '📚', href: '/categories', count: '300+ items' },
]

const features = [
    {
        icon: <SafetyOutlined />,
        title: 'Verified Quality',
        desc: 'Every item is inspected and authenticated before listing, so you buy with confidence.',
    },
    {
        icon: <ThunderboltOutlined />,
        title: 'Fast & Easy',
        desc: 'List in minutes, buy with one click. Reliable shipping across the entire country.',
    },
    {
        icon: <ExperimentOutlined />,
        title: 'Eco-Conscious',
        desc: 'Give pre-loved goods a second life. Reduce waste and shop more sustainably.',
    },
    {
        icon: <HeartOutlined />,
        title: 'Community Driven',
        desc: 'Join thousands of sellers and buyers who care about quality and the planet.',
    },
]

const testimonials = [
    {
        quote: 'Found a vintage jacket in perfect condition for a fraction of the retail price. K-Buy is my go-to now.',
        author: 'Alex M.',
        role: 'Verified Buyer',
        rating: 5,
    },
    {
        quote: 'Sold my old camera in under 48 hours. The process was seamless and the team was incredibly helpful.',
        author: 'Jordan T.',
        role: 'Verified Seller',
        rating: 5,
    },
    {
        quote: 'Finally a second-hand marketplace that feels curated. The quality checks make all the difference.',
        author: 'Sam K.',
        role: 'Verified Buyer',
        rating: 5,
    },
]

export default function Home() {
    return (
        <div className="flex flex-col">
            {/* ──────────────── Hero ──────────────── */}
            <section className="relative flex flex-col items-center justify-center px-6 pt-24 pb-28 md:pt-32 md:pb-36 text-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-orange-50 via-white to-white pointer-events-none" />
                <div className="relative z-10 max-w-4xl mx-auto">
                    <Tag
                        color="orange"
                        className="!px-4 !py-1 !text-xs !font-semibold !tracking-widest !uppercase !border-none !mb-6"
                    >
                        Sustainable Shopping
                    </Tag>
                    <h1 className="font-sora text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-[--foreground] leading-[1.1]">
                        Pre-loved goods.{' '}
                        <span className="text-orange-500">New to you.</span>
                    </h1>
                    <p className="mt-6 text-lg sm:text-xl text-zinc-500 max-w-2xl mx-auto leading-relaxed">
                        K-Buy connects you with quality second-hand items at
                        unbeatable prices. Shop sustainably, save big, and give
                        great products a second life.
                    </p>

                    <div className="mt-10 max-w-lg mx-auto">
                        <Input.Search
                            placeholder="Search for anything..."
                            enterButton={
                                <Button type="primary" icon={<SearchOutlined />}>
                                    Search
                                </Button>
                            }
                            size="large"
                        />
                    </div>

                    <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/shop">
                            <Button
                                type="primary"
                                size="large"
                                icon={<RightOutlined />}
                                className="!h-12 !px-8 !text-base !font-semibold !shadow-sm"
                            >
                                Start Shopping
                            </Button>
                        </Link>
                        <Link href="/deals">
                            <Button size="large" className="!h-12 !px-8 !text-base !font-semibold">
                                View Deals
                            </Button>
                        </Link>
                    </div>
                    <p className="mt-6 text-sm text-zinc-400">
                        Free shipping on your first order &bull; No hidden fees
                    </p>
                </div>
            </section>

            {/* ──────────────── Stats ──────────────── */}
            <section className="border-y border-zinc-100 bg-white">
                <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((s) => (
                        <div key={s.label} className="text-center">
                            <div className="font-sora text-3xl md:text-4xl font-bold text-orange-500">
                                {s.value}
                            </div>
                            <div className="mt-1 text-sm text-zinc-500">{s.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ──────────────── Categories ──────────────── */}
            <section className="px-6 py-24 md:py-32 max-w-6xl mx-auto w-full">
                <div className="flex items-end justify-between mb-12">
                    <div>
                        <Tag color="orange" className="!px-0 !border-none !bg-transparent !text-xs !font-semibold !tracking-widest !uppercase">
                            Categories
                        </Tag>
                        <h2 className="font-sora text-3xl sm:text-4xl font-bold mt-2">
                            Shop by Category
                        </h2>
                    </div>
                    <Link
                        href="/categories"
                        className="hidden sm:flex items-center gap-1 text-sm font-medium text-orange-500 hover:text-orange-600 transition-colors"
                    >
                        View All <RightOutlined />
                    </Link>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    {categories.map((cat) => (
                        <Link key={cat.name} href={cat.href}>
                            <Card
                                hoverable
                                className="!text-center !border-zinc-200 [&_.ant-card-body]:!p-8 md:[&_.ant-card-body]:!p-10"
                            >
                                <div className="text-4xl mb-3">{cat.icon}</div>
                                <div className="text-lg font-semibold text-[--foreground]">
                                    {cat.name}
                                </div>
                                <div className="mt-1.5 text-sm text-zinc-400">{cat.count}</div>
                            </Card>
                        </Link>
                    ))}
                </div>
                <div className="mt-6 text-center sm:hidden">
                    <Link
                        href="/categories"
                        className="inline-flex items-center gap-1 text-sm font-medium text-orange-500 hover:text-orange-600"
                    >
                        View All Categories <RightOutlined />
                    </Link>
                </div>
            </section>

            {/* ──────────────── Features ──────────────── */}
            <section className="bg-zinc-50 px-6 py-24 md:py-32">
                <div className="max-w-6xl mx-auto w-full">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <Tag color="orange" className="!px-0 !border-none !bg-transparent !text-xs !font-semibold !tracking-widest !uppercase">
                            Why K-Buy
                        </Tag>
                        <h2 className="font-sora text-3xl sm:text-4xl font-bold mt-2">
                            Built for smart, sustainable shopping
                        </h2>
                        <p className="mt-4 text-zinc-500 text-lg">
                            We make second-hand shopping safe, simple, and rewarding for everyone.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((f) => (
                            <Card
                                key={f.title}
                                className="!border-zinc-100 hover:!border-orange-200 [&_.ant-card-body]:!p-8"
                                hoverable
                            >
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-orange-50 text-orange-500 text-xl">
                                    {f.icon}
                                </div>
                                <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
                                <p className="mt-2 text-zinc-500 text-sm leading-relaxed">{f.desc}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* ──────────────── How It Works ──────────────── */}
            <section className="px-6 py-24 md:py-32 max-w-4xl mx-auto w-full">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <Tag color="orange" className="!px-0 !border-none !bg-transparent !text-xs !font-semibold !tracking-widest !uppercase">
                        Getting Started
                    </Tag>
                    <h2 className="font-sora text-3xl sm:text-4xl font-bold mt-2">
                        How It Works
                    </h2>
                    <p className="mt-4 text-zinc-500 text-lg">
                        Three simple steps to find your next treasure.
                    </p>
                </div>
                <Steps
                    direction="horizontal"
                    current={-1}
                    labelPlacement="vertical"
                    className="!gap-0 [&_.ant-steps-item-title]:!text-base [&_.ant-steps-item-title]:!font-semibold [&_.ant-steps-item-description]:!text-sm [&_.ant-steps-item-description]:!text-zinc-500"
                    items={[
                        {
                            title: 'Browse',
                            description:
                                'Explore thousands of pre-loved items across Clothing, Electronics, Home, and more.',
                            icon: <ShoppingCartOutlined />,
                        },
                        {
                            title: 'Buy',
                            description:
                                'Secure checkout with buyer protection. Every item is verified before shipping.',
                            icon: <StarOutlined />,
                        },
                        {
                            title: 'Enjoy',
                            description:
                                'Get your item delivered to your door and give quality goods a second life.',
                            icon: <TeamOutlined />,
                        },
                    ]}
                />
            </section>

            {/* ──────────────── Testimonials ──────────────── */}
            <section className="bg-zinc-50 px-6 py-24 md:py-32">
                <div className="max-w-6xl mx-auto w-full">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <Tag color="orange" className="!px-0 !border-none !bg-transparent !text-xs !font-semibold !tracking-widest !uppercase">
                            Testimonials
                        </Tag>
                        <h2 className="font-sora text-3xl sm:text-4xl font-bold mt-2">
                            What our community says
                        </h2>
                    </div>
                    <div className="grid sm:grid-cols-3 gap-6">
                        {testimonials.map((t) => (
                            <Card key={t.author} className="!border-zinc-100 !h-full [&_.ant-card-body]:!flex [&_.ant-card-body]:!flex-col">
                                <Rate disabled defaultValue={t.rating} className="!text-orange-400 !text-sm !mb-4" />
                                <p className="text-zinc-600 text-sm leading-relaxed flex-1">
                                    &ldquo;{t.quote}&rdquo;
                                </p>
                                <div className="mt-6 pt-4 border-t border-zinc-100">
                                    <div className="text-sm font-semibold">{t.author}</div>
                                    <div className="text-xs text-zinc-400">{t.role}</div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* ──────────────── Newsletter / CTA ──────────────── */}
            <section className="px-6 py-24 md:py-32 bg-gradient-to-br from-orange-500 to-orange-600 text-white text-center">
                <div className="max-w-2xl mx-auto">
                    <h2 className="font-sora text-3xl sm:text-4xl font-bold leading-tight">
                        Ready to find your next treasure?
                    </h2>
                    <p className="mt-4 text-orange-100 text-lg">
                        Join thousands of happy shoppers. Sign up for exclusive deals and early
                        access to new arrivals.
                    </p>
                    <div className="mt-8 max-w-md mx-auto flex gap-3">
                        <Input placeholder="Enter your email" size="large" className="!rounded-lg !flex-1" />
                        <Button type="primary" size="large" icon={<ArrowRightOutlined />}>
                            Subscribe
                        </Button>
                    </div>
                    <p className="mt-4 text-xs text-orange-200">No spam. Unsubscribe anytime.</p>
                </div>
            </section>
        </div>
    )
}
