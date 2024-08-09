import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote/rsc'

import { API } from '@/lib/database/get'

import styles from './page.module.scss'

export default async function Page () {
    const data = await API('SELECT * FROM detail WHERE id_person = 1;')
    const biography = data.find((element: any) => element.TYPE === 'bio')

    return (
        <div className={styles.main}>
            <div className={styles.profileImage}>
                <Image alt='' src='/profile.jpg' width={260} height={340}/>
            </div>
            <section className={styles.article}>
                <MDXRemote source={biography?.VALUE ?? ''} />
            </section>
        </div>
    )
}
