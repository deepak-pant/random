import React from 'react';



export class Button extends React.Component {
    render() {
        return ( <
            button className = { this.props.light ? 'blue-button' : 'dark-button' }
            onClick = { this.props.onClick } >

            Refresh < /button>

        );
    }
}