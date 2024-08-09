import { API } from '@/lib/database/get'
import Card from '@/lib/ui/cardWork'

import { type Work } from '@/types/work'

import styles from './page.module.scss'

export const metadata = {
    title: 'Writing',
}

export default async function Page () {
    const data = await API(`SELECT * FROM work WHERE id_person = 1 AND type IN ('review', 'book');`) as Work[]
    const reviews = data.filter((element: any) => element.TYPE === 'review').sort((a,b) => b.DATE.getTime() - a.DATE.getTime())
    const books = data.filter((element: any) => element.TYPE === 'book').sort((a,b) => b.DATE.getTime() - a.DATE.getTime())

    return (
        <div className={styles.main}>
            <section className={styles.article}>
                {reviews?.map((work: Work) => <Card key={work.ID_WORK} {...work}/>)}
                {books?.map((work: Work) => <Card key={work.ID_WORK} {...work}/>)}
            </section>
        </div>
    )
}
