import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Icon from 'material-ui/Icon';
import Typography from 'material-ui/Typography';
// import Divider from 'material-ui/Divider';
import { MenuItem } from 'material-ui/Menu';
// import { CircularProgress } from 'material-ui/Progress';
import SnackBar from '../components/SnackBar';
import PromotionsTableAndHeader from '../components/PromotionsTableAndHeader';
import LocationsTableAndHeader from '../components/LocationsTableAndHeader';
import CampaignDetails from '../components/CampaignDetails';
import CampaignLocation from '../components/CampaignLocation';
import UnstyledNavLink from '../components/UnstyledNavLink';
import { getLocations, getCampaignLocations } from '../../actionCreators/locationActionCreators';
import { getCampaignById, updateCampaignState, updateCampaign } from '../../actionCreators/campaignsActionCreators';
import { getAllLicensesPacks, activateLicensePack } from '../../actionCreators/licensePacksActionCreators';
import CampaignDetailsAddLicenseToCamapign from '../components/CampaignDetailsAddLicenseToCamapign';
import Format from '../../utilities/format';
import { getLocalStorageValue } from '../../constants/localStorage';
import BackButton from '../components/Backbutton';
import { getPromotions, deletePromotion } from '../../actionCreators/promotionActionCreators';//to get promotions if available
// import LicenseInfoBox from '../components/LicenseInfoBox'


const userType = getLocalStorageValue('user_type');
const allFieldFilledOut = 'All fields must be filled out';
const noAdvertiser = 'Advertiser must be tied to Ad Campaign';


const styles = {
  container: {
    marginTop: 120,

    marginLeft: 0,
    marginRight: 0,
    width: '100%',
  },
  button: {
    height: 40,
  },
  appBar: {
    marginTop: 20,
    backgroundColor: '#fff',
    color: '#ff0'
  },
  indicator: {
    height: 100,
  }
};

class CampaignDetailsContainer extends React.Component {
  state = {
    updateFormErrorMessage: '',
    statusChangeSnackBar: false,
    succeedEditSnackBar: false,
    applyLicenseSnackbar: false,
    licenseDialogOpen: false,
    license: [],
    licenseMenu: [],
    disableLicense: true,
    disableFields: true,
    advertiserId: '',
    name: '',
    category: '',
    medium: '',
    mediumId: '',
    mediumName: '',
    newMedium: '',
    privateNotes: '',
    description: '',
    addressOne: '',
    addressTwo: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    image: {
      name: '',
      image_extension: '',
      encoded_image: '',
    },
    defaultImage: '',
    value: 'Details',
    promoCount: '',
    promotionList: []
  };

  componentWillMount = () => {
    this.props.onGetCampaign(this.props.match.params.id);
    this.props.getLicensesList();
    this.props.onGetPromotionList(this.props.match.params.id, this.state.promoCount, 0);
    this.props.onGetCampaignLocationList(this.props.match.params.id, 1, 0);
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('nextProps', nextProps)
    this.setState({
      advertiserId: nextProps.campaign.advertiserId,
      license: nextProps.campaign.license,
      medium: nextProps.campaign.medium,

    });

    if (nextProps.promotionList.promotions){
      this.setState({
        promoCount: nextProps.promotionList.promotions.count
      })
    }

    if (nextProps.campaign.medium[0]) {
      this.setState({
        mediumId: nextProps.campaign.medium[0].id,
        mediumName: nextProps.campaign.medium[0].name,
        innerRadius: nextProps.campaign.medium[0].inner_radius,
        outerRadius: nextProps.campaign.medium[0].outer_radius,
        defaultZoom: nextProps.campaign.medium[0].default_zoom,
      });
    }
    if (nextProps.license.length) {
      this.getStatusButton(nextProps.license);
    }
    if (this.props.isLoadingPacks && !nextProps.isLoadingPacks && nextProps.licensePack) {
      this.setState({ licensePackId: nextProps.licensePack.licensePackList });
      this.createLicensePackList(nextProps.licensePack.licensePackList);
    }
  }

  handleFieldChange = name => (event) => {
    this.setState({ [name]: event.target.value });
  };
  enableAndDisableFields = () => {
    this.setState({ disableFields: !this.state.disableFields });
  };
  handleLicenseDialog = () => {
    this.setState({ licenseDialogOpen: !this.state.licenseDialogOpen });
  };
  handleEditSucceedSnackBar = () => {
    this.setState({ succeedEditSnackBar: !this.state.succeedEditSnackBar });
  };
  handleStatusChangeSnackBar = () => {
    this.setState({ statusChangeSnackBar: !this.state.statusChangeSnackBar });
  }
  handleApplyLicenseSnackBar = () => {
    this.setState({ applyLicenseSnackbar: !this.state.applyLicenseSnackbar });
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };
  handleChangeIndex = (index) => {
    this.setState({ value: index });
  };
  handleMenuChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    this.props.onUpdateCampaignFields([event.target.name], event.target.value);
  };

    deletePromotion = (id) => {
      var idxRemove = undefined;
      // console.log(id);
      // console.log('this.props', this.props);
      // console.log('this.state', this.state);
      const promoPromise = new Promise((resolve, reject) => {
        if (this.props.promotionList.promotionList){
            this.props.promotionList.promotionList.forEach((item,index)=>{
              if (item.id === id) {
                idxRemove = index;
              }
            });
          resolve(idxRemove);
        }else{
          reject('something is wrong')
        }
      })

      promoPromise.then((result) => {
        console.log(result)
        return this.props.promotionList.promotionList.splice(idxRemove, 1);
      }).then((result) => {
        this.props.onDeletePromotion(id);
        this.setState({
          promotionList: this.props.promotionList.promotionList
        })
      })
    }


  updateCampaign = () => {
    if (this.ifFormValidate()) {
      this.props.onUpdateCampaign(this.props.campaign, this.props.match.params.id, this.state.image)
        .then(() => {
          this.enableAndDisableFields();
          this.handleEditSucceedSnackBar();
          if (this.props.campaign.newMedium.id) {
            this.setState({ medium: this.props.newMedium.name });
            this.props.onUpdateCampaignFields('medium', [this.props.campaign.newMedium]);
            this.props.onUpdateCampaignFields('mediumName', Format.capitalizeFirstLetter(this.props.campaign.newMedium.name.split('_').join(' ')));
            this.props.onUpdateCampaignFields('newMedium', []);
          }
          window.location = document.URL;
        });
    }
  }

  ifFormValidate = () => (
    !this.validateAndHandleError()
  )

  validateAndHandleError = () => {
    let errorMessage;
    if (userType === 'ad_seller' && this.props.advertiserId === '') {
      errorMessage = noAdvertiser;
    }
    if (
      this.props.name === '' ||
      this.props.category === '' ||
      this.props.description === '' ||
      this.props.addressOne === '' ||
      this.props.city === '' ||
      // this.props.state === '' ||
      // this.props.zipCode === ''||
      this.props.country === ''
    ) {
      errorMessage = allFieldFilledOut;
    }
    this.setState({ updateFormErrorMessage: errorMessage });
    return errorMessage;
  }

  getOppositeStatus = (status) => {
    let oppositeStatus = 'Activate';
    if (status === 'active') {
      oppositeStatus = 'Suspend';
    }
    return oppositeStatus;
  };

  getStatusButton = (status) => {
    const statusButton = this.getOppositeStatus(Format.capitalizeFirstLetter(status[0].status));
    this.setState({ statusButton });
  };

  applyLicenseToCampaign = () => {
    this.props.addLicenseToCampaign(this.state.licensePackId, this.props.match.params.id)
      .then(() => {
        this.handleApplyLicenseSnackBar();
        this.handleLicenseDialog();
      })
      .then(() => {
        window.location = document.URL;
      });
  };

  createLicensePackList = (licensePackList) => {
    let licenseMenu = [];
    const licensePackDuration = {};
    if (licensePackList.length > 0) {
      licensePackList.forEach((licensePack) => {
        if (!licensePackDuration[licensePack.duration] && licensePack.pending > 0) {
          licensePackDuration[licensePack.duration] =
            { pending: licensePack.pending, id: licensePack.id };
        } else if (licensePack.pending > 0) {
          const pending = licensePack.pending + licensePackDuration[licensePack.duration].pending;
          licensePackDuration[licensePack.duration] = { pending: pending, id: licensePack.id };
        }
      });
      const licensePackFilter = Object.keys(licensePackDuration);
      licenseMenu = licensePackFilter.map(key => {
        return (
          <MenuItem
            key={licensePackDuration[key].id}
            value={licensePackDuration[key].id}>
            {key} month duration  |  {licensePackDuration[key].pending} licenses remaining
            </MenuItem>
        )
      })
      this.setState({ licenseMenu });
      return;
    }
    licenseMenu = (
      <MenuItem>Add Advertisers to begin creating Ad Campaigns!</MenuItem>);
  };

  getImageInformation = async (image) => {
    if (image.name) {
      await this.setState({
        image: {
          name: image.name,
          image_extension: image.type.split('/').pop(),
          encoded_image: image.base64,
        },
      });
    } else {
      await this.setState({
        image: {
          name: this.state.image.name,
          image_extension: this.state.image.image_extension,
          encoded_image: image.encoded_image,
        },
      });
    }
    this.props.onUpdateCampaignFields('image', this.state.image);
  };

  toggleStatusOfCampaignLicense = () => {
    const { id } = this.props.license[0];
    this.props.toggleLicenseStatus(id)
      .then((response) => {
        this.handleStatusChangeSnackBar();
        const statusButton = this.getOppositeStatus(response.status);
        this.setState({ statusButton });
      });
  };

  cropImage = (croppedImage) => {
    if (croppedImage) {
      this.setState({
        image: {
          encoded_image: croppedImage,
          name: this.state.image.name,
          image_extension: this.state.image.image_extension,
        },
      });
    }
  }

  detailsViewButtons = () => {
    if (this.state.disableFields) {
      return (
        <div style={{ display: 'flex' }}>
          {(!this.state.license.length) ?
            <div>
              <Button
                raised color='default'
                style={{ marginTop: 5 }}
                onClick={this.handleLicenseDialog}>
                Apply License
            </Button>

              <CampaignDetailsAddLicenseToCamapign
                open={this.state.licenseDialogOpen}
                handler={this.handleLicenseDialog}
                handleMenuChange={this.handleMenuChange}
                licensePackId={this.state.licensePackId}
                licenseMenu={this.state.licenseMenu}
                applyLicenseToCampaign={this.applyLicenseToCampaign} />
              <SnackBar
                open={this.state.applyLicenseSnackbar}
                onClose={this.handleLicenseSnackBar}
                message='Success! A License has added to this Ad Campaign' />
            </div>
            :
            <div></div>
          }
          <Button raised color='primary' style={{ marginTop: 5, marginLeft: 10 }} onClick={this.enableAndDisableFields}>
            Edit
          </Button>
        </div>);
    }
    return (
      <div>
        <Button raised color='default' style={{ marginTop: 5 }} onClick={this.enableAndDisableFields}>
          Cancel
        </Button>
        <Button raised color='primary' style={{ marginTop: 5, marginLeft: 10 }} onClick={this.updateCampaign}>
          Save
        </Button>
      </div >);
  };


  displayButtons = () => {
    switch (this.state.value) {
      case ('Details'):
        return this.detailsViewButtons();
      case ('SignLocation'):
        return this.detailsViewButtons();
      case ('Locations'):
        return (
          <UnstyledNavLink to={`/advertisers/${this.state.advertiserId}/new_location/${this.props.match.params.id}`}>
            <Button raised color="primary" style={{ marginTop: 5 }}>Add Location</Button>
          </UnstyledNavLink>
        );
      case ('Promotions'):
        return (
          <UnstyledNavLink to={`/campaign/${this.props.match.params.id}/new_promotion`}>
            <Button raised color="primary" style={{ marginTop: 5 }}>Add Promotion</Button>
          </UnstyledNavLink>
        );
      default:
        return null;
    }
  }

  render() {
    console.log("props", this.props);
    const { classes } = this.props;
    const { value } = this.state;
    var selector = undefined;
    var locationSelector = undefined;
    if (this.props.promotionList.promotionList.length > 0) {
      selector = true;
    } else {
      selector = false;
    }
    if (this.props.campaignLocations > 0) {
      locationSelector = true;
    } else {
      locationSelector = false;
    }

    return (
      <div>
        <Grid spacing={0} container style={{ marginTop: 100 }} >
          <Grid item xs={12} md={1} />
          <Grid item xs={12} md={5}>
            <Typography type="display1" style={{ marginBottom: 20 }}>
              {this.props.name}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5}>
            <div position='static' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
              {this.displayButtons()}
            </div>
          </Grid>

          <Grid item md={1} />
          <Grid item md={1} />

          <Grid item xs={12} md={10}>


            <AppBar position="static" className={classes.appBar}>
              <Tabs
                value={value}
                onChange={this.handleChange}
                indicatorColor='rgba(0, 0, 0, 0.1'
                indicatorClassName={classes.indicator}
                textColor="primary"
                fullWidth>                

                <Tab value='Details'
                label='Campaign Details' 
                icon={<Icon className="material-icons">done</Icon>}
                style = {{backgroundColor: '#61C3EE', color: '#fff'}}
                />
                
                <Tab value='SignLocation'
                label='Sign Location'
                icon={<Icon className="material-icons">done</Icon>}
                style = {{backgroundColor: '#61C3EE', color: '#fff'}}
                />

                {(locationSelector) ?
                  <Tab value='Locations' label='Store Location (optional)' 
                  icon={<Icon className="material-icons">done</Icon>}
                  style = {{backgroundColor: '#61C3EE', color: '#fff'}}
                  />
                  :
                  <Tab value='Locations' label='Store Location (optional)'
                    icon={<Icon className="material-icons">navigate_next</Icon>}
                    style={{ color: 'rgba(0, 0, 0, 0.54)' }}
                  />
                }
                
                {(selector) ? 
                <Tab value='Promotions' label={'Promotions'} icon={<Icon className="material-icons">done</Icon>}
               className={classes.buttonDone} style = {{backgroundColor: '#61C3EE', color: '#fff'}} 
              />
                :
                <Tab value='Promotions' label={'Promotions'} icon={<Icon className="material-icons">navigate_next</Icon>}
               className={classes.buttonDone} style = {{color: 'rgba(0, 0, 0, 0.54)'}}/>
                }
              </Tabs>
            </AppBar>
            <div style={{ marginTop: 0 }}>
              {value === 'Details' &&
                <div>
                  <Paper style={{ width: '100%' }} >
                    <Grid spacing={0} container display='flex' justify='center'>
                      <Typography type='body1' style={{ color: 'red', height: 20, paddingTop: 20 }}>
                        {this.state.updateFormErrorMessage}
                      </Typography>
                    </Grid>
                    <CampaignDetails
                      disableFields={this.state.disableFields}
                      disableLicense={this.state.disableLicense}
                      handleFieldChange={this.handleFieldChange}
                      getImageInformation={this.getImageInformation}
                      licenseDialogOpen={this.handleLicenseDialog}
                      handler={this.handleLicenseDialog}
                      handleMenuChange={this.handleMenuChange}
                      licensePackId={this.state.licensePackId}
                      licenseMenu={this.state.licenseMenu}
                      applyLicenseToCampaign={this.applyLicenseToCampaign}
                      cropImage={this.cropImage}
                      encodedImage={this.state.image.encoded_image}
                      toggleStatusCampaignLicense={this.toggleStatusOfCampaignLicense}
                      snackBarChange={this.handleStatusChangeSnackBar}
                      licenseStatus={this.state.licenseStatus}
                      promotions = {this.props.promotionList.promotions}
                      campaignId = {this.props.match.params.id}
                    />

                  </Paper>
                </div>
              }
              {value === 'SignLocation' &&
                <Paper>
                  <CampaignLocation
                    disableFields={this.state.disableFields}
                    handleFieldChange={this.handleFieldChange}
                    innerRadius={this.state.innerRadius}
                    outerRadius={this.state.outerRadius}
                    defaultZoom={this.state.defaultZoom}
                    mediumId={this.state.mediumId} />
                </Paper>}
              {value === 'Locations' && <LocationsTableAndHeader campaignId={this.props.match.params.id} />}
              {value === 'Promotions' && <PromotionsTableAndHeader value={this.state.value} campaignId={this.props.match.params.id} deletePromotion = {this.deletePromotion.bind(this)}/>
              }
            </div>
          </Grid>
          <SnackBar
            open={this.state.statusChangeSnackBar}
            onClose={this.handleStatusChangeSnackBar}
            message='Success! The status of this Ad Campaign has changed.' />
          <SnackBar
            open={this.state.succeedEditSnackBar}
            onClose={this.handleEditSucceedSnackBar}
            message='Success! The changes you made have been saved' />
        </Grid>
        <div style={{ margin: 20 }}>
          {/* <BackButton history={this.props.history} /> */}
        </div>
      </div>
    );
  }
}

CampaignDetailsContainer.propTypes = {
  refresher: PropTypes.bool,
  onDeletePromotion: PropTypes.func,
  promotionList: PropTypes.object,
  classes: PropTypes.object,
  toggleLicenseStatus: PropTypes.func,
  addLicenseToCampaign: PropTypes.func,
  getLicensesList: PropTypes.func,
  onSaveClick: PropTypes.func,
  onGetCampaign: PropTypes.func,
  onUpdateCampaign: PropTypes.func,
  onUpdateCampaignFields: PropTypes.func,
  categoryValue: PropTypes.string,
  campaign: PropTypes.object,
  name: PropTypes.string,
  license: PropTypes.array,
  isLoadingPacks: PropTypes.bool,
  isLoading: PropTypes.bool,
  licensePack: PropTypes.object,
  advertiserId: PropTypes.number,
  match: PropTypes.object,
  props: PropTypes.object,
  id: PropTypes.string,
  category: PropTypes.string,
  description: PropTypes.string,
  addressOne: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  zipCode: PropTypes.string,
  country: PropTypes.string,
  image: PropTypes.object,
  history: PropTypes.object,
  newMedium: PropTypes.array
};

const mapStateToProps = state => ({
  campaignLocations: state.location.campaignLocations.count,
  promotionList: state.promotion,
  licensePack: state.licensePack,
  isLoadingPacks: state.licensePack.isLoading,
  licensePackList: state.licensePack.licensePackList,
  isLoading: state.campaign.isLoading,
  campaign: state.campaign,
  license: state.campaign.license,
  advertiserId: state.campaign.advertiserId,
  name: state.campaign.name,
  medium: state.campaign.medium,
  mediumId: state.campaign.mediumId,
  newMedium: state.campaign.newMedium,
  category: state.campaign.category,
  description: state.campaign.description,
  privateNotes: state.campaign.privateNotes,
  defaultImage: state.campaign.defaultImage,
  image: state.campaign.image,
  addressOne: state.campaign.addressOne,
  addressTwo: state.campaign.addressTwo,
  city: state.campaign.city,
  state: state.campaign.state,
  zipCode: state.campaign.zipCode,
  country: state.campaign.country,
  lat: state.campaign.lat,
  lng: state.campaign.lng,
  refresher: state.refresher
});

const mapDispatchToProps = dispatch => ({
  onGetCampaign: id => dispatch(getCampaignById(id)),
  onUpdateCampaign: (params, id, image) => dispatch(updateCampaign(params, id, image)),
  onUpdateCampaignFields: (name, value) => dispatch(updateCampaignState(name, value)),
  onGetLocationList: id => dispatch(getLocations(id)),
  getLicensesList: () => dispatch(getAllLicensesPacks()),
  addLicenseToCampaign: (licensePackId, newCampaignId) =>
    dispatch(activateLicensePack(licensePackId, newCampaignId)),
  onGetPromotionList: (campaignId, perPage, page) =>
    dispatch(getPromotions(campaignId, perPage, page)),
  onGetCampaignLocationList: (id, perPage, page) =>
    dispatch(getCampaignLocations(id, perPage, page)),
  onDeletePromotion: (id) => dispatch(deletePromotion(id)),
});


const component = withStyles(styles)(CampaignDetailsContainer);
export default connect(mapStateToProps, mapDispatchToProps)(component);


CampaignDetails
import React from 'react';
import FileInputComponent from 'react-file-input-previews-base64';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';
import Typography from 'material-ui/Typography';
import Calendar from './Calendar';
import ImageCroppingDialog from './ImageCroppingDialog';
import { updateCampaignState } from '../../actionCreators/campaignsActionCreators';
import Validate from '../../utilities/validationUtilities';
import CampaignDetailsEditForm from './CampaignDetailsEditForm';
import { getPromotions } from '../../actionCreators/promotionActionCreators';//to get promotions if available
import { getAllLicenses } from '../../actionCreators/licensesActionCreators';
import { getCampaignById } from '../../actionCreators/campaignsActionCreators';

class CampaignDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      statusButton: '',
      license: [],
      openCroppingDialog: false,
      name: '',
      category: '',
      medium: '',
      privateNotes: '',
      description: '',
      image: {
        name: '',
        imageExtension: '',
        encoded_image: '',
      },
      defaultImage: ''
    }
  }

  componentWillReceiveProps(nextProps){
    this.setStateFromProps(nextProps);
  }  

  componentWillMount(){
    // console.log('param', this.props.campaignId)
    this.props.onGetCampaign(this.props.campaignId);
  }

  setStateFromProps(props){
    this.setState({
      name: props.name,
      category: props.category.charAt(0).toUpperCase() + props.category.slice(1),
      medium: props.medium,
      privateNotes: props.privateNotes,
      description: props.description,
      defaultImage: props.defaultImage,
      campaignID: parseInt(props.companyID),
    });
    if (props.medium[0]) {
      this.setState({ mediumName: props.medium[0].name });
    }
    // if (this.props.promotions){
    //   console.log(this.props.promotions.rows)
    //   let formattedList = this.props.promotions.rows.map((item, index) => {
    //     return {
    //       title: item.title,
    //       start: item.start_at,
    //       end: item.expire_at
    //     }
    //   })
    //   console.log(formattedList)
    //   if (formattedList){
    //     this.setState({
    //       promos: formattedList})
    //     }
    //   }
  }


  handleChange = name => (event) => {
    this.setState({ [name]: event.target.value });
    this.props.onUpdateCampaignFields(name, event.target.value);
  };

  handleOnlyNumberChange = name => (e) => {
    if (e.target.value === '' || Validate.isNumber(e.target.value)) {
      this.setState({ [name]: e.target.value });
    }
  };

  openAndCloseCroppingDialog = () => {
    this.setState({ openCroppingDialog: !this.state.openCroppingDialog });
  }

  displayImage = () => {
    console.log(this.props.campaignList);
    let rightPromotion = this.props.campaignList.filter((item, index)=>{
      return item.id === parseInt(this.props.campaignId)
    })
    if (rightPromotion[0]){
      console.log('https://s3.amazonaws.com/ba-us-east-1-develop-target/'+rightPromotion[0].advertisement_images[0].image_key + '-l.' +rightPromotion[0].advertisement_images[0].image_extension)
      return <img src={'https://s3.amazonaws.com/ba-us-east-1-develop-target/'+rightPromotion[0].advertisement_images[0].image_key + '-l.' +rightPromotion[0].advertisement_images[0].image_extension} style={{ maxWidth: 350, minWidth: 100 }} />
    }else{
      return <img src={'https://s3.amazonaws.com/ba-us-east-1-develop-target/campaign/300/375/Braves-jpg-l.jpeg'} style={{ maxWidth: 350, minWidth: 100 }} />
    }


    // new Promise((resolve, reject)=>{
    //   if (rightPromotion[0]){
    //     resolve('https://s3.amazonaws.com/ba-us-east-1-develop-target/'+rightPromotion[0].advertisement_images[0].image_key + '.' +rightPromotion[0].advertisement_images[0].image_extension)
    //   }else{
    //     reject("https://s3.amazonaws.com/ba-us-east-1-develop-target/campaign/300/375/Braves-jpg-l.jpeg")
    //   }
    // }).then((result) => {
    //     return `<img style={{ width: '168px' }} src="${result}" alt='CloudUpload' />`
    // })
    // imagePromise.then(result => 
    //   var imageLink = `<img style={{ width: '168px' }} src="${result}" alt='CloudUpload' />`;
    // )
  
    // console.log(imageLink)
    // if (this.state.image.encoded_image) {
    //   return <img src={this.state.image.encoded_image} style={{ maxWidth: 350, minWidth: 100 }} />;
    // } else if (this.state.defaultImage) {
    //   return <img src={this.state.defaultImage} style={{ maxWidth: 350, minWidth: 100 }} />;
    // }
    // return <img style={{ width: '168px' }} src="../../images/cloud-upload.png" alt='CloudUpload' />;
  }

  cropImage = (croppedImage) => {
    if (croppedImage) {
      this.setState({
        image: {
          encoded_image: croppedImage,
          name: this.state.image.name,
          image_extension: this.state.image.image_extension,
        },
        openCroppingDialog: false,
      });
    }
  }

  handleCropImage = async (croppedImage) => {
    if (croppedImage) {
      await this.setState({
        image: {
          encoded_image: croppedImage,
          name: this.state.image.name,
          image_extension: this.state.image.image_extension,
        },
        openCroppingDialog: false,
      })
    }
    this.props.getImageInformation(this.state.image);
  }

  render() {
    console.log('props', this.props);
    // {this.displayImage()}
    // console.log('state', this.state);
    return (
      <Grid container style={{ paddingBottom: 30, width: '100%' }} spacing={0} >
        <Grid item xs={1} md={1} />
        <CampaignDetailsEditForm
          disableFields={this.props.disableFields}
          disableLicense={this.props.disableLicense}
          mediumName={this.state.mediumName}
          licenseDialogOpen={this.props.licenseDialogOpen}
          toggleStatusCampaignLicense={this.props.toggleStatusCampaignLicense}
          licenseStatus={this.props.licenseStatus}
          snackBarChange={this.props.snackBarChange}
        />
        {/* <Grid item md={1} /> */}
        {/* <Grid item xs={12}>

        </Grid> */}
        
        <ImageCroppingDialog
          open={this.state.openCroppingDialog}
          handler={this.openAndCloseCroppingDialog}
          cropImage={this.handleCropImage}
          image={this.state.image.encoded_image}
          
          aspectRatioWidth={5}
          aspectRatioHeight={3}
        />
        

        {/* Image side of campaign goes here */}

        <Grid item xs={12} md={7} style={{ textAlign: 'center', marginTop: 40}} >
          <Typography
            type='title'
            align='center'
            style={{ marginBottom: 20 }}>
            Campaign Image
          </Typography>
          <div item style={{marginTop: 50, textAlign: 'center'}}>
            <Grid >
              {this.displayImage()}
            </Grid>
          </div>
          <FileInputComponent
            imagePreview={false}
            labelText=""
            labelStyle={{ fontSize: 14 }}
            buttonComponent={<Button color="primary" disabled={this.props.disableFields} raised dense style={{ marginTop: 10, width: '50%', visibility: (!this.props.disableFields) ? 'visible' : 'hidden'}}>Update Image</Button>}
            callbackFunction={(fileArray) => {
              this.props.getImageInformation(fileArray[0]);
              this.setState({
                image: {
                  encoded_image: fileArray[0].base64,
                },
                openCroppingDialog: true,
              });
            }}
            accept="image/*"
          />
          <Typography type="subheading" style={{ margin: 10 }} >
            <Icon className="material-icons" style={{ marginRight: 7.5, textAlign: 'center', fontSize: 18, color: '#be0000' }}>announcement</Icon>
            Note: Image size is limited to 2Mb max. <br />
            Image ratio is 5:3.
          </Typography>

          <Grid item xs={12} md={12} style={{ textAlign: 'center', marginTop: 0 }} >
  
          </Grid>


        </Grid>
  
      </Grid>
    );
  }
}


const mapStateToProps = state => ({
  // promotionCount: state.promotion.promotions,
  allstates: state,
  campaignList: state.campaign.campaignList,
  name: state.campaign.name,
  medium: state.campaign.medium,
  category: state.campaign.category,
  description: state.campaign.description,
  privateNotes: state.campaign.privateNotes,
  addressOne: state.campaign.addressTwo,
  addressTwo: state.campaign.addressTwo,
  city: state.campaign.city,
  state: state.campaign.state,
  zipCode: state.campaign.zipCode,
  defaultImage: state.campaign.defaultImage,
});

const mapDispatchToProps = dispatch => ({
  onGetCampaign: id => dispatch(getCampaignById(id)),
  onUpdateCampaignFields: (name, value) => dispatch(updateCampaignState(name, value)),
});


export default connect(mapStateToProps, mapDispatchToProps)(CampaignDetails);
// buttonComponent={<Button color="primary" disabled={this.props.disableFields} raised dense style={{ marginTop: 10, width: '50%' }}>Update Image</Button>}

promotion

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
const urlRegExp = /((https\:\/{2})(?:[-a-z0-9]+\.)+[-a-z0-9]+.{1})/i


const styles = {
  field: {
    width: '50%'
  }

}

class Promotion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disableFields: false,
      newPromotion: true,
      title: '',
      category: '',
      promoCode: '',
      description: '',
      startAt: ' ',
      expireAt: ' ',
      promoLink: '',
      timeStart: '',
      timeEnd: ' ',

      disabled: true,
      openCroppingDialog: false,
      image: {
        name: '',
        imageExtension: '',
        encoded_image: '',
      },
      defaultImage: ''
    };
  }

  componentWillMount = () => {
    if (this.props.match.params.id) {
      this.props.onGetPromotion(this.props.match.params.id);
      this.setStateFromProps(this.props);
      this.props.onDeletePromotion;
      this.props.createPromotion

    }
  };

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

  // cropImage = async (croppedImage) => {
  //   console.log('cropped', croppedImage)

  //   if (croppedImage) {
  //     await this.setState({
  //       image: {
  //         encoded_image: croppedImage,
  //         name: this.state.image.name,
  //         image_extension: this.state.image.image_extension,
  //       },
  //       openCroppingDialog: false,
  //     });
  //   }
  //   console.log('this.state.image', this.state.image)
  // }

  handleCropImage = async (croppedImage) => {
    console.log('croppedImage', croppedImage)
    if (croppedImage) {
      await this.setState({
        image: {
          encoded_image: croppedImage,
          name: this.state.image.name,
          image_extension: this.state.image.image_extension,
        },
        openCroppingDialog: false,
      })
    }
    // await this.getImageInformation(this.state.image);
  }

  displayImage = () => {
    if (this.state.image.encoded_image) {
      return <img src={this.state.image.encoded_image} style={{ maxWidth: 350, minWidth: 100 }} />;
    } else if (this.props.defaultImage) {
      return <img src={this.props.defaultImage} style={{ maxWidth: 350, minWidth: 100 }} />;
    }
    console.log('this.props.defaultImage',this.props.defaultImage )
    return <img style={{ width: '168px' }} src="../../images/cloud-upload.png" alt='CloudUpload' />;
  }




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
    });
  }

  validateForm = () => {
    let startDate = new Date(this.state.startAt);
    let endDate = new Date(this.state.expireAt);
    if (startDate <= endDate){//I can just compare them
      return this.state.title.length >= 1
      && this.state.category.length >= 1
      && this.state.description.length >= 1
      && (this.state.promoLink.length >= 1
      && (this.state.promoLink).match(urlRegExp) !== null)
      && this.state.startAt !== ' '
      && this.state.expireAt !== ' '
      && !!this.state.image;
    }else{
      console.log('mismatch')
    }
    
  };

  calendarMismatch = () => {
    console.log('start', new Date(this.state.startAt).getTime())
    console.log('end', new Date(this.state.expireAt).getTime()+1)
    return ((new Date(this.state.startAt)).getTime() >= (new Date(this.state.expireAt)).getTime()+1)
  }


  handleChange = name => (event) => {
    this.setState({ [name]: event.target.value });
  };

  handleOnlyNumberChange = name => (e) => {
    if (e.target.value === '' || Validate.isNumber(e.target.value)) {
      this.setState({ [name]: e.target.value });
    }
  };

  updatePromotion = () => {
    this.props.onUpdatePromotion(this.paramsForCreateAndUpdate(), this.props.match.params.id) ?
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

  enableAndDisableFields = () => {
    this.setState({
      disableFields: !this.state.disableFields,
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
            disabled={!this.validateForm()}>
            Save
          </Button>
        </div>
      );
    } else if (this.state.disableFields) {
      return (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
          <Button raised color="primary" style={{ marginTop: 5, height: 15, width: '40%' }} onClick={this.enableAndDisableFields}>Edit</Button>
        </div>
      );
    }
    return (
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
        <Button raised color="default" style={{ marginTop: 5, width: '50%' }} onClick={this.enableAndDisableFields}>Cancel</Button>
        <Button raised color="primary" style={{ marginTop: 5, marginLeft: 10, width: '50%' }} onClick={this.updatePromotion}>Save</Button>
      </div>
    );

  }
  render() {
    let id = this.props.match.params.campaignId;
    console.log(this.props)
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

              <Grid item xs={1} />
              <Grid item xs={1} />

              <Grid container item xs={10} md={4}>
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
                    id="time"
                    label="Start Time"
                    type="time"
                    value={this.state.timeStart}
                    onChange={this.handleChange('timeStart')}
                  />

                </Grid>
                <Grid item xs={12} md={6}>
                  <FormField
                    fullWidth
                    disabled={this.state.disableFields}
                    id="date"
                    label="End Date (DD/MM/YY)"
                    type="date"
                    value={this.state.expireAt}
                    onChange={this.handleChange('expireAt')}
                  />

                </Grid>

                <Grid item xs={12} md={12} style={{ visibility: (this.calendarMismatch()) ? 'visible' : 'hidden', marginTop: 10, color: 'red', display: 'flex', flexDirection: 'row', justifyContent: 'center', textAlign: 'justify' }}>
                  The End Date must be equal or greater than Start Date
                </Grid>

                <Grid item xs={12} md={12} style={{ marginTop: 30 }}>


                <Grid item xs={12} md={6}>
                  <FormField
                    fullWidth
                    disabled={this.state.disableFields}
                    id="time"
                    label="End Time"
                    type="time"
                    value={this.state.timeEnd}
                    onChange={this.handleChange('timeEnd')}
                  />

                </Grid>
                <Grid item xs={12} md={12} style={{ marginTop: 40 }}>
                  {this.displayButtons()}
                </Grid>

                <Grid item xs={12} md={12} style={{ visibility: (!this.validateForm()) ? 'visible' : 'hidden', marginTop: 10, color: 'red', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                  All fields with * must be filled in
                </Grid>

              </Grid>
              <Grid item md={1} />

              <Grid container style={{ paddingBottom: 30 }} display='flex' spacing={0}>

                <ImageCroppingDialog
                  open={this.state.openCroppingDialog}
                  handler={this.openAndCloseCroppingDialog}
                  cropImage={this.handleCropImage}
                  image={this.state.image.encoded_image}
                  aspectRatioWidth={5}
                  aspectRatioHeight={3}
                />

                <Grid item md={1} />

                <Grid item xs={12} md={5} style={{ textAlign: 'center', marginTop: '7%' }} >
                {this.displayImage()}
                  <FileInputComponent
                    imagePreview={false}
                    labelText=''
                    labelStyle={{ fontSize: 14 }}
                    buttonComponent={<Button color="primary" raised dense style={{ marginTop: 10, width: '100%' }}>Upload Image</Button>}
                    callbackFunction={(fileArray) => {
                      this.getImageInformation(fileArray[0]);
                      this.setState({
                        openCroppingDialog: true,
                      });
                    }}
                    accept="image/*"
                  />
                  <Typography type="subheading" style={{ margin: 10, color: '#808080' }} >
                    <Icon className="material-icons" style={{ marginRight: 7.5, textAlign: 'left', fontSize: 18, color: '#be0000' }}>announcement</Icon>
                    Note: Image size is limited to 2Mb max. <br />
                    The image ratio is 5:3.<br />
                    Click the button above to upload an image for your campaign!
                    This is the image your customers will see.
                      Check out our <a href="http://api.boardactive.com/our_services/image_dimensions/">documentation</a> for help if needed.
                    </Typography>
                </Grid>

                <Grid item xs={1} md={1} />
              </Grid>
              </Grid>
            </Grid>
          </Paper>
          <WhiteLink style={{ color: 'white !important', textDecoration: 'none' }} to={`/campaign/${id}`}>
            <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
              <Button className="a" raised color="primary" style={{ marginTop: 5, marginLeft: 10, width: '27%' }}>Check Your Campaign Status</Button>
            </div>
          </WhiteLink>
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
};

const mapStateToProps = state => ({
  statesss: state,
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
});

const mapDispatchToProps = dispatch => ({
  onGetPromotion: id => dispatch(getPromotionById(id)),
  onCreatePromotion: (params, image) => dispatch(createPromotion(params, image)),
  onUpdatePromotion: (params, id) => dispatch(updatePromotion(params, id)),
  onUpdatePromotionFields: (name, value) => dispatch(updatePromotionState(name, value)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Promotion);
