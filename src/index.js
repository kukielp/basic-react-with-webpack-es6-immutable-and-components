import React from 'react';
import ReactDOM from 'react-dom';
import { Map, List } from 'immutable';
import Person from './Person.js';

class App extends React.Component {
  
    constructor() {
        super();
        this.state = { 
             data : Map({  input: '', collection: List(['Adam','James']) })
         };
         
         this.handleClick = this.handleClick.bind(this);
         this.handleChange = this.handleChange.bind(this);
    }
    
    handleClick(e) {
		var data = this.state.data;
        var isNew = true;
        
        this.state.data.get('collection').forEach(item => {
            if(data.get('input') === item || !String(data.get('input')).length ){
                isNew = false;
            }
        });
        
        if( isNew ){
            this.setState(({data}) => ({
                data: data.update('collection', list => list.push(data.get('input'))).set('input', '')
            }));
        }
 }
    
    handleChange(e){
        var value = e.target.value;
		this.setState(({data}) => (
            {
                data: data.set('input', value)
            }
          ));
	}
            
  render() {
      var data = this.state.data;
      console.log(Math.floor((Math.random() * 10) + 1) + " Render");
    
    return (
        <div>
                <input type="text" placeholder="Input some text:" value={data.get('input')} onChange={this.handleChange} />
                <p>Immutable</p>
                <button onClick={this.handleClick}>Click</button>
                <p>My List:</p>
                <ul>
                    {data.get('collection').map(item => 
                        <Person key={item} item={item}/>
                    )}
                </ul>
                <comp />
                
           </div>
    );
  }
}
  
export default App;
                        
ReactDOM.render(
  <App />,
  document.getElementById('app')
);