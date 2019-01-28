import { compose, lifecycle, withHandlers, withState } from 'recompose'
import { connect } from 'react-redux';
import Home from './screen';
import { getImages } from '../../services/Flickr';

const mapStateToProps = (state) => {
  return { ...state.gallery }
}

export default compose(
  connect(mapStateToProps),
  withState('requestedPage', 'setRequestedPage', null),
  withState('isLoadingMore', 'setIsLoadingMore', false),
  withHandlers({
    loadMore: ({
      page,
      query,
      requestedPage,
      setIsLoadingMore,
      setRequestedPage,
    }) => () => {
      const nextPage = page + 1
      const allowToRequest = requestedPage === null || nextPage === (requestedPage + 1)

      if (allowToRequest) {
        setRequestedPage(nextPage)
        setIsLoadingMore(true)
        getImages({
          text: query,
          page: nextPage,
        })
      }
    }
  }),
  lifecycle({
    componentDidMount() {
      getImages({
        text: this.props.query,
      })
    }
  })
)(Home)
