import React, { Component } from "react";
import style from "./cardList.css";
import { firebaseLooper, firebaseImage } from "../../../firebase";
import Fade from "react-reveal/Fade";

import CardListItem from "./cardListItem";

class CardList extends Component {
  state = {
    albums: [],
  };

  componentWillMount() {
    this.request();
  }

  request = () => {
    firebaseImage
      .orderByChild("id")
      .once("value")
      .then((snapshot) => {
        const images = firebaseLooper(snapshot);
        images.forEach((item, i) => {
          let album = {
            name: item.serie,
            cover: item.cover,
            id: item.id,
            link: item.link,
          };
          this.setState({ albums: [...this.state.albums, album] });
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  renderImages = () => {
    let template = null;
    // console.log('THIS STATE ALBUM ---', this.state.albums);
    switch (this.props.type) {
      case "card":
        template = <CardListItem data={this.state.albums} />;
        break;
      default:
        template = null;
    }
    return template;

    // this.props.type === 'card' ? template = <CardListTemplate data = {this.state.albums}/> : template = null
  };

  render() {
    {
      console.log(this.state.link);
    }

    return (
      <Fade delay={1200}>
        <div className={style.bigContainerCardList}>
          <div className={style.cardListWrapper}>{this.renderImages()}</div>
        </div>
      </Fade>
    );
  }
}

export default CardList;
