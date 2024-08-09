import { Fragment } from 'react'

import { auth } from '@/auth'
import SuperText from '@/lib/ui/superText'

import ClientContent from './clientContent'
import SignIn from './form/signIn'

import styles from './admin.module.scss'

export const metadata = {
    title: 'Admin',
}

const adminEmails = process.env.AUTH_ADMIN!.split(',')

export default async function Page () {
    const session = await auth()

    return (
        <section className={styles.page}>
            {!session ? <SignIn /> : (
                !adminEmails.includes(`${session?.user?.email}`) ? <SignIn />
                : <Fragment>
                    <SuperText>
                        Use this page to edit the database values.
                    </SuperText>
                    <ClientContent />
                </Fragment>
            )}
        </section>
    )
}
