import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http'
import { ApiService } from "./api.service";


@Injectable({
  // khong can import vao trong mang provider o app module khi co provideIn la root
  providedIn: 'root'
})
export class MovieService {

  constructor(private api: ApiService) { }
  getMovieList(): Observable<Movie[]> {
    const url = "QuanLyPhim/LayDanhSachPhim";
    let params = new HttpParams();
    params = params.append('maNhom', 'GP01');
    return this.api.get<Movie[]>(url, { params });
  }
  getMovieDetail(movieId: string): Observable<any> {
    const url = 'QuanLyPhim/LayThongTinPhim';
    let params = new HttpParams();
    params = params.append('maPhim', movieId);
    return this.api.get(url, { params });

  }
  addMovie(movie: any): Observable<any> {
    const url = 'QuanLyPhim/ThemPhimUpLoadHinh';

    const formData = new FormData();
    for (const item in movie) {
      formData.append(item, movie[item])

    }
    formData.append('maNhom', 'GP01')
    return this.api.post(url, formData);

  }

  //    getMovieListPromise():Promise<Movie[]>{
  // return new Promise((resolve,rejects)=>{
  //   setTimeout(()=>{
  //     // rejects('error catching')
  //     resolve([
  //       {
  //         id: 1,
  //         name: 'Doraemon 1',
  //         price: 8000,
  //         image: 'assets/img/Doraemon1.jfif'
  //       },
  //       {
  //         id: 2,
  //         name: 'Doraemon 2',
  //         price: 8000,
  //         image: 'assets/img/Doraemon2.jfif'
  //       },
  //       {
  //         id: 3,
  //         name: 'Doraemon 3',
  //         price: 8000,
  //         image: 'assets/img/Doraemon3.jfif'
  //       },
  //       {
  //         id: 4,
  //         name: 'Doraemon 4',
  //         price: 8000,
  //         image: 'assets/img/Doraemon4.jfif'
  //       },
  //     ])

  //   },2000)
  // })
  // }
  // getMovieListObservable():Observable<Movie[]>{
  //   return new Observable(subcribe=>{
  //     setTimeout(()=>{
  //       // subcribe.error('fetching error')
  //       subcribe.next(
  //         [
  //           {
  //             id: 1,
  //             name: 'Doraemon 1',
  //             price: 8000,
  //             image: 'assets/img/Doraemon1.jfif'
  //           },
  //           {
  //             id: 2,
  //             name: 'Doraemon 2',
  //             price: 8000,
  //             image: 'assets/img/Doraemon2.jfif'
  //           },
  //           {
  //             id: 3,
  //             name: 'Doraemon 3',
  //             price: 8000,
  //             image: 'assets/img/Doraemon3.jfif'
  //           },
  //           {
  //             id: 4,
  //             name: 'Doraemon 4',
  //             price: 8000,
  //             image: 'assets/img/Doraemon4.jfif'
  //           },
  //         ]

  //       )
  //       subcribe.complete(

  //       )

  //     },2000)
  //   })
  // }
}

