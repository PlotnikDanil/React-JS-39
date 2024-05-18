import React, { Component } from "react";

export default class Child extends Component {
    render() {
        return (
            <div>
                {this.props.value ?
                    <button 
                        style={
                            {padding: 0.8+'rem', pointerEvents:'auto', border:'none', color:'green'}}>
                                Отправить
                    </button> :
                    <button
                        style={{padding: 0.8+'rem', pointerEvents:'none', border:'none'}}>
                            Недоступно
                    </button>}
            </div>
        )
    }
}