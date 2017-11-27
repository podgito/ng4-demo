import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BitcoinPriceService {

  //Use this: https://api.coindesk.com/v1/bpi/currentprice.json
  constructor(private http: HttpClient) { }

}
