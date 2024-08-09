'use server'

import { signIn } from '@/auth'

export async function SubmitAction () {
    await signIn('google', {
        redirectTo: '/admin',
    })
}

export default SubmitAction
