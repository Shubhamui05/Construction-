  import { CommonModule  } from '@angular/common';
  import { FormsModule } from '@angular/forms';
  import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

 ;

  @Component({
    selector: 'app-home',
    standalone: true,
    imports: [FormsModule,CommonModule,],  
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
  })
  export class HomeComponent   {

    images: string[] = [];
    errorMessage: string | null = null;


    constructor(){}  

    

  }
  

  
