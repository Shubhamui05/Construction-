import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';




interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  
  products: Product[] = [
    {
        id: 1,
        name: 'Product 1',
        description: 'Description of Product 1.',
        price: 29.99,
        imageUrl: 'https://assets.turbologo.com/blog/en/2021/09/10093610/photo-camera-958x575.png'
    },
    {
        id: 2,
        name: 'Product 2',
        description: 'Description of Product 2.',
        price: 39.99,
        imageUrl: 'https://media.istockphoto.com/id/1414801672/photo/cardboard-box-with-cosmetics-product-in-front-od-open-door-buying-online-and-delivery.jpg?s=612x612&w=0&k=20&c=SA9VCzp-QtpzlliX8dM_uoH8K20U1gHqYfsWP08aLl0='
    },
    {
        id: 3,
        name: 'Product 3',
        description: 'Description of Product 3.',
        price: 49.99,
        imageUrl: 'https://media.istockphoto.com/id/1300459022/photo/natural-organic-spa-cosmetic-products-set-with-eucalyptus-leaves-top-view-herbal-skincare.jpg?s=612x612&w=0&k=20&c=_xkB2_OnFqzJKVdDCeNCPeMp4jwLTsSQy2VvRloiPgk='
    },
    {
        id: 4,
        name: 'Product 4',
        description: 'Description of Product 4.',
        price: 19.99,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw1eVP2zp1u13uODAJKifdQSjZgPbIxQTviw&s'
    },
    {
      id: 1,
      name: 'Product 5',
      description: 'Description of Product 1.',
      price: 29.99,
      imageUrl: 'https://assets.turbologo.com/blog/en/2021/09/10093610/photo-camera-958x575.png'
  },
  {
      id: 2,
      name: 'Product 6',
      description: 'Description of Product 2.',
      price: 39.99,
      imageUrl: 'https://media.istockphoto.com/id/1414801672/photo/cardboard-box-with-cosmetics-product-in-front-od-open-door-buying-online-and-delivery.jpg?s=612x612&w=0&k=20&c=SA9VCzp-QtpzlliX8dM_uoH8K20U1gHqYfsWP08aLl0='
  },
  {
      id: 3,
      name: 'Product 7',
      description: 'Description of Product 3.',
      price: 49.99,
      imageUrl: 'https://media.istockphoto.com/id/1300459022/photo/natural-organic-spa-cosmetic-products-set-with-eucalyptus-leaves-top-view-herbal-skincare.jpg?s=612x612&w=0&k=20&c=_xkB2_OnFqzJKVdDCeNCPeMp4jwLTsSQy2VvRloiPgk='
  },
  {
      id: 4,
      name: 'Product 8',
      description: 'Description of Product 4.',
      price: 19.99,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw1eVP2zp1u13uODAJKifdQSjZgPbIxQTviw&s'
  },
  {
    id: 1,
    name: 'Product 5',
    description: 'Description of Product 1.',
    price: 29.99,
    imageUrl: 'https://assets.turbologo.com/blog/en/2021/09/10093610/photo-camera-958x575.png'
},
{
    id: 2,
    name: 'Product 6',
    description: 'Description of Product 2.',
    price: 39.99,
    imageUrl: 'https://media.istockphoto.com/id/1414801672/photo/cardboard-box-with-cosmetics-product-in-front-od-open-door-buying-online-and-delivery.jpg?s=612x612&w=0&k=20&c=SA9VCzp-QtpzlliX8dM_uoH8K20U1gHqYfsWP08aLl0='
},
{
    id: 3,
    name: 'Product 7',
    description: 'Description of Product 3.',
    price: 49.99,
    imageUrl: 'https://media.istockphoto.com/id/1300459022/photo/natural-organic-spa-cosmetic-products-set-with-eucalyptus-leaves-top-view-herbal-skincare.jpg?s=612x612&w=0&k=20&c=_xkB2_OnFqzJKVdDCeNCPeMp4jwLTsSQy2VvRloiPgk='
},
{
    id: 4,
    name: 'Product 8',
    description: 'Description of Product 4.',
    price: 19.99,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw1eVP2zp1u13uODAJKifdQSjZgPbIxQTviw&s'
}
 

   
];





}
