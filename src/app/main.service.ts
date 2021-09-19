import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Tweet } from './models/tweet';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  // public storedTweets: Tweet[];
  public observableTweets = new BehaviorSubject([]);
  public sharedTweets = this.observableTweets.asObservable();
  public tweets: Tweet[] = [];

  verifyStorage(): void {
    const data = JSON.parse(localStorage.getItem('storedTweets')) ? JSON.parse(localStorage.getItem('storedTweets')) : this.tweets;
    data.forEach(tweet => this.setTweets(tweet));
  }

  setTweets(tweet: Tweet): void {
    this.tweets.push(tweet);
    this.observableTweets.next(this.tweets);
    this.storeTweets();
  }

  storeTweets(): void {
    localStorage.setItem('storedTweets', JSON.stringify(this.tweets));
  }

  deleteTweet(id: number): void {
    this.tweets.forEach((value: Tweet, index: number)=>{
      if (value.id === id) {
        this.tweets.splice(index, 1);
      }
    });
    this.storeTweets();
  }

  constructor() { }
}
