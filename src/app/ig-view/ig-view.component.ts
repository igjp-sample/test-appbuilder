import { Component, OnInit } from '@angular/core';
import { FinancialService } from '../services/financial.service';
import { NorthwindService } from '../services/northwind.service';

@Component({
  selector: 'app-ig-view',
  templateUrl: './ig-view.component.html',
  styleUrls: ['./ig-view.component.scss']
})
export class IgViewComponent implements OnInit {
  public financialBoxOfficeRevenue: any = null;
  public financialGlobalElectricityDemand: any = null;
  public northwindEmployees: any = null;

  constructor(
    private financialService: FinancialService,
    private northwindService: NorthwindService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.financialService.getData('BoxOfficeRevenue').subscribe(data => this.financialBoxOfficeRevenue = data);
    this.financialService.getData('GlobalElectricityDemand').subscribe(data => this.financialGlobalElectricityDemand = data);
    this.northwindService.getData('Employees').subscribe(data => this.northwindEmployees = data);
  }
}
