// CheckoutForm.js
import React from 'react';
import {injectStripe} from 'react-stripe-elements';
import { connect } from 'react-redux';
import { showModal } from '../../actions';
import CardSection from './CardSection';
import PaymentConfirmModal from '../PaymentConfirmModal/paymentconfirmmodal'
import './CheckoutForm.css'

class CheckoutForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      //States for each field in Payment Form
      name: '',
      address_city: '',
      address_state: '',
      address_country: '',
      address_line1: '',
      address_line2: '',
      address_zip: ''
    };
    //Binding all the state change functions
    this.handleOnChangeName = this.handleOnChangeName.bind(this);
    this.handleOnChangeCity = this.handleOnChangeCity.bind(this);
    this.handleOnChangeAddress1 = this.handleOnChangeAddress1.bind(this);
    this.handleOnChangeAddress2 = this.handleOnChangeAddress2.bind(this);
    this.handleOnChangeCountry = this.handleOnChangeCountry.bind(this);
    this.handleOnChangeAddState = this.handleOnChangeAddState.bind(this);
    this.handleOnChangeZip = this.handleOnChangeZip.bind(this);
  }

  //Handling States on change of each field
  handleOnChangeName(event) {
    event.preventDefault();
    this.setState({name: event.target.value});

  }
  handleOnChangeCity(event) {
    event.preventDefault();
    this.setState({address_city: event.target.value});

  }
  handleOnChangeAddress1(event) {
    event.preventDefault();
    this.setState({address_line1: event.target.value});

  }
  handleOnChangeAddress2(event) {
    event.preventDefault();
    this.setState({address_line2: event.target.value});

  }
  handleOnChangeCountry(event) {
    event.preventDefault();
    this.setState({address_country: event.target.value});

  }
  handleOnChangeAddState(event) {
    event.preventDefault();
    this.setState({address_state: event.target.value});

  }
  handleOnChangeZip(event) {
    event.preventDefault();
    this.setState({address_zip: event.target.value});

  }


  handleSubmit = (ev) => {
    // We don't want to let default form submission happen here, which would refresh the page.
    ev.preventDefault();

    // Within the context of `Elements`, this call to createToken knows which Element to
    // tokenize, since there's only one in this group.
    this.props.stripe.createToken({
      name: this.state.name,
      address_line1: this.state.address_line1,
      address_line2: this.state.address_line2,
      address_city: this.state.address_city,
      address_state: this.state.address_state,
      address_country: this.state.address_country,
    }).then(({token}) => {
      console.log('Received Stripe token:', token);
      alert('Received Stripe token:' + JSON.stringify(token));
    });

    // However, this line of code will do the same thing:
    // this.props.stripe.createToken({type: 'card', name: 'Jenny Rosen'});
  }

  handleOnClick = () => {
    this.props.showDetails();
  }

  render() {
    return (
    <div className="PaymentCardBlock">
      <form className="PaymentFormMainDiv" onSubmit={this.handleSubmit}>
      <p>Credit / Debit Card</p>
        
        <div className="PaymentCardBlock__RowBlock">
            <input className="Stylemynameblock" type="text" value={this.state.name} placeholder="Name" onChange={this.handleOnChangeName} />
          <div className="Stylemycardblock">
            <CardSection />
          </div>
        </div>  

        <p>Billing Address</p>

        <div className="PaymentCardBlock__RowBlock">
            <input className="Stylemyaddressblock" type="text" placeholder="Address 1" value={this.state.address_line1} onChange={this.handleOnChangeAddress1} />
            <input className="Stylemyaddressblock" type="text" placeholder="Address 2" value={this.state.address_line2} onChange={this.handleOnChangeAddress2} />
        </div>  

        <div className="PaymentCardBlock__RowBlock">
            <input className="Stylemyaddressblock" type="text" placeholder="City" value={this.state.address_city} onChange={this.handleOnChangeCity} />
            <input className="Stylemyaddressblock" type="text" placeholder="State" value={this.state.address_state} onChange={this.handleOnChangeAddState} />
            <input className="Stylemyaddressblock" type="text" placeholder="Zip" value={this.state.address_zip} onChange={this.handleOnChangeZip} />
        </div>  

        <div className="PaymentConfirmButtonDiv"><button className="PaymentSubmitbutton" onClick={this.handleOnClick}>Confirm order</button></div>
      </form>
    </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
      showDetails: () => dispatch(showModal(<PaymentConfirmModal />)),
  };
}

export default connect(
  null,
  mapDispatchToProps,
)(injectStripe(CheckoutForm));