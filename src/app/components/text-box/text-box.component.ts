import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { MainService } from 'src/app/main.service';
import { Tweet } from 'src/app/models/tweet';

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.scss']
})
export class TextBoxComponent implements OnInit {
  tweetMaxLength = 130;
  chars: string;
  charsLeft = '130';
  tweet: FormGroup = this.fb.group ({
    content: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(this.tweetMaxLength)]]
  });

  observableChars = new BehaviorSubject('');
  sharedChars = this.observableChars.asObservable();

  constructor(
    public fb: FormBuilder,
    private service: MainService
  ) { }

  ngOnInit(): void {
    this.sharedChars.subscribe(chars => this.charsLeft = chars);
  }

  submit(): void {
    const tweetContent = this.tweet.value['content'];
    const date = new Date();
    const newTweet = new Tweet(tweetContent, date);

    this.service.setTweets(newTweet);
    this.tweet.reset();
  }

  charCounter(value): void {
    const chars = this.tweetMaxLength - value.length;
    this.observableChars.next(chars.toString());
  }
}
