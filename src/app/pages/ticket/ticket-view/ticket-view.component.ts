import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/classes/ticket';
import { TicketService } from 'src/app/services/tickets.service';
import { ActivatedRoute, Router } from '@angular/router';
import { XatsService } from 'src/app/services/xats.service';

@Component({
  selector: 'app-ticket-view',
  templateUrl: './ticket-view.component.html',
  styleUrls: ['./ticket-view.component.scss'],
})
export class TicketViewComponent implements OnInit {

  public ticket: Ticket;

  constructor(
    public ticketService: TicketService,
    private route: ActivatedRoute,
    protected router: Router,
    protected xatService: XatsService,
  ) {
  }

  ngOnInit() {
  }
  ionViewDidEnter() {
    this.loadTicket();
  }
  protected loadTicket() {
    const id = this.route.snapshot.paramMap.get('id');
    this.ticketService.get(id).subscribe(ticket => this.ticket = ticket);
  }

  public goToChat() {
    if (this.ticket.chat_id) {
      this.router.navigate(['xats', this.ticket.chat_id]);
      return;
    }
    this.xatService.create({ ticket: this.ticket }).subscribe(xat => {
      this.router.navigate(['dialogs', xat.id]);
    });
  }
}
