import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  title: string;
  description: string;
  category: 'ai-ml' | 'data' | 'software';
  technologies: string[];
  achievements?: string[];
  githubLink?: string;
}

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  imports: [CommonModule],
  standalone: true
})
export class ProjectsComponent {
  selectedCategory: 'ai-ml' | 'data' | 'software' = 'ai-ml';
  
  projects: Project[] = [
    // AI/ML Projects
    {
      id: 1,
      title: 'Credit Card Fraud Detection',
      description: 'Advanced deep learning model for detecting fraudulent credit card transactions, utilizing sophisticated data balancing and feature engineering techniques.',
      category: 'ai-ml',
      technologies: ['Deep Learning', 'SMOTE', 'Python', 'Data Normalization'],
      achievements: [
        'Analyzed 284,807 transactions with advanced deep learning',
        'Achieved AUC-ROC of 0.92 and F1-score of 0.90',
        'Implemented SMOTE for effective class balancing'
      ],
      githubLink: 'https://github.com/AayushGala-git/Credit-Card-Fraud-Detection-Using-Deep-Learning'
    },
    {
      id: 2,
      title: 'Agentic AI Tutor',
      description: 'Interactive tutoring system delivering personalized education through an advanced NLP-based chatbot interface.',
      category: 'ai-ml',
      technologies: ['NLP', 'Chatbot', 'Machine Learning', 'Python'],
      achievements: [
        'Created personalized lesson plan delivery system',
        'Improved user engagement by 20%',
        'Implemented comprehensive progress tracking'
      ],
      githubLink: 'https://github.com/AayushGala-git/AI-Tutor'
    },
    {
      id: 3,
      title: 'RAG-Powered Survey Analysis',
      description: 'Advanced Retrieval Augmented Generation pipeline for analyzing and deriving insights from open-ended survey responses.',
      category: 'ai-ml',
      technologies: ['RAG', 'NLP', 'Document Summarization', 'Feature Engineering'],
      achievements: [
        'Designed end-to-end RAG pipeline',
        'Implemented advanced NLP techniques',
        'Converted raw data into actionable insights'
      ],
      githubLink: 'https://github.com/AayushGala-git/RAG-Powered-Survey-Analysis'
    },
    // Data Science Projects
    {
      id: 4,
      title: 'Customer Lifetime Value Prediction',
      description: 'Comprehensive predictive analytics system for customer lifetime value estimation using ensemble methods and automated ML pipeline.',
      category: 'data',
      technologies: ['XGBoost', 'Ridge Regression', 'Random Forest', 'Flask', 'Tableau'],
      achievements: [
        'Processed 20,000+ customer records',
        'Built automated ML pipeline with pandas and scikit-learn',
        'Achieved 1.5s average API response time'
      ],
      githubLink: 'https://github.com/AayushGala-git/Customer-Lifetime-Value-Prediction'
    },
    {
      id: 5,
      title: 'Age and Gender Detection',
      description: 'Deep learning-based system for simultaneous age and gender prediction from images using advanced CNN architectures.',
      category: 'data',
      technologies: ['CNN', 'Transfer Learning', 'Data Augmentation', 'Python'],
      achievements: [
        'Implemented comprehensive data augmentation pipeline',
        'Achieved high accuracy in gender classification',
        'Developed robust age estimation model'
      ],
      githubLink: 'https://github.com/AayushGala-git/Age-and-Gender-Detection-Using-Deep-Learning'
    },
    // Software Development Projects
    {
      id: 6,
      title: 'Maritime Navigator',
      description: 'Real-time ship tracking system with high-performance backend and intuitive web interface.',
      category: 'software',
      technologies: ['Java', 'Go', 'REST APIs', 'Database Design'],
      achievements: [
        'Processes 50,000+ live location updates per hour',
        'Reduced manual tracking efforts by 40%',
        'Built scalable database architecture'
      ],
      githubLink: 'https://github.com/AayushGala-git/MaritimeNavigator'
    },
    {
      id: 7,
      title: 'Personalized Diet Planner',
      description: 'AI-powered full-stack system for generating and managing personalized meal plans based on individual health metrics.',
      category: 'software',
      technologies: ['Full Stack', 'AI', 'Real-time Tracking', 'Database'],
      achievements: [
        'Supports 20+ active users with custom meal plans',
        'Implements 24-hour health metric updates',
        'Provides refined nutritional recommendations'
      ],
      githubLink: 'https://github.com/AayushGala-git/AI-Based-Personalized-Diet-Planner'
    }
  ];

  get filteredProjects(): Project[] {
    return this.projects.filter(project => project.category === this.selectedCategory);
  }

  selectCategory(category: 'ai-ml' | 'data' | 'software'): void {
    this.selectedCategory = category;
  }
}
