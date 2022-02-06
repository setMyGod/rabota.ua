import React from 'react';
import image from './images/Prof-Photo.png'
import cards from './cards.module.css'
import fishki from './images/image.svg'
import publick from './images/#Publication-Date.png'
import label from './images/Text-Label.png'
import shape from './images/Shape.png'
import dislike from './images/path5074 5.png'
import bold from './images/Bold@2x.png'

const Card = (props) => {
    let {about} = props
    let{moneyfowork} = props
    let{fishka} = props
    let{percent} = props
    let{ua} = props
    let{city} = props
    let {fitcha} = props
    let{fitcha2} = props
    let {fitcha3} =props


    return (
        <div className={cards.father}>
            <div className={cards.wrap}>
                <img src={image} alt="headofcard"/>
                <div className={cards.new}><p><span className={cards.newspan}>Новая</span></p></div>
                <div className={cards.parandfishki}><span className={cards.content}><p>{about}</p></span><img className={cards.fishka} src={fishki} alt="fishkalogo"/></div>
                <div className={cards.money}>
                    <p className={cards.moneyfowork}>{moneyfowork}</p>
                    <p className={cards.percent}>{percent}</p>
                </div>
                <div className={cards.townlink}><a className={cards.ua}href="#">{ua}</a><p className={cards.kyiv}>{city}</p></div>
                <div className={cards.menu}><div className={cards.text}>{fitcha}</div><div className={cards.text}>{fitcha2}</div><div className={cards.textlong}>{fitcha3}</div></div>
                <div className={cards.footerimg}><div><img className={cards.bold} src={bold} alt="bold"/></div><div className={cards.label}><img src={label} alt="label"/></div><div className={cards.shape}><img src={shape} alt=""/></div><div className={cards.dislike}><img src={dislike} alt=""/></div><div className={cards.date}><img src={publick} alt="publicationdate"/></div></div>

            </div>



        </div>
    );
};

export default Card;