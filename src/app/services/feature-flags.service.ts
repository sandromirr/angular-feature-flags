import { Injectable } from '@angular/core';

const FEATURE_FLAGS_MOCK: Record<string, boolean> = {
  'header-v1': false,
  'header-v2': true
}

@Injectable({
  providedIn: 'root'
})
export class FeatureFlagsService {
  public getFeatureFlag(featureFlag: string): Promise<boolean> {
    return Promise.resolve(FEATURE_FLAGS_MOCK[featureFlag]);
  } 
}