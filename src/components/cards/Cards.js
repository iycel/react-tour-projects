import React from 'react';
import { data } from '../../helpers/Data';
import './Cards.css';

// const Cards = () => {
//     const [showImage, setShowImage] = useState(true)
//     return (
//         <div className='card-container' onClick={() => setShowImage(!showImage)}>
//             {showImage ? (
//                 <>
//                     {data.map(
//                         (card, index) => {
//                             return (
//                                 <div className='cards' key={index}>
//                                     <img src={card.image} alt={card.title} />
//                                 </div>
//                             )
//                         }
//                     )}
//                 </>
//             ) : (
//                 <>
//                     {data.map(
//                         (card, index) => {
//                             return (
//                                 <div className='cards' key={index}>
//                                     <div className='title'>
//                                         <h2>{card.title}</h2>
//                                     </div>
//                                     <img src={card.image} alt={card.title} />
//                                     <div className='card-over'>
//                                         <p>{card.desc}</p>
//                                     </div>
//                                 </div>
//                             )
//                         }
//                     )}
//                 </>
//             )}
//         </div>
//     );
// };

// export default Cards;

const Cards = (props) => {
    return (
        <div className='card-container' >
            {data.map((card, index) => {
                return (
                    <div className='cards' key={index} onClick={props.onMouseClick}>
                        <div className='title'>
                            <h2>{card.title}</h2>
                        </div>
                        <img src={card.image} alt={card.title} />
                        <div className={props.isVisible ? 'card-over' : 'card-over-no'}>
                            <p>{card.desc}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Cards;