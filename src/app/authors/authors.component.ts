import { Component, Input } from '@angular/core';
import { Author } from './author.model';

@Component({
  selector: 'app-authors',
  standalone: true,
  imports: [],
  templateUrl: './authors.component.html',
  styleUrl: './authors.component.css'
})
export class AuthorsComponent {
  @Input({required: true}) authors !: string[];
}
