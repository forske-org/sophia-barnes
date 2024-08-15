import { Query } from '@/lib/database/query'

export async function DELETE (
    req: Request,
    { params }: { params: { table: string, identifier: string }}
) {
    const query = `DELETE FROM ${params.table} WHERE id = ${params.identifier};`

    const results = await Query(query)

    return Response.json({
        pathname: `/api/${params.table}/${params.identifier}`,
        data: results,
    })
}

export async function PUT (
    req: Request,
    { params }: { params: { table: string, identifier: string }}
) {
    let parsed: any = {}
    let updates: string = ''

    const data = await req.formData()

    data.forEach((value, key) => {
        parsed[key] = value
        if (updates.length > 0) updates += ', '
        updates += `${key} = "${value}"`
    })

    const query = `UPDATE ${params.table} SET ${updates} WHERE id = ${params.identifier};`

    const results = await Query(query)

    return Response.json({
        pathname: `/api/${params.table}/${params.identifier}`,
        data: parsed,
        query: query,
        results: results,
    })
}
