import {Pool, Connection} from './types';

const users = ['John', 'Stuart', 'Tom', 'Ron', 'Marry'];

const oracledb = (() => {
  const Connection = () => {
    const queryStream = (sql): Promise<string[]> => {
      console.log(`run query: ${sql}`);
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(users);
        }, 2000);
      });
    }

    const close = (): Promise<string> => {
      return new Promise(resolve => setTimeout(() => {
        console.log('Connection closed');
        resolve('Connection closed')
      }, 1000));
    }

    return {
      queryStream,
      close
    }
  }

  const Pool = () => {
    const getConnection = (): Promise<Connection> => {
      console.log('Trying to get Connection...');
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(Connection());
        }, 1000);
      });
    }

    return {
      getConnection
    }
  };

  const createPool = (): Promise<Pool> => {
    console.log('Trying to create Pool...');
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Pool());
      }, 1000);
    });
  }

  return {
    createPool
  }
})();

export default oracledb;