import React from 'react'
import './steps.css'
import { connect } from 'react-redux'
import { Steps, Divider, Tag } from 'antd'
import TweenOne from 'rc-tween-one'
const { Step } = Steps


const mapStateToProps = (state) => ({
  Whistory: state.History.Whistory,
})

class Work extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 0,
    }
  }

  

  render() {
    return (
     
      <div
        className="  container"
        style={{
            // maxWidth:"500px",
          marginLeft: '5%',
          marginRight: '5%',
          marginTop: '3%',
          padding: '3%',
          margin: "0 auto",
          alignContent: 'center',
          alignItems: 'center',
          maxWidth: '700px',
          // backgroundImage:
          //   'url(https://i.pinimg.com/originals/2f/84/56/2f8456cc5b3d48593c96a82e7a63184f.jpg)',
        }}
      >
            
        <Steps direction="vertical" current={this.props.Whistory.length - 1}>
        
            {this.props.Whistory.sort((a, b) => {
              var da = new Date(a.Startdate)
              var db = new Date(b.Startdate)

              return db.getFullYear() - da.getFullYear()
            }).map((item, index) => {
              return (
                <Step
                className="card" style={{marginTop:"10px"}}
                key={index}
                  title={<TweenOne className="banner-user-title" animation={{ x: 30, opacity: 0,delay:index*300, type: 'from' }}><p style={{lineBreak:"anywhere"}} key={"a"}> {item.title}  </p></TweenOne>}
                  description={
                    <div key={"b"}>
                      <Divider orientation="left"> <TweenOne className="banner-user-title" animation={{ x: 30, opacity: 0,delay:index*400, type: 'from' }}><span class="glyphicon glyphicon-calendar" style={{color:"#2496FF"}}>{" "+item.Startdate +" -  "}</span> <span style={{color:"#2496FF"}} class="glyphicon glyphicon-calendar">{ " "+item.Finishdate}</span></TweenOne></Divider>
                      <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, delay:index*500, type: 'from' }}>
                      <p  style={{ marginLeft: '5%' }}>{item.Discription}</p></TweenOne>
                      {/* <Tag color="magenta">{item.FieldOfStudy}</Tag> */}
                    </div>
                  }
                />
              )
            })}
          
        </Steps>
      

      </div>
    )
  }
}
export default connect(mapStateToProps)(Work)

