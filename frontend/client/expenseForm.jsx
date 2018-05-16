import React from 'react';
import TextField from 'material-ui/TextField';
import { withStyles, MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import Radio from 'material-ui/Radio';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import {HashRouter, Route, Link} from 'react-router-dom';
import Select from 'material-ui/Select';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Button from 'material-ui/Button';
import request from 'superagent';

const styles={
    appbar:{
        backgroundColor: "#d6710c",
        marginTop: "0px",
        height: "60px"
   }
}
class expenseForm extends React.Component{
  constructor(props)
  {
    super(props);
    this.state={
        date:'',
        amount:'',
        selectedValue: '',
        spentTowards:'',
        spentBy:'',
        spentFor:'',
        modeOfCash:'',
        description:'',

    }
    this.handleDate=this.handleDate.bind(this);
    this.handlechangeRadioButton=this.handlechangeRadioButton.bind(this);
    this.handleAmount=this.handleAmount.bind(this);
    this.handleChangeSpentBy=this.handleChangeSpentBy.bind(this);
    this.handleChangeSpentFor=this.handleChangeSpentFor.bind(this);
    this.handleChangeSpentTowards=this.handleChangeSpentTowards.bind(this);
    this.handlechangeModeofCash=this.handlechangeModeofCash.bind(this);
    this.handleDescription=this.handleDescription.bind(this);
    this.handleSave=this.handleSave.bind(this);
  }
  handlechangeRadioButton(event){
    this.setState({ selectedValue: event.target.value });
  }
  handleDate(event){
    this.setState({
      date:event.target.value
    })

  }
  handleAmount(event){
    this.setState({
      amount:event.target.value
    })
    console.log(this.state.amount);

  }
  handleChangeSpentTowards(event){

    this.setState({
      spentTowards: event.target.value

    })
    console.log(this.state.spentTowards)

   };
   handleChangeSpentBy(event){
     this.setState({
       spentBy:event.target.value
     })
   }
   handleChangeSpentFor(event){
     this.setState({
       spentFor:event.target.value
     })
   }
   handlechangeModeofCash(event){
     this.setState({
       modeOfCash:event.target.value
     })
   }
   handleDescription(event){
     this.setState({
       description:event.target.value
     })
   }

  handleSave(){
 request.post('/addExpense').query({date: this.state.date, amount: this.state.amount,spentTowards: this.state.spentTowards,bill_voucher:this.state.selectedValue,spentBy: this.state.spentBy,
 spentFor:this.state.spentFor,modeOfCash:this.state.modeOfCash,description:this.state.description
  }).end((err, res) => {
           if(err)
           {
             console.log(err);
           }
         });
}

  render()
  {
    console.log(this.state.date)

    return(

      <div>
         <AppBar position="static" style={styles.appbar}>
          <Toolbar>
             <Typography variant="title" color="inherit" >
               Helping Hearts
             </Typography>
          </Toolbar>
         </AppBar>
         <center>
      <Paper style={{marginTop:"5px",width:"100%",height:"500px"}}>
          <form>
           <TextField id="date"
             label="Date"
             type="date"
             defaultValue=""
             onChange={this.handleDate}
              fullwidth="true" style={{width:"80%",margiBottom:"5px",marginTop:"5px"}}>
            </TextField>
          </form>
            <br/>
              <TextField  hinttext="Amount Spent" id="number" type="number" floatinglabeltext="Amount Spent"
                label="Amount Spent" fullwidth="true" style={{width:"80%",marginBottom:"5px"}}
                onChange={this.handleAmount}
                value={this.state.amount}>
              </TextField>
              <br/>
          <Typography style={{textAlign:"left",marginLeft:"140px",marginBottom:"15px"}}>
             Bill Or Voucher
             <Radio
             checked={this.state.selectedValue === 'bill'}
             onChange={this.handlechangeRadioButton}
             value="bill"
             name="radio-button-demo"
             aria-label="A"
           />
           <Radio
             checked={this.state.selectedValue === 'voucher'}
             onChange={this.handlechangeRadioButton}
             value="voucher"
             name="radio-button-demo"
             aria-label="A"
           />
       </Typography>

               <InputLabel>Spent Towards</InputLabel>

                <Select value={this.state.spentTowards}
                 onChange={this.handleChangeSpentTowards}
                 style={{width:"72%"}}
                >
                <MenuItem value="Oldage Home, cbe">Oldage Home, cbe</MenuItem>
                <MenuItem value="Hospice,cbe">Hospice,cbe</MenuItem>
                <MenuItem value="Oldage Home,pollachi">Oldage Home,pollachi</MenuItem>
                <MenuItem value="Dairy Farm,pollachi">Dairy Farm,pollachi</MenuItem>
                <MenuItem value="Garden,cbe">Garden,cbe</MenuItem>
                <MenuItem value="Pre-Owned Garments,cbe">Pre-Owned Garments,cbe</MenuItem>
                <MenuItem value="admin">Admin</MenuItem>

                </Select>
                <br/>
                <br/>
                <InputLabel>Spent By</InputLabel>

                 <Select value={this.state.spentBy}
                  onChange={this.handleChangeSpentBy}
                  style={{width:"75%",margiBottom:'10px'}}
                 >
                 <MenuItem value="Sakthivel">Sakthivel</MenuItem>
                 <MenuItem value="Surendran">Surendran</MenuItem>
                 <MenuItem value="Sai Prasath">Sai Prasath</MenuItem>
                 <MenuItem value="Sathish kumar">Sathish kumar</MenuItem>
                </Select>
                <br/>
                <br/>
                <InputLabel>Spent For</InputLabel>

                 <Select value={this.state.spentFor}
                  onChange={this.handleChangeSpentFor}
                  style={{width:"75%",margiBottom:'10px'}}
                 >
                 <MenuItem value="Maintenance">Maintenance</MenuItem>
                 <MenuItem value="Logistics">Logistics</MenuItem>
                 <MenuItem value="Catering">Catering</MenuItem>
                 <MenuItem value="Medical">Medical</MenuItem>
                  <MenuItem value="Others">Others</MenuItem>
                   <MenuItem value="Stationeries">Stationeries</MenuItem>
                </Select>

                <Typography style={{textAlign:"left",marginLeft:"130px",marginBottom:"5px"}}>
                   Cheque Or NEFT or Cash
                   <Radio
                   checked={this.state.modeOfCash === 'Cheque'}
                   onChange={this.handlechangeModeofCash}
                   value="Cheque"
                   name="radio-button-demo"
                   aria-label="A"
                 />
                 <Radio
                   checked={this.state.modeOfCash === 'NEFT'}
                   onChange={this.handlechangeModeofCash}
                   value="NEFT"
                   name="radio-button-demo"
                   aria-label="A"
                 />
                 <Radio
                   checked={this.state.modeOfCash === 'Cash'}
                   onChange={this.handlechangeModeofCash}
                   value="Cash"
                   name="radio-button-demo"
                   aria-label="A"
                 />
             </Typography>

             <TextField hinttext="Description" floatinglabeltext="Decsription" multiline={true} rows={2} label="Description"
                style={{
                marginBottom: "15px", marginLeft:"70px",width:"85%"
              }}
              onChange={this.handleDescription}
            />
            <Button onClick={this.handleSave}
             style={{marginLeft:"800px",margiBottom:"10px"}} color="primary">
              Save
            </Button>

 </Paper>

</center>



</div>


    );
  }
}
export default expenseForm;
