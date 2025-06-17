import { Component, effect, signal } from '@angular/core';
import { computed } from '@angular/core';
import { ElementRef, inject } from '@angular/core';
import { afterRender } from '@angular/core';
@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  private elementRef = inject(ElementRef);

  constructor() {
    afterRender(() => {
      // โฟกัส input ตัวแรกใน component นี้
      this.elementRef.nativeElement.querySelector('input')?.focus();
    });
  }
  
}
