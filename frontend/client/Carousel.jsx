import React from 'react';
import SwipeableViews from 'react-swipeable-views';
const styles = {
  slide: {
    padding: 15,
    minHeight: 100
  }
};


class Carousel extends React.Component{
  render()
  {
    return(
      <SwipeableViews>
     <div >
         <img height="500px" width="100%" src="https://scontent-bom1-1.xx.fbcdn.net/v/t1.0-9/26230475_1449131628540104_5344361059166101518_n.jpg?_nc_cat=0&oh=46026fbeec074774b4f2e8823c976fae&oe=5B6CC816" alt="helping hearts"/>
     </div>
     <div style={Object.assign({}, styles.slide, styles.slide2)}>
       <img height="500px" width="100%" src="https://scontent-bom1-1.xx.fbcdn.net/v/t1.0-9/26904323_1458770840909516_6089714359964397915_n.jpg?_nc_cat=0&oh=8c96e3c2b3d11c983500d5f8617ce259&oe=5B667451"/>
     </div>

   </SwipeableViews>
    );
  }
}
export default Carousel;
