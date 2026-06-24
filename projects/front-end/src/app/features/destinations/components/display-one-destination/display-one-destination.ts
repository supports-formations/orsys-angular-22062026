import { Component, inject, OnInit } from '@angular/core';
import { GetOneDestination } from '../../services/get-one-destination';
import { Destination } from '../../models';
import { StepToStringPipe } from '../../uis/pipes/step-to-string-pipe';
import { UpperCasePipe } from '@angular/common';
import { DisplayFriends } from '../display-friends/display-friends';
import { DisplayCulinaryStopList } from '../display-culinary-stop-list/display-culinary-stop-list';

@Component({
  selector: 'orsys-display-one-destination',
  imports: [StepToStringPipe,UpperCasePipe, DisplayFriends, DisplayCulinaryStopList],
  templateUrl: './display-one-destination.html',
  styleUrl: './display-one-destination.css',
  //providers: [GetOneDestination]
})
export class DisplayOneDestination implements OnInit {
  private readonly service = inject(GetOneDestination);
  //private readonly service2 = inject(GetOneDestination);
  protected destination: Destination | undefined = undefined;

  ngOnInit(): void {
    console.info('DisplayOneDestination.ngOnInit()');
    this.destination = this.service.getOne();
  }


}
