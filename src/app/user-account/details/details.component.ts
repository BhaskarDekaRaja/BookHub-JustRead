import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  public isDisabled1 = true;
  public isDisabled2 = true;
  public isDisabled3 = true;
  public isDisabled4 = true;
  public uName = "Mangleshwar Patel";
  public uEmail = "profmangl.vlsi@gmail.com";
  public uPhone = "9009217737";
  public uPswrd = "***********";

  enableField1()
  {
    this.isDisabled1 = false;
  }
  enableField2()
  {
    this.isDisabled2 = false;
  }
  enableField3()
  {
    this.isDisabled3 = false;
  }
  enableField4()
  {
    this.isDisabled4 = false;
  }
  disableAllFields()
  {
    this.isDisabled1 = true;
    this.isDisabled2 = true;
    this.isDisabled3 = true;
    this.isDisabled4 = true;
  }
  constructor() { }

  ngOnInit() {
  }

}
