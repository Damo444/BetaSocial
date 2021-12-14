import React, {Component} from "react";

export default class Multiply extends Component {
    render() {
      const {firstNumber,sign,secondNumber}= this.props.calculator
      let cardClass='card-wrapper'
      switch (sign) {
        case '+':
          cardClass='card-wrapper color-red'
          break;
        case '-':
            cardClass='card-wrapper color-pink'
            break;
      
        default:
          break;
      }
      
      
        return(
            <div  className={cardClass}>
                    <div className="card">
                      <h3>{firstNumber}</h3>
                      <h6> {sign}</h6>
                      <h6>{secondNumber}</h6>
                                      
                  </div>
            </div>

        )

        
    }
}