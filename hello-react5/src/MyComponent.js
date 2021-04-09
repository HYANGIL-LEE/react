import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component{
    static defaultProps = {
        name: '기본이름'
    };
    static propTypes = {
        name: PropTypes.string,
        favoriteNumber: PropTypes.number.isRequired
    };
    render(){
        const {name, favoriteNumber,children} = this.props;
        return (
        <div>제가 좋아하는 사람은 커여운 {name}입니다.<br/>
            제가 배우는 건 {children} 입니다. 이건 치루도 값이예요.<br/>
            우리 꾸꿍이는 {favoriteNumber}년생 입니다.
        </div>
        );

    }
}


MyComponent.defaultProps = {
    name: '아이엠'
};
MyComponent.propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
};

export default MyComponent;