import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Card from './Card';

const ApiCard = () => {
    const [cards, setCards] = useState([])
    const [searchText, setSearchText] = useState([]);
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${searchText}`)
            .then(res => res.json())
            .then(data => {
                setCards(data.results)
                setSearchText(data.results)
            })
    }, [])


    function searchHandle(event) {
        const searchData = event.target.value;
        const filtered = cards.filter(card => card.name.toLowerCase().includes(searchData));
        setSearchText(filtered);
        
    }
    return (
        <div>
            <div className='bg-yellow-300 text-center'>
                <input name='search' onChange={searchHandle} className='rounded p-2' type="text" placeholder='Search here name' />
                <button onChange={searchHandle} class="ml-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    Seacrh
                </button>
            </div>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-12 my-12'>


           
                {
                    searchText?.map((card, index) => <Card
                        card={card}
                        index={index}
                    ></Card>)
                }

                
              
            </div>
        </div>
    );
};

export default ApiCard;