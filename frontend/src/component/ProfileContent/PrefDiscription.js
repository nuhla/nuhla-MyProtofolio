import React from 'react'
import { Typography, Avatar } from 'antd'
import { OverPack } from 'rc-scroll-anim'
import TweenOne from 'rc-tween-one'
import QueueAnim from 'rc-queue-anim'
const { Text } = Typography

class PrefDiscription extends React.Component {
  render() {
    return (
      <div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
          }}
        >
          <div style={{ alignContent: 'center', alignItems: 'center' }}>
            <Avatar
              style={{ margin: '0 auto' }}
              size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
              src={
                'https://scontent.fjrs4-1.fna.fbcdn.net/v/t1.0-9/33125684_1848797438758512_2544245489784586240_n.jpg?_nc_cat=105&ccb=2&_nc_sid=174925&_nc_ohc=ZSzNyPQJ_BUAX-O90Sp&_nc_ht=scontent.fjrs4-1.fna&oh=63b2f59780413ea502ab8d20b0ab353f&oe=5FF48985'
              }
            ></Avatar>
          </div>
          <Text strong style={{ fontSize: '2.5vh', color: '#f5faff' }}>
            Nahla Ibrahim Al masri
          </Text>
          <Text
            secondary
            style={{
              fontSize: '2.2vh',
              color: '#d0d0d19b',
              textAlign: 'center',
            }}
          >
            {this.props?.AbouMe?.title}
          </Text>
          <Text
            secondary
            style={{
              fontSize: '1.4vh',
              wordWrap: 'break-word',
              color: '#a2b5c3',
            }}
          >
            {this.props?.AbouMe?.text}
          </Text>
          <div
            style={{
              display: 'flex',
              alignContent:"center",
              alignItems:"center",
              marginTop: '10px',
              margin: '0 auto',
           
            }}
          >
            <div className="socialDiv">
              <a href="https://www.facebook.com/tommalvida">
                <i
                  class="fa fa-facebook fa-lg"
                  style={{ fontSize: '30px', color: 'white' }}
                ></i>
              </a>
            </div>
            <div className="socialDiv">
              <a href="mailto:nuhlamasri@gmail.com">
                <i
                  class="fa fa-google fa-lg "
                  style={{ fontSize: '30px', color: 'white' }}
                ></i>
              </a>
            </div>
            <div className="socialDiv">
              <a href="https://www.linkedin.com/in/nuhla-al-masri-18549236/">
                <i
                  class="fa fa-linkedin fa-lg "
                  style={{ fontSize: '30px', color: 'white' }}
                ></i>
              </a>
            </div>
            <div className="socialDiv">
              <a href="https://github.com/nuhla">
                <i
                  class="fa fa-github fa-lg "
                  style={{ fontSize: '30px', color: 'white' }}
                ></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PrefDiscription
