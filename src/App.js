import React from 'react';
import UserList from './components/UserList';
import UserAddForm from './components/UserAddForm';
import './App.css';
import PostList from './components/PostList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      background: 'white',
      color:'black',
      users: [],
      posts:[]
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        const result = data.filter(user => user.id < 3);
          result.forEach(user => {
            user.isGoldClient = false;
            user.salary='100'
            user.image='https://img3.stockfresh.com/files/y/yayayoyo/m/42/9266305_stock-vector-call-me-emoticon.jpg'
        this.setState({users:result})
        });
        
      })
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        const postare = data.filter(post => post.id < 3);
        this.setState({posts:postare})
      }) 
}

  changeColor(event) {
    this.setState({background: event.target.value});
  }
  changeColorText(event){
    this.setState({color: event.target.value});
  }

  getMaxId(users) {
    let maxId = 0;

    users.forEach(user => {
      if (user.id > maxId) {
        maxId = user.id;
      }
    });

    return maxId;
  }
  
  submitAddForm(event, name, email, isGoldClient,salary,image) {
    event.preventDefault();
    this.setState(prevState => {
      return {
        users: [
          ...prevState.users,
          {
            id: this.getMaxId(prevState.users) + 1,
            name,
            email,
            isGoldClient,
            salary,
            image  
          }
        ]
      }
    });
  }

  hideUsers(){
    this.setState({users: false })
  }
  hidePosts(){
    this.setState({posts: false})
    console.log(this.state.posts)
  }

  handleDeleteUser = (user) => {
        let data = [...this.state.users];
        data.splice(user, 1);
        console.log(data)
        this.setState({ 
          users: data
        })
      }

  render() {
    return(
      <div className="app" style={{background: this.state.background,color:this.state.color}}>
        <h1>Admin panel - Proiectul 1</h1>
        <UserAddForm submitAddForm={(event, name, email, isGoldClient,salary,image) => this.submitAddForm(event, name, email, isGoldClient,salary,image)}/>
        <p className="buttonColor">Text:<input type="color" onChange={(event)=> this.changeColorText(event)} value="#000000"/></p>
        <p className="buttonColor">BackGround:<input type="color" onChange={(event) => this.changeColor(event)}value="#ffffff"/></p>
        <button className="show" onClick={(event) => this.hidePosts(event)}>Ascunde Post</button>
        <button onClick={()=>this.handleDeleteUser()}>Delete User</button>
        <UserList users ={this.state.users}/>
        {this.state.posts !== false
         ? <PostList posts = {this.state.posts}/>
         : null
         }
      </div>
    );
  }
}

export default App;
