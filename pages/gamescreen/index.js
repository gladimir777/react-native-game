import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import * as jqueryFinderActions from "../../redux/actions";
import { bindActionCreators } from "redux";
import Icon from "react-native-vector-icons/FontAwesome";

import { connect } from "react-redux";

class GameScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 60,
      index: 0,
      item: ""
    };
  }

  componentDidMount() {
    this.props.jqueryFinderActions.getData();
    this.clock = setInterval(this.handleCount, 1000);
    this.indexGenarator = setInterval(this.handleIndex, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.clock);
    clearInterval(this.indexGenarator);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.counter == 0) {
      clearInterval(this.clock);
      clearInterval(this.indexGenarator);
      const { navigate, goBack } = this.props.navigation;
      if (this.props.gameData.score < 55) {
        navigate("gameOverScreen", { score: this.props.gameData.score });
      } else {
        navigate("clearStageScreen", { score: this.props.gameData.score });
      }
    }
  }
  handleCount = () => {
    this.setState(state => ({ counter: state.counter - 1 }));
  };

  handleIndex = () => {
    let index = this.genarateIndex();
    this.setState({ index });
  };
  genarateIndex = () => {
    return Math.floor(Math.random() * 3);
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Find it!</Text>
        <Text style={styles.now}>now</Text>
        <View style={styles.gameCardsWraper}>
          {this.props.gameData.gameData[this.state.index].map((item, index) => {
            return (
              <View key={item}>
                <TouchableOpacity
                  style={[styles.gameCardContainer, styles[`btn${index}`]]}
                  onPress={() =>
                    this.state.counter > 0
                      ? this.props.jqueryFinderActions.isJqueryClicked(item)
                      : null
                  }
                >
                  <Text style={[styles.gameCard, styles.btn]}>{item}</Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
        <View style={styles.counterContainer}>
          <View>
            <Text>
              <Icon name="clock-o" size={50} color="#000" />
            </Text>
          </View>
          <View style={styles.counter}>
            <Text style={styles.counterLabel}>
              {this.state.counter == 60 ? "1:00" : this.state.counter}
            </Text>
          </View>
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
    fontSize: 50,
    textAlign: "center",
    margin: 10,
    color: "#000",
    marginBottom: 0
  },
  now: {
    fontSize: 30,
    textAlign: "center",
    color: "#000"
  },
  gameCardsWraper: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  gameCardContainer: {
    height: 150,
    width: 170,
    //backgroundColor: "blue",
    marginRight: 10,
    marginBottom: 10,
    marginTop: 10,
    justifyContent: "center",
    padding: 10,
    borderWidth: 3
  },
  gameCard: {
    fontSize: 10,
    textAlign: "center",
    color: "#000"
  },
  btn: {
    fontSize: 30
  },
  btn0: {
    backgroundColor: "#F5BCBA"
  },
  btn1: {
    backgroundColor: "#01d28e"
  },
  btn2: {
    backgroundColor: "#74B9FF"
  },
  btn3: {
    backgroundColor: "#487EB0"
  },

  counterContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    marginTop: 60
  },
  counter: {
    marginLeft: 10,
    justifyContent: "center"
  },
  counterLabel: {
    color: "#000",
    fontSize: 20
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
)(GameScreen);
