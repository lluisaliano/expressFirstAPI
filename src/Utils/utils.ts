import {Activity, noIDActivity} from '../definitions';
import {addActivitytoDB, connectDB, endConnection, getData, starterInfo} from './pgsql';

export async function addActivity(noIDActivity: noIDActivity) {
    const currentData = await getData();
    const newActivity: Activity = {id: currentData.rows.length+1, ...noIDActivity};
    await addActivitytoDB(newActivity);
    return newActivity;
}

export const getActivities = async function() {
    let result = await getData();
    if (result.rows.length === 0) starterInfo();
    result = await getData();
    return result.rows;
};

export const startConnection = connectDB;
export const closeConnection = endConnection;