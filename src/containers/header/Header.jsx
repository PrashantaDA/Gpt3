import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
     return (
          <div className='gpt3__header section__padding' id='home'>

               <div className="gpt3__header-content">
                    <h1 className="gradient__text">
                         Let's Build Something amazing with GPT-3 Open AI
                    </h1>
                    <p>
                         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis consectetur deserunt officia mollitia incidunt omnis ut quas odio est dolor!
                    </p>
                    <div className="gpt3__header-content__input">
                         <input type="email" placeholder='Your email address' />
                         <button>Get Started</button>
                    </div>
                    <div className="gpt3__header-content__people">
                         <img src={people} alt="People" />
                         <p>1600 people requested access in the last 24 hours</p>
                    </div>
               </div>
               <div className='gpt3__header-image'>
                    <img src={ai} alt="AI" />
               </div>
          </div>
     )
}

export default Header