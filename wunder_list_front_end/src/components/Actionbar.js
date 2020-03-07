import React from 'react';
import { Link } from 'react-router-dom';
// import { Button } from 'reactstrap';


export default function Actionbar(props) {


  return (
    <div className='action-bar'>
        <Link to='/list'>List of tasks</Link>
        <Link to='/search'>Search for tasks</Link>
        <Link to='/deleted'>Recently deleted tasks</Link>
    </div>
  );
}