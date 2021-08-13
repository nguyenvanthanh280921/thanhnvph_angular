import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.servive';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products:Product[];
  product:Product;
  dataform:Product = new Product()


  constructor(
    private ProductSevrvice:ProductService
  ) { }

  ngOnInit(): void {
    this.getProducts()
  }
  getProducts(){
    this.ProductSevrvice.getProducts().subscribe(data=>{
      this.products = data;
    });
  }
  removeItem(id:number){
    this.ProductSevrvice.removeProduct(id).subscribe(data =>{
      this.products = this.products.filter(item => item.id != data.id);
    })
  }
  detail (id:number){
    this.ProductSevrvice.getProduct(id).subscribe(data=>{
      this.product = data
    })
  }
}
