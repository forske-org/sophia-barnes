// import path from 'path'
// import sqlite3 from 'sqlite3'

// const dbPath = path.join(process.cwd(), 'database/profile.db')

// export const db = new sqlite3.Database(
//     dbPath,
//     sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
//     (err) => {
//         if (err) {
//             console.error(err.message)
//         }
//         console.log('Database connected')
//     }
// )

import snowflake from 'snowflake-sdk'
import crypto from 'crypto'

export const db = snowflake.createPool({
    account: process.env.SNOWFLAKE_ACCOUNT!,
    warehouse: process.env.SNOWFLAKE_WAREHOUSE!,
    username: process.env.SNOWFLAKE_USERNAME!,
    // password: process.env.SNOWFLAKE_PASSWORD!,
    privateKey: crypto.createPrivateKey({
        key: process.env.SNOWFLAKE_PRIVATE_KEY!,
        format: 'pem',
    }).export({
        format: 'pem',
        type: 'pkcs8',
    }).toString(),
    authenticator: "SNOWFLAKE_JWT",
    role: process.env.SNOWFLAKE_ROLE!,
    database: process.env.SNOWFLAKE_DATABASE!,
}, {
    max: 5,
    min: 0,
})
