import React from 'react';
import data from '../../db/data.json';
import Cards from '../Cards/Cards';
import './parent.css'
import { useState } from 'react';



const Parent = ({ searchTerm ,setSearchTerm }) => {

    return (

        <div className="gallery-container">


            {
                
                data.filter((val) => {

                    if (searchTerm == "") {   //i.e. if searchTerm i.e. input is empty then only return all original data
                        return val;
                    }
                    else { 
                        const searchTerms = searchTerm.toLowerCase().split(' ');
                        const title = val.title.toLowerCase();
                        return searchTerms.every((term) => title.includes(term));
                        
                    }
                    }
                )



                    .map((item) => {
                        return (
                            <Cards
                                key={item.id} // Assuming each item in data has a unique ID
                                imgage={item.img}
                                title={item.title}
                                content={item.reviews}
                                newprice={item.prevPrice}
                                prev={item.newPrice}
                                company={item.company}
                                color={item.color}
                                category={item.category}

                            />
                        );
                    })

            }



        </div>
    );
};




export default Parent;



