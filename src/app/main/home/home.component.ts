import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { Movie } from 'src/app/core/models/movie';
import  {MovieService} from 'src/app/core/services/movie.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movieList:Movie[]=[];
  loading:boolean=false;
  error:string="";
  constructor(private movieService:MovieService) { }

  ngOnInit(): void {
    // this.movieList=this.movieService.getMovieList()
    // this.movieService.getMovieListPromise().then((result)=>{
    //   this.movieList=result;
    // }).catch((error)=>console.log(error))
    // this.movieService.getMovieListObservable().subscribe({
    //   next:result=>{
    //     this.movieList=result;
    //   },
    //   error:(error)=>{
    //     console.log(error);
    //   },
    //   complete:()=>{
    //     console.log('fetching complete');
    //   }
    // })


    this.loading=true;
    this.movieService.getMovieList().subscribe({
      next:result=>{
        this.movieList=result;
      },
      error:(error)=>{
        this.loading=false;
        this.error=error;
        console.log(error);
      },
      complete:()=>{
        console.log('fetching complete');
        this.loading=false;
      }
    })
  }

}
