require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
//import "react-materialize";
import HeaderComponent          from 'components/HeaderComponent';
import NavigationMenuComponent  from 'components/NavigationMenuComponent';
import TodaysDateComponent      from 'components/TodaysDateComponent';
import DishComponent            from 'components/DishComponent';
import CallToActionComponent    from 'components/CallToActionComponent';
import FooterComponent          from 'components/FooterComponent';

// Main component
class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <HeaderComponent />
        <NavigationMenuComponent />
        <TodaysDateComponent />
        <DishComponent />
        <CallToActionComponent />
        <FooterComponent />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};


export default AppComponent;
