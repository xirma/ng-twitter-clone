import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.scss']
})
export class TextBoxComponent implements OnInit {
  tweetMaxLength = 140;
  tweets: string[] = [];
  
  tweet: FormGroup = this.fb.group ({
    content: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(this.tweetMaxLength)]]
  });

  constructor(
    public fb: FormBuilder,
  ) { }
  ngOnInit(): void {
  }

  submit(): boolean {
    let tweetContent = this.tweet.value['content'];
    this.tweets.push(tweetContent);
    return false;
  }
}
