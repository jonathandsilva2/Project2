import { SVG_NS } from '../settings';


export default class Paddle {
    constructor(boardHeight, width, height, x, y, up, down) {
      this.boardHeight = boardHeight;
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;
      this.speed = 10;
      this.score = 0;
      
      document.addEventListener('keydown', event => {
        
        switch(event.key) {
              case up: 
              this.y = (this.y - this.speed)
              console.log('up')
              break;
              case down:
              this.y = (this.y + this.speed)
              console.log('down')
                break; 
          }
      });
    }
    render(svg) {
        let rect = document.createElementNS(SVG_NS, 'rect');
        rect.setAttributeNS(null, 'fill', 'white');
        rect.setAttributeNS(null, 'width', this.width);
        rect.setAttributeNS(null, 'height', this.height);
        rect.setAttributeNS(null, 'x', this.x)
        rect.setAttributeNS(null, 'y', this.y)
        svg.appendChild(rect)
    }
    }
  