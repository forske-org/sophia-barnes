import { db } from './connect'

function create () {
    db.serialize(() => {
        db.run(
            `CREATE TABLE IF NOT EXISTS person (
                 id INTEGER PRIMARY KEY AUTOINCREMENT
                ,name_first TEXT NOT NULL
                ,name_middle TEXT
                ,name_last TEXT NOT NULL
            );`, (err: Error) => {
                if (err) console.error(err.message)
                else console.log('Table created -> person')
            }
        )

        db.run(
            `CREATE TABLE IF NOT EXISTS type_details (
                 id INTEGER PRIMARY KEY AUTOINCREMENT
                ,key TEXT NOT NULL
                ,label TEXT NOT NULL
                ,definition TEXT
            );`, (err: Error) => {
                if (err) console.error(err.message)
                else console.log('Table created -> type_details')
            }
        )

        db.run(
            `CREATE TABLE IF NOT EXISTS details (
                 id INTEGER PRIMARY KEY AUTOINCREMENT
                ,id_person INTEGER NOT NULL
                ,type TEXT NOT NULL
                ,value TEXT NOT NULL
                ,FOREIGN KEY (id_person) REFERENCES person(id)
                ,FOREIGN KEY (type) REFERENCES type_details(key)
            );`, (err: Error) => {
                if (err) console.error(err.message)
                else console.log('Table created -> details')
            }
        )

        db.run(
            `CREATE TABLE IF NOT EXISTS type_work (
                 id INTEGER PRIMARY KEY AUTOINCREMENT
                ,key TEXT NOT NULL
                ,label TEXT NOT NULL
                ,definition TEXT
            );`, (err: Error) => {
                if (err) console.error(err.message)
                else console.log('Table created -> type_work')
            }
        )

        db.run(
            `CREATE TABLE IF NOT EXISTS work (
                 id INTEGER PRIMARY KEY AUTOINCREMENT
                ,id_person INTEGER NOT NULL
                ,type TEXT NOT NULL
                ,date DATE NOT NULL
                ,image TEXT
                ,url TEXT
                ,FOREIGN KEY (id_person) REFERENCES person(id)
                ,FOREIGN KEY (type) REFERENCES type_work(key)
            );`, (err: Error) => {
                if (err) console.error(err.message)
                else console.log('Table created -> work')
            }
        )

        db.run(
            `CREATE TABLE IF NOT EXISTS type_request (
                 id INTEGER PRIMARY KEY AUTOINCREMENT
                ,key TEXT NOT NULL
                ,label TEXT NOT NULL
                ,definition TEXT
            );`, (err: Error) => {
                if (err) console.error(err.message)
                else console.log('Table created -> type_request')
            }
        )

        db.run(
            `CREATE TABLE IF NOT EXISTS request (
                 id INTEGER PRIMARY KEY AUTOINCREMENT
                ,id_person INTEGER NOT NULL
                ,type TEXT NOT NULL
                ,date DATE NOT NULL
                ,image TEXT
                ,url TEXT
                ,FOREIGN KEY (id_person) REFERENCES person(id)
                ,FOREIGN KEY (type) REFERENCES request_type(key)
            );`, (err: Error) => {
                if (err) console.error(err.message)
                else console.log('Table created -> request')
            }
        )
    })
}

create()