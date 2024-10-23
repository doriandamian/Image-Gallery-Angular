import { Component } from '@angular/core';

import { AppService } from './app.service';
import { AuthorsComponent } from './authors/authors.component';
import { CardComponent } from './card/card.component';
import { ImageModel } from './image.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AuthorsComponent, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  authors: string[] = [];
  selectedAuthor: string = '';
  selectedAuthorImages: ImageModel[] = [];

  constructor(private appServ: AppService) {}

  async ngOnInit(): Promise<void> {
    await this.appServ.loadImages();
    this.authors = this.appServ.getListOfAuthors();
  }

  changeSelectedAuthor(author: string) {
    this.selectedAuthor = author;
    this.selectedAuthorImages = this.appServ.getImagesFromAuthor(
      this.selectedAuthor
    );
  }
}
