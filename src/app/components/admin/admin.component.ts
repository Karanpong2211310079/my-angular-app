import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  standalone: false,
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']  // แก้ชื่อจาก styleUrl → styleUrls
})
export class AdminComponent {

  status: string = 'dashboard';  // ต้องอยู่ก่อนใช้งานใน items

  items = [
    {
      label: 'Dashboard',
      icon: 'pi pi-home',
      badge: '3',
      command: () => {
        this.status = 'dashboard';
        console.log('Switched to:', this.status);
      },
      items: [
        {
          label: 'Analytics',
          icon: 'pi pi-chart-line',
          command: () => {
            this.status = 'analytics';
            console.log('Switched to:', this.status);
          }
        },
        {
          label: 'Sales',
          icon: 'pi pi-chart-bar',
          badge: 'NEW',
          command: () => {
            this.status = 'sales';
            console.log('Switched to:', this.status);
          }
        }
      ]
    },
    {
      label: 'Settings',
      icon: 'pi pi-cog',
      command: () => {
        this.status = 'settings';
        console.log('Switched to:', this.status);
      }
    }
  ];

  constructor() {
    console.log('Initial status:', this.status);
  }
}
