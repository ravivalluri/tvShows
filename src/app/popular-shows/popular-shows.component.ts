import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { TVShowsService } from '../tvshows.service';

@Component({
  selector: 'app-popular-shows',
  templateUrl: './popular-shows.component.html',
  styleUrls: ['./popular-shows.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PopularShowsComponent implements OnInit {
  @Input('sidebar') sidebar: boolean;
  @Input('shows') shows: any[] = [];
  public popularShows: any[] = [];
  public newShows: any[] = [];

  constructor(private tvshowsService: TVShowsService) {}

  ngOnInit() {
    this.getPopular();
  }

  getPopular() {
    this.tvshowsService
      .getFeaturedShows()
      .subscribe(({ popular, recent }: any) => {
        this.popularShows = popular;
        this.newShows = recent;
      });
  }
}
