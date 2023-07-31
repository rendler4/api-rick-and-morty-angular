import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const toggle = document.querySelectorAll(".toggle")[0];
    const nav = document.querySelectorAll("nav")[0];
    const toggle_open_text = 'Menu';
    const toggle_close_text = 'Close';

    toggle.addEventListener('click', function() {
      nav.classList.toggle('open');

      if (nav.classList.contains('open')) {
        toggle.innerHTML = toggle_close_text;
      } else {
        toggle.innerHTML = toggle_open_text;
      }
    }, false);

    setTimeout(function(){
      nav.classList.toggle('open');
    }, 800);
  }

}
