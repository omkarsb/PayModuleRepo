import React, {Component} from 'react'
import { hideModal } from '../../actions';
import { connect } from 'react-redux';
import './paymentconfirmmodal.css'

class PaymentConfirmModal extends Component{
    render(){
        return(
            <div className="PaymentConfirmModal">
                <div>Your payment has been successfully submitted!</div>
                <div ><img className="payment_check" src="https://drive.google.com/uc?id=1mMKyEWYO0yvCjgv7Dq9xxxxxxxxxx" alt="paymentsucess" /></div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        hideModal: () => dispatch(hideModal())
    };
  }
  

export default connect(
    null,
    mapDispatchToProps
)(PaymentConfirmModal);;