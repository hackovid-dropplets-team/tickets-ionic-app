import { Component, OnInit } from '@angular/core';
import { TicketService } from 'src/app/services/tickets.service';
import { Ticket } from 'src/app/classes/ticket';

@Component({
  selector: 'app-needs',
  templateUrl: './needs.page.html',
  styleUrls: ['./needs.page.scss'],
})
export class NeedsPage implements OnInit {
  public tickets: Array<Ticket> = [];
  constructor(
    protected ticketsService: TicketService,
  ) { }

  ngOnInit() {
    this.loadTickets();
  }


  protected loadTickets() {
      this.ticketsService.getAll().subscribe(tickets => this.tickets = tickets);
  }

}
