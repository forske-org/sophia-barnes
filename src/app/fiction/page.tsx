import { Query } from '@/lib/database/get'
import Card from '@/lib/ui/cardWork'

import { type Work } from '@/types/work'

import styles from '../page.module.scss'

export const metadata = {
    title: 'Fiction',
}

export default async function Page () {
    const data = await Query(`SELECT * FROM work WHERE id_person = 1 AND type IN ('story', 'novel');`) as Work[]
    const stories = data.filter((element: any) => element.TYPE === 'story').sort((a,b) => b.DATE.getTime() - a.DATE.getTime())
    const novels = data.filter((element: any) => element.TYPE === 'novel').sort((a,b) => b.DATE.getTime() - a.DATE.getTime())

    return (
        <div className={styles.main}>
            <section className={styles.article}>
                <p>Sophia's short fiction has appeared in <i>Kill Your Darlings</i>, <i>Seizure Online</i>, <i>Inktears</i>, <i>Wet Ink Magazine</i> and the collection <i>Stories of Sydney</i>. Her stories have been shortlisted for the <i>Wet Ink</i> / CAL Short Story Prize, the FAW AngeloB Natali Short Story Award and tghe Newcastle Short Story Award.</p>
            </section>
            <section className={styles.article}>
                {novels.length > 0 ? <h4>Novels</h4> : null}
                {novels?.map((work: Work) => <Card key={work.ID_WORK} {...work}/>)}
                {stories.length > 0 ? <h4>Stories</h4> : null}
                {stories?.map((work: Work) => <Card key={work.ID_WORK} {...work}/>)}
            </section>
        </div>
    )
}
