import { db } from './connect'

export async function Query (query: string): Promise<any> {
    return new Promise((resolve, reject) => {
        // db.all(query, (err: Error, row: any) => {
        //     if (err) {
        //         console.error(err.message)
        //         return reject(err)
        //     }
        //     return resolve(row)
        // })
        let results: any[] = []

        db.use(async (client) => {
            const statement = await client.execute({
                sqlText: query,
                complete: function (err, stmt, rows) {
                    let stream = stmt.streamRows()

                    stream.on('error', (err) => reject(err))
                    stream.on('data', (row) => results.push(row))
                    stream.on('end', () => resolve(results))
                }
            })
        })
    })
}

export async function API (query: string) {
    return await Query(query)
}
