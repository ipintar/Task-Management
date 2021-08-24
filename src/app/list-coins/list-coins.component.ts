
import { Component, ElementRef, HostListener, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CoinDataService } from '../service/data/coin-data.service';


export class Coin {
  constructor(
    public id: string,
    public symbol: string,
    public name: string,
    public current_price: string,
    public image: string,
    public price_change_percentage_24h: number  
  ) {

  }
}

@Component({
  selector: 'app-list-coins',
  templateUrl: './list-coins.component.html',
  styleUrls: ['./list-coins.component.css']
})
export class ListCoinsComponent implements OnInit {

  coins: Coin[] = [];
  coin!: Coin;
  filteredCoins: Coin[] = [];
  p: number = 1;
  keyword = 'name';
  isAscendic = true;
  reactiveForm!: FormGroup;


  constructor(
    private coinService: CoinDataService,
    private _fb: FormBuilder,
    private router: Router
  ) { 
    this.reactiveForm = _fb.group({
      name: [{ value: '', disabled: false }, Validators.required]
    });
  }

  ngOnInit(): void {
    this.refresh()
  }

  openCoin(id:any){
    this.router.navigate(['coins',id])
  }

  onChangeSearch(val: string) {
    return this.refresh()
  }

  pageChange(p: number) {
    this.p = p
  }

  selectEvent(item: Coin) {
  
      this.coinService.retrieveCoin(item.id).subscribe(
        response => {
          this.coins = response;
        }
      )
  }

  sortByPrice() {
    this.isAscendic ? this.ascendic() : this.descendic()
  }

  ascendic() {
    this.isAscendic = false;
    this.coins = this.coins.sort((n1, n2) => {
      if (+n1.current_price < +n2.current_price) {
        return 1;
      }
      if (+n1.current_price > +n2.current_price) {
        return -1;
      }
      return 0;
    });
  }

  descendic() {
    this.isAscendic = true
    this.coins = this.coins.sort((n1, n2) => {
      if (+n1.current_price > +n2.current_price) {
        return 1;
      }
      if (+n1.current_price < +n2.current_price) {
        return -1;
      }
      return 0;
    });
  }

  onFocused(e: any) {
  }


  refresh() {
    this.coinService.retrieveAllCoins().subscribe(
      response => {
        this.coins = response;
      }
    )
  }

}
