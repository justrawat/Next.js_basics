import React, { Component } from "react";
import Link from "next/link";
import Router from "next/router";

class IndexPage extends Component {
  //getInitialProps is a lifecycle hook that enables server side rendering in a page and allows us to use initial data population.
  //This means you could initialize your app before it loads.
  //You could prepopulate your props from the data that this component would recieve, if it fetches something from a database.
  //Also this is a static async method. Which means you could use async await here and if you don't want that you could just resolve a promise if you want to fetch some data from a server.

  static getInitialProps(context) {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ appName: "Super App" });
      }, 1000);
    });
    return promise;
  }

  render() {
    return (
      <div>
        <h1>The Main Page of {this.props.appName}</h1>
        <p>
          Go to{" "}
          <Link href="/auth">
            <a>Auth</a>
          </Link>
        </p>
        <button onClick={() => Router.push("/auth")}>Go to Auth</button>
      </div>
    );
  }
}

export default IndexPage;
