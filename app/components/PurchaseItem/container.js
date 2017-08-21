import { connect } from 'react-redux';

import Component from './component';

const mapStateToProps = state => ({
  single: state.purchase.single,
});
const mapDispatchToProps = null;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);
