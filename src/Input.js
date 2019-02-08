import React from 'react';
import { MovieContent } from './MovieContent';
import $ from 'jquery'; 

export class Input extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event){
        if(event.keyCode === 13)
        {
          let search = document.getElementById('search-input').value;
          $.ajax('https://www.omdbapi.com/?apikey=56439a3c&t='+search)
          .done(function(response){
              this.setState({response});
          }.bind(this))
          .catch(function(e){
              console.log(e);
          });
        }
    }
    render(){
        return (
            <div>
              <div style={{ minHeight: 200, backgroundColor: '#282c34', display: 'flex' }}>
                <input id="search-input" onKeyUp={ this.handleSubmit } type="text" placeholder="Search for movies.." style={{width: '70%',fontSize: 20, borderRadius: '10%', padding:20, margin: 'auto'}} /> 
              </div>
              <MovieContent data={this.state.response}/>
            </div>
        );
    }
}