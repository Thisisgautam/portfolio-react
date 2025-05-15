import React from 'react'
import {Container,Row,Col } from 'react-bootstrap'
import {ArrowRightCircle} from "react-bootstrap-icons"
import { useState,useEffect } from 'react'
import headerImg from "../assets/img/pfp-3.png"
import { useScroll } from './ScrollContext'

const Banner = () => {
  const [loopNum, setloopNum] = useState(0);
  const [isDeleting, setisDeleting] = useState(false);
  const toRotate = ["Web developer","Backend Developer","Cloud Engineer"];
  const [text, settext] = useState('');
  const [delta, setDelta] = useState(200-Math.random()*100);
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(()=>{
        tick();
    },delta)
  
    return () => {
     clearInterval(ticker)
    }
  }, [text])

  const tick =()=>{
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting? fullText.substring(0, text.length -1) : fullText.substring(0, text.length + 1);

    settext(updatedText);
    if(isDeleting){
        setDelta(prevDelta => prevDelta/2);
    }

    if(!isDeleting && updatedText === fullText){
        setisDeleting(true);
        setDelta(period);
    }
    else if( isDeleting && updatedText === ''){
        setisDeleting(false);
        setloopNum(loopNum +1);
        setDelta(100);
    }
  }
  
  const { footerRef } = useScroll();

  const handleScrollToFooter = () => {
    footerRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
    <section className='banner' id='home' >
        <Container>
            <Row className = "align-items-center">
                <Col xs={12} md={6} xl={7}>
                <span className="tagline">Welcome to My Portfolio</span>
                <h2>{`Hi I'm Goutam Goswami`} <span className="wrap"> {text}</span></h2>
                
                <p> Self-Taught developer who is passionate about Computer Science, Let's collaborate on our next digital venture </p>
                <button onClick={handleScrollToFooter}>Let's Connect<ArrowRightCircle/> </button>
                </Col>
                <Col className="img-col" xs={12} md={6} xl={5}>
                <img src={headerImg} alt="" />
                </Col>
            </Row>
        </Container>
    </section>
    </>
  )
}

export default Banner
