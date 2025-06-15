import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../../user.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']   // <-- แก้ที่นี่
})
export class HomeComponent implements OnInit {
  users: User[] = [];
  errorMessage = '';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
      },
      error: (err) => {
        this.errorMessage = 'เกิดข้อผิดพลาด: ' + err.message;
      }
    });
  }
}
