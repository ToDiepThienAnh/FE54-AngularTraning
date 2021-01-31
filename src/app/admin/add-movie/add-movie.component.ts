import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { MovieService } from "src/app/core/services/movie.service";

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {

  form: FormGroup = new FormGroup({
    tenPhim: new FormControl(""),
    biDanh: new FormControl(""),
    moTa: new FormControl(""),
    ngayKhoiChieu: new FormControl(""),
    trailer: new FormControl(""),
    hinhAnh: new FormControl(""),
  })
  handleChange(event: any) {
    const file = event.target.files[0]
    // Set value bắt buộc thay đổi toàn bộ giá trị form
    // Thay đổi 1 giá trị trong form
    this.form.patchValue({ 'hinhAnh': file })
  }

  handleSubmit() {
    console.log(this.form);
    this.movieService.addMovie(this.form.value).subscribe()

  }
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
  }

}
