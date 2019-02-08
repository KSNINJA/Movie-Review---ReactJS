import React from 'react'

export class RatingElement extends React.Component{
    constructor(props){
        super(props);
        this.getElements = this.getElements.bind(this);
    }
    getElements(){
        var ratings = this.props.data;
        var array = ratings.map(function(elem){
            return (
                <div className="tooltip" style={{ backgroundColor: 'rgb(218,219,218)', borderRadius: '100%', display: 'flex', display: 'inline-flex',height: 100, width: 100, marginRight: 20, marginBottom: 30 }}>
                    <div style={{margin: 'auto'}}>{elem.Value}</div>
                    <span className="tooltiptext">{elem.Source}</span>
                </div>
            );
        });
        return array;
    }
    render(){
        return <div>{this.getElements()}</div>
    }

}