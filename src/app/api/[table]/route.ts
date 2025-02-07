import { Query } from '@/lib/database/query'

export async function GET (
    req: Request,
    { params }: { params: Promise<{ table: string }> }
) {
    const { table } = await params

    const query = `SELECT * FROM SOBARNES.PUBLIC.${table}`

    const results = await Query(query)

    return Response.json({
        pathname: `/api/${table}`,
        data: results,
    })
}

export async function POST (
    req: Request,
    { params }: { params: Promise<{ table: string }> }
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

    const { table } = await params

    const query = `INSERT INTO SOBARNES.PUBLIC.${table} (${fields}) VALUES (${values});`

    const results = await Query(query)

    return Response.json({
        pathname: `/api/${table}`,
        data: results,
    })
}
