import { Component, OnInit, Input } from '@angular/core';
import { UserService, User } from '../../user.service';
import { CalService } from '../../cal.service';

@Component({
  selector: 'app-admin-panel',
  standalone: false,
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {
  @Input() status!: string;  // <-- รับค่าจาก parent

  staff: any[] = [];
  restaurantData: any;

  constructor(
    private userService: UserService,
    private calService: CalService
  ) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data: User[]) => {
      this.staff = data;
    });

    this.calService.getRestaurantData().subscribe((data: any) => {
      this.restaurantData = data;
    });
  }
}
