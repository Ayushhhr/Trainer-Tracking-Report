import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrainerNavbarService {
  private _id: number | undefined;

  get id(): number | undefined {
    return this._id;
  }

  setId(id: number) {
    this._id = id;
  }
}
