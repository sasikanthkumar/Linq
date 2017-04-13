import React, { Component } from 'react';
import { render } from 'react-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class TestimonialTabs extends Component {

  constructor(props){
    super (props);
    this.state = { selectedIndex: 1 };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(index, last) {
    console.log('Selected tab: ' + index + ', Last tab: ' + last);
    this.setState({selectedIndex:index});
  }

  render() {

    return (
      /**
        <Tabs/> is a composite component and acts as the main container.

        `onSelect` is called whenever a tab is selected. The handler for
        this function will be passed the current index as well as the last index.

        `selectedIndex` is the tab to select when first rendered. By default
        the first (index 0) tab will be selected.

        `forceRenderTabPanel` By default this react-tabs will only render the selected
        tab's contents. Setting `forceRenderTabPanel` to `true` allows you to override the
        default behavior, which may be useful in some circumstances (such as animating between tabs).

      **/

      <Tabs onSelect={this.handleSelect}
        selectedIndex={this.state.selectedIndex}
      >

        {/*
          <TabList/> is a composit component and is the container for the <Tab/>s.
        */}

        <TabList className = 'tabsComponentTabList'>

          {/*
            <Tab/> is the actual tab component that users will interact with.

            Selecting a tab can be done by either clicking with the mouse,
            or by using the keyboard tab to give focus then navigating with
            the arrow keys (right/down to select tab to the right of selected,
            left/up to select tab to the left of selected).

            The content of the <Tab/> (this.props.children) will be shown as the label.
          */}
          <Tab  className = 'tabsComponentTabOne'>Customers</Tab>
          <Tab  className = 'tabsComponentTabTwo'>Partners</Tab>
        </TabList>

        {/*
          <TabPanel/> is the content for the tab.

          There should be an equal number of <Tab/> and <TabPanel/> components.
          <Tab/> and <TabPanel/> components are tied together by the order in
          which they appear. The first (index 0) <Tab/> will be associated with
          the <TabPanel/> of the same index. Running this example when
          `selectedIndex` is 0 the tab with the label "Foo" will be selected
          and the content shown will be "Hello from Foo".

          As with <Tab/> the content of <TabPanel/> will be shown as the content.
        */}

        <TabPanel className = 'fadeIn animated'>
          <div className = 'container-fluid'>
          <div className = 'row testimonialRows'>
            <div className="col-md-offset-2 col-md-4 col-sm-6 fadeIn animated">
              <div className="testimonial">
                <blockquote>
                  <p>“Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit. Eos cumque dicta adipisci architecto culpa amet.”</p>
                  <p className="author"> <img src="./images/person1.jpg" alt="Free HTML5 Bootstrap Template by gettemplates.co"/> <cite>— Mike Adam</cite></p>
                </blockquote>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 fadeIn animated">
              <div className="testimonial">
                <blockquote>
                  <p>“Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit. Eos cumque dicta adipisci architecto culpa amet.”</p>
                  <p className="author"> <img src="./images/person1.jpg" alt="Free HTML5 Bootstrap Template by gettemplates.co"/> <cite>— Mike Adam</cite></p>
                </blockquote>
              </div>
            </div>
            </div>
            <div className = 'row testimonialRows'>
            <div className="col-md-offset-2 col-md-4 col-sm-6 fadeIn animated">
              <div className="testimonial">
                <blockquote>
                  <p>“Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit. Eos cumque dicta adipisci architecto culpa amet.”</p>
                  <p className="author"> <img src="./images/person1.jpg" alt="Free HTML5 Bootstrap Template by gettemplates.co"/> <cite>— Mike Adam</cite></p>
                </blockquote>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 fadeIn animated">
              <div className="testimonial">
                <blockquote>
                  <p>“Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit. Eos cumque dicta adipisci architecto culpa amet.”</p>
                  <p className="author"> <img src="./images/person1.jpg" alt="Free HTML5 Bootstrap Template by gettemplates.co"/> <cite>— Mike Adam</cite></p>
                </blockquote>
              </div>
            </div>
          </div>
          </div>
        </TabPanel>
        <TabPanel className = 'fadeIn animated'>
        <div className = 'container-fluid'>
        <div className = 'row testimonialRows'>
          <div className="col-md-offset-2 col-md-4 col-sm-6 fadeIn animated">
            <div className="testimonial">
              <blockquote>
                <p>“Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit. Eos cumque dicta adipisci architecto culpa amet.”</p>
                <p className="author"> <img src="./images/person1.jpg" alt="Free HTML5 Bootstrap Template by gettemplates.co"/> <cite>— Mike Adam</cite></p>
              </blockquote>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 fadeIn animated">
            <div className="testimonial">
              <blockquote>
                <p>“Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit. Eos cumque dicta adipisci architecto culpa amet.”</p>
                <p className="author"> <img src="./images/person1.jpg" alt="Free HTML5 Bootstrap Template by gettemplates.co"/> <cite>— Mike Adam</cite></p>
              </blockquote>
            </div>
          </div>
          </div>
          <div className = 'row testimonialRows'>
          <div className="col-md-offset-2 col-md-4 col-sm-6 fadeIn animated">
            <div className="testimonial">
              <blockquote>
                <p>“Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit. Eos cumque dicta adipisci architecto culpa amet.”</p>
                <p className="author"> <img src="./images/person1.jpg" alt="Free HTML5 Bootstrap Template by gettemplates.co"/> <cite>— Mike Adam</cite></p>
              </blockquote>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 fadeIn animated">
            <div className="testimonial">
              <blockquote>
                <p>“Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit. Eos cumque dicta adipisci architecto culpa amet.”</p>
                <p className="author"> <img src="./images/person1.jpg" alt="Free HTML5 Bootstrap Template by gettemplates.co"/> <cite>— Mike Adam</cite></p>
              </blockquote>
            </div>
          </div>
        </div>
        </div>
        </TabPanel>
      </Tabs>
    );
  }
}

export default TestimonialTabs;
