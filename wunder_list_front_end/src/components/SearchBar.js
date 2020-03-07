import React, { useEffect, useState } from "react";
import { Form, Label, Input } from 'reactstrap';
import axiosWithAuth from '../utils/axiosWithAuth';

import CardItem from './Todos/CardItem';
import Actionbar from './Actionbar';

import { CardColumns, Button } from 'reactstrap';

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
            setCardList(results);
          })
          .catch(error => console.log('Call not complete', error))
      }, [searchQuery]);
    
  return (
		<>
		  	<Actionbar/>


		    <Form className="search-form">
        <Input 
          id='term'
          type='text'
          name='textfield'
          placeholder='Search...'
          value={searchQuery}
          onChange={handleChange} />
      </Form>

			<CardColumns>
			{cardList.map(todo => (
					<CardItem key={todo.id} props={todo} />
			))}
			</CardColumns>
		</>

	);
}