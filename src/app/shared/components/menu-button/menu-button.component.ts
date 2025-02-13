import { Component, Input } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'df-menu-button',
  imports: [
    MatButton,
    MatIcon,
    MatMenuTrigger,
    MatMenu
  ],
  standalone: true,
  templateUrl: './menu-button.component.html',
  styleUrl: './menu-button.component.scss'
})
export class MenuButtonComponent {

  @Input()
  icon!: string;

  @Input()
  label: string = '';

  @Input()
  disabled: boolean = false;
}
