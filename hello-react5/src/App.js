import React, {useRef, useCallback, useState} from 'react';
import produce from 'immer';
import {Route, Link, Switch} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Profiles from './Profiles';
import HistorySample from './HistorySample';

const App = () => {
//   const nextId = useRef(1);
//   const [form, setForm] = useState({ name: '',username:''});
//   const [data, setData] = useState({
//     array: [],
//     uselessValue: null
//   });

//   const onChange = useCallback(e => {
//       const { name, value } = e.target;
//       setForm(
//         produce(draft => {
//           draft[name]=value;
//         })
//       );
//     },
//     []
//   );

//   const onSubmit = useCallback(e=> {
//       e.preventDefault();
//       const info ={
//         id: nextId.current,
//         name: form.name,
//         username: form.username
//       };

//       setData(
//         produce(draft => {
//           draft.array.push(info);
//         })
//         );

//       setForm({
//         name:'',
//         username:''
//       });
//       nextId.current += 1;
//     },
//     [form.name, form.username]
//   );

//   const onRemove = useCallback(
//     id => {
//       setData(
//         produce(draft => {
//           draft.array.splice(draft.array.findIndex(info => info.id === id), 1);
//         })
//         );
//     },
//     []
//   );

  // return (
  //   <div>
  //     <form onSubmit={onSubmit}>
  //       <input
  //       name="username"
  //       placeholder="아이디"
  //       value={form.username}
  //       onChange={onChange}
  //       />
  //       <input
  //       name="name"
  //       placeholder="이름"
  //       value={form.name}
  //       onChange={onChange}
  //       />
  //       <button type="submit">등록</button>
  //     </form>
  //     <div>
  //       <ul>
  //         {data.array.map(info => (
  //           <li key={info.id} onClick={() => onRemove(info.id)}>
  //             {info.username} ({info.name})
  //           </li>
  //         ))}
  //       </ul>
  //     </div>
  //   </div>
  // );
  //         };
  
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">플필</Link>
        </li>
        <li>
          <Link to="/history">History 어어어어~</Link>
        </li>
      </ul>
      <hr/>
      <Switch>
        <Route path ="/" component={Home} exact={true} />
        <Route path ={['/about', '/info']} component={About} />
        <Route path ="/profiles" component={Profiles} />
        <Route path ="/history" component={HistorySample} />
        <Route 
        render={({location})=> (
          <div>
            <h2>아 글쎄 이페이지는 손자이시마셍이라니까:</h2>
            <p>{location.pathname}</p>
          </div>
        )}
        />
      </Switch>
    </div>

  )
  };

//     <div>
//        <ul>
//          <li>
//            <Link to="/">홈</Link>
//          </li>
//          <li>
//            <Link to="/about">소개</Link>
//          </li>
//          <li>
//            <Link to="/profiles">프로필</Link>
//          </li>
//          <li>
//            <Link to="/history">History 예제</Link>
//          </li>
//        </ul>
//        <hr/>
//       <Switch>
//          <Route path ="/profiles" component={Profiles} />
//          <Route path ="/history" component={HistorySample} />
//         <Route 
//         render = {({location}) => (
//           <div>
//             <h2>코노 페ㅡ지와 손자이시마셍</h2>
//             <p>{location.pathname}</p>
//           </div>
//         )}
//         />
//       </Switch>
//     </div>
//   );
// };

export default App;
