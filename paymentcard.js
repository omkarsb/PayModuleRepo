import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './paymentcard.css';


class PaymentCard extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            dummyState: "state1"
          };
    }
    
    render() {
        
        const user = this.props.userInfo;

        return (<div>
            <div className="Card-mainDiv__outerDiv">
            <p>Payment for  <i>{user.tripName}</i> (<i>{user.date}</i>)</p>
            <p>
                <Link to={`/userpaymentlist`} style={{ textDecoration: 'none' }}>
                    <p className="BacktoPaymentList">{'<< To Payment List'}</p>
                </Link>
            </p>
            </div> 
            <div className="Card-mainDiv">
                <div className="Card-mainDiv__Paragraph">
                    <p>Thanks!</p>
                    <p>Your payment has been successfully submitted.</p>
                </div>
                <div className="Card-mainDiv__PayTable">
                    <p>Amount:  xxx USD</p>
                    <p>Tax:     xxx USD</p>
                    <hr />
                    <p>Total:   xxx USD</p>
                </div>
            </div>
            </div>
        );
    }
}

PaymentCard.propTypes = {
    userInfo: PropTypes.object.isRequired
};

export default PaymentCard;