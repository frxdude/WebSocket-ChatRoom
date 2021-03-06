// import React from 'react';
// import SockJsClient from 'react-stomp';

// class SampleComponent extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   sendMessage = (msg) => {
//     this.clientRef.sendMessage('/topics/all', msg);
//   }

//   render() {
//     return (
//       <div>
//         <SockJsClient url='http://localhost:8080/B180910040' topics={['/topics/all']}
//             onMessage={(msg) => { console.log(msg); }}
//             ref={ (client) => { this.clientRef = client }} />
//       </div>
//     );
//   }
// }
// export default SampleComponent;