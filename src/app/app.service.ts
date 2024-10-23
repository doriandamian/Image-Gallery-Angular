import { Injectable } from '@angular/core';
import { ImageModel } from './image.model';

@Injectable({ providedIn: 'root' })
export class AppService {
  private images: ImageModel[] = [];

  constructor() {
    
  }

  loadImages() : Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch('https://picsum.photos/v2/list');
        if (!response.ok) {
          throw new Error(`An error has occurred: ${response.status}`);
        }
        this.images = await response.json();
        resolve();
      } catch (error) {
        console.error('Failed to fetch images:', error);
        reject(error);
      }
    });
  }

  getListOfAuthors() {
    return [...new Set(this.images.map((image) => image.author))];
  }

  getImagesFromAuthor(authorName: string): ImageModel[] {
    let temp: ImageModel[] = [];
    this.images.forEach((image) => {
      if (image.author === authorName) {
        temp.push(image);
      }
    });
    return temp;
  }
}
