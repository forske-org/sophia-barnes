'use client'

import { useState, Fragment } from 'react'
import useSWR from 'swr'

import Fetcher from '@/lib/fetcher'
import Submit from './action'

import { Person } from '@/types/person'
import { CustomResponse } from '@/types/response'

export function Form ({
    setForm
}: {
    setForm: React.Dispatch<React.SetStateAction<string|undefined>>
}) {
    const [ newAuthor, setNewAuthor ] = useState<boolean>(false)
    const { data: authors, error, isLoading: authorsLoading } = useSWR<CustomResponse<Person[]>>('/api/person', Fetcher)
    const authorList = authors?.data ?? []

    function handleSubmit (formData: FormData) {
        console.log('submitted')

        Submit(formData)

        setForm(undefined)
    }

    return (
        <form action={handleSubmit}>
            <div>
                <label htmlFor='author'>Author</label>
                <select id='author' name='author'>
                    {authorList.map((author: Person) =>
                        <option key={author.ID_PERSON} value={author.ID_PERSON}>
                            {author.NAME_FIRST} {author.NAME_LAST}
                        </option>
                    )}
                </select>
            </div>
            <button onClick={() => setForm('person')}>Author not listed</button>
            <div>
                <label htmlFor='type'>Type</label>
                <input id='type' name='type' type='text'></input>
            </div>
            <div>
                <label htmlFor='date'>Date</label>
                <input id='date' name='date' type='text'></input>
            </div>
            <div>
                <label htmlFor='image'>Image</label>
                <input id='image' name='image' type='text'></input>
            </div>
            <div>
                <label htmlFor='url'>Url</label>
                <input id='url' name='url' type='text'></input>
            </div>

            <button type='submit'>Submit</button>
        </form>
    )
}

export default Form
