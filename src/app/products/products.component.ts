import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
products= [
  {
  id: 1,
  title: "Strawberries",
  price: 20,
  photo: "../../assets/images/strawberry-1330459_640.jpg",
  status: "new"
},
{
  id: 2,
  title: "Tomatoes",
  price: 8,
  photo: "../../assets/images/tomatoes-7433786_640.jpg",
  status: ""
},
{
  id: 3,
  title: "Potatoes",
  price: 20,
  photo: "../../assets/images/potatoes-1585060_640.jpg",
  status: ""
},
{
  id: 4,
  title: "Oranges",
  price: 15,
  photo: "../../assets/images/oranges-1995079_640.jpg",
  status: ""
},
{
  id: 5,
  title: "Carrots",
  price: 16,
  photo: "../../assets/images/carrots-673184_640.jpg",
  status: "special"
},
{
  id: 6,
  title: "Strawberries",
  price: 25,
  photo: "../../assets/images/onions-1397037_640.jpg",
  status: ""
}

]
}
