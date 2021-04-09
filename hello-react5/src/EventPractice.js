import React, {useState} from 'react';

const EventPractice = () => {
    const [form, setForm] = useState({
        username: '',
        message: ''
    });

    const {username, message} = form;
    const onChange = e => {
        const nextForm ={
            ...form,
            [e.target.name]: e.target.value
        };
        setForm(nextForm);
    };
    
    const onClick = () => {
        alert(username + ': ' + message);
        setForm({
        username: '',
        message: ''
        });
    };

    const onKeyPress = e => {
        if (e.key === 'Enter') {
            onClick();
        }
    };
    
    return (

            <div>
                <h1>창균아 누나한테 장가와라! 이건 이벤트연습이다!</h1>
                <input type="text"
                name="username"
                placeholder="이름"
                value={username}
                onChange={onChange}
                />

                <input type="text"
                name="message"
                placeholder="꾸꿍이 커여어"
                value={message}
                onChange={onChange}
                onKeyPress={onKeyPress}
                />

                <button onClick={onClick}>확인</button>
            </div>
        );
    };

export default EventPractice;
