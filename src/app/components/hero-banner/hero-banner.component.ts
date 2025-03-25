import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { AccentService } from 'src/app/services/accent-service.service';
import { ResponsiveImageComponent } from '../responsive-image/responsive-image.component';
import { NgTemplateOutlet } from '@angular/common';
import { AccentSwitcherComponent } from '../accent-switcher/accent-switcher.component';

@Component({
    selector: 'hero-banner',
    templateUrl: './hero-banner.component.html',
    styleUrls: ['./hero-banner.component.scss'],
    imports: [AccentSwitcherComponent, NgTemplateOutlet, ResponsiveImageComponent],
	host: {ngSkipHydration: 'true'},
})
export class HeroBannerComponent implements OnInit, OnDestroy {
	private accent = inject(AccentService);

	images: Array<string>;
	heroImage: string;
	secondHeroImage: string | undefined;
	accentSubscription: Subscription;
	isSecondHeroImageActive = false;
	activeIndex: number;
	customImage: string | ArrayBuffer | null = null;

	siteTitle = "Aayush Gala";
	siteDescription = "An AI/ML Developer and Data Scientist with expertise in designing and implementing intelligent systems. Passionate about leveraging cutting-edge technologies to solve complex problems and extract meaningful insights from data.";

	isBrowser: boolean = false;
	externalIcons = [];

	/** Inserted by Angular inject() migration for backwards compatibility */
	constructor(...args: unknown[]);

	constructor() {
		this.images = this.accent.images;
		this.heroImage = this.images[this.accent.activeIndex];
		this.activeIndex = Number(this.accent.activeIndex);
		this.customImage = this.accent.customImage;

		this.accentSubscription = this.accent.accentSubscription.subscribe(
			(index: number) => {
				this.setHeroImage(index);
				this.customImage = this.accent.customImage;
			}
		);
	}

	ngOnInit(): void {
	}

	ngOnDestroy() {
		this.accentSubscription.unsubscribe();
	}

	setHeroImage(index: number) {
		if (this.activeIndex !== index) {
			if (this.isSecondHeroImageActive) {
				this.heroImage = index === 0 ? this.images[this.activeIndex] : this.images[index];
				this.isSecondHeroImageActive = false;
			} else {
				this.secondHeroImage = index === 0 ? this.images[this.activeIndex] as string : this.images[index];
				this.isSecondHeroImageActive = true;
			}
			this.activeIndex = index;
		}
	}
}
