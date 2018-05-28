import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import FileInputComponent from 'react-file-input-previews-base64';

import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Input, { InputLabel } from 'material-ui/Input';

import SelectFormField from './SelectFormField';
import { CategoryMenuItems } from './CategoryMenuItems';
import Validate from '../../utilities/validationUtilities';
import FormField from './FormField';
import { getPromotionById, createPromotion, updatePromotion, deletePromotion, updatePromotionState } from '../../actionCreators/promotionActionCreators';
import BackButton from '../components/Backbutton';
import ImageCroppingDialog from './ImageCroppingDialog';
import UnstyledNavLink from './UnstyledNavLink';

import WhiteLink from './WhiteLink';

const urlRegExp = /((https\:\/{2})(?:[-a-z0-9]+\.)+[-a-z0-9]+.{1})/i;


const styles = theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
});

class Promotion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disableFields: false,
      disableTimeFields: true,
      newPromotion: true,
      title: '',
      category: '',
      promoCode: '',
      description: '',
      startAt: ' ',
      expireAt: ' ',
      promoLink: '',
      timeStart: ' ',
      timeEnd: ' ',
      tod: '',
      color_black: true,
      customField: '',
      bgAllDayColor: '',
      bgAllDayTextColor: '',
      bgCustomColor: '',
      bgCustomTextColor: '',
      disabled: true,
      openCroppingDialog: false,
      image: {
        name: '',
        imageExtension: '',
        encoded_image: '',
      },
      defaultImage: '',
    };
  }

  componentWillMount = () => {
    if (this.props.match.params.id) {
      this.props.onGetPromotion(this.props.match.params.id);
      this.setStateFromProps(this.props);
      this.props.onDeletePromotion;
      this.props.createPromotion;
    }
  }


  componentWillReceiveProps(nextProps) {
    if (nextProps.title) {
      this.setStateFromProps(nextProps);
    }
  }

  getImageInformation = async (image) => {
    if (image.name) {
      await this.setState({
        image: {
          name: image.name.replace('.', '-'),
          image_extension: image.type.split('/').pop(),
          encoded_image: image.base64,
        },
      });
    } else {
      await this.setState({
        image: {
          name: this.state.image.name,
          image_extension: this.state.image.image_extension,
          encoded_image: image.base64,
        },
      });
    }
    this.props.onUpdatePromotionFields('image', this.state.image);
  };

  handleCropImage = async (croppedImage) => {
    if (croppedImage) {
      await this.setState({
        image: {
          encoded_image: croppedImage,
          name: this.state.image.name,
          image_extension: this.state.image.image_extension,
        },
        openCroppingDialog: false,
      });
    }
  }

  displayImage = () => {
    if (this.state.image.encoded_image) {
      return <img src={this.state.image.encoded_image} style={{ maxWidth: 350, minWidth: 100 }} />;
    } else if (this.props.defaultImage) {
      return <img src={this.props.defaultImage} style={{ maxWidth: 350, minWidth: 100 }} />;
    } else if (!this.state.image.encoded_image && !this.props.defaultImage) {
      return <img style={{ width: '168px' }} src="../../../images/cloud-upload.png" alt='CloudUpload' />;
    }
  }
  // pageRefresh = () => {
  //   window.location.reload();
  // }

  openAndCloseCroppingDialog = () => {
    this.setState({ openCroppingDialog: !this.state.openCroppingDialog });
  };

  setStateFromProps = (props) => {
    this.setState({
      title: props.title,
      category: props.category,
      promoCode: props.promoCode,
      description: props.description,
      startAt: this.setDateFields(props.startAt),
      expireAt: this.setDateFields(props.expireAt),
      promoLink: props.promoLink,
      newPromotion: props.newPromotion,
      disableFields: props.disabledFields,
      id: this.props.match.params.campaignId,
      timeStart: props.timeStart,
      timeEnd: props.timeEnd,
      customField: props.customField,

    });
  }


  validateForm = () => {
    const startDate = new Date(this.state.startAt);
    const endDate = new Date(this.state.expireAt);
    if (!this.timeMismatch()) { // I can just compare them
      return this.state.title.length >= 1
        && this.state.category.length >= 1
        && this.state.description.length >= 1
        && (this.state.promoLink.length >= 1
          && (this.state.promoLink).match(urlRegExp) !== null)
        && this.state.startAt !== ' '
        && this.state.expireAt !== ' '
        && this.state.timeStart !== ' '
        && this.state.timeEnd !== ' '
        && !!this.state.image;
    }
    console.log('mismatch');
  };

  timeMismatch = () => {
    // console.log('time validation')
    const startTime = `${this.state.startAt} ${this.state.timeStart}`; // Results in "2-5-2012 20:43"
    const endTime = `${this.state.expireAt} ${this.state.timeEnd}`;
    const startDate = Date.parse(startTime);
    const endDate = Date.parse(endTime) - 1;
    // console.log(startDate, endDate);
    if (endDate < startDate) {
      return true;
    } else if (endDate > startDate) {
      return false;
    }
  };

calendarMismatch = () => ((new Date(this.state.startAt)).getTime() >= (new Date(this.state.expireAt)).getTime() + 1)


handleChange = name => (event) => {
  this.setState({ [name]: event.target.value });
  if (this.state.tod === 'allDay') {
    this.setState({ timeStart: '00:00', timeEnd: '23:59' });
  }
};

// setAllDay = () => {
//   this.setState({ timeStart: '00:00', timeEnd: '23:59' });
// }


  handleOnlyNumberChange = name => (e) => {
    if (e.target.value === '' || Validate.isNumber(e.target.value)) {
      this.setState({ [name]: e.target.value });
    }
  };

  updatePromotion = () => {
    this.props.onUpdatePromotion(
      this.paramsForCreateAndUpdate(),
      this.props.match.params.id, this.state.image,
    ) ?
      this.enableAndDisableFields() : null;
  }

  createPromotion = () => {
    this.props.onCreatePromotion(this.paramsForCreateAndUpdate(), this.state.image);
  }

  paramsForCreateAndUpdate = () => {
    const params = {
      advertisement_id: this.props.match.params.campaignId,
      title: this.state.title,
      category: this.state.category,
      promo_code: this.state.promoCode,
      description: this.state.description,
      start_at: this.state.startAt,
      expire_at: this.state.expireAt,
      url: this.state.promoLink,
      time_start: this.state.timeStart,
      time_end: this.state.timeEnd,
    };

    return params;
  }
  setAllDay = () => {
    this.setState({
      timeStart: '00:00',
      timeEnd: '23:59',
      bgAllDayColor: 'blue',
      bgAllDayTextColor: 'white',
      bgCustomColor: '',
      bgCustomTextColor:'',
      customField: false 
});
  }
customFields = () => {
  this.enableAndDisableTimeFields();
  this.setState({ customField: true,
    bgAllDayColor: '',
    bgAllDayTextColor: '',
    bgCustomColor: 'blue',
    bgCustomTextColor: 'white'
  });
}
  timeFields = () => {
    // this.enableAndDisableTimeFields();
    // this.setState({ color_black: false });
    console.log('executing timefields', this.props.timeStart)
      return (
      <Grid container item xs={12} md={12} style={{ marginTop: '1px' }}>

    <Grid item xs={12} md={6}>
      <TextField
        fullWidth
        disabled={!(this.state.customField || this.props.timeStart !== '00:00:00')}
        id="time"
        label="Start Time"
        type="time"
        value={this.state.timeStart}
        onChange={this.handleChange('timeStart')}
                  />

    </Grid>
    <Grid item xs={12} md={6}>
        <TextField
                    fullWidth
                    disabled={!(this.state.customField || this.props.timeStart !== '00:00:00')}
                    id="time"
                    label="End Time"
                    type="time"
                    value={this.state.timeEnd}
                    onChange={this.handleChange('timeEnd')}
                  />
                </Grid>
                </Grid>
      );
  }

  enableAndDisableFields = () => {
    this.setState({
      disableFields: !this.state.disableFields,
    });
  }

  enableAndDisableTimeFields = () => {
    this.setState({
      disableTimeFields: !this.state.disableTimeFields,
    });
  }

  setDateFields = (date) => {
    let newDate = new Date(date);
    let dd = newDate.getUTCDate();
    let mm = newDate.getUTCMonth() + 1;

    const yyyy = newDate.getFullYear();
    if (dd < 10) {
      dd = `0${dd}`;
    }
    if (mm < 10) {
      mm = `0${mm}`;
    }
    newDate = `${yyyy}-${mm}-${dd}`;
    return newDate;
  }

  displayButtons = () => {
    if (this.state.newPromotion) {
      return (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
          <Button raised color="primary"
            style={{ marginTop: 5, marginLeft: 10, width: '100%' }}
            onClick={this.createPromotion}
            disabled={!this.validateForm()}
          >
            Create
          </Button>
        </div>
      );
    }
    return (
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
        <Button raised color="default"
          style={{ marginTop: 5, width: '50%' }}
          onClick={this.enableAndDisableFields}>
          Edit
        </Button>
        <Button raised color="primary"
          style={{ marginTop: 5, marginLeft: 10, width: '50%' }}
          onClick={this.updatePromotion}>
          Update
        </Button>
      </div>
    );
  }

render() {
    // const bgColor = this.state.color_black ? '#61C3EE' : 'white';
    const { classes } = this.props;

    const id = this.props.match.params.campaignId;
    return (
      <Grid container style={{ marginTop: 100, marginBottom: 100 }} >
        <Grid item xs={12} md={1} />
        <Grid item xs={6} md={10}>
          <Typography type="display1" style={{ marginBottom: 20 }}>
            {this.props.newPromotion ?
              'New Promotion'
              :
              this.props.title
            }
          </Typography>
        </Grid>

        <Grid item md={1} />

        <Grid item md={1} />

        <Grid item xs={12} md={10}>

          <Paper style={{ width: '100%' }} >
            <Grid container style={{ paddingBottom: 30 }} >
              <Grid container justify="center" alignItems="center" style={{ textAlign: 'center' }} >
                <Typography type="body6" style={{ marginBottom: 40, marginTop: 20 }}>
                  {this.props.newPromotion ?
                    'Fill in your Promotion details below!'
                    :
                    'Click edit button below to edit your information!'
                  }
                </Typography>
              </Grid>

              <Grid item xs={1} md={1} />
              <Grid item xs={11} md={4}>

                <FormField
                  disabled={this.state.disableFields}
                  xs={12}
                  required
                  id='promotion-name'
                  multiline='true'
                  label="Notification Subject Line"
                  inputProps={{ maxLength: 60 }}
                  value={this.state.title}
                  defaultValue={this.state.title.length}
                  onChange={this.handleChange('title')} />

                <div style={{ float: 'right' }}>({this.state.title.length} / 60 chars)</div>


                <FormField
                  disabled={this.state.disableFields}
                  required
                  xs={12}
                  multiline='true'
                  id='promotion-description'
                  label='Notification Text'
                  inputProps={{ maxLength: 120 }}
                  value={this.state.description}
                  onChange={this.handleChange('description')} />

                <div style={{ float: 'right' }}>({(this.state.description.length)} / 120 chars)</div>

                <SelectFormField
                  disabled={this.state.disableFields}
                  xs={12}
                  required
                  id='promotion-category'
                  label='Category'
                  value={this.state.category}
                  onChange={this.handleChange('category')}
                  menuList={CategoryMenuItems()} />

                <FormField
                  disabled={this.state.disableFields}
                  required
                  xs={12}
                  id='promotion-code'
                  label='QR Code'
                  helpText="This is the code that will generate a QR code on the mobile app!"
                  value={this.state.promoCode}
                  onChange={this.handleChange('promoCode')} />

                <FormField
                  disabled={this.state.disableFields}
                  xs={12}
                  id='promotion-link-url'
                  label='Link URL {https://}'
                  placeholder='Reqiured'
                  errorText="This field is required"
                  value={this.state.promoLink}
                  onChange={this.handleChange('promoLink')} />
              </Grid>

              {/* <Grid item xs={1} /> */}

              <Grid item xs={1} />

              <Grid container item xs={10} md={5} style={{ marginTop: '1px' }}>
              <br />
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    disabled={this.state.disableFields}
                    id="date"
                    label="Start Date (DD/MM/YY)"
                    type="date"
                    value={this.state.startAt}
                    onChange={this.handleChange('startAt')}
                  />
                </Grid>

                  <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    disabled={this.state.disableFields}
                    id="date"
                    label="End Date (DD/MM/YY)"
                    type="date"
                    value={this.state.expireAt}
                    onChange={this.handleChange('expireAt')}
                  />
                </Grid>

                
                <Grid style={{ display: 'inline' }} item xs={12} md={12}>
                <div style={{ color: '#808080' }}>
                When during the day should this promotion be received? <br/> The default is set run all day (12:00AM to 11:59PM) <br />
                </div>
                <Button id='allDay'
                style={{
                  backgroundColor: this.state.bgAllDayColor,
                  color: this.state.bgAllDayTextColor,
                }}
                  disabled={this.state.disableFields}
                  onClick={ this.setAllDay }> All Day </Button>
                <Button id='custom'
                  style={{
                    backgroundColor: this.state.bgCustomColor,
                    color: this.state.bgCustomTextColor }}
                    disabled={this.state.disableFields}
                    onClick={ this.customFields }>Select Time</Button>


                </Grid>
                <div style={{'visibility' : !(this.state.customField || this.props.timeStart !== '00:00:00') ? 'hidden' : 'visible'}} >
                   {this.timeFields() }
                </div>


                <Grid item xs={12} md={12} style={{
                  visibility: (this.timeMismatch()) ? 'visible' : 'hidden',
                  marginTop: 10,
                  color: 'red',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  textAlign: 'justify',
                  }}>
                  The End Time must be greater than Start Time
                </Grid>
                <ImageCroppingDialog
                  open={this.state.openCroppingDialog}
                  handler={this.openAndCloseCroppingDialog}
                  cropImage={this.handleCropImage}
                  image={this.state.image.encoded_image}
                  aspectRatioWidth={5}
                  aspectRatioHeight={3}
                />

                <Grid item md={1} />
                <Grid item xs={12} md={12} style={{ textAlign: 'center', marginTop: '2%' }} >
                  {this.displayImage()}
                  <FileInputComponent
                    imagePreview={false}
                    labelText=''
                    labelStyle={{ fontSize: 14 }}
                    buttonComponent={
                      <Button color="primary"
                        disabled={this.state.disableFields}
                        raised
                        dense
                        style={{ marginTop: 0, width: '100%' }}
                      >
                        Upload Image
                    </Button>}
                    callbackFunction={(fileArray) => {
                      this.getImageInformation(fileArray[0]);
                      this.setState({
                        openCroppingDialog: true,
                      });
                    }}
                    accept="image/*"
                  />
                  <Typography type="subheading" style={{ margin: 10, textAlign: 'left', color: '#808080' }} >

                    <Icon className="material-icons" style={{
                      marginRight: 7.5, textAlign: 'center', fontSize: 18, color: '#be0000',
                      }}>announcement</Icon>
                      Don't see the updated image? click  <Button color="primary" dense onClick={this.pageRefresh} style={{ width: '10%' }}> Refresh</Button>.
                     <br />
                    <Icon className="material-icons" style={{
                       marginRight: 7.5, textAlign: 'left', fontSize: 18, color: '#be0000',
                      }}>announcement</Icon>
                    Note:  <br />
                    - Image size is limited to 2Mb max. <br />
                    - The image ratio is 5:3.<br />
                    - Click the button above to upload an image for your promotion!
                    This is the image your customers will see.
                      Check out our <a href="http://api.boardactive.com/our_services/image_dimensions/">documentation</a> for help if needed.
                    </Typography>

                </Grid>
                <Grid item md={1} />

                <Grid container style={{ paddingBottom: 10 }} display='flex' spacing={0}>

                  <Grid item xs={12} md={12} style={{ marginTop: 30 }}>
                    {this.displayButtons()}
                  </Grid>

                  <Grid item xs={12} md={12} style={{
                    visibility: (!this.validateForm()) ? 'visible' : 'hidden',
                    marginTop: 10,
                    color: 'red',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    }}>
                    All fields including the image must be filled in.
                </Grid>
                </Grid>

                <Grid item xs={1} md={1} />
              </Grid>

            </Grid>
          </Paper>
          <div style={{
            marginTop: '20px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            }}>
            <Button onClick={() => { this.props.history.go(-2); }}
              className="a"
              raised color="primary"
              style={{
                visibility: (this.state.newPromotion) ? 'hidden' : 'visible',
                marginTop: 5,
                marginLeft: 10,
                width: '27%',
                }}>
                Back To Promotions</Button>
          </div>
        </Grid>
      </Grid>
    );
  }
}

Promotion.propTypes = {
  onGetPromotion: PropTypes.func,
  onCreatePromotion: PropTypes.func,
  onUpdatePromotion: PropTypes.func,
  match: PropTypes.object,
  params: PropTypes.object,
  id: PropTypes.number,
  title: PropTypes.string,
  category: PropTypes.string,
  promoCode: PropTypes.string,
  description: PropTypes.string,
  startAt: PropTypes.number,
  expireAt: PropTypes.number,
  linkType: PropTypes.string,
  linkURL: PropTypes.string,
  promoLink: PropTypes.string,
  timeStart: PropTypes.number,
  timeEnd: PropTypes.number,
  getImageInformation: PropTypes.func,
  onUpdatePromotionFields: PropTypes.func,
  bgAllDayColor: PropTypes.string,
  bgAllDayTextColor: PropTypes.string,
  bgCustomColor: PropTypes.string,
  bgCustomTextColor: PropTypes.string,
};

const mapStateToProps = state => ({
  title: state.promotion.title,
  category: state.promotion.category,
  promoCode: state.promotion.promoCode,
  description: state.promotion.description,
  startAt: state.promotion.startAt,
  expireAt: state.promotion.expireAt,
  promoLink: state.promotion.promoLink,
  newPromotion: state.promotion.newPromotion,
  disabledFields: state.promotion.disabledFields,
  timeStart: state.promotion.timeStart,
  timeEnd: state.promotion.timeEnd,
  image: state.promotion.image,
  defaultImage: state.promotion.defaultImage,
  customField: state.promotion.customField,
  bgAllDayColor: state.promotion.bgColor,
  bgAllDayTextColor: state.promotion.bgAllDayTextColor,
  bgCustomColor: state.promotion.bgCustomColor,
  bgCustomrTextColor: state.promotion.bgCustomTextColor,
});

const mapDispatchToProps = dispatch => ({
  onGetPromotion: id => dispatch(getPromotionById(id)),
  onCreatePromotion: (params, image) => dispatch(createPromotion(params, image)),
  onUpdatePromotion: (params, id, image) => dispatch(updatePromotion(params, id, image)),
  onUpdatePromotionFields: (name, value) => dispatch(updatePromotionState(name, value)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Promotion);
