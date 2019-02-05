import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  public isDisabled = true;
  public orderID = "#123123123";
  public orderDate = "05-10-2018";
  public orderBookTitle = "Feel Great";
  public orderDiliveryStatus = "Processing";
  public orderDeliveryDate = "10-10-2015";
  public orderSubTotal = "100.00";
  public orderShipCharge = "free";
  public orderTotal = "100.00";
  public orderPromotion = "10.00";
  public orderGrandTotal = "90.00";

  
  
  constructor() { }

  ngOnInit() {
  }

}
