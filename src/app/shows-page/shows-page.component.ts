import { Component, OnInit } from '@angular/core';
import { TVShowsService } from '../tvshows.service';

@Component({
  selector: 'app-shows-page',
  templateUrl: './shows-page.component.html',
  styleUrls: ['./shows-page.component.scss']
})
export class ShowsPageComponent implements OnInit {
  shows = [];

  constructor(private tvshowsService: TVShowsService) {}

  ngOnInit() {
    this.tvshowsService.getAllShows().subscribe((shows: any) => {
      this.shows = shows;
    });
  }
}
