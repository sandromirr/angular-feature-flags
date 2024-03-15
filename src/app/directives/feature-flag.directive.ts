import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { FeatureFlagsService } from '../services/feature-flags.service';

@Directive({
  	selector: '[appIfFeatureFlag]',
  	standalone: true
})
export class FeatureFlagDirective implements OnInit{

	@Input()
	appIfFeatureFlag!: string;

	@Input()
	appIfFeatureFlagElse?: TemplateRef<unknown>;
  
	constructor(private templateRef: TemplateRef<unknown>, private viewContainerRef: ViewContainerRef, private featureFlagService: FeatureFlagsService){

	}

	async ngOnInit() {
		try {
		  const featureFlag = await this.featureFlagService.getFeatureFlag(this.appIfFeatureFlag);
		  featureFlag ? this.onIf() : this.onElse();
		} catch (error) {
		  this.onElse();
		  // additional error handling logic goes here
		}
	}
	
	private onIf(): void {
		this.createView(this.templateRef);
	}
	
	private onElse(): void {
		if (!this.appIfFeatureFlagElse) {
			return;
		}

		this.createView(this.appIfFeatureFlagElse);
	}
	
	private createView(templateRef: TemplateRef<unknown>): void {
		this.viewContainerRef.createEmbeddedView(templateRef);
	}
}
