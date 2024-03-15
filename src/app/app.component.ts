import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FeatureFlagsService } from './services/feature-flags.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderV2Component } from './header-v2/header-v2.component';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FeatureFlagDirective } from './directives/feature-flag.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    HeaderComponent,
    HeaderV2Component,
    FooterComponent,
    FeatureFlagDirective
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-feature-flags';

  constructor(public featureFlagService: FeatureFlagsService){}

  ngOnInit() {}
}
