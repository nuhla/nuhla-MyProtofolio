import React from 'react'
import { useSpring, animated } from 'react-spring'
import './IntrestAndSkills.css'
import {  Row, Col, Typography } from 'antd'
import { CheckCircleTwoTone } from '@ant-design/icons'
import { Rate, Divider } from 'antd'

//------------------ antd sub components -----------------------------//
const { Text, Paragraph, Title } = Typography

// const IconFont = createFromIconfontCN({
//   scriptUrl: [
//     '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js', // icon-javascript, icon-java, icon-shoppingcart (overrided)
//     '//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js', // icon-shoppingcart, icon-python
//   ],
// })

//------------ Calculate the animation iver mouse movmen -----------------------//
const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
]
//-------------------------- Transition for the css ----------------------//
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

//-------------------- create Text Content -----------------------------//
const creatText = (text = '') => {
 
  var splitedArray = text.split('\n')

  var TextArray = [
    <Title level={5}>{splitedArray[0]}</Title>,

    <Divider orientation="left"> {splitedArray[2]}</Divider>,
  ]
  console.log(TextArray, 'TextArrayTextArray')
  for (var i = 3; i < splitedArray.length; i++) {
    console.log(splitedArray[i].length)
    if (splitedArray[i].length === 1) {
      TextArray.push(
        <Text style={{color:"ActiveCaption"}}>
          <Paragraph > {splitedArray[i]}</Paragraph>
          <Paragraph style={{color:"ActiveCaption"}}> {splitedArray[i]}</Paragraph>
        </Text>,
      )
    } else {
      TextArray.push(
        <div
          style={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}
        >
          <Paragraph>
            <CheckCircleTwoTone twoToneColor="#52c41a" spin={true} />{' '}
            {splitedArray[i]}
          </Paragraph>
          <Rate
            value={3}
            count={3}
            allowClear={false}
            disabled={true}
            style={{
              color: 'ButtonFace',
              verticalAlign: 'top',
              right: 0,
              whiteSpace: 0,
              padding: 0,
              margin: 0,
            }}
          />
        </div>,
      
      )
    }
  }

  return TextArray
}

//------------------------------------- Our Main Transistion Card --------------------------//
function SkillCard(data) {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }))
  return (
    <animated.div
      class="card"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans), height: '100%' }}
    >
      <Row style={{ height: '100%', width: '100%' }}>
        <Col span={5}>
          <div class="bg"></div>
        </Col>
        <Col span={19} style={{ padding: 30 }}>
          {creatText(data?.data?.text)}
        </Col>
      </Row>
    </animated.div>
  )
}

export default SkillCard
