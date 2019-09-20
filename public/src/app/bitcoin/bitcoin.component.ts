import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-bitcoin',
  templateUrl: './bitcoin.component.html',
  styleUrls: ['./bitcoin.component.css']
})
export class BitcoinComponent implements OnInit {
  btcName: string;
  btcImage: string;
  btcPrice: number;
  btcPriceDate: string;
  btc1d: number;
  btc30d: number;
  btcSupply: number;
  btcSymbol: string;
  btcHigh: number;
  btcHighDate: string;

  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    console.log("In the Bitcoin Component")
    this.getBitcoinData()
  }

  //API has No Rate Limits!
  getBitcoinData() {
    console.log("Getting Bitcoin Data");
    fetch("https://api.nomics.com/v1/currencies/ticker?key=1a1098e1423103fdd860f70bb6172de9&ids=BTC&interval=1d,30d&convert=USD")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.btcName = data[0].name;
        this.btcImage = data[0].logo_url;
        this.btcSymbol = data[0].currency;
        this.btcPrice = Math.ceil(data[0].price * 100)/100;
        this.btc1d = Math.ceil(data[0]["1d"].price_change * 100)/100;
        this.btc30d = Math.ceil(data[0]["30d"].price_change * 100)/100;
        this.btcHigh = Math.ceil(data[0].high * 100)/100;
        this.btcHighDate = data[0].high_timestamp;
        this.btcPriceDate = data[0].price_date;
        this.btcSupply = data[0].circulating_supply;
      })
  }




}

