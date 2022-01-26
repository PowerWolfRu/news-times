import React, { Component} from 'react';
import "./NewsCard.css";

const textData1 = {
    thumbnail: 'https://images.unsplash.com/photo-1464655646192-3cb2ace7a67e?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=7bd13db3b64ce66833f51169e9e6e5e5',
    colorTheme: 'orange',
    category: 'Photos',
    comments: 9,
    text: {
        heading: 'Pretty Pictures',
        subheading: 'Magical photons taking photos',
        content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
    }
};
const textData2 = {
    thumbnail: 'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=9bd244971b9cb52a8418cf2f66fce464',
    colorTheme: 'blue',
    category: 'Food',
    comments: 24,
    text: {
        heading: 'Kitchen Nightmares',
        subheading: 'There are rats everywhere',
        content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
    }
};

const cardData = [textData1, textData2];




export default class NewsCard extends Component {
    render() {

        let time = new Date();
        return (
            <div className="cardContainer">
                <Thumbnail src={this.props.thumbnailSrc} />
                <DateStamp timeCreated={time} colorTheme={this.props.colorTheme} />
                <Category category={this.props.category} colorTheme={this.props.colorTheme}/>
                <TextBlock content={this.props.textContent} colorTheme={this.props.colorTheme}/>
                <CreatedTimeStamp timeCreated={time} />
                <Comments numComments={this.props.numComments} />
            </div>
        )
    }
};

class Category extends Component {
    render() {
        return (
            <div className="category">
                <span style={{backgroundColor: this.props.colorTheme}}><strong>{this.props.category}</strong></span>
            </div>
        )
    }
};

class Comments extends Component {
    render() {


        return (
            <div className="numComments">
                <span>{this.props.numComments} comments </span>
            </div>
        )
    }
};

class CreatedTimeStamp extends Component {
    constructor() {
        super();
        this.state = {
            minutesAgoCreated: 0
        };
    }


    render() {

        let currentTime = Date.now();
        setInterval(function () {
            currentTime = Date.now();
            let minutesElapsed = ((currentTime - this.props.timeCreated)/(1000*60)).toFixed(0);
            this.setState({
                minutesAgoCreated: minutesElapsed
            });
        }.bind(this), 60000);

        return (
            <div className="timeCreated">
                <span> Created <span>{this.state.minutesAgoCreated}</span> minutes ago </span>
            </div>
        )
    }
};


class DateStamp extends Component {
    render() {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        const date = this.props.timeCreated.getDate();
        const monthNum = this.props.timeCreated.getMonth();
        const month = months[monthNum];

        return (
            <div style={{backgroundColor: this.props.colorTheme}} className="dateStamp">
                <div className="day"> {date} </div>
                <div className="month"> {month} </div>
            </div>
        )
    }

};


class TextBlock extends Component {
    render() {
        return (
            <div className="textBlock">
                <h1>{this.props.content.heading}</h1>
                <h2 style={{color: this.props.colorTheme}}>{this.props.content.subheading}</h2>
                <div className="paragraphContainer">
                    <p>{this.props.content.content}</p>
                </div>
            </div>
        )
    }
};


class Thumbnail extends Component {
    render() {


        return (
            <div className="thumbnailContainer">
                <div className="thumbnail" style={{backgroundImage: 'url('+ this.props.src+')'}}>
                </div>
            </div>
        )
    }
};