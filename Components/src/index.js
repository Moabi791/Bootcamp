import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
              <div>
                <h4>Warning</h4>
                Are you sure you want to do this?
                </div>
                </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                authot="Sam"
                timeAgo="Today at 4:45PM" 
                content="Nice blog post"
                avatar={faker.image.avatar()}
              />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                author="Alex" 
                timeAgo="Today at 2:50PM" 
                content="I like the subject"
                avatar={faker.image.avatar()}
              />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                author="Lionel" 
                timeAgo="Today at 2:00PM" 
                content="You know where to find me"
                avatar={faker.image.avatar()}
              />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                author="Micheal" 
                timeAgo="Yesterday at 5:00" 
                content="Hit me up"
                avatar={faker.image.avatar()}
              />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                author="Billy" 
                timeAgo="Yesterday at 7:20PM" 
                content="I like the writing"
                avatar={faker.image.avatar()} 
              />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
