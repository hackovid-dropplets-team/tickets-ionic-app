import { Injectable } from '@angular/core';
import { BaseApiService } from './base-api.service';
import { Xat } from '../classes/xat';
import { AbstractModelService } from './abstract-model-service';

@Injectable({
  providedIn: 'root'
})
export class XatsService extends AbstractModelService<Xat>  {
  protected prefix = 'dialogs';

  constructor(protected api: BaseApiService) {
    super(api);
   }

}
