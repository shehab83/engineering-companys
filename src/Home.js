import React from 'react'
import imge from './jhjh-min.jpg'
import imge2 from './empty-floor-front-modern-building_1127-3154.jpg'
function Home() {
  return (
    <div>
      <div className='sechen1'>
        <div className='nav1'>
          <h1 className='h11 animate__animated animate__fadeInBottomLeft'>Thoughtful,</h1>
          <h1 className='h12 animate__animated animate__fadeInBottomLeft'> collaborative and </h1>
          <h1 className='h13 animate__animated animate__fadeInBottomLeft'> insightful</h1>
          <div className='h14 animate__animated animate__zoomIn'>
            <h2 className='h15'>BUILDING</h2>
            <h6 className='h16'>Excepteur sint occaecat</h6>
            <img src="Web capture_21-3-2022_1712_nicepage.com" class="card-img-top" alt="" />
            <form class="form-inline my-2 my-lg-0">
              <button class="button1 btn btn-outline-success my-2 my-sm-0" type="submit">MORE</button>
            </form>
          </div>
          <div className='h17 animate__animated animate__zoomIn'>
            <h2 className='h18'>INDUSTRIAL</h2>
            <h6 className='h19'>Excepteur sint occaecat</h6>
            <img src="Web capture_21-3-2022_1712_nicepage.com" class="card-img-top" alt="" />
            <form class="form-inline my-2 my-lg-0">
              <button class="button2 btn btn-outline-success my-2 my-sm-0" type="submit">MORE</button>
            </form>
          </div>
          <div className='h20 animate__animated animate__zoomIn'>
            <h2 className='h21'>FUTURE</h2>
            <h6 className='h22'>Excepteur sint occaecat</h6>
            <img src="Web capture_21-3-2022_1712_nicepage.com" class="card-img-top" alt="" />
            <form class="form-inline my-2 my-lg-0">
              <button class="button3 btn btn-outline-success my-2 my-sm-0" type="submit">MORE</button>
            </form>
          </div>
        </div>
      </div>
      <div className='back1'>
        <div>
          <div className='nav2'>
            <div className='h23  animate__animated animate__zoomIn '>
              <h1 className='h24'>
                NATE HUDSON
              </h1>
              <h6 className='h25'>Sample text. Click to select the text box. Click again or double click to start editing the text.</h6>

            </div>
            <div>
              <h1 className='h26'>Creates Unique Design and Construction</h1>
              <h1 className='h26'> According to Clients’ Needs</h1>
              <p className='h27'>We are a diversified construction company, made up of teams of people who are proven in</p>
              <p className='h27'>their industries. All working to design, build, transport, operate, and maintain projects all</p>
              <p className='h27'>over the USA. But we believe that projects are about more than concrete and steel. We value</p>
              <p className='h27'>our clients and their opinion and try to meet expectations.</p>

            </div>
          </div>
        </div>
        <div className='h28'>
          <p className='h29'>As a leader in the design and construction of advanced technology facilities, our</p>
          <p className='h29'>architectural solutions are a result of a collaborative process that empowers our</p>
          <p className='h29'>multidisciplinary teams to share knowledge, leverage new technology and create </p>
          <p className='h29'> innovative design solutions.</p>
          <form class="form-inline my-2 my-lg-0">
            <button class="button4 btn btn-outline-success my-2 my-sm-0" type="submit">MORE</button>
          </form>
        </div>
      </div>
      <div className='nav5'>
        <div className='nav4'>
          <div className='div1'>
            <h3 className='h30'>SURE, WE’VE BEEN AROUND THE BLOCK.</h3>
            <h3 className='h30'>WE PROBABLY WORKED WITH THE PEOPLE</h3>
            <h3 className='h30'>WHO BUILT IT.</h3>
            <p className='h31'>Dui ut ornare lectus sit. Tincidunt lobortis feugiat vivamus</p>
            <p className='h31'>at augue eget arcu. Vulputate mi sit amet mauris</p>
            <p className='h31'>commodo quis imperdiet massa tincidunt. Sodales neque</p>
            <p className='h31'>sodales ut etiam sit amet nisl. Blandit libero volutpat sed</p>
            <p className='h31'>cras ornare arcu dui vivamus arcu. Luctus venenatis</p>
            <p className='h31'>cras ornare arcu dui vivamus arcu. Luctus venenatis</p>
            <p className='h31'>suscipit tellus mauris a.</p>
            <div >
              <img src={imge} height={270} width={300} className='h32' />
            </div>
          </div>
        </div>
        <div>
          <div>
            <img src={imge2} height={200} width={350} className='h33' />
          </div>
          <div>
            <h3 className='h34'>EARNING YOUR BUSINESS WITH EXPERIENCE,</h3>
            <h3 className='h34'>EXPERTISE, AND TRUST.</h3>
            <p className='h35'>Component Production Equipment</p>
            <p className='h35'>Wall Panel Framing and Sheathing Equipment</p>
            <p className='h35'>Linear Saws</p>
            <p className='h35'>Saws-Component, Radial Arm, Automated Measuring Systems</p>
            <p className='h35'>Material Handling Systems</p>
            <p className='h35'>Roll-Off Truss Trailers</p>
            <p className='h35'>Waste Reduction Equipment</p>
            <p className='h35'>Replacement Production Surfaces</p>
            <p className='h35'>Plant Layout Experts/Production Consultants</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home