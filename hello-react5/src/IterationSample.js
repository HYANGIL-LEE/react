import React, {useState} from 'react';

const IterartionSample = () => {
    const [names, setNames] = useState([
        { id: 1, text: '임창균'},
        { id: 2, text: '이주헌'},
        { id: 3, text: '손현우'},
    ]);
    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5);

    const onChange = e => setInputText(e.target.value);
    const onClick = () => {
        const nextNames = names.concat({
            id: nextId,
            text: inputText
        });
        setNextId(nextId + 1);
        setNames(nextNames);
        setInputText('');
    };
    const onRemove = id => {
        const nextNames = names.filter(name => name.id !== id);
        setNames(nextNames);
    };

    const namesList = names.map(name => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
        {name.text}
        </li>
    ));

    return (
    <>
    <input value={inputText} onChange={onChange}/>
    <button onClick={onClick}>추가</button>
    <ul>{namesList}</ul>
    </>
    );    
};

export default IterartionSample;