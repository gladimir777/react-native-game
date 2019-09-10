import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import * as jqueryFinderActions from "../../redux/actions";
import { bindActionCreators } from "redux";

import { connect } from "react-redux";

class GameOverScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      parseInt(prevProps.navigation.getParam("score", "10")) !==
      this.props.gameData.score
    ) {
      this.props.navigation.navigate("home");
    }
  }
  componentDidMount() {
    this.props.jqueryFinderActions.getHiScore();
    this.clearScore = setInterval(
      this.props.jqueryFinderActions.resetScore,
      5000
    );
  }

  componentWillUnmount() {
    clearInterval(this.clearScore);
  }

  render() {
    const { navigation } = this.props;
    const score = navigation.getParam("score", "10");
    return (
      <View style={styles.container}>
        <Text style={styles.title}>¡Game over!</Text>
        <View>
          <Text style={styles.subTitle}>Your</Text>
        </View>
        <View>
          <Text style={styles.score}>{JSON.stringify(score)}</Text>
        </View>
        <View>
          <Text style={styles.title}>Score</Text>
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
    height: "100%"
  },
  title: {
    fontSize: 50,
    textAlign: "center",
    margin: 10,
    color: "#000",
    marginBottom: 10
  },
  subTitle: {
    fontSize: 30,
    color: "#000"
  },
  score: {
    fontSize: 50,
    textAlign: "center",
    margin: 10,
    color: "#000",
    marginTop: 10,
    fontWeight: "bold"
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
)(GameOverScreen);
