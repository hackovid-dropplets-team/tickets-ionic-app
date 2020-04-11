import { Component, OnInit } from '@angular/core';
import { TicketService } from 'src/app/services/tickets.service';
import { AbstractForm } from 'src/app/utils/abstract-form';
import { Ticket } from 'src/app/classes/ticket';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.scss'],
})
export class TicketFormComponent extends AbstractForm<Ticket> implements OnInit {
  protected prefix = 'ticket';

  constructor(
    protected ticketsService: TicketService,
    protected router: Router,
  ) {
    super(ticketsService, router);
  }

  ngOnInit() { }
}
