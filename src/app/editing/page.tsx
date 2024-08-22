import { Query } from '@/lib/database/get'
import Card from '@/lib/ui/cardClass'

import { type Work } from '@/types/work'

import styles from '../page.module.scss'

export const metadata = {
    title: 'Editing',
}

const SERVICES = [
    {
        title: 'Manuscript Assessment',
        description: 'A review of your work which evaluates the strengths and weaknesses of your manuscript, as well as its market potential.',
    },
    {
        title: 'Structural Edit',
        description: '',
    },
    {
        title: 'Line Edit',
        description: '',
    },
    {
        title: 'Copy Edit',
        description: '',
    },
]

export default async function Page () {
    const data = await Query(`SELECT * FROM work WHERE id_person != 1;`) as Work[]
    const editing = data.sort((a,b) => b.DATE.getTime() - a.DATE.getTime())

    return (
        <div className={styles.main}>
            <section className={styles.article}>
                <p>Sophia provides the following editing services</p>
                {SERVICES.map((item, index) =>
                    <Card key={index} {...item} />
                )}
            </section>
            <section className={styles.article}>
                {editing.length > 0 ? <h4>Edited Works</h4> : null}
                {editing?.map((work: Work) => <Card key={work.ID_WORK} {...work}/>)}
            </section>
        </div>
    )
}
