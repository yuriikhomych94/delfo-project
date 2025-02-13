import { Component } from '@angular/core';
import { MenuButtonComponent } from '../../../shared/components/menu-button/menu-button.component';
import { MatMenuItem } from '@angular/material/menu';

@Component({
  selector: 'app-languages',
  imports: [ MenuButtonComponent, MatMenuItem ],
  standalone: true,
  templateUrl: './languages.component.html',
  styleUrl: './languages.component.scss'
})
export class LanguagesComponent {

}
