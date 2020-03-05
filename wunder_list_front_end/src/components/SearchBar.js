import React, { useEffect, useState } from "react";
import { Form, Label, Input } from 'reactstrap';
import axiosWithAuth from '../utils/axiosWithAuth';

export default function SearchBar(props) {

    let [cardList, setCardList] = useState([])
    const [searchQuery, setSearchQuery] = useState('');

    const handleChange = event => {
      setSearchQuery(event.target.value);
    };
      
    useEffect(() => {
      axiosWithAuth()
          .get(`/api/task`)
          .then(response => {
            let results = response.data.filter(card => {
              return card.title.toLowerCase().includes(searchQuery.toLowerCase())
            });
            console.log('search items', results)
            setCardList(results);
          })
          .catch(error => console.log('Call not complete', error))
      }, [searchQuery]);
      console.log(cardList)
    
  return (
      <Form className="search-form">
        <Input 
          id='term'
          type='text'
          name='textfield'
          placeholder='Search...'
          value={searchQuery}
          onChange={handleChange} />
      </Form>
  );
}