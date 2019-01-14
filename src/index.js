import React from "react"; 
import ReactDOM from "react-dom"; 
import "./index.css"; 


class VimeoPage extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            boxes: [
                {
                    div_1: 'white-box',
                    div_2: 'white-box-contents',
                    div_3: 'white-box-img',
                    div_4: 'white-box-text',
                    title: 'MONSOON III',
                    description:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
                    'Donec tincidunt ipsum augue. In faucibus vehicula magna' +
                    'pulvinar aliquam. Cras aliquam feugiat lorem non auctor. ' +
                    'Quisque sed lorem egestas mauris venenatis commodo eu id' +
                    'nibh. Ut porta libero sed semper faucibus.',
                    image: './monsoon.jpg'
                }, 
                {
                    div_1: 'gray-box',
                    div_2: 'gray-box-contents',
                    div_3: 'gray-box-img',
                    div_4: 'gray-box-text',
                    title: 'BEAMS',
                    description:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
                    'Donec tincidunt ipsum augue. In faucibus vehicula magna' +
                    'pulvinar aliquam. Cras aliquam feugiat lorem non auctor. ' +
                    'Quisque sed lorem egestas mauris venenatis commodo eu id' +
                    'nibh. Ut porta libero sed semper faucibus.',
                    image: './beams.jpg'
                }, 
                {
                    div_1: 'gradient-box',
                    div_2: 'gradient-box-contents',
                    div_3: 'gradient-box-img',
                    div_4: 'gradient-box-text',
                    title: 'Move 2',
                    description:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
                    'Donec tincidunt ipsum augue. In faucibus vehicula magna' +
                    'pulvinar aliquam. Cras aliquam feugiat lorem non auctor. ' +
                    'Quisque sed lorem egestas mauris venenatis commodo eu id' +
                    'nibh. Ut porta libero sed semper faucibus.',
                    image: './move2.jpg'
                }
            ]
        }
    }

    render() {
        return (
            <div className= "content">
                {
                    this.state.boxes.map((box,i) => (
                        <div key={i}> 
                            <div className= {box.div_1}>
                                <div className= {box.div_2}>
                                    <img className= {box.div_3} src= {box.image}>
                                    </img>
                                    <div className= {box.div_4}>
                                        <h1>{box.title}</h1>
                                        <p>{box.description}</p>                   
                                    </div>
                                </div>
                            </div>
                        </div>
                    )) 
                }
            </div>
        )
    }
}

//----------------------------------CAROUSEL----------------------------------
class Slider extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            images: [
                "./huntforthe.jpg",
                "./nichts.jpg", 
                "./viceversa.jpg",
                "./fourthphase.jpg", 
                "./fullmoon.jpg"
            ], 
            content: [
                {
                    title: 'Hunt for the Wilderpeople',
                    description:
                    'Raised on hip-hop and foster care, '+
                    'defiant city kid Ricky gets a fresh start in the New '+
                    'Zealand countryside. From the director of '+
                    'What We Do In The Shadows.',
                    image: './huntforthe.jpg', 
                    color: '#329DE5',
                    backColor: '#267BB4',
                    link: 'https://vimeo.com/ondemand/huntforthewilderpeople',
                    buy: 'https://vimeo.com/store/ondemand/buy/85597'
                },
                {
                    title: 'Nichts passiert/A Decent Man',
                    description: 
                    'A Swiss family takes a ski vacation and runs into '+
                    'trouble when the father, the titular decent man, finds '+
                    'himself in a series of moral quandaries.',
                    image: './nichts.jpg',
                    color: '#0E8AB6',
                    backColor: '#0A5D7A',
                    link: 'https://vimeo.com/ondemand/nichtspassiertadecentman',
                    buy: 'https://vimeo.com/store/ondemand/buy/82485'
                },
                {
                    title: 'Vice Versa',
                    description: 
                    'Come along with the Good Company crew as they travel '+
                    'throughout the US, Japan, BC and Quebec to showcase '+
                    'skiing in the best way possible.',
                    image: './viceversa.jpg',
                    color: '#B6AF5E',
                    backColor: '#7F7A43',
                    link: 'https://vimeo.com/ondemand/viceversafilm',
                    buy: 'https://vimeo.com/store/ondemand/buy/82432'
                },
                {
                    title: 'The Fourth Phase',
                    description: 
                    'From the creators of The Art of FLIGHT, Red Bull Media '+
                    'House presents THE FOURTH PHASE, a snowboarding epic '+
                    'starring iconic athlete Travis Rice.',
                    image: './fourthphase.jpg',
                    color: '#3178A9',
                    backColor: '#215070',
                    link: 'https://vimeo.com/ondemand/thefourthphase',
                    buy: 'https://vimeo.com/store/ondemand/buy/81262'
                },
                {
                    title: 'Full Moon',
                    description: 
                    'Be inspired by women who push boundaries. FULL MOON '+
                    'showcases the legends, current icons and future '+
                    'prodigies of this ever-evolving lifestyle sport.',
                    image: './fullmoon.jpg',
                    color: '#868586',
                    backColor: '#444344',
                    link: 'https://vimeo.com/ondemand/fullmoonsnowboard',
                    buy: 'https://vimeo.com/store/ondemand/buy/85795'
                }
            ],
            currentIndex: 0, 
            translateValue: 0
        }
    }

    goToPrevSlide = () => {
        if(this.state.currentIndex === 0) { //the first slide
            return; //cannot go to previous slide, TRY TO CHANGE!!!
        }
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex - 1, //goes down
            translateValue: prevState.translateValue + this.slideWidth() 
        }))
    }

    goToNextSlide = () => {
        if(this.state.currentIndex === this.state.images.length - 1) {
            return this.setState({
                currentIndex: 0, 
                translateValue: 0
            })
        }
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1, 
            translateValue: prevState.translateValue + -(this.slideWidth())
        })); 
    }

    slideWidth = () => {
        return document.querySelector('.slide').clientWidth
    }

    render() {
        return (
            <div className= "slider">
                <div className= "slider-wrapper"
                    style= {{
                        transform: `translateX(${this.state.translateValue}px)`,
                        transition: "transform ease-out 0.3s"
                    }}>
                    {
                        this.state.content.map((item, i) => (
                            <div key={i} className= "slide-and-info" style={
                                {
                                    backgroundColor: item.backColor
                                }
                            }>
                                <div className= "slide" style={
                                    {
                                        backgroundImage: `url('${item.image}')`,
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: '100% 50%',
                                    }
                                }></div>
                                <div className= "info">
                                    <img className= "poster" src={item.image}/>
                                    <div className= "info-right">
                                        <h1>{item.title}</h1>
                                        <p>{item.description}</p>
                                        <form className="form-buy" action={item.buy} 
                                            method="get" target="_blank">
                                            <button className= "buy"
                                                style={
                                                    {
                                                        backgroundColor: item.color,
                                                        borderColor: item.color
                                                    }
                                                }>
                                                <img src= "./whitevimeo.png"/>
                                                Buy Now
                                            </button>
                                        </form>
                                        <form className="form-trailer" action={item.link} 
                                            method="get" target="_blank"> 
                                            <button className= "trailer">
                                                Watch Trailer
                                            </button>
                                        </form> 
                                    </div>
                                </div>
                            </div>
                        ))
                    } 
                </div>
                <LeftArrow goToPrevSlide= {this.goToPrevSlide}/>
                <RightArrow goToNextSlide= {this.goToNextSlide}/>
            </div>  
        )   
    }
}

const LeftArrow = (props) => {
    return (
      <div className="backArrow arrow" onClick={props.goToPrevSlide}>
        {/* <img src= "./left-chevron.svg"></img> */}
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" 
            viewBox="0 0 511.641 511.641">
            <path id="left" d="M148.32,255.76L386.08,18c4.053-4.267,3.947-10.987
                -0.213-15.04c-4.16-3.947-10.667-3.947-14.827,0L125.707,248.293
                c-4.16,4.16-4.16,10.88,0,15.04L371.04,508.667c4.267,4.053,10.987
                ,3.947,15.04-0.213c3.947-4.16,3.947-10.667,0-14.827
                L148.32,255.76z"/>
        </svg>
      </div>
    );
}
  
const RightArrow = (props) => {
    return (
        <div className="nextArrow arrow" onClick={props.goToNextSlide}>
            {/* <img src= "./right-chevron.svg"></img>  */}
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                viewBox="0 0 511.949 511.949">
                <path id="right" d="M386.235,248.308L140.902,2.975c-4.267-4.053
                    -10.987-3.947-15.04,0.213c-3.947,4.16-3.947,10.667,0,14.827l237.76,237.76
                    l-237.76,237.867c-4.267,4.053-4.373,10.88-0.213,15.04c4.053,
                    4.267,10.88,4.373,15.04,0.213c0.107-0.107,0.213-0.213,0.213-0.213
                    l245.333-245.333C390.395,259.188,390.395,252.468,386.235,248.308z"/>
            </svg>
        </div>
    );
}

ReactDOM.render(<VimeoPage />, document.getElementById('root')); 
ReactDOM.render(<Slider />, document.getElementById('carousel')); 
