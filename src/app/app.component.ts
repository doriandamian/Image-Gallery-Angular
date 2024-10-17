import { Component } from '@angular/core';

import { AppService } from './app.service';
import { Author } from './authors/author.model';
import { AuthorsComponent } from "./authors/authors.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AuthorsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  authors: string[] = [];

  constructor(private appServ: AppService) {
    this.authors = this.appServ.getListOfAuthors();
  }

  
}
