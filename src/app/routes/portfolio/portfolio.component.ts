import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  //images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  numImage: number;
  _allImages: any[] = [];

  constructor() {
    this.numImage = 13;
  }

  ngOnInit() {
    this.addImage(this.numImage,this._allImages);
  } 

  addImage(numImage, _allImages) {
    for (let i = 1; i <= numImage; i++) {
    //  let width: number = this.randomInt(300, 400);
    let width = 400, height = 300;
    //  let height: number =  this.randomInt(300, 400);
    //  _allImages += '<img src="https://placekitten.com/'+width+'/'+height+'" alt="pretty kitty">';
      _allImages += '<img src="assets/img/grid/img'+i+'.jpg" style="width:'+width+'px; min-height:'+height+'px;" alt="pretty kitty">';
    }
    document.getElementById("photos").innerHTML = _allImages;
  }

  randomInt(min: number, max: number): number {
    return Math.round(Math.random() * (max - min + 1)) + min;
  }
  
}