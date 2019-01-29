import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";

const App = () => (
    <div className="ui container comments">
        <CommentDetail
            author="Sam"
            timeAgo="Today at 4:45PM"
            comment="First comment"
            avatar={ faker.image.avatar() }
        />
        <CommentDetail
            author="Alex"
            timeAgo="Today at 2:00AM"
            comment="Second comment"
            avatar={ faker.image.avatar() }
        />
        <CommentDetail
            author="Jane"
            timeAgo="Yesterday at 1:56PM"
            comment="Third comment"
            avatar={ faker.image.avatar() }
        />
    </div>
);

ReactDOM.render( <App />, document.querySelector( "#root" ) );
