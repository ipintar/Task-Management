import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Coin } from '../list-coins/list-coins.component';
import { CoinDataService } from '../service/data/coin-data.service';

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.css']
})
export class CoinComponent implements OnInit {

  id!: string;
  coins: Coin[] = [];
  coin?: Coin;

  constructor(
    private coinService: CoinDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];  
    this.coin = new Coin(this.id,'','','','',0)

    if(this.id!==""){
      this.coinService.retrieveCoin(this.id)
      .subscribe(
        data => this.coins = data
      )
    }

   }

   backToList(){
    this.router.navigate(['coins'])
  }


}
