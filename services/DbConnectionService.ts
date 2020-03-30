import oracledb from '../oracledb';
import {Pool, Connection} from '../types';

export class DbConnectionService {
  private pool: Pool;

  public async getConnection(): Promise<Connection> {
    const pool = await oracledb.createPool();
    const connection = await pool.getConnection();
    return connection;
  }
}