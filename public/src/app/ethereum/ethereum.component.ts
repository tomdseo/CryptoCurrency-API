import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ethereum',
  templateUrl: './ethereum.component.html',
  styleUrls: ['./ethereum.component.css']
})
export class EthereumComponent implements OnInit {
  etcName: string;
  etcImage: string;
  etcPrice: number;
  etcPriceDate: string;
  etc1d: number;
  etc30d: number;
  etcSupply: number;
  etcSymbol: string;
  etcHigh: number;
  etcHighDate: string;


  ngOnInit() {
    console.log("In the Ethereum Component")
    this.getEthereumData();
  }

  //API has No Rate Limits!
  getEthereumData() {
    console.log("Getting Ethereum Data");
    fetch("https://api.nomics.com/v1/currencies/ticker?key=1a1098e1423103fdd860f70bb6172de9&ids=ETC&interval=1d,30d&convert=USD")
      .then(response => response.json())
      .then(data => {
        this.etcName = data[0].name;
        this.etcImage = data[0].logo_url;
        this.etcSymbol = data[0].currency;
        this.etcPrice = Math.ceil(data[0].price * 100)/100;
        this.etc1d = Math.ceil(data[0]["1d"].price_change * 100)/100;
        this.etc30d = Math.ceil(data[0]["30d"].price_change * 100)/100;
        this.etcHigh = Math.ceil(data[0].high * 100)/100;
        this.etcHighDate = data[0].high_timestamp;
        this.etcPriceDate = data[0].price_date;
        this.etcSupply = data[0].circulating_supply;
      })
  }
}
