import React, { Component } from "react";
import style from "./cardList.css";
import { firebaseLooper, firebaseImage } from "../../../firebase";

// framer-motion
import { AnimatePresence, motion } from "framer-motion";
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
      // console.log(this.state.link);
    }
    // 1.2
    return (
      <AnimatePresence>
        <motion.div
          className={style.bigContainerCardList}
          transition={{
            delay: 1.5,
            duration: 1.5,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className={style.cardListWrapper}>{this.renderImages()}</div>
        </motion.div>
      </AnimatePresence>
    );
  }
}

export default CardList;
