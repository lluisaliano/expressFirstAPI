import {Client, QueryConfigValues} from 'pg';
import {Activity} from '../definitions';

const client = new Client({
    user: 'lluis',
    host: 'localhost',
    port: 5432,
    database: 'expressapi',
});
export const connectDB = async function() {
    await client.connect().then(() => {
        console.log('connected');
    }).catch((e) => {
        console.error(e);
    });
};


export const starterInfo = () => {
    client.query('INSERT INTO activities (id, name, location, information, category, price)\n' +
        'VALUES (1, \'Kayak\', \'Ciutadella\', \'websitelink\', \'water\', \'50\');',  (err, result) => {
        if (err) {
            console.error('Error executing query', err);
        } else {
            console.log('Query result:', result.rows);
        }
    });
};

export const getData = async function() {
    return await client.query('SELECT * FROM activities');
};

export async function addActivitytoDB(activity: Activity) {
    const { id, name, location, information, category, price } = activity;

    const query = 'INSERT INTO activities (id, name, location, information, category, price)\n' +
        'VALUES ($1, $2, $3, $4, $5, $6);';

    const values: QueryConfigValues<any> = [id, name, location, information, category, price];

    return await client.query(query, values);
}

export const endConnection = async function() {
    await client.end();
};

