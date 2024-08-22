import { Query } from '@/lib/database/get'
import Card from '@/lib/ui/cardWork'

import { type Work } from '@/types/work'

import styles from '../page.module.scss'

export const metadata = {
    title: 'Non-Fiction',
}

export default async function Page () {
    const data = await Query(`SELECT * FROM work WHERE id_person = 1 AND type IN ('review', 'book','essay');`) as Work[]
    const reviews = data.filter((element: any) => element.TYPE === 'review').sort((a,b) => b.DATE.getTime() - a.DATE.getTime())
    const books = data.filter((element: any) => element.TYPE === 'book').sort((a,b) => b.DATE.getTime() - a.DATE.getTime())
    const essays = data.filter((element: any) => element.TYPE === 'essay').sort((a,b) => b.DATE.getTime() - a.DATE.getTime())

    return (
        <div className={styles.main}>
            <section className={styles.article}>
                <p>Sophia has published chapters in the edited collections <i>Doris Lessing's</i> The Golden Notebook <i>After Fifty (Palgrave Macmillan 2015)</i> and <i>Doris Lessing and the Forming of History</i> (Edinburgh University Press 2016). She is co-editor with MarkByron of <i>Ezra Pound and Olga Rudge's</i> The Blue Spill: <i>A Manuscript Critical Edition</i> (Bloomsbury 2019).</p>
            </section>
            <section className={styles.article}>
                {books.length > 0 ? <h4>Books</h4> : null}
                {books?.map((work: Work) => <Card key={work.ID_WORK} {...work}/>)}
                {essays.length > 0 ? <h4>Essays</h4> : null}
                {essays?.map((work: Work) => <Card key={work.ID_WORK} {...work}/>)}
                {reviews.length > 0 ? <h4>Reviews</h4> : null}
                {reviews?.map((work: Work) => <Card key={work.ID_WORK} {...work}/>)}
            </section>
        </div>
    )
}
