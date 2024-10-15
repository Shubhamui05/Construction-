import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  
  


  cards = [
    {
      title: 'Card 1',
      description: 'This is the first card.',
      img:'https://img.freepik.com/premium-photo/happy-diwali-card-background-with-burning-lamps_1304802-2956.jpg?uid=R150971852&ga=GA1.1.484307960.1726950447',
    },
    { 
      title: 'Card 2', 
      description: 'This is the second card.',
      img: 'https://via.placeholder.com/150' // Placeholder image for missing images
    },
    { 
      title: 'Card 3', 
      description: 'This is the third card.',
      img: 'https://via.placeholder.com/150'
    },
    { 
      title: 'Card 4', 
      description: 'This is the fourth card.',
      img: 'https://via.placeholder.com/150'
    },
   
  ];

  secondCard = [
    {
      title: 'Learn New Skills',
      description: 'Access thousands of courses to upskill yourself.',
    },
    {
      title: 'Track Your Progress',
      description: 'Monitor your learning journey and achievements.',
    },
    {
      title: 'Earn Certificates',
      description: 'Get certified upon completion of courses.',
    },
    {
      title: 'Join the Community',
      description: 'Connect with like-minded learners and experts.',
    },
  ];

  testimonials = [
    {
      name: 'John Doe',
      feedback: 'This platform has helped me improve my skills tremendously!',
    },
    {
      name: 'Jane Smith',
      feedback:
        'I love the variety of courses available. The content is top-notch.',
    },
  ];

  constructor() {}

  isActive = true;

  toggleMenu() {
    this.isActive = !this.isActive;
  }
}
