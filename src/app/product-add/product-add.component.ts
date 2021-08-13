import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.servive';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
product:Product = new Product()
  constructor(
    private ProductService:ProductService,
    private router:Router
  ) {}

  ngOnInit() {}
addProduct(){
  this.ProductService.addProduct(this.product).subscribe(data=>{
    console.log(data)
    this.router.navigate(['/admin'])
  });
}
}
