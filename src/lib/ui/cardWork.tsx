import Image from 'next/image'

import { type Work } from '@/types/work'
import MONTHS from '@/lib/constants/months'
import { API } from '@/lib/database/query'

import styles from './card.module.scss'

export async function Card ({
    ID_WORK,
    ID_PERSON,
    TYPE,
    TITLE,
    DATE,
    IMAGE,
    URL,
    PUBLISHER,
    aspectRatio = '1.5:1',
    baseSize = 100,
}: Work & {
    aspectRatio?: `${number}:${number}`
    baseSize?: number
}) {
    const jsonDate = DATE.toJSON()
    const splitDate = jsonDate.split('-')

    let author = await API(`SELECT * FROM person WHERE id_person = '${ID_PERSON}';`)
    author = author.at(0)

    return (
        <a className={`${styles.work} ${styles.container}`}
            id={`${ID_WORK}`}
            href={URL ?? ''}
            target='_blank'>
            {IMAGE ? <Image src={IMAGE ?? ''}
                alt={`${TITLE}-image`}
                width={baseSize * parseFloat(aspectRatio.split(':').at(-1) ?? '1')}
                height={baseSize * parseFloat(aspectRatio.split(':').at(0) ?? '1.5')}/> :
                <div className={styles.placeholder}></div>
            }
            <div className={styles.content}>
                <span className={styles.title}>{TITLE}</span>
                <span className={styles.publisher}>{PUBLISHER ?? ''}</span>
                {author ? <span className={styles.author}>{author.NAME_LAST}, {author.NAME_FIRST}</span>  : null}
                <span className={styles.type}>{TYPE.toUpperCase()}</span>
                <span className={styles.date}>
                    {MONTHS[splitDate.at(1) ?? '01']}{` ${splitDate.at(0) ?? ''}`}
                </span>
            </div>
        </a>
    )
}

export default Card