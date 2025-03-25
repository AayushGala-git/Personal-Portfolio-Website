import { Component, OnInit } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

@Component({
    selector: 'profile-info',
    templateUrl: './profile-info.component.html',
    styleUrls: ['./profile-info.component.scss'],
    imports: [NgTemplateOutlet]
})
export class ProfileInfoComponent implements OnInit {
	description: string;
	contactLinks = [
		{
			icon: "mail",
			link: "mailto:aayushgala19@gmail.com",
			text: "Email"
		},
		{
			icon: "code",
			link: "https://github.com/AayushGala-git",
			text: "GitHub"
		},
		{
			icon: "work",
			link: "https://www.linkedin.com/in/aayush-gala-71b71416a/",
			text: "LinkedIn"
		},
	];

	constructor() {
		this.description = "Hi, I'm Aayush Gala! I'm an experienced professional with a multidisciplinary background in AI/ML development, data analysis, data science, and software development. I have a proven track record in building, deploying, and enhancing applications, and I excel at solving complex challenges with innovative technical solutions. My technical expertise combined with strong problem-solving abilities allows me to deliver impactful results across various domains.";
	}

	ngOnInit(): void {
	}

}
