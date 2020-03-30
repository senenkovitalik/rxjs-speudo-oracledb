import {Observable, from} from 'rxjs';
import {concatMap, tap} from 'rxjs/operators';
import {DbConnectionService} from './DbConnectionService';
import {Connection} from '../types';

export class DbStreamService {
  private dbConnectionService: DbConnectionService;

  constructor() {
    this.dbConnectionService = new DbConnectionService();
  }

  public queryStream(sql: string) {
    return new Observable(observer => {
      let connection: Connection;
      from(this.dbConnectionService.getConnection())
        .pipe(tap((conn: Connection) => connection = conn))
        .pipe(concatMap((conn: Connection) => from(conn.queryStream(sql)))).subscribe(
          streamData => {
            // stream.on('error', error => console.error(error))
            // stream.on('data', data => observer.next(data))
            // stream.on('end', () => observer.complete())
            // stream.on('close', async () => await connection.close())
            observer.next(streamData)
          },
          err => console.error(err),
          async () => {
            observer.complete();
            await connection.close();
          }
        );
    });
  }
}