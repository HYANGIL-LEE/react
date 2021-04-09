import React from 'react';
import {withRouter} from 'react-router-dom';
import WithRouterSample from './WithRouterSample';
const data = {
    velopert: {
        name: '김민준',
        description: '참 별로인 리액트 선생'
    },
    imwhatiam: {
        name: '임창균',
        description: '내가 요새 애정하는 꾸꿍이'
    },
    sixguns: {
        name: '이향일',
        description: '잘생기면 다 오빠'
    }
};

const Profile = ({match}) => {
    const {username} = match.params;
    const profile = data[username];
    if(!profile){
        return <div>노존재. 손자이시나이유자데스</div>
    }
    return (
    <div>
        <h3>
            {username}({profile.name})
        </h3>
        <p>{profile.description}</p>
        <WithRouterSample />
    </div>
    );
};


export default withRouter(Profile);