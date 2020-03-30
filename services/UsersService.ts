import {Observable} from 'rxjs';
import {DbSelectService} from './DbSelectService';

export class UsersService {
  private dbSelectService: DbSelectService;

  constructor() {
    this.dbSelectService = new DbSelectService();
  }

  public findUsers() {
    return new Observable(observer => {
      this.dbSelectService
        .select("SELECT * FROM users")
        .subscribe(
          data => observer.next(data),
          err => {},
          () => observer.complete()
        );
    });
  }
}