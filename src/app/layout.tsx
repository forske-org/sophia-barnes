import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'

import Header from '@/lib/ui/header'
import Footer from '@/lib/ui/footer'

import '@/styles/globals.scss'
import styles from './layout.module.scss'

const sans = Noto_Sans({
    variable: '--font-sans',
    style: [ 'normal', 'italic' ],
    weight: [ '100', '200', '300', '400', '500', '600', '700' ],
    subsets: ['latin'],
    display: 'swap',
})

export const metadata: Metadata = {
    title: {
        template: 'Sophia Barnes | %s',
        default: 'Sophia Barnes',
    },
    icons: [
        { rel: 'icon', url: '/favicon.ico', },
    ],
    description: 'Sophia Barnes portfolio',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={`${sans.className} ${styles.container}`}>
                <div className={styles.mask}>
                    <Header />
                    <main>
                        {children}
                    </main>
                    <Footer />
                </div>
            </body>
        </html>
    )
}
