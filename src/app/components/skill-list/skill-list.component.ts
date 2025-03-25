import { Component, OnInit } from '@angular/core';
import { NgTemplateOutlet, NgIf, CommonModule } from '@angular/common';
// import { locate } from '@iconify/json';

@Component({
    selector: 'skill-list',
    templateUrl: './skill-list.component.html',
    styleUrls: ['./skill-list.component.scss'],
    imports: [NgTemplateOutlet, NgIf, CommonModule],
	host: {ngSkipHydration: 'true'},
})
export class SkillListComponent implements OnInit {
	certifications: Array<any>;
	mlAiStack: Array<any>;
	dataScienceStack: Array<any>;
	programmingStack: Array<any>;
	softwareDevelopmentStack: Array<any>;
	generalStack: Array<any>;

	constructor() {
		this.certifications = [];
		
		this.mlAiStack = [
			{
				icon: "cib:tensorflow",
				text: "TensorFlow"
			},
			{
				icon: "simple-icons:pytorch",
				text: "PyTorch"
			},
			{
				icon: "simple-icons:keras",
				text: "Keras"
			},
			{
				icon: "mdi:language-python",
				text: "scikit-learn"
			},
			{
				icon: "mdi:language-python",
				text: "NLTK"
			},
			{
				icon: "simple-icons:spacy",
				text: "spaCy"
			}
		];

		this.dataScienceStack = [
			{
				icon: "simple-icons:pandas",
				text: "Pandas"
			},
			{
				icon: "simple-icons:numpy",
				text: "NumPy"
			},
			{
				icon: "simple-icons:microsoftexcel",
				text: "Excel"
			},
			{
				icon: "simple-icons:tableau",
				text: "Tableau"
			},
			{
				icon: "simple-icons:powerbi",
				text: "Power BI"
			},
			{
				icon: "devicon:matplotlib",
				text: "Matplotlib"
			},
			{
				icon: "mdi:language-python",
				text: "Seaborn"
			}
		];

		this.programmingStack = [
			{
				icon: "cib:python",
				text: "Python"
			},
			{
				icon: "cib:r",
				text: "R"
			},
			{
				icon: "cib:java",
				text: "Java"
			},
			{
				icon: "cib:c",
				text: "C"
			},
			{
				icon: "cib:cplusplus",
				text: "C++"
			},
			{
				icon: "devicon:mysql",
				text: "SQL"
			},
			{
				icon: "cib:javascript",
				text: "JavaScript"
			}
		];

		this.softwareDevelopmentStack = [
			{
				icon: "mdi:language-java",
				text: "JavaFX"
			},
			{
				icon: "simple-icons:spring",
				text: "Spring Boot"
			},
			{
				icon: "simple-icons:hibernate",
				text: "Hibernate"
			},
			{
				icon: "mdi:api",
				text: "REST APIs"
			},
			{
				icon: "simple-icons:flask",
				text: "Flask"
			},
			{
				icon: "cib:docker",
				text: "Docker"
			},
			{
				icon: "cib:amazon-aws",
				text: "AWS"
			},
			{
				icon: "cib:git",
				text: "Git"
			}
		];

		this.generalStack = [
			{
				icon: "simple-icons:apachespark",
				text: "Spark"
			},
			{
				icon: "simple-icons:apachehadoop",
				text: "Hadoop"
			},
			{
				icon: "cib:mysql",
				text: "MySQL"
			},
			{
				icon: "cib:postgresql",
				text: "PostgreSQL"
			},
			{
				icon: "akar-icons:vscode-fill",
				text: "VSCode"
			},
			{
				icon: "mdi:chart-bell-curve",
				text: "Advanced Statistical Methods"
			}
		];
	}

	ngOnInit(): void {
	}

}
