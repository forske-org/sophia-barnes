import Symbol from '@/lib/ui/symbol'

import SubmitAction from './action'

import styles from '../form.module.scss'

export function Form () {
    return (
        <form action={SubmitAction} className={styles.topRight}>
            <button type='submit' className={styles.buttonSymbol}>
                <Symbol size={36} colour='mid'>logout</Symbol>
            </button>
        </form>
    )
}

export default Form
