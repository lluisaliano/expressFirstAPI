// Server Logic
import Express from 'express';
import http from 'http';
import {addActivity, closeConnection, getActivities, startConnection} from './Utils/utils';

const app = Express();

app.use(Express.json());

app.get('/', async (_req, res) => {
    await startConnection();
    const activities = await getActivities();
    res.send(activities);
});

app.post('/', async (req, res) => {
    const {name, location, information, category, price} = req.body;

    const newActivity = await addActivity({
        name,
        location,
        information,
        category,
        price});

    res.json(newActivity);
});

app.post('/close', async (_req, res) => {
    await closeConnection();
    res.send('Connection has been closed');
    console.log('Connection has been closed');
});



http.createServer(app).listen(3000);