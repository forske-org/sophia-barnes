'use client'

import React, { Fragment, useState, useCallback } from 'react'

import Symbol from '@/lib/ui/symbol'

import SignOut from './form/signOut'
import * as Form from './form'

import styles from './admin.module.scss'
import formStyles from './form/form.module.scss'

export default function ClientPage () {
    const [ form, setForm ] = useState<string>()

    const handleClick = useCallback((e: React.MouseEvent) => {
        const target = e.target as HTMLElement
        const nextValue = form === target.id ? undefined : target.id
        setForm(nextValue)
    }, [ form, setForm ])

    return (
        <Fragment>
            <SignOut />
            <div className={styles.buttonBar}>
                <span></span>
                <button id='person' onClickCapture={handleClick} className={formStyles.buttonSymbol}>
                    <Symbol id='person' size={36}>person_add</Symbol>
                </button>
                <button id='detail' onClickCapture={handleClick} className={formStyles.buttonSymbol}>
                    <Symbol id='detail' size={36}>person_book</Symbol>
                </button>
                <button id='work' onClickCapture={handleClick} className={formStyles.buttonSymbol}>
                    <Symbol id='work' size={36}>work</Symbol>
                </button>
                <button id='domainValue' onClickCapture={handleClick} className={formStyles.buttonSymbol}>
                    <Symbol id='domainValue' size={36}>lists</Symbol>
                </button>
                <span></span>
            </div>
            {form === 'detail' ? <Form.Detail setForm={setForm}/> : null}
            {form === 'domainValue' ? <Form.DomainValue setForm={setForm}/> : null}
            {form === 'person' ? <Form.Person setForm={setForm}/> : null}
            {form === 'work' ? <Form.Work setForm={setForm}/> : null}
        </Fragment>
    )
}
