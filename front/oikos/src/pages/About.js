import React, { Component } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FilledInput from '@material-ui/core/FilledInput';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import ReactDOM from 'react-dom';
import { withStyles } from '@material-ui/core/styles';
import './About.css'
import Radio from '@material-ui/core/Radio';




const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    formControl: {
      margin: theme.spacing.unit,
    },
  });


class About extends Component {      

 state = {
    checkedA: false,
    checkedB: true,
    checkedC: false,
    checkedD: true,
    checkedE: false,
    checkedF: false,
    checkedG: false,

  }

  handleChange = () => {
    this.setState({ 
        checkedA: !this.state.checkedA,
        checkedB: !this.state.checkedB,
     });
  };

  handleClick = () => {
    this.setState({ 
        checkedC: !this.state.checkedC,
        checkedD: !this.state.checkedD,
     });
  };

  handleClicke = () => {
    this.setState({ 
        checkedE: !this.state.checkedE,
        checkedF: !this.state.checkedF,
        checkedG: !this.state.checkedG
     });
  };


  render() {
    const { classes } = this.props;
    return (
      <div className="page_about">
          <h1>ABOUT YOU</h1>
          <div className="bloc1">
            <h2 className="titre2">GENDER</h2>
            Woman<Checkbox 
            checked={this.state.checkedA}
            onClick={this.handleChange}
            />
            Man<Checkbox
            checked={this.state.checkedB}
            onClick={this.handleChange}
            color="primary"
            />
        </div>
        <div className="bloc2">
            <FormControl className={classes.formControl} variant="outlined">
            <InputLabel
                ref={ref => {
                this.labelRef = ReactDOM.findDOMNode(ref);
                }}
                htmlFor="component-outlined"
            >
                Age
            </InputLabel>
            <OutlinedInput
                id="component-outlined"
                value={this.state.name}
                onChange={this.handleChange}
                labelWidth={this.labelRef ? this.labelRef.offsetWidth : 0}
            />
            </FormControl>
            <FormControl className={classes.formControl} variant="outlined">
            <InputLabel
                ref={ref => {
                this.labelRef = ReactDOM.findDOMNode(ref);
                }}
                htmlFor="component-outlined"
            >
                City
            </InputLabel>
            <OutlinedInput
                id="component-outlined"
                value={this.state.name}
                onChange={this.handleChange}
                labelWidth={this.labelRef ? this.labelRef.offsetWidth : 0}
            />
            </FormControl>
        </div>
        <div className="bloc3">
            <h2 className="titre2">STATUS</h2>
            Married<Checkbox
            checked={this.state.checkedC}
            onClick={this.handleClick}
            />
            Single<Checkbox
            checked={this.state.checkedD}
            onClick={this.handleClick}
            color="primary"
            />
        </div>
        <div className="bloc4">
            <h2 className="titre2">SKIP</h2>
            <Radio
            checked={this.state.checkedE === false}
            onClick={this.handleClicke}
            value="E"
            name="radio-button-demo"
            aria-label="E"
            />
            <Radio
            // checked={this.state.checkedF === true}
            onClick={this.handleClicke}
            value="F"
            name="radio-button-demo"
            aria-label="F"
            />
            <Radio
            checked={this.state.checkedG === true}
            onClick={this.handleClicke}
            value="G"
            name="radio-button-demo"
            aria-label="G"
            classes={{
                root: classes.root,
                checked: classes.checked,
            }}
        />
        </div>
      </div>
    )
  }
}
  
export default withStyles(styles)(About);