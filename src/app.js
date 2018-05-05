console.log('app js is running');

let User = (props) => {
  return (
    <div className="user-group">
      <p>Name: {props.name}</p>
      <p>Birthday: {props.birthday}</p>
    </div>
  );
};

let Header = (props) => {
  return(
    <div className="header-group">
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
}

class Options extends React.Component {
  render() {
    return (
      <div className="options-list">
        <div className="btn-group">
          <button disabled={this.props.optionsIsHere} onClick={this.props.removeAllOptions} className="btn btn-danger">Remove all</button>
        </div>
        {
          this.props.options.map(option => {
            return <Option key={option} optionText={option} removeSingleOptions={this.props.removeSingleOptions} />
          })
        }
      </div>
    );
  }
}

class AddOption extends React.Component {
  render() {
    return (
      <div className="add-option-list"></div>
    );
  }
}

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.addOptions = this.addOptions.bind(this);
    this.state = {
      error: undefined
    }
  }
  addOptions (e) {
    e.preventDefault();
    
    let value = e.target.elements.option.value.trim();
    let error = this.props.addOption(value);

    this.setState(() => ({
      error: error
    }))
  }
  render () {
    return (
      <div className="form-wraper">
        <form onSubmit={this.addOptions}>
          {this.state.error && <p>{this.state.error}</p>}
          <input type="text" className="form-control mb-2" placeholder="Type something" name="option" />
          <button className="btn btn-info">Add Option</button>
        </form>
      </div>
    );
  }
};


// 027 Nesting Components
class FirstApp extends React.Component {
  constructor(props) {
    super(props);
    this.removeAllOptions = this.removeAllOptions.bind(this);
    this.handalePick = this.handalePick.bind(this);
    this.addOption = this.addOption.bind(this);
    this.removeSingleOptions = this.removeSingleOptions.bind(this);
    this.state = {
        options:  ['Option One', 'Option Two', 'Option Three']
    }
  }
  removeAllOptions() {
    this.setState(() => {
      return {
        options: []
      };
    })
  }
  handalePick() {
    // alert("test");
    let randomNum = Math.floor(Math.random() * this.state.options.length);
    let option = this.state.options[randomNum];
    console.log(option);
    alert(option);
  }
  addOption(option) {
    console.log(option);
    if (!option) {
      return 'Add Vaild Value'
    } else if(this.state.options.indexOf(option) > -1) {
      return 'This value already exists'
    }
    // set state type new formating
    this.setState((e) => ({options: e.options.concat([option])}));
  }
  removeSingleOptions(optionToRemove) {
    console.log(optionToRemove);
    this.setState((e) => ({
      options: e.options.filter((option) => {
        return optionToRemove !== option
      })
    }));
  }
  render () {
    let title = "My First React App",
        subtitle = "Some text here";
        // options = ['Option One', 'Option Two', 'Option Three'];
    return (
      <div className="col-md-8 mx-auto text-center">
        <Options options={this.state.options} optionsIsHere={this.state.options.length === 0} removeSingleOptions={this.removeSingleOptions} removeAllOptions={this.removeAllOptions}/>
        <AddOption />
        <Form addOption={this.addOption}/>
      </div>
    );
  }
}

class Option extends React.Component {
  render () {
    return (
      <div className="option-list">
        {this.props.optionText}
        <button 
          className="btn btn-info" 
          onClick={(e) => {
            this.props.removeSingleOptions(this.props.optionText);
          }}
        >
          Remove
        </button>
      </div>
    );
  }
};

// class less component not use (this)
let MyApp = () => {
  let title = "Personal Information";
  return (
    <div className="app-group">
      <FirstApp />
      {/* <Header title={title} subtitle="Basic Information" /> */}
      {/* <Header subtitle="Basic Information" /> */}
      {/* <User name="Shane R Kennedy" birthday="12/26/1994"/> */}
    </div>
  );
};

let app = document.getElementById('app');

ReactDOM.render(<MyApp />, app);