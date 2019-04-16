import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html'
})
export class AboutPageComponent implements OnInit {
  constructor(private meta: Meta, private title: Title) {}

  ngOnInit() {
    this.title.setTitle('About | TV Shows');
    this.meta.addTag({
      name: 'description',
      content:
        'This is an environment of welcoming, and you should just get the hell outta here!'
    });
  }
}
