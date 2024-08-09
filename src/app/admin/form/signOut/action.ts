'use server'

import { signOut } from '@/auth'

export async function SubmitAction () {
    await signOut({
        redirectTo: '/',
    })
}

export default SubmitAction
