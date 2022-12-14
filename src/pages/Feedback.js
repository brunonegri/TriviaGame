import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';

class Feedback extends React.Component {
  handleClick = () => {
    const { history } = this.props;
    history.push('/');
  }

  rankingClick = () => {
    const { history } = this.props;
    history.push('/ranking');
  }

  render() {
    const { assertions, score } = this.props;
    const n3 = 3;
    console.log(assertions);
    return (
      <div className="feedback-container">
        <div className="feedback-text" data-testid="feedback-text">
          <Header />
          <hr />
          {assertions < n3
            ? <p data-testid="feedback-text">Could be better...</p>
            : <p data-testid="feedback-text">Well Done!</p> }
          <span>
            SCORE:
            <p data-testid="feedback-total-score">{score}</p>
          </span>
          <span>
            Assertions:
            <p data-testid="feedback-total-question">{assertions}</p>
          </span>
        </div>
        <button
          onClick={ this.handleClick }
          type="button"
          data-testid="btn-play-again"
        >
          Play Again

        </button>
        <button
          onClick={ this.rankingClick }
          data-testid="btn-ranking"
          type="button"
        >
          Ranking

        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  assertions: state.player.assertions,
  score: state.player.score,
});

Feedback.propTypes = {
  assertions: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps)(Feedback);
