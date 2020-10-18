import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  user = {
    name: "Sadettin",
    surname: "Ayyıldız",
    job: "Frontend Developer",
    favorite_place: "İzmir",
    faworite_place_image: "https://turkishairlines.ssl.cdn.sdlmedia.com/637055069968008252RJ.jpg",
    isEditable: false
  }

  constructor() { }

  ngOnInit(): void {
  }

}
