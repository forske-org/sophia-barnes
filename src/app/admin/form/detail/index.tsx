import useSWR from 'swr'

import { fetcher } from '@/lib/fetcher'
import Submit from './action'

export function Form ({
    setForm
}: {
    setForm: React.Dispatch<React.SetStateAction<string|undefined>>
}) {
    const { data: domainValues } = useSWR('/api/domain_value', fetcher)

    function handleSubmit (formData: FormData) {
        console.log('submitted')

        Submit(formData)

        setForm(undefined)
    }

    return (
        <form action={handleSubmit}>
            <div>
                <label htmlFor='type'>Type</label>
                <select id='type' name='type'>
                    <option value=''>-- Select Option --</option>
                    {domainValues?.data?.map((value: any) =>
                        <option value={value.key} key={value.key}>{value.label}</option>
                    )}
                </select>
            </div>
            <div>
                <label htmlFor='value'>Value</label>
                <input id='value' name='value' type='text'></input>
            </div>

            <button type='submit'>Submit</button>
        </form>
    )
}

export default Form
