import React, { useState, useEffect } from "react";

import axiosWithAuth from "../utils/axiosWithAuth";

import CardItem from './Todos/CardItem';
import { Card, Form, Input } from 'reactstrap';

export default function SearchBar(props) {

  // This code should be integrated into the call for elements on the main page
  let [cardList, setCardList] = useState([])
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = e => {
    setSearchQuery(e.target.value);
  }

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/task`)
      .then(response => {
        // console.log('what is response', response.data)
        let results = response.data.filter(card => {
          return card.title.toLowerCase().includes(searchQuery.toLowerCase())
        });
        // console.log('what are results', results)
        setCardList(results);
      })
      .catch(error => console.log('Call not complete', error))
  }, [searchQuery]);


  return (
    <Card><Form className="search-form">
      <Input
        id='term'
        type='text'
        name='textfield'
        placeholder='Search...'
        value={searchQuery}
        onChange={handleChange} />
    </Form>
      {cardList.map(todo => (
        <CardItem key={todo.title} props={todo} />
      ))}
    </Card>

  );
}