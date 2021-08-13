import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Route, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.servive';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: Product;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
  this.getProduct();
  }
  getProduct(){
    this.route.params.subscribe(param =>{
     this.productService.getProduct(param.productID).subscribe(data => {
       this.product = data;
     })
    })
  }
  updateProduct(){
    this.productService.updateProduct(this.product).subscribe(()=>{
      this.router.navigate(['/admin'])
    })
  }

}