import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
/*
  public generateHTML:string = "";
  public i = 0;
  public name = "Mangleshwar";
*/
  public userName = "Mangleshwar Patel";
  public userAddress1 = "#33,";
  public userAddress2 = "Samanvay Nagar, Awadhpuri";
  public userAddress3 = "P.O. : Piplani (B.H.E.L)";
  public userAddress4 = "Bhopal, (M.P.)";
  public userAddressPIN ="486002";
  public userPhone = "9009217737";
  public frmDsplay = "none";

  openForm()
  {
    this.frmDsplay = "block";
    document.getElementById('uName').focus();
  }
  closeForm()
  {
    this.frmDsplay = "none";
  }
  
  updateAddress(newUsrName, newAdrs1, newAdrs2, newAdrs3, newAdrs4, newAdrsPIN)
  {
    this.userName = newUsrName;
    this.userAddress1 = newAdrs1;
    this.userAddress2 = newAdrs2;
    this.userAddress3 = newAdrs3;
    this.userAddress4 = newAdrs4;
    this.userAddressPIN = newAdrsPIN;
  }
  /*
  showAddress()
  {
    this.generateHTML = this.generateHTML + `
    <div class="addressRow" style="background-color:grey; height:200px;">
          <input type="text" [disabled]="isDisabled" [value]="userName" #uName/>
          <input type="text-field" [disabled]="isDisabled" [value]="userAddress" #uAddress/>
          <input type="text-field" [disabled]="isDisabled" [value]="userPhone" #uPhone/>      
    Hello : ` + this.name + ' : ' + this.i++ + `
    </div>
    `
  }
  */
  constructor() { }

  ngOnInit() {
  }

}
