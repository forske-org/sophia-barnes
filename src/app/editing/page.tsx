import { Query } from '@/lib/database/get'
import ClassCard from '@/lib/ui/cardClass'
import Card from '@/lib/ui/cardWork'
import ContactForm from '@/lib/ui/contactForm'

import { type Work } from '@/types/work'

import styles from '../page.module.scss'

import { sendMail } from '@/lib/msGraph'

export const metadata = {
    title: 'Editing',
}

const SERVICES = [
    {
        title: 'Manuscript Assessment',
        description: `A close reading of and full report on your manuscript's strengths and areas for development, as well as its market potential.`,
    },
    {
        title: 'Structural Edit',
        description: `A comprehensive review of your manuscript's content, structure, language and presentation, including targeted edits and guidance.`,
    },
    {
        title: 'Copy Edit',
        description: `A closer edit of the manuscript's prose, focusing on language, grammar, punctuation and style.`,
    },
]

export default async function Page () {
    const data = await Query(`SELECT * FROM SOBARNES.PUBLIC.WORK WHERE id_person != 1;`) as Work[]
    const editing = data.sort((a,b) => b.DATE.getTime() - a.DATE.getTime())

    return (
        <div className={styles.main}>
            <section className={styles.article}>
                <p>Sophia provides the following editing services:</p>
                {SERVICES.map((item, index) =>
                    <ClassCard key={index} {...item} />
                )}
            </section>
            {editing.length > 0 ? <section className={styles.article}>
                <h4>Edited Works</h4>
                {editing?.map((work: Work) => <Card key={work.ID_WORK} {...work}/>)}
            </section> : null}
            <section className={styles.article} style={{
                minHeight: '75%',
            }}>
                <ContactForm />
            </section>
        </div>
    )
}
