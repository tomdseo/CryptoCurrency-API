import { BitcoinComponent } from "./bitcoin/bitcoin.component";
import { EthereumComponent } from "./ethereum/ethereum.component";
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'bitcoin', component: BitcoinComponent },
  { path: 'ethereum', component: EthereumComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
