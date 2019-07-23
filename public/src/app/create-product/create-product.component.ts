import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { BuiltinType } from '@angular/compiler';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  newProduct: any;
  errors = {};
  show:boolean = false;
  ng_errors:boolean = true;


  constructor(
    private _http: HttpService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.newProduct = { name: "", qty: "", price: ""};
    this.errors = {};
  
  }
  handleSubmit(){
    this._http.create(this.newProduct).subscribe((res:any)=>{
      if(res.errors){
        this.errors = res.errors.errors;
        console.log('here are the errors: ', this.errors);
      } else {
        console.log(this.newProduct);
        this._router.navigate(['/products']);
      }
    })
    
  }

  createBtn(){
    if(this.ng_errors == null){

      this.show = true;
    }
    
  }



}
