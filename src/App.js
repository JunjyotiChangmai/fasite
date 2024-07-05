import Search from "./Components/Search/Search";
import AddMembers from "./Pages/Addmembers/AddMembers";
import Family from "./Pages/Family/Family";

function App() {
  return (
    <div className="App">
      {/* <Search /> */}
      <AddMembers />
    </div>
  );
}

export default App;



// import React, { useState } from 'react';
// import './App.css';

// // FamilyTree component to recursively display the tree
// const FamilyTree = ({ member }) => {
//   const [collapsed, setCollapsed] = useState(true);

//   const toggleCollapse = () => {
//     setCollapsed(!collapsed);
//   };

//   return (
//     <ul>
//       <li>
//         <div className="member" onClick={toggleCollapse}>
//           {member.userName}
//           {member.children && member.children.length > 0 && (
//             <span className="toggle">{collapsed ? '▼' : '▲'}</span>
//           )}
//         </div>
//         {!collapsed && member.children && member.children.length > 0 && (
//           <ul className="children">
//             {member.children.map(child => (
//               <FamilyTree key={child._id} member={child} />
//             ))}
//           </ul>
//         )}
//       </li>
//     </ul>
//   );
// };

// // Main App component
// const App = () => {
//   const data = [
//     { _id: '66843ee0b95e38ded28167e4', fatherName: 'nai', userName: 'Grandfather', generation: 1 },
//     { _id: '66843efbb95e38ded28167e7', fatherName: 'Grandfather', userName: 'father', generation: 2 },
//     { _id: '66843f19b95e38ded28167ea', fatherName: 'father', userName: 'Junjyoti Changmai', generation: 3 },
//     { _id: '66843f25b95e38ded28167ed', fatherName: 'father', userName: 'Munmi Changmai', generation: 3 },
//     { _id: '668674a082af86fc25296042', fatherName: 'Grandfather', userName: 'Nisa', generation: 2 },
//     { _id: '6686751f6809ae6d21574895', fatherName: 'Nisa', userName: 'Kaka', generation: 3 }
//   ];

//   const buildFamilyTree = (data) => {
//     const root = {};
//     const map = {};

//     data.forEach(person => {
//       person.children = [];
//       map[person.userName] = person;
//     });

//     data.forEach(person => {
//       if (person.fatherName === 'nai') {
//         root[person.userName] = person;
//       } else {
//         const parent = map[person.fatherName];
//         if (parent) {
//           parent.children.push(person);
//         }
//       }
//     });

//     return root;
//   };

//   const familyTree = buildFamilyTree(data);

//   return (
//     <div className="family-tree-container">
//       {Object.values(familyTree).map(member => (
//         <FamilyTree key={member._id} member={member} />
//       ))}
//     </div>
//   );
// };

// export default App;



