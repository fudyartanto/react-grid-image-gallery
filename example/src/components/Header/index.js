import { compose, withState, withProps, withHandlers } from 'recompose'
import { connect } from 'react-redux';
import { getImages } from '../../services/Flickr';
import Header from './screen'

const mapStateToProps = (state) => {
  return { query: state.gallery.query }
}

export default compose(
  connect(mapStateToProps),
  withState('queryValue', 'setQueryValue', null),
  withProps((props) => {
    const { query, queryValue, setQueryValue } = props
    return {
      queryValue: queryValue === null ? query : queryValue
    }
  }),
  withHandlers({
    search: ({
      queryValue,
    }) => () => {
      getImages({
        text: queryValue,
      })
    }
  })
)(Header)
