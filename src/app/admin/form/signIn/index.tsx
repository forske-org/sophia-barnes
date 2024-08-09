import SubmitAction from './action'

export function Form () {
    return (
        <form action={SubmitAction}>
            <button type='submit'>Signin with Google</button>
        </form>
    )
}

export default Form
