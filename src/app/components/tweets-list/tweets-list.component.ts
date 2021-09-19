import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { MainService } from 'src/app/main.service';
import { Tweet } from 'src/app/models/tweet';

@Component({
  selector: 'app-tweets-list',
  templateUrl: './tweets-list.component.html',
  styleUrls: ['./tweets-list.component.scss']
})
export class TweetsListComponent implements OnInit {

  tweets: Tweet[];
  tweetDate = timer(1000, 1000);
  dateObservable = this.tweetDate.subscribe((val) => {
    this.tweets.forEach((item, index) => {
      const dateNow = new Date();
      const timeNow = dateNow.getTime();
      const tweetDate = new Date(item.date);
      const tweetTime = tweetDate.getTime();
      const dif = timeNow - tweetTime;
      const seconds = Math.round(dif / 1000);

      if (seconds <= 60) {
        item.dateToShow = `${seconds.toString()} seconds ago.`;
        return;
      }
      item.dateToShow = `${tweetDate.toLocaleDateString()} at ${tweetDate.toLocaleTimeString()} `;
    });
  });


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
