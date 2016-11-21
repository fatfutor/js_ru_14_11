import React from 'react'

class Article extends React.Component {

    constructor() {
        super();
        this.state = {
            isOpenArticle: false,
            //существительное, но лучше вынести этот стейт в отдельный компонент CommentList, иначе очень перегруженные компоненты выходят
            isOpenComments: false // как правильно ее "обзывать" существительное или глагол?
        }
    }

    handleClick = evt => {
        this.setState({
            isOpenArticle: !this.state.isOpenArticle,
            isOpenComments: false
        })
    };

    isVisibleComments = evt => {
        this.setState({
            isOpenComments: !this.state.isOpenComments
        })
    };

    render() {
        const { article } = this.props;
        const body = this.state.isOpenArticle ?
            <div>
                <p>{article.text}</p>
                <button onClick={this.isVisibleComments} disabled={(article.comments) ? '' : 'disabled'}>
                    { /*не пиши сложный код в JSX, вынеси это в метод отдельный*/
                        (article.comments) ? (this.state.isOpenComments) ? 'закрыть' : 'открыть' : 'нет комментареив'
                    }
                </button>
            </div>
            : null;

        let comments = null;
        //Аналогично, видишь много кода - выноси в отдельный компонент
        if (article.comments && this.state.isOpenComments) {
            comments = article.comments.map((comments) => {
                let title = (comments.title) ? comments.title : 'Без заголовка';
                return (
                    <li key={comments.id}>
                        <h4>{title}</h4>
                        <p>{comments.text}</p>
                        <i>пользователь: {comments.user}</i>
                    </li>
                )
            });
        }

        return (
            <section>
                <h3 onClick = {this.handleClick}>{article.title}</h3>
                {body}
                <ul>
                    {comments}
                </ul>
            </section>
        )
    }
}

export default Article
