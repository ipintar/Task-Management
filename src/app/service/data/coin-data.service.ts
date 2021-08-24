import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/app.constant';
import { Coin } from 'src/app/list-coins/list-coins.component';

@Injectable({
  providedIn: 'root'
})
export class CoinDataService {

  constructor(private http:HttpClient) { }

  retrieveAllCoins() {
    return this.http.get<Coin[]>(`${API_URL}/coins`);
  }

  retrieveCoin(id: string) {
    return this.http.get<Coin[]>(`${API_URL}/coins/${id}`);
  }

}
