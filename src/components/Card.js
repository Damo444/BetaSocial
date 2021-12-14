import React, {Component} from "react";

export default class Card extends Component {
    render() {
      const {productName,date,description,color,location}= this.props.node
      let cardClass = 'card-wrapper'
      switch (color) {
        case 'green':
          cardClass='card-wrapper color-green'
          
          break;
        case 'pink':
          cardClass='card-wrapper color-pink'
          
          break;
        
          case 'red':
            cardClass='card-wrapper color-red'
            
            break;

            

          case 'yellow':
              cardClass='card-wrapper color-yellow'
              
              break;
      
        default:
          break;
      }
      
        return(
            <div  className={cardClass}>
                    <div className="card">
                      <h3>{productName}</h3>
                      <h6>Created on {date}</h6>
                      <h6>{location}</h6>
                      <p>
                        {description}
                      </p>
                    </div>                 
                  </div>

        )

        
    }
}