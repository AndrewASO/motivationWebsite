import { Component } from '@angular/core';
import { NovelService } from '../services/novel.service'; // Adjust the path based on your project structure

@Component({
  selector: 'app-novels',
  templateUrl: './novels.component.html',
  styleUrls: ['./novels.component.css']
})
export class NovelsComponent {
  chapters: any[] | null = null; // Changed to null to differentiate no response
  link: string = '';
  errorMessage: string = ''; // To hold error messages or no chapter message

  constructor(private novelService: NovelService) {}

  fetchChapters(): void {
    if (!this.link.trim()) {
      this.errorMessage = 'Please enter a valid link.';
      this.chapters = null;
      return;
    }

    this.novelService.getChapters(this.link.trim()).subscribe({
      next: (data) => {
        if (data.length === 0) {
          // Handle case where no chapters are returned
          this.errorMessage = 'No chapters found for the provided link.';
          this.chapters = null;
        } else {
          this.chapters = data;
          this.errorMessage = '';
        }
      },
      error: (error) => {
        console.error('There was an error fetching the chapters:', error);
        this.errorMessage = 'Failed to fetch chapters. Please try again.';
        this.chapters = null;
      }
    });
  }
}
