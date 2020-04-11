import { Injectable } from '@angular/core';
import { AbstractModelService } from './abstract-model-service';
import { Ticket } from '../classes/ticket';
import { BaseApiService } from './base-api.service';


@Injectable({
  providedIn: 'root'
})
export class TicketService extends AbstractModelService<Ticket> {
  protected prefix = 'tickets';

  constructor(protected api: BaseApiService) {
    super(api);
   }

}
