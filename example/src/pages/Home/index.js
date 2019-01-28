import { compose, lifecycle } from 'recompose'
import { connect } from 'react-redux';
import Home from './screen';
import { getImages } from '../../services/Flickr';

const mapStateToProps = (state) => {
  return { ...state.gallery }
}

export default compose(
  connect(mapStateToProps),
  lifecycle({
    componentDidMount() {
      getImages('traditional')
    }
  })
)(Home)
