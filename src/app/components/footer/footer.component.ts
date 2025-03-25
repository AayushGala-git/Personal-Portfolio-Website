import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    imports: []
})
export class FooterComponent implements OnInit {
	footerLinks = [
		{
			icon: "mail",
			link: "mailto:aayushgala19@gmail.com",
			text: "Email"
		},
		{
			icon: "code",
			link: "https://github.com/AayushGala-git",
			text: "github.com/AayushGala-git"
		},
		{
			icon: "work",
			link: "https://www.linkedin.com/in/aayush-gala-71b71416a/",
			text: "linkedin.com/in/aayush-gala-71b71416a"
		},
	];

  constructor() { }

  ngOnInit(): void {
  }

}
