import Sequelize from 'sequelize';
import config from '../../config/config.json';

const env = process.env.NODE_ENV || 'development';
const {username, password, database, host, dialect } = config[env];
const connectionUrl = `${dialect}://${username}:${password}@${host}/${database}`;

export const sequelize = new Sequelize(connectionUrl);

export const connect = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}