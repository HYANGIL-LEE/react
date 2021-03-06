import React, {Component} from 'react';

class HistorySample extends Component {
    //뒤로가기
    handleGoBack = () => {
        this.props.history.goBack();
    };

    //홈으로 이동
    handleGoHome = () => {
        this.props.history.push('/');
    };

    componentDidMount() {
        this.unblock = this.props.history.block('나 버리고 갈꾸?');
    }

    componentWillUnmount() {
        if(this.unblock){
            this.unblock();
        }
    }

    render(){
        return(
            <div>
                <button onClick={this.handleGoBack}>뒤로</button>
                <button onClick={this.handleGoHome}>홈으로</button>
            </div>
        
        );
    }
}


export default HistorySample;