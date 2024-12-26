import { isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import MetaTags from '@interfaces/meta-tags.interface';

@Injectable({
	providedIn: 'root'
})
export class MetaService {
	private meta = inject(Meta);
	private titleService = inject(Title);
	private platformId = inject<Object>(PLATFORM_ID);
	private router = inject(Router);
	isBrowser: boolean = false;

	constructor() {
		this.isBrowser = isPlatformBrowser(this.platformId);
	}

	updateSiteInfoMeta(metaTags: MetaTags) {
		this.meta.updateTag({ name: 'description', content: metaTags.description });
		this.meta.updateTag({ name: 'keywords', content: metaTags.keywords });
		this.meta.updateTag({ property: 'og:title', content: metaTags.title });
		this.meta.updateTag({ property: 'og:description', content: metaTags.description });
		this.meta.updateTag({ property: 'og:image', content: metaTags.image });
		this.meta.updateTag({ property: 'og:image:secure_url', content: metaTags.image });
		this.meta.updateTag({ property: 'og:image:alt', content: metaTags.imageAlt });
		this.meta.updateTag({ name: 'twitter:title', content: metaTags.title });
		this.meta.updateTag({ name: 'twitter:description', content: metaTags.description });
		this.meta.updateTag({ name: 'twitter:image', content: metaTags.image });

		this.titleService.setTitle(metaTags.title);

		if (metaTags.favicons) {
			this.updateFavicons(metaTags.favicons);
		}
	}
	
	updateSiteColorMeta(color: string) {
		this.meta.updateTag({
			name: "theme-color",
			content: color
		});
	}

	updateFavicons(favicons: { type: string; sizes: string; href: string }[]) {
		if (this.isBrowser) {
		// Remove existing favicons
		const existingIcons = document.querySelectorAll("link[rel*='icon']");
		existingIcons.forEach(icon => icon.remove());
		this.writeFavicons(favicons);
		}
	}

	writeFavicons(favicons: { type: string; sizes: string; href: string }[]) {
		if (this.isBrowser) {
			// Add new favicons
			favicons.forEach(favicon => {
				const link: HTMLLinkElement = document.createElement('link');
				link.rel = 'icon';
				link.type = favicon.type;
				link.setAttribute('sizes', favicon.sizes); // Use setAttribute to handle read-only properties
				link.href = favicon.href;
				document.getElementsByTagName('head')[0].appendChild(link);
			});
		}
	}

	restoreOriginalSiteInfo() {
		const metaTags = {
			description: "Dartegnian Velarde's interactive portfolio website with Material You color schemes. Built with Angular, TypeScript, and uses Sass.",
			keywords: "Dartegnian, Dartegnian Velarde, Velarde Dartegnian, Dartegnian L. Velarde, Portfolio, Online Portfolio",
			title: "Dartegnian's Portfolio",
			image: "https://portfolio.dartegnian.com/assets/img/portfolio-min-1024.jpg",
			imageAlt: "Material You-style introduction banner for Dartegnian's Portfolio",
			favicons: [
				{ type: "image/png", sizes: "192x192", href: "/assets/icons/icon-192x192.png" },
				{ type: "image/png", sizes: "32x32", href: "/assets/icons/favicon-32x32.png" },
				{ type: "image/png", sizes: "16x16", href: "/assets/icons/favicon-16x16.png" }
			]
		};

		this.updateSiteInfoMeta(metaTags);
	}

	updateCanonicalUrl(): void {
		// Get the current URL dynamically
		const url = this.router.url;

		// Use the current host from window.location for both localhost and production
		const baseUrl = isPlatformBrowser(this.platformId) ? window.location.origin : "https://portfolio.dartegnian.com";
		const fullUrl = `${baseUrl}${url}`;

		if (this.isBrowser) {
			// If it's a browser, update or create the canonical link dynamically
			let canonicalLink: HTMLLinkElement | null = document.querySelector('link[rel="canonical"]');
			if (!canonicalLink) {
				canonicalLink = document.createElement('link');
				canonicalLink.setAttribute('rel', 'canonical');
				document.head.appendChild(canonicalLink);
			}
			canonicalLink.setAttribute('href', fullUrl);
		} else {
			// For SSR, use the Meta service to ensure the canonical tag is rendered server-side
			this.meta.updateTag({ rel: 'canonical', href: fullUrl }, 'rel=canonical');
		}
	}
}
