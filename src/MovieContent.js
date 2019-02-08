import React from 'react'
import {RatingElement} from './RatingElement'

let background;
let title;
let  release;
let actors;
let plot;
let production;
let director;
let genre;
let language;
var ratings = [];
let movieContentDisplay = 'none'; // These are the display prop of the elem
let showServerError = 'none';
let showEmptyPage = 'inline-block';
let serverError;
let ratingElem = []; // This stores the DOM for rating
export class MovieContent extends React.Component{
    shouldComponentUpdate(nextProps , nextState){
        if(nextProps.data === undefined)
        {
            return false;
        }
        return true;
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.data !== undefined)
        {
            if(nextProps.data.Response === 'True')
            {
                background = nextProps.data.Poster;
                title = nextProps.data.Title;
                release = nextProps.data.Released;
                actors = nextProps.data.Actors;
                plot = nextProps.data.Plot;
                production = nextProps.data.Production;
                ratings = nextProps.data.Ratings;
                director = nextProps.data.Director;
                genre = nextProps.data.Genre;
                language = nextProps.data.Language;
                movieContentDisplay = 'block';
                showServerError = 'none';
                showEmptyPage = 'none';
            }
            else{
                movieContentDisplay = 'none';
                showServerError = 'inline-block';
                showEmptyPage = 'none';
                serverError = nextProps.data.Error;
            }
        }
    }
    render(){
        return (
            <div>
                <div style={{ display: showEmptyPage }}>
                    <img src="img/emptyPage.jpg" style={{ width: '50%', maxWidth: '500px' }}/>
                    <h5 style={{ color: 'rgb(135,135,135)' }}>Nothing to show!</h5>
                </div>
                <div style={{ display: showServerError }}>
                    <img src="img/error.jpg" style={{ width: '70%', maxWidth: '600px' }}/>
                    <h3 style={{ color: 'rgb(54,110,153)' }}>{serverError}</h3>
                </div>
                <div style={{ margin: 30, padding: 30, height: '100%', display: movieContentDisplay }}>
                   <div className="col-sm-12 col-md-4" style={{ backgroundImage: `url(${background})`, height: '400px', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'contain', display: 'inline-block', float: 'left'}}>
                   </div>
                   <div className="col-sm-12 col-md-8" style={{ textAlign: "left" , lineHeight: '30px', float: 'left', paddingTop: '20px', paddingBottom: 40}}>
                      <RatingElement data={ratings}/>
                      { title ? (<div style={{ margin: '5px 0px' }}><p style={{fontWeight: 600}}>Title: </p> {title}</div>) : '' }
                      { release ? (<div style={{ margin: '5px 0px' }}><p style={{fontWeight: 600}}>Released: </p> {release} </div>) : '' }
                      { actors ? (<div style={{ margin: '5px 0px' }}><p style={{fontWeight: 600}}>Actors: </p> {actors} </div>) : '' }
                      { production ? (<div style={{ margin: '5px 0px' }}><p style={{fontWeight: 600}}>Production: </p> {production} </div>) : '' }
                      { plot ? (<div style={{ margin: '5px 0px' }}><p style={{fontWeight: 600}}>Plot: </p> {plot} </div>) : '' }
                      { director ? (<div style={{ margin: '5px 0px' }}><p style={{fontWeight: 600}}>Director: </p> {director} </div>) : '' }
                      { genre ? (<div style={{ margin: '5px 0px' }}><p style={{fontWeight: 600}}>Genre: </p> {genre} </div>) : '' }
                      { language ? (<div style={{ margin: '5px 0px' }}><p style={{fontWeight: 600}}>Language: </p> {language} </div>) : '' }
                   </div>
                </div>
            </div>
        );
    }
}
