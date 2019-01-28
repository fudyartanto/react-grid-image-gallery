import { compose, lifecycle } from 'recompose'
import { connect } from 'react-redux';
import Home from './screen';

const mapStateToProps = (state) => {
  return {
    images: state.gallery.images
  }
}

export default compose(
  connect(mapStateToProps),
  lifecycle({
    componentDidMount: () => {
    }
  })
)(Home)
