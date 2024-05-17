// import Layout from "./components/Layout";
// import TodoContainer from "./components/todo/TodoContainer";

// const App = () => {
//   return (
//     <Layout>
//       <TodoContainer />
//     </Layout> 
//   );
// };

// // function App() {
// //   const initialState = [
// //     {id: 0, title: "", body: "", isDone: false}
// //   ];
// //   const [users, setUsers] = useState(initialState);

// //   // TODO: 제목과 내용을 각각 상태로 정의. 초기값은 빈문자열("")
// //   const [title, setTitle] = useState("");
// //   const [body, setBody] = useState("");

// //   const addUser = (e) => {
// //     e.preventDefault();
// //     // TODO: 사용자 리스트 상태를 업데이트/spread operator 를 사용하고, 추가되는 id는 현재 시간을 밀리초 단위로 반환하는 Date.now() 를 사용.
// //     const newUser = { id: Date.now(), title: title, body: body };
// //     setUsers([...users, newUser]);

// //     setTitle("");
// //     setBody("");
// //   };

// //   const removeUser = (id) => {
// //     // TODO: filter 메소드/삭제 로직
// //     setUsers(users.filter(user => user.id !== id));
// //   };

// //   return (
// //     <>
// //       <h1>My Todo List</h1>
// //       <form onSubmit={addUser}>
// //         <input 
// //           type="text" 
// //           placeholder="제목" 
// //           value={title} 
// //           onChange={(e) => setTitle(e.target.value)} 
// //         />
// //         <input 
// //           type="text" 
// //           placeholder="내용" 
// //           value={body} 
// //           onChange={(e) => setBody(e.target.value)} 
// //         />
// //         <button type="submit">추가하기</button>
// //       </form>
// //       <ul>
// //         {/* TODO: map 메소드를 이용해서 user 리스트를 렌더링*/}
// //         {/* 제목: , 내용:  [삭제] 버튼이 하나의 행에 나옴. */}
// //         {users.map(user => (
// //           <li key={user.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
// //             제목: {user.title}, 내용: {user.body}
// //             <button onClick={() => removeUser(user.id)} style={{ marginLeft: '10px' }}>삭제</button>
// //           </li>
// //         ))}
// //       </ul>
// //     </>
// //   );
// // }

// export default App;