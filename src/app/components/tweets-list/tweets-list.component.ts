import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/main.service';
import { Tweet } from 'src/app/models/tweet';

@Component({
  selector: 'app-tweets-list',
  templateUrl: './tweets-list.component.html',
  styleUrls: ['./tweets-list.component.scss']
})
export class TweetsListComponent implements OnInit {
  tweets: Tweet[];

  constructor(
    private service: MainService
  ) { }

  ngOnInit(): void {
    this.service.verifyStorage();
    this.service.sharedTweets.subscribe(tweets => this.tweets = tweets);
    console.log(this.tweets);
  }

  delete(id): void {
    let question = confirm('Do you want to delete this tweet?');
    if (question) {
      this.service.deleteTweet(id);
    }
  }

}
