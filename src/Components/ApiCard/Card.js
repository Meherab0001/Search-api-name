import React from 'react';

import { Link } from "react-router-dom";

const Card = ({card}) => {
    const {url}=card
   
    return (
        <div>
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
               
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">{card.name}</div>
                        <p class="text-gray-700 text-base">
                        
                        <Link to={url}>Details</Link>
                      
                        </p>    
                    </div>
                    
            </div>
        </div>
    );
};

export default Card;