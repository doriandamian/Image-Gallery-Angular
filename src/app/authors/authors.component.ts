import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-authors',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './authors.component.html',
  styleUrl: './authors.component.css',
})
export class AuthorsComponent {
  @Input({ required: true }) authors!: string[];
  @Output() selectedAuthor = new EventEmitter<string>();
  authorSelect?: string;

  // I don't know how to make the page be initialized with the first option
  // I am 100% sure there is a better way to do this
  ngOnInit(): void {
    this.authorSelect = this.authors[0];
    this.selectedAuthor.emit(this.authorSelect);
  }

  changeSelectedAuthor(event: Event) {
    const selectedAuthor = (event.target as HTMLSelectElement).value;
    this.selectedAuthor.emit(selectedAuthor);
  }
}
