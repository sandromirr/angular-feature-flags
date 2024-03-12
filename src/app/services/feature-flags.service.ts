import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeatureFlagsService {
  private featureFlags = new BehaviorSubject<any>({});

  constructor(private httpClient: HttpClient) {
    this.loadFeatureFlags();
    this.featureFlags.subscribe((data) => {
      console.log(data.features);
    })
  }

  private loadFeatureFlags(): void {
    this.httpClient.get('./assets/data/features.json')
      .subscribe(flags => this.featureFlags.next(flags));
  }

  isFeatureEnabled(featureName: string): Observable<boolean> {
    return this.featureFlags.pipe(map(flags => flags[featureName] === true));
  }
}
