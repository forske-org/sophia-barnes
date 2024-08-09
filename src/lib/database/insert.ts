'use server'

import { Query } from '@/lib/database/query'

export async function Insert ({
    table,
    values,
}: {
    table: string | null
    values: {
        [key: string]: FormDataEntryValue | null
    }
}): Promise<any> {
    const keys = Object.keys(values)

    console.log(keys)

    let query: string = ''
    if (values[`id_${table}`]) {
        let updates = ''
        keys.filter(key => key !== `id_${table}`).forEach(key => {
            if (updates.length !== 0) updates += ', '
            updates += `${key} = '${values[key]}'`
        })

        const where = `id_${table} = '${values[`id_${table}`]}'`

        query = `UPDATE ${table} SET ${updates} WHERE ${where};`
    } else {
        const entries = Object.values(values)
        query = `INSERT INTO ${table} (${keys.join(', ')}) VALUES ('${entries.join(`', '`)}');`
    }

    console.log(query)

    return Query(query)
}

export default Insert
