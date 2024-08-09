import Submit from './action'

export function Form ({
    setForm
}: {
    setForm: React.Dispatch<React.SetStateAction<string|undefined>>
}) {
    function handleSubmit (formData: FormData) {
        console.log('submitted')

        Submit(formData)

        setForm(undefined)
    }

    return (
        <form action={handleSubmit}>
            <div>
                <label for='name_first'>First Name</label>
                <input id='name_first' name='name_first' type='text'></input>
            </div>
            <div>
                <label for='name_middle'>Middle Name</label>
                <input id='name_middle' name='name_middle' type='text'></input>
            </div>
            <div>
                <label for='name_last'>Last Name</label>
                <input id='name_last' name='name_last' type='text'></input>
            </div>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Form
