import React from 'react'

import { type ColourList } from '@/types/colourList'

export function Symbol ({
    children,
    id,
    style = 'outlined',
    size = 24,
    fill = 0,
    weight = 400,
    grade = 0,
    opticalSize = 24,
    colour = 'mid',
}: {
    children: React.ReactNode
    id?: string
    style?: 'outlined' | 'rounded' | 'sharp'
    size?: number
    fill?: 1 | 0
    weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700
    grade?: -25 | 0 | 200
    opticalSize?: 20 | 24 | 40 | 48
    colour?: ColourList
}) {
    const inlineStyle = {
        fontVariationSettings: `'FILL' ${fill}, 'wght' ${weight}, 'GRAD' ${grade}, 'opsz' ${opticalSize}`,
        fontSize: `${size}px`,
        color: `var(--${colour})`,
    } as React.CSSProperties

    return (
        <span id={id} className={`material-symbols-${style}`} style={inlineStyle}>
            {children}
        </span>
    )
}

export default Symbol
