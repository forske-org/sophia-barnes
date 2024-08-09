import React, { Fragment, useCallback } from 'react'
import useSWR from 'swr'

import { fetcher } from '@/lib/fetcher'
import Submit from './action'

export function Form ({
    setForm
}: {
    setForm: React.Dispatch<React.SetStateAction<string|undefined>>
}) {
    const { data: domain_values } = useSWR('/api/domain_value', fetcher)

    function handleSubmit (formData: FormData) {
        console.log('submitted')

        Submit(formData)

        // setForm(undefined)
    }

    const handleClick = useCallback((event: React.MouseEvent) => {
        const target = event.target as HTMLElement
        const id = target.id

        const value = domain_values?.data.find((entry: any) => entry.ID_DOMAIN_VALUE == id)
        console.log(id, value)

        Object.keys(value).forEach((key: string) => {
            document!.getElementById(key.toLowerCase())!.value = value[key]
        })
    }, [ domain_values ])

    return (
        <Fragment>
            <form action={handleSubmit}>
                <div>
                    <div>
                        {domain_values?.data.map(entry => {
                            return (
                                <p key={entry.KEY}
                                    id={entry.ID_DOMAIN_VALUE}
                                    onClick={handleClick}>
                                    {entry.DOMAIN} - {entry.LABEL}
                                </p>
                            )
                        })}
                    </div>
                </div>
                <div style={{
                    height: '0',
                    overflow: 'hidden',
                }}>
                    <label htmlFor='id_domain_value'>Identifier</label>
                    <input id='id_domain_value' name='id_domain_value' type='text'></input>
                </div>
                <div>
                    <label htmlFor='domain'>Domain</label>
                    <select id='domain' name='domain'>
                        <option value='detail'>Detail</option>
                        <option value='work'>Work</option>
                        <option value='request'>Request</option>
                    </select>
                </div>
                <div>
                    <label htmlFor='key'>Key</label>
                    <input id='key' name='key' type='text' />
                </div>
                <div>
                    <label htmlFor='label'>Label</label>
                    <input id='label' name='label' type='text' />
                </div>
                <div>
                    <label htmlFor='description'>Description</label>
                    <textarea id='description' name='description' />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </Fragment>
    )
}

export default Form
