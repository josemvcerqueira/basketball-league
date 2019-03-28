import { Component } from "react";
import PropTypes from "prop-types";
import { getArticle } from "../api";

class Article extends Component {
	state = {
		article: null
	};

	static propTypes = {
		teamId: PropTypes.string.isRequired,
		articleId: PropTypes.string.isRequired,
		children: PropTypes.func.isRequired
	};

	componentDidMount() {
		const { teamId, articleId } = this.props;
		this.getArticle(teamId, articleId);
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.articleId !== nextProps.articleId) {
			this.getArticle(nextProps.teamId, nextProps.articleId);
		}
	}

	getArticle = async (teamId, articleId) => {
		this.setState(() => ({
			article: null
		}));

		const article = await getArticle(teamId, articleId);
		this.setState(() => ({
			article
		}));
	};

	render() {
		return this.props.children(this.state.article);
	}
}

export default Article;
