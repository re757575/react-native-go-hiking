import React, {
  Component,
  View,
  WebView,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

const StyleSheet = require('../utils/F8StyleSheet');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    ios: {
      marginTop: 64,
    },
    android: {
      marginTop: 55,
    },
  }
});

export default class WebViewPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentWillMount() {
  }

  render() {
    return (
      <View style={styles.container}>
        <WebView
          style={{flex: 1}}
          source={{uri: this.props.url}} />
      </View>
    );
  }
}

WebViewPage.propTypes = {
};

WebViewPage.defaultProps = {
};

function _injectPropsFromStore(state) {
  return {
  };
}

const _injectPropsFormActions = {

};

export default connect(_injectPropsFromStore, _injectPropsFormActions)(WebViewPage);