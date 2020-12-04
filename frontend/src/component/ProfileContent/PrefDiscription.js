import React from 'react'
import { Typography } from 'antd'

const { Text } = Typography
// const IconFont = createFromIconfontCN({
//   scriptUrl: [
//     '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js', // icon-javascript, icon-java, icon-shoppingcart (overrided)
//     '//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js', // icon-shoppingcart, icon-python
//   ],
// })
class PrefDiscription extends React.Component {
  render() {
    return (
      <div style={{}}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Text strong style={{ fontSize: '3.2vh', color: '#f5faff' }}>
            Who I am
          </Text>
          <Text secondary style={{ fontSize: '2vh', color: '#f5faff' }}>
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
              marginTop: '15px',
              marginLeft: '30%',
              marginRight: '30%',
              width: '100%',
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
