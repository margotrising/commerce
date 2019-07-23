import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  product: any;
  errors: any = {};

  constructor(
    private _http: HttpService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.reset();
  }

  reset(){
    this._activatedRoute.params.subscribe(
      (params: Params) =>{
        console.log('hi', params);
        this._http.getOne(params.id).subscribe((res: any)=>{
          console.log('hello55', res);
          this.product = res['data'][0]; 
          console.log('product name is: ', this.product.name);
        })
      }
    )
  }

  handleSubmit(){
    this._http.update(this.product).subscribe((res:any)=>{
      if(res.errors){
        console.log(res);
        this.errors = res.errors;
      } else {
        console.log('OK', this.product);
        
        this._router.navigate(['/products']);
      }
    })
    console.log('hello');
    
  }

}
