import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as jqueryFinderActions from "../../redux/actions";

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.jqueryFinderActions.resetScore();
  }

  handlePlay = obj => {
    const { navigate } = this.props.navigation;
    navigate("gameScreen");
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.btn}>jQuery Finder</Text>
        <View>
          <TouchableOpacity onPress={this.handlePlay}>
            <Text style={styles.title}>
              <Icon name="play" size={100} color="#000" />
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.highScore}>Hi-Socre</Text>
        </View>
        <View>
          <Text style={styles.score}>{this.props.gameData.hiScore}</Text>
        </View>
        <View style={styles.copyRightContainer}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%"
  },
  title: {
    fontSize: 50,
    textAlign: "center",
    margin: 10,
    color: "#000",
    marginBottom: 80
  },
  btn: {
    fontSize: 50,
    textAlign: "center",
    color: "#000",
    marginBottom: 50
  },
  highScore: {
    fontSize: 30,
    textAlign: "center",
    // margin: 10,
    color: "#000"
  },
  score: {
    fontSize: 50,
    textAlign: "center",
    margin: 10,
    color: "#000",
    marginTop: 10
  },
  copyRightContainer: {
    fontSize: 25,
    position: "absolute",
    bottom: 10
  },
  copyRightLabel: {
    fontSize: 25,
    color: "#000"
  }
});

const mapStateToProps = state => ({
  gameData: state.gameData
});

const mapDispatchToProps = dispatch => ({
  jqueryFinderActions: bindActionCreators(jqueryFinderActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
