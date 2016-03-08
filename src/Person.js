import React from 'react';

class Person extends React.Component {
	
    render() {
        console.log(this.props);
		return (
            <li>Saved: {this.props.item}</li>
    	)
	}
}

export default Person;