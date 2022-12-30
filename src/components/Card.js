import './Card.css';
import React, { Component } from 'react';

class Card extends Component {
    render() {
        const { name, email, id } = this.props;
        return (
            <div className='bg-light-blue dib br4 pa3 ma2 grow f6 bw2 shadow-5'>
                <img src={`https://robohash.org/${id}?200x200`} alt='robot' />
                <div>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
            </div>
        );
    }
}

export default Card;