import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { showModal } from '../../actions';
import PropTypes from 'prop-types';
import PaymentCard from '../../components/PaymentCard/paymentcard'
import Checkout from '../../components/Checkout/checkout'
import {StripeProvider} from 'react-stripe-elements';

import MyStoreCheckout from '../../components/MyStoreCheckout/mystorecheckout';


import './paytrip.css';


class PayTrip extends Component {
    constructor(props) {
        super(props);
    }

    async componentDidMount() {
        // let tripId = props.match.params.tripId;// get trip id out of the url
        // TODO: call the TripService [DC]
    }

    render() {

        //Pushing Some Dummy
       { /*const userInfo = {
            "name": "XXX", 
            "tripName": "Trip to XXX",
            "xxx" : "$1",
            "date" : "mm/dd/yy"
        };*/
        }


        return (
    <div className="PaymentPageColumn">
            <div className="PaymentInfoCard">
                <PaymentCard userInfo={userInfo}/>
            </div>

        <div className="Checkout_button">   
            <Checkout
                name={userInfo.tripName}
                description={userInfo.xxx}
                amount={1}
            />
        </div>

        <div className="MyStoreCheckoutDiv">
        <StripeProvider apiKey="APIKEY">
          <MyStoreCheckout />
        </StripeProvider>
        </div>

    </div>
         )
        }
    
    }

export default PayTrip;