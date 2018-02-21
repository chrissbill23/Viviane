import React, { Component } from 'react';
class ImageSlideShow extends Component {
    constructor(props) {
        super(props);
        this.state = {currentindex: 0, currentimg: <img src={this.props.images[0]}/>};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            4000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        var current = this.state.currentindex + 1;
        if (current >= this.props.images.length) {
            current = 0;
        }
        this.setState({
            currentindex: current,
            currentimg: <img src={this.props.images[current]}/>
        });
    }

    render() {
        return (
            <div className="container">
                {this.state.currentimg}
                <div className="captionImgSS">
                    <h1>{this.props.caption}</h1>
                </div>
            </div>
        );
    }
}
export default ImageSlideShow;