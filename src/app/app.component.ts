import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FeatureFlagsService } from './services/feature-flags.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderV2Component } from './header-v2/header-v2.component';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    HeaderComponent,
    HeaderV2Component,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-feature-flags';

  public isFeatureOneEnabled$: Observable<boolean> | undefined;

  constructor(public featureFlagService: FeatureFlagsService){}

  ngOnInit() {
    this.isFeatureOneEnabled$ = this.featureFlagService.isFeatureEnabled('header-v2');
  }
}
