import React, { Component } from 'react';
import {eventsController} from "../../../Controllers/EventsControllers";
import ImageSlideShow from "../../UtilsComponents/ImageSlideShow";
class Type extends Component {
    constructor(props) {
        super(props);
        this.controller = eventsController;
        this.state = {current: <div id="typeslist">Caricamento in corso</div>};
    }
    render() {
        return (
            <div>
                <h1>Tipi di Eventi</h1>
                {this.state.current}
            </div>
        );
    }
    componentDidMount() {
        this.controller.getAllTypes().then((datas) => {
            var current = [];
            var tim = 5000;
            for (const val of datas.data) {
                current.push(<ImageSlideShow key = {tim} images = {val.photos} caption = {val.name} time = {tim}/>);
                tim += 1000;
            }
            this.setState({current: <div id="typeslist">{current}</div>});
        });
    }
}
export default Type;