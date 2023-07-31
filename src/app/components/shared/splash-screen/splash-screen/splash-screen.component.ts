import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.css']
})
export class SplashScreenComponent implements OnInit {

  // This is the option that uses the package's AnimationOption interface
  options: AnimationOptions = {
    path: '/assets/lottie/data.json'
  };

  constructor() { }

  ngOnInit(): void {
  }

    // This is the component function that binds to the animationCreated event from the package
    onAnimate(animationItem: AnimationItem): void {
      console.log(animationItem);
    }

}
