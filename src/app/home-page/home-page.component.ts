import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(
    private meta: Meta,
    private title: Title
  ) {}

  ngOnInit() {
    this.title.setTitle('TV Shows | Welcome to the TV Show world. It sucks. You’re gonna love it!');
    this.meta.addTag({
      name: 'description',
      content: 'Cut it out!'
    });
  }

}
