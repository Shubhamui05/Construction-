import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor() { }

  async getImages() {
    const response = await fetch('https://dummyjson.com/image');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  }
}
