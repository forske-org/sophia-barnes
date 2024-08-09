'use server'

import Insert from '@/lib/database/insert'

const keys = [ 'domain', 'key', 'label', 'description' ]

export default async function Submit (
    formData: FormData,
) {
    console.log('submitted -> domain value')
    const table = 'domain_value'

    let rawFormData: any = {
        table: 'domain_value',
    }

    rawFormData.values = {
        [`id_${table}`]: formData.get(`id_${table}`),
    }
    keys.forEach((key) => {
        rawFormData.values[key] = formData.get(key)
    })

    console.log(rawFormData)

    await Insert(rawFormData)

    console.log(rawFormData)
}
