import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'life-at-a-glance',
	templateUrl: './life-at-a-glance.component.html',
	styleUrls: ['./life-at-a-glance.component.scss'],
	imports: [CommonModule],
	standalone: true
})
export class LifeAtAGlanceComponent {
	features = [
		{
			title: 'Education',
			icon: 'school',
			link: '#',
			shortDescription: 'MSc in Computer Science and B.Tech in Information Technology',
			description: [
				'MSc in Computer Science – Data Science | Trinity College Dublin, Ireland (Sept 2024 – Present)',
				'Bachelor of Technology in Information Technology | K.J. Somaiya Institute of Technology (Mumbai University), India (Sept 2020 – June 2024)',
				'Honours in Blockchain Technology (Sept 2022 – June 2024)'
			]
		},
		{
			title: 'Work Experience',
			icon: 'work',
			link: '#',
			shortDescription: 'Software Developer Intern at GSC Intime Services Private Limited',
			description: [
				'Software Developer Intern | GSC Intime Services Private Limited, Mumbai (Sept 2023 – March 2024)',
				'Restructured two desktop applications using JavaFX, achieving a 12% performance increase',
				'Fixed approximately 10 software issues by collaborating with a team of 5 developers',
				'Participated in 5 code review sessions and contributed to 3 project improvements'
			]
		},
		{
			title: 'Research & Dissertation',
			icon: 'lab_research',
			link: '#',
			shortDescription: 'Zero-Inflated Model Regression for Count Data in Health Science',
			description: [
				'Zero-Inflated Model Regression for Count Data in Health Science',
				'Focused on using advanced regression techniques to distinguish between structural and sampling zeros in health data',
				'Conducted simulation studies using evaluation metrics such as AIC, Vuong test, and randomized quantile residuals (RQR)',
				'Aimed to enhance predictive accuracy in healthcare analytics through sophisticated statistical modeling'
			]
		}
	];

	selectedFeature = this.features[0];

	selectFeature(feature: any): void {
		this.selectedFeature = feature;
	}
}
