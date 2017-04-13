import React from 'react';
import ReactDOM from 'react-dom';
import Holder from './holder';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { hashHistory } from 'react-router'
import { browserHistory } from 'react-router'
import FormOpenStoreHolder from './form-open-store-holder';
import GalleryHolder from './galleryHolder';
import FormPartnerWithUsHolder from './form-partner-with-us-holder';
import CareersHolder from './careers-holder';
import ContactUs from './contactUs';

ReactDOM.render(
    <Router onUpdate={() => $(window).scrollTo(0, 0)} history={browserHistory} >
      <div>
        <Route exact path="/" component={Holder} />
        <Route path = "/open-a-store-form" component = {FormOpenStoreHolder} />
        <Route path = "/partner-with-us-form" component = {FormPartnerWithUsHolder} />
        <Route path = "/gallery" component = {GalleryHolder} />
        <Route path = "/careers" component = {CareersHolder} />
        <Route path = "/contactUs" component = {ContactUs} />
      </div>
    </Router>,
    document.querySelector('.root')
);
