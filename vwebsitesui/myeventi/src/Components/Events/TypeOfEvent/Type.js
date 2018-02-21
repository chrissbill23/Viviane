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
            for (const val of datas.data) {
                current.push(<ImageSlideShow images = {val.photos} caption = {val.name}/>);
            }
            this.setState({current: <div id="typeslist">{current}</div>});
        });
    }
}
export default Type;