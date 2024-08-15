import { Query } from '@/lib/database/query'

export async function GET (
    req: Request,
    { params }: { params: { table: string }}
) {
    const query = `SELECT * FROM ${params.table}`
    console.log(query)

    const results = await Query(query)

    return Response.json({
        pathname: `/api/${params.table}`,
        data: results,
    })
}

export async function POST (
    req: Request,
    { params }: { params: { table: string }}
) {
    let parsed: any = {}
    let fields: string = ''
    let values: string = ''

    const data = await req.formData()

    data.forEach((value, key) => {
        parsed[key] = value
        if (fields.length > 0) fields += ', '
        fields += key
        if (values.length > 0) values += ', '
        values += `"${value}"`
    })

    const query = `INSERT INTO ${params.table} (${fields}) VALUES (${values});`

    const results = await Query(query)

    return Response.json({
        pathname: `/api/${params.table}`,
        data: results,
    })
}
