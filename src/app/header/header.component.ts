import { Component, OnInit } from '@angular/core';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  public items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
        {
            label: 'Home',
        },
        {
          	label: 'Products',
        }
    ];
  }
}
