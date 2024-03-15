import { Component, OnInit } from '@angular/core';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-header-v2',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './header-v2.component.html',
  styleUrl: './header-v2.component.scss'
})
export class HeaderV2Component implements OnInit{
  public items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
        {
            label: 'Home',
        },
        {
          	label: 'Products',
        },
		{
			label: 'About us',
	  	}
    ];
  }
}
