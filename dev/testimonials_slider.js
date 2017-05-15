import React from 'react';
import Slider from 'react-slick';


function SampleNextArrow(props) {
  const {className, style, onClick} = props
  return (
    <div
      className={className}
      onClick={onClick}
    ><i className="material-icons">keyboard_arrow_right</i></div>
  );
}

function SamplePrevArrow(props) {
  const {className, style, onClick} = props
  return (
    <div
      className={className}
      onClick={onClick}
    ><i className="material-icons">keyboard_arrow_left</i></div>
  );
}


class TestimonialsSlider extends React.Component{
  render(){
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 8000,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return(
      <Slider {...settings}>
        <div>
          <div className="testimonial animated testimonialAnim">
            <blockquote>
              <p>“LinQ store offers a huge variety with a very minimal investment. My own store in Tiruvuru started off in May 2016, and we have been earning above 60,000/- per month since then. Through the success that the store has gained we have a lot of customers visiting our store often to avail the best of deals. People here trust the fact that no other store in town would match up to the unparalled prices and quality that a LinQ store offers. The constant support and encouragement that we receive from the LinQ team is unmatchable and helps us focus solely on the task at hand.”</p>
              <p className="author"> <img src="./images/person1.jpg" alt="Free HTML5 Bootstrap Template by gettemplates.co"/> <cite>— Sravanti(Tiruvuru)</cite></p>
            </blockquote>
          </div>
        </div>
        <div>
          <div className="testimonial">
            <blockquote>
              <p>“Having completed my graduation, I was looking for a business opportunity to invest in. One of my friends, who is a proud LinQ store owner explained the business model which I instantly liked. I consulted the LinQ team, and had my store set up in (Jaggayapeta) a matter of few days.  The wide range of cost effective products that LinQ offers is a boon to both the customers, as well as the store owners. I earn anything above 45,000/- every month.  LinQ stores would be a perfect fit for graduates looking for a high potential business opportunity, as it gives them a chance to be associated with the leading internet brands globally. I take pride in being a brand ambassador of LinQ in my town.”</p>
              <p className="author"> <img src="./images/person1.jpg" alt="Free HTML5 Bootstrap Template by gettemplates.co"/><cite>— Ankith(Jaggayapeta)</cite></p>
            </blockquote>
          </div>
        </div>
        <div>
          <div className="testimonial">
            <blockquote>
              <p>“I have always been tech saavy and wanted to explore various avenues of affiliate marketing. I was fortunate enough to attend a meet up, and thats where I came across LinQ. My store in Ongole was opened in Dec 2016, and there was no looking back since then with respect to the revenues generated and the response garnered from the people. People in my town acknowledge the fact that for any kind of service (retail, travel, healthcare, insurance, pharmacy, money-transfer, matrimony) LinQ is the go to store. Through LinQ Iam able to furnish all of these services from a single store without having to stock any inventory at all,”</p>
              <p className="author"> <img src="./images/person1.jpg" alt="Free HTML5 Bootstrap Template by gettemplates.co"/> <cite>— Ayyappa(Ongole)</cite></p>
            </blockquote>
          </div>
        </div>
        <div>
          <div className="testimonial">
            <blockquote>
              <p>“I always wanted to do business, but couldn’t contemplate amassing such huge investments. Upon a suggestion from a close friend, who had come across a LinQ store in his town,  I`ve approached the store owner for specifics. I was so intrigued by the scope of business, that I learnt the essentials of internet (no formal knowledge of internet) for a month, before being eligible to open a LinQ store. A few months after I`ve launched my store in Miryaguda, I was earning a good 6-7 fold from what I have earned earlier. During seasonal sales on products our store has even clocked 100000/- + per month. The unflinching trust and free assistance to the customers across various services is what sets LinQ apart from the rest.”</p>
              <p className="author"> <img src="./images/person1.jpg" alt="Free HTML5 Bootstrap Template by gettemplates.co"/> <cite>— Raju(Miryalguda)</cite></p>
            </blockquote>
          </div>
        </div>

      </Slider>
    );
  }
}

export default TestimonialsSlider;
