import { Component, OnInit, Input } from '@angular/core';
import { Track } from 'src/app/classes/Track';
@Component({
  selector: 'app-list-track',
  templateUrl: './list-track.component.html',
  styleUrls: ['./list-track.component.css']
})
export class ListTrackComponent implements OnInit {
  @Input() track:Track;
  constructor() { }

  ngOnInit() {
  }

}
