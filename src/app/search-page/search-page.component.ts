import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TVShowsService } from '../tvshows.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html'
})
export class SearchPageComponent implements OnInit {
  public shows: any[];

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    public tvshowsService: TVShowsService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.getResults(params['query']);
    });
  }

  getResults(query: string) {
    this.tvshowsService.search(query).subscribe((shows: any) => {
      this.shows = shows;
    });
  }
}
