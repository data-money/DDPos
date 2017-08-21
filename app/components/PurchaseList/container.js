import { connect } from 'react-redux';
import Component from './component';

const mapStateToProps = state => ({
  list: state.purchase.list
});

const mapDiapatchToProps = null;

export default connect(
  mapStateToProps,
  mapDiapatchToProps,
)(Component);
