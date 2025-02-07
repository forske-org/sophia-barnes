import { Query } from '@/lib/database/query'

export async function GET (
    req: Request,
    { params }: { params: Promise<{ table: string, identifier: string }> }
) {
    const { table, identifier } = await params

    const query = `SELECT * FROM SOBARNES.PUBLIC.${table} WHERE id_${table} = ${identifier};`

    const results = await Query(query)

    return Response.json({
        pathname: `/api/${table}/${identifier}`,
        data: results,
    })
}

export async function DELETE (
    req: Request,
    { params }: { params: Promise<{ table: string, identifier: string }> }
) {
    const { table, identifier } = await params

    const query = `DELETE FROM SOBARNES.PUBLIC.${table} WHERE id_${table} = ${identifier};`

    const results = await Query(query)

    return Response.json({
        pathname: `/api/${table}/${identifier}`,
        data: results,
    })
}

export async function PUT (
    req: Request,
    { params }: { params: Promise<{ table: string, identifier: string }> }
) {
    let parsed: any = {}
    let updates: string = ''

    const data = await req.formData()

    data.forEach((value, key) => {
        parsed[key] = value
        if (updates.length > 0) updates += ', '
        updates += `${key} = "${value}"`
    })

    const { table, identifier } = await params

    const query = `UPDATE SOBARNES.PUBLIC.${table} SET ${updates} WHERE id_${table} = ${identifier};`

    const results = await Query(query)

    return Response.json({
        pathname: `/api/${table}/${identifier}`,
        // data: parsed,
        // query: query,
        results: results,
    })
}
