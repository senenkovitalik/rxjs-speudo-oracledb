import {UsersService} from '../services/UsersService';

export class UsersComponent {
  private usersService: UsersService;

  constructor() {
    this.usersService = new UsersService();
  }

  showUsers(): void {
    const container = document.getElementById("results");
    const ul = document.createElement("UL");
    this.usersService
      .findUsers()
      .subscribe(
        data => addUser(data, ul),
        err => console.log(err),
        () => console.log("All users are shown")
      );
    document.body.appendChild(ul);
  }
}

function addUser(value, container) {
  const li = document.createElement("LI");
  li.innerText = value;
  container.appendChild(li);
}