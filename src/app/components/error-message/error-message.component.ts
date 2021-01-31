import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl, NgModel } from '@angular/forms';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent implements OnInit {


  @Input() control: AbstractControl | NgModel | null = null
  @Input() name: string = ''

  message: any = {
    taiKhoan: {
      required: 'Tài khoản không được để trống',
      minlength: 'Tài khoản phải từ 3 đến 20 kí tự ',
      maxlength: 'Tài khoản phải từ 3 đến 20 kí tự '
    },
    matKhau: {
      required: 'Mật Khẩu không được để trống'
    },
    required: 'Trường này không được để trống'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
