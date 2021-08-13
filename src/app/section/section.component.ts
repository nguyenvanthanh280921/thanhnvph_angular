import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.servive';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
  products:Product []

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
   this.getProduct()
  }
  getProduct(){
    this.productService.getProducts().subscribe(data =>{
      this.products= data
    })
  }


}
