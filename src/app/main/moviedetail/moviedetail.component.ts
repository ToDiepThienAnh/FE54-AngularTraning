import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MovieDetail} from 'src/app/core/models/movie'
import { MovieService } from 'src/app/core/services/movie.service';

@Component({
  selector: 'app-moviedetail',
  templateUrl: './moviedetail.component.html',
  styleUrls: ['./moviedetail.component.scss']
})
export class MoviedetailComponent implements OnInit {
  movieDetail:MovieDetail |null=null;

  constructor(private activedRoute:ActivatedRoute,
    private movieService:MovieService) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe({
      next:(params)=>{
        console.log(params);
        this.movieService.getMovieDetail(params.movieId).subscribe({
          next:(result)=>{
            this.movieDetail=result;
            console.log(this.movieDetail); 
          },
        })
      }
    })
  }

}
