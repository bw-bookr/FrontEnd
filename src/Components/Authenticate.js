import React from 'react';


const Authenticate = BookList => LoginPage =>
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        loggedIn: false
      };
    }
    componentDidMount() {
      //(!localStorage.getItem('jwt')) ? this.setState({loggedIn:true}) : this.setState({loggedIn:false})
      // if (!localStorage.getItem('jwt')) {
      //   console.log("No jwt");
      //   this.setState({ loggedIn: false });
      // } else {
      //   console.log("jwt exists");
      //   this.setState({ loggedIn: true });
      //   this.props.history.push('/BookList');
      // }
      const usr = localStorage.getItem('jwt');
      console.log("USR -> ", usr);
      if (usr != 'undefined' || usr != null) {
        this.setState({ loggedIn: true}, () => {
          console.log("STATE -> ", this.state.loggedIn);
        });
      } else {
        this.setState({ loggedIn: false}, () => {
          console.log("STATE -> ", this.state.loggedIn);
        });
      }





    }
    render() {
      console.log("Check Render:  ", this.state.loggedIn);
      if (this.state.loggedIn) return <BookList />;
      return <LoginPage />;
    }
  };

export default Authenticate;