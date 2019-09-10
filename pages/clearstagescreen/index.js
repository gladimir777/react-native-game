import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import * as jqueryFinderActions from "../../redux/actions";
import { bindActionCreators } from "redux";

import { connect } from "react-redux";

class ClearStageScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.jqueryFinderActions.getHiScore();
    this.clearScore = setInterval(
      this.props.jqueryFinderActions.resetScore,
      5000
    );
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      parseInt(prevProps.navigation.getParam("score", "10")) !==
      this.props.gameData.score
    ) {
      this.props.navigation.navigate("home");
    }
  }

  componentWillUnmount() {
    clearInterval(this.clearScore);
    this.props.navigation.popToTop();
  }
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image
            style={{ width: 300, height: 70 }}
            source={require("../../images/jquery.png")}
          />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Write less, do more.</Text>
        </View>

        <View style={styles.copyRightContainer}>
          <Text style={styles.copyRightLabel}>Copyright Cleverit</Text>
        </View>
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
    fontSize: 20,
    margin: 10,
    color: "#000",
    marginBottom: 10,
    position: "absolute",
    right: 50
  },
  titleContainer: {
    width: "100%",
    backgroundColor: "red",
    position: "relative"
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
)(ClearStageScreen);
