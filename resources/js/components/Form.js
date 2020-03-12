import React from 'react';
import { Button, TextField, Typography, Paper, Grid, withStyles } from '@material-ui/core';
import { MuiPickersUtilsProvider, InlineDatePicker } from "material-ui-pickers";
import DateFnsUtils from "@date-io/date-fns";
import { Autocomplete } from '@material-ui/lab';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { json_url } from '../common_theme';
import { withRouter } from 'react-router';

const styles = {
  submit_disabled: {
    pointerEvents: 'none !important',
    color: 'rgba(0, 0, 0, 0.26) !important',
    boxShadow: 'none !important',
    backgroundColor: 'rgba(0, 0, 0, 0.12) !important',
    'span': {
      color: 'rgba(0, 0, 0, 0.26) !important',
    }
  }
};

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: '',
      concerts: [],
      todohukens: [],
      kaijos: [],
      inputs: [],
      selectedDates: [],
      isinputted: false,
      json: ''
    };
  }

  input_artist = e => {
    this.setState({ artist: e.target.value }, () => {
      // 全ての情報が記入されていたらsubmitを許す
      if(this.state.artist !== '' &&
         this.state.inputs.length !== 0 &&
         this.state.concerts.indexOf('') === -1 &&
         this.state.todohukens.indexOf('') === -1 &&
         this.state.kaijos.indexOf('') === -1){
           this.setState({ isinputted: true});
      }
      else{
        this.setState({ isinputted: false});
      }
    });
  };

  // dateがpickされたときに実行される関数
  handleDateChange = (date, index) => {
    // stateの配列を更新するためコピー先の配列全体を変更する
    const selectedDates_copy = this.state.selectedDates.slice();
    selectedDates_copy[index] = date;
    this.setState({ selectedDates: selectedDates_copy });
  };

  handleChange_concert = (e, index) => {
    // stateの配列を更新するためコピー先の配列全体を変更する
    const concerts_copy = this.state.concerts.slice();
    concerts_copy[index] = e.target.value;

    // this.setStateの即時反映には，コールバックを使う
    this.setState({ concerts: concerts_copy }, () => {
      // 全ての情報が記入されていたらsubmitを許す
      if(this.state.artist !== '' &&
         this.state.concerts.indexOf('') === -1 &&
         this.state.todohukens.indexOf('') === -1 &&
         this.state.kaijos.indexOf('') === -1){
           this.setState({ isinputted: true});
      }
      else{
        this.setState({ isinputted: false});
      }
    });
  }

  handleChange_todohuken = (e, index) => {
    const str = e.target.innerHTML[0] === '<' ? '' : e.target.innerHTML;

    // stateの配列を更新するためコピー先の配列全体を変更する
    const todohukens_copy = this.state.todohukens.slice();
    todohukens_copy[index] = str;
    this.setState({ todohukens: todohukens_copy }, () => {
      // 全ての情報が記入されていたらsubmitを許す
      if(this.state.artist !== '' &&
         this.state.concerts.indexOf('') === -1 &&
         this.state.todohukens.indexOf('') === -1 &&
         this.state.kaijos.indexOf('') === -1){
           this.setState({ isinputted: true});
      }
      else{
        this.setState({ isinputted: false});
      }
    });

  }

  handleChange_kaijo = (e, index) => {
    // stateの配列を更新するためコピー先の配列全体を変更する
    const kaijos_copy = this.state.kaijos.slice();
    kaijos_copy[index] = e.target.value;
    this.setState({ kaijos: kaijos_copy }, () => {
      // 全ての情報が記入されていたらsubmitを許す
      if(this.state.artist !== '' &&
         this.state.concerts.indexOf('') === -1 &&
         this.state.todohukens.indexOf('') === -1 &&
         this.state.kaijos.indexOf('') === -1){
           this.setState({ isinputted: true});
      }
      else{
        this.setState({ isinputted: false});
      }
    });

  }

  // 「ライブ情報を追加する」ボタンが押された時に実行される関数
  append_details = () => {
    const artist_isinputted = this.state.artist;
    const newInput = this.state.inputs.length;
    // アーティスト名が入力されているか
    if (artist_isinputted){
      if (newInput === 0){
        this.setState(prevState => ({
          inputs: prevState.inputs.concat([newInput]),
          concerts: prevState.concerts.concat(['']),
          todohukens: prevState.todohukens.concat(['']),
          kaijos: prevState.kaijos.concat(['']),
          selectedDates: prevState.selectedDates.concat([new Date()]),
          isinputted: false
        }));
      }
      else{
        // 全ての情報が記入されていたらライブ情報追加を許す
        if(this.state.artist !== '' &&
           this.state.concerts.indexOf('') === -1 &&
           this.state.todohukens.indexOf('') === -1 &&
           this.state.kaijos.indexOf('') === -1){
          this.setState(prevState => ({
            inputs: prevState.inputs.concat([newInput]),
            concerts: prevState.concerts.concat(['']),
            todohukens: prevState.todohukens.concat(['']),
            kaijos: prevState.kaijos.concat(['']),
            selectedDates: prevState.selectedDates.concat([new Date()]),
            isinputted: false
          }));
        }
        else{
          // requiredを誘発するためsubmit()ではなくclick()
          document.getElementById('dummysubmit').click();
        }
      }
    }
    else{
      // requiredを誘発するためsubmit()ではなくclick()
      document.getElementById('dummysubmit').click();
    }
  };

  delete_details = index => {
    this.state.inputs.splice(index, 1);
    this.state.concerts.splice(index, 1);
    this.state.todohukens.splice(index, 1);
    this.state.kaijos.splice(index, 1);
    this.state.selectedDates.splice(index, 1);
    this.setState(prevState => ({
      inputs: prevState.inputs,
      concerts: prevState.concerts,
      todohukens: prevState.todohukens,
      kaijos: prevState.kaijos,
      selectedDates: prevState.selectedDates
    }), () => {
      // 全ての情報が記入されていてかつ，ライブ情報入力欄が1つ以上ある場合submitを許す
      if((this.state.artist !== '' &&
         this.state.concerts.indexOf('') === -1 &&
         this.state.todohukens.indexOf('') === -1 &&
         this.state.kaijos.indexOf('') === -1) && index !== 0){
           this.setState({ isinputted: true});
      }
      else{
        this.setState({ isinputted: false});
      }
    });
  };

  addDetails = e => {
    if(!this.state.isinputted){
      e.preventDefault();
      return false;
    }
    fetch( json_url , {
      method: 'POST',
      body: JSON.stringify({
        artist: this.state.artist,
        dates: this.state.selectedDates,
        concerts: this.state.concerts,
        todohukens: this.state.todohukens,
        kaijos: this.state.kaijos
      }),
      headers: new Headers({ 'Content-type' : 'application/json' })
    });

    this.props.history.push('/registered');
  };


  render() {
    const { classes } = this.props;

    const artist_input = (
      <TextField
        label="アーティスト名"
        id="aritirs_input standard-basic"
        value={this.state.artist}
        onChange={this.input_artist}
        required
        fullWidth
      />
    );

    const addButton = (
      <Button
        variant="contained"
        color="secondary"
        onClick={this.append_details}
        fullWidth>
        ライブ情報を追加する
      </Button>
    );

    const regButton = (
      <Button
        id="submit"
        variant="contained"
        color="primary"
        className={this.state.isinputted ? "" : classes.submit_disabled}
        onClick={this.addDetails}
        type="submit"
        fullWidth>
        登録する
      </Button>
    );

    return (
        <div id="form">
          <form>
            {artist_input}
            <br />
            {/* ライブ情報を追加する」ボタンが押された時に順次追加*/}
            {this.state.inputs.map((v, i) =>
              <div key={i}>
                <br />
                <Paper style={{backgroundColor: "#e3f2fd"}}>
                  <div style={{width:'95%', margin:'0 auto'}}>
                    <Grid container justify="center">
                      <Grid item xs={11}>
                        <Typography
                          variant="h6"
                          color="secondary"
                          gutterBottom>
                          ライブ情報{i+1}
                        </Typography>
                      </Grid>
                      <Grid item xs={1}>
                        <DeleteForeverIcon onClick={() => this.delete_details(i)}/>
                      </Grid>
                    </Grid>
                    <br />

                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <InlineDatePicker
                        label="ライブ日程"
                        format="yyyy/MM/dd"
                        onChange={date => this.handleDateChange(date, i)}
                        value={this.state.selectedDates[i]}
                        fullWidth
                      />
                    </MuiPickersUtilsProvider>
                    <br />

                    <TextField
                      label="ライブ名"
                      id={`index${i} standard-basic`}
                      onChange={e => this.handleChange_concert(e, i)}
                      value={this.state.concerts[i]}
                      required
                      fullWidth
                    />
                    <br />

                    <Autocomplete
                      id={`index${i} combo-box-demo`}
                      options={options}
                      getOptionLabel={option => option.label}
                      onChange={e => this.handleChange_todohuken(e, i)}
                      renderInput={params => (
                        <TextField {...params}
                          label="都道府県"
                          id="standard-basic"
                          required
                          fullWidth
                        />
                      )}
                    />

                    <TextField
                      label="会場名"
                      id={`index${i} standard-basic`}
                      onChange={e => this.handleChange_kaijo(e, i)}
                      value={this.state.kaijos[i]}
                      required
                      fullWidth
                    />
                    <br />
                    <br />
                  </div>
                </Paper>
              </div>
            )}
            <br />
            {addButton}
            <br />
            <br />
            {regButton}
            <Button id="dummysubmit" type="submit" style={{display: "none"}}>dummy</Button>
          </form>
        </div>
    );
  }
}

const options = [
  { value:  "hokkaidou ほっかいどう",  label: "北海道" },
	{ value:  "aomori あおもり",  label: "青森県" },
	{ value:  "iwate いわて",  label: "岩手県" },
	{ value:  "miyagi みやぎ",  label: "宮城県" },
	{ value:  "akita あきた",  label: "秋田県" },
	{ value:  "yamagata やまがた",  label: "山形県" },
	{ value:  "hukusima ふくしま",  label: "福島県" },
	{ value:  "ibaraki いばらき",  label: "茨城県" },
	{ value:  "totigi とちぎ",  label: "栃木県" },
	{ value:  "gunnma ぐんま",  label: "群馬県" },
	{ value:  "saitama さいたま",  label: "埼玉県" },
	{ value:  "tiba ちば",  label: "千葉県" },
	{ value:  "toukyou とうきょう",  label: "東京都" },
	{ value:  "kanagawa かながわ",  label: "神奈川県" },
	{ value:  "niigata にいがた",  label: "新潟県" },
	{ value:  "toyama とやま",  label: "富山県" },
	{ value:  "isikawa いしかわ",  label: "石川県" },
	{ value:  "1hukui ふくい",  label: "福井県" },
	{ value:  "yamanasi やまなし",  label: "山梨県" },
	{ value:  "nagano ながの",  label: "長野県" },
	{ value:  "gihu ぎふ",  label: "岐阜県" },
	{ value:  "sizuoka しずおか",  label: "静岡県" },
	{ value:  "aiti あいち",  label: "愛知県" },
	{ value:  "mie みえ",  label: "三重県" },
	{ value:  "siga しが",  label: "滋賀県" },
	{ value:  "kyouto きょうと",  label: "京都府" },
	{ value:  "oosaka おおさか",  label: "大阪府" },
	{ value:  "hyougo ひょうご",  label: "兵庫県" },
	{ value:  "nara なら",  label: "奈良県" },
	{ value:  "wakayama わかやま",  label: "和歌山県" },
	{ value:  "tottori とっとり",  label: "鳥取県" },
	{ value:  "simane しまね",  label: "島根県" },
	{ value:  "okayama おかやま",  label: "岡山県" },
	{ value:  "hirosima ひろしま",  label: "広島県" },
	{ value:  "yamaguti やまぐち",  label: "山口県" },
	{ value:  "tokusima とくしま",  label: "徳島県" },
	{ value:  "kagawa かがわ",  label: "香川県" },
	{ value:  "ehime えひめ",  label: "愛媛県" },
	{ value:  "kouti こうち",  label: "高知県" },
	{ value:  "hukuoka ふくおか",  label: "福岡県" },
	{ value:  "saga さが",  label: "佐賀県" },
	{ value:  "nagasaki ながさき",  label: "長崎県" },
	{ value:  "kumamoto くまもと",  label: "熊本県" },
	{ value:  "ooita おおいた",  label: "大分県" },
	{ value:  "miyazaki みやざき",  label: "宮崎県" },
	{ value:  "kagosima かごしま",  label: "鹿児島県" },
	{ value:  "okinawa おきなわ",  label: "沖縄県" }
]

export default withStyles(styles)(withRouter(Form));
