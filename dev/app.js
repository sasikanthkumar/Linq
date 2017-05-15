import React from 'react';
import ReactDOM from 'react-dom';
import Holder from './holder';
import {
  Switch,
  HashRouter,
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
import NotFoundHolder from './not-found-holder';

ReactDOM.render(
    <HashRouter  >
      <Switch>
        <Route exact path="/" component={Holder} />
        <Route path = "/open-a-store-form" component = {FormOpenStoreHolder} />
        <Route path = "/partner-with-us-form" component = {FormPartnerWithUsHolder} />
        <Route path = "/gallery" component = {GalleryHolder} />
        <Route path = "/careers" component = {CareersHolder} />
        <Route path = "/contactUs" component = {ContactUs} />
        <Route path="*" component={NotFoundHolder} />
      </Switch>
    </HashRouter>,
    document.querySelector('.root')
);
