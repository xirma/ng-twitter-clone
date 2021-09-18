import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MainService } from 'src/app/main.service';
import { Tweet } from 'src/app/models/tweet';

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.scss']
})
export class TextBoxComponent implements OnInit {
  tweetMaxLength = 140;
  tweet: FormGroup = this.fb.group ({
    content: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(this.tweetMaxLength)]]
  });

  constructor(
    public fb: FormBuilder,
    private service: MainService
  ) { }
  ngOnInit(): void {
  }

  submit(): void {
    const tweetContent = this.tweet.value['content'];
    const date = new Date();
    const newTweet = new Tweet(tweetContent, date);

    this.service.setTweets(newTweet);
  }
}
