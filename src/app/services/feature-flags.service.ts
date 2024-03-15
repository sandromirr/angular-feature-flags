import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FeatureFlag } from '../shared/feature-flag.model';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeatureFlagsService {
  private featureFlags = new BehaviorSubject<any>({});

  constructor(private httpClient: HttpClient) {
    this.loadFeatureFlags();
  }

  private loadFeatureFlags(): void {
    this.httpClient.get('./assets/data/features.json')
      .subscribe(response => this.featureFlags.next(response));
  }

  isFeatureEnabled(featureName: string): Observable<boolean> {
    return this.featureFlags.pipe(map((response: any) => {
      if(response['features'] == null){
        return false;
      } 
      const flags: FeatureFlag[] = response.features;
      if(flags == null){
        return false;
      }
      return flags.filter(x => x.name == featureName).length > 0;
    }));
  }
}