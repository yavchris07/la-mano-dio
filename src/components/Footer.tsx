// import React from 'react';
import '../styles/footer.scss';
import { useState } from 'react';
import icon from '../assets/logo.png';
import fb from "../assets/icons/fb.png";
import inst from "../assets/icons/inst.png";
import twit from "../assets/icons/twit.png";
import IElement from '../types/element';
import ELEMENT from '../types/element-data';

// import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
// import { FaXTwitter } from 'react-icons/fa6';

export default function Footer() {

  const [items] = useState<IElement[]>(ELEMENT);

  return (
    <div className='footer'>
      <div className='news-letters'>
        <div className='story'>
            {
              items.map((item,index) =>(
                <div className='card' key={index}>
                  <h1>{item.title}</h1>
                  <span>{item.element}</span>
                  <span>{item.type}</span>
                  {/* <span>{item.type1}</span> */}
                  <p>{item.resume}</p>
                </div>
              ))
            }
        </div>
     
        <div className='mailing'>
            <h4>Inscripption sur notre news letters</h4>
            <p>Faites-nous parvenir votre adresse mail pour recevoir nos news letters</p>
            <div className='control'>
                <label htmlFor="">Adresse mail</label>
                <input 
                    type="email" 
                    name="" 
                    id="" 
                    placeholder='Email'
                />
                {/* <label htmlFor="">Message</label>
                <input 
                    type="text" 
                    name="" 
                    id="" 
                    placeholder='Message'
                /> */}
                <div className='checkbox'>
                    <input 
                    type="checkbox" 
                    />
                    <p>Je désire recevoir de mails de votre part</p>
                </div>
                <button>Soumettre</button>
            </div>
        </div>
      </div>

      <div className='foot'>
        <img src={icon} alt="icon" />
        <p>La Mano Di Dio sarl © 2024</p>
        <div className='links'>
            <img src={fb} alt="fg" />
            <img src={inst} alt="inst" />
            <img src={twit} alt="twit" />
        </div>
      </div>
    </div>
  );
}


{/* <a 
href="https://web.facebook.com/fidbagraphics"
target="_blank" rel="noreferrer"
>
<BsFacebook />
</a> */}
