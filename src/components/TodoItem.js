import React from 'react';
import '../App.css';
import styles from './TodoItem.module.css';

class TodoItem extends React.Component {
  state = {
    editing: false,
  };
  handleEditing = () => {
    this.setState({
      editing: true,
    });
  };

  handleUpdateDone = (event) => {
    if (event.key === `Enter`) {
      this.setState({ editing: false });
    }
  };

  componentWillUnmount() {
    console.log(`Cleaning up...`);
  }
  render() {
    const completedStyle = {
      fontStyle: 'italic',
      color: '#595959',
      opacity: 0.4,
      textDecoration: 'line-through',
    };

    let viewMode = {};
    let editMode = {};

    if (this.state.editing) {
      viewMode.display = `none`;
    } else {
      editMode.display = `none`;
    }
    return (
      <li className={styles.item}>
        <div onDoubleClick={this.handleEditing} style={viewMode}>
          <input
            className={styles.checkbox}
            type="checkbox"
            checked={this.props.stavke.completed}
            onChange={() => this.props.handleChangeProp(this.props.stavke.id)}
          />
          <button onClick={() => this.props.delTodoProp(this.props.stavke.id)}>
            Delete
          </button>
          <span style={this.props.stavke.completed ? completedStyle : null}>
            {this.props.stavke.title}
          </span>
        </div>
        <input
          type="text"
          className={styles.textInput}
          style={editMode}
          value={this.props.stavke.title}
          onChange={(e) => {
            this.props.setUpdate(e.target.value, this.props.stavke.id);
          }}
          onKeyDown={this.handleUpdateDone}
        />
      </li>
    );
  }
}
export default TodoItem;

// import React from 'react';
// import '../App.css';
// import styles from './TodoItem.module.css';
// import React, { useState } from 'react';

// const TodoItem = (props) => {
//   const [editing, setEditing] = useState([]);
//   const handleEditing = () => {
//     ({
//       editing: true,
//     });
//   };

//   handleUpdateDone = (event) => {
//     if (event.key === `Enter`) {
//       this.setState({ editing: false });
//     }
//   };

//   componentWillUnmount() {
//     console.log(`Cleaning up...`);
//   }
//   render() {
//     const completedStyle = {
//       fontStyle: 'italic',
//       color: '#595959',
//       opacity: 0.4,
//       textDecoration: 'line-through',
//     };

//     let viewMode = {};
//     let editMode = {};

//     if (this.state.editing) {
//       viewMode.display = `none`;
//     } else {
//       editMode.display = `none`;
//     }
//     return (
//       <li className={styles.item}>
//         <div onDoubleClick={this.handleEditing} style={viewMode}>
//           <input
//             className={styles.checkbox}
//             type="checkbox"
//             checked={this.props.stavke.completed}
//             onChange={() => this.props.handleChangeProp(this.props.stavke.id)}
//           />
//           <button onClick={() => this.props.delTodoProp(this.props.stavke.id)}>
//             Delete
//           </button>
//           <span style={this.props.stavke.completed ? completedStyle : null}>
//             {this.props.stavke.title}
//           </span>
//         </div>
//         <input
//           type="text"
//           className={styles.textInput}
//           style={editMode}
//           value={this.props.stavke.title}
//           onChange={(e) => {
//             this.props.setUpdate(e.target.value, this.props.stavke.id);
//           }}
//           onKeyDown={this.handleUpdateDone}
//         />
//       </li>
//     );
//   }
// }
// export default TodoItem;
