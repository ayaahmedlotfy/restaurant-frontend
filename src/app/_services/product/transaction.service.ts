import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Transaction } from 'src/app/_models/product/transaction.model';
// import { allTransactionResponse, Transaction } from 'src/app/_models/product/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  response:any;
  errorMessage: any;
  transactionPhone!:number;

  constructor(private _httpClient: HttpClient) {

   }


  postAllTransactionData(transactionInfo: any) {
    // this.productsArray.push(product);
    const body = transactionInfo;
    console.log(body);
     this._httpClient.post<any>(environment.baseUrl + 'pay',body).subscribe(
  (res)=>{
    console.log(res);
    this.response=res;
  window.location.href =this.response.InvoiceURL;
//  return this.response;

  });

  }

  getAllTransactions():Observable<Transaction>{
   console.log( this._httpClient.get<Transaction>(environment.baseUrl + 'pay'));
    return this._httpClient.get<Transaction>(environment.baseUrl + 'pay');
  }

  getTranssById(id:number):Observable<any>{
    return this._httpClient.get<any>(environment.baseUrl + 'pay'+id);
  }
}
