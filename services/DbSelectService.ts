import {DbStreamService} from './DbStreamService';

export class DbSelectService {
  private dbStreamService: DbStreamService;

  constructor() {
    this.dbStreamService = new DbStreamService();
  }

  public select(sql: string) {
    return this.dbStreamService.queryStream(sql);
  }
}