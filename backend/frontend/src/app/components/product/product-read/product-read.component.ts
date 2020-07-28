import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[]

  constructor(private prodductService: ProductService) { }

  ngOnInit(): void {
    this.prodductService.read().subscribe(products =>{
      this.products = this.products
    })
  }

}
