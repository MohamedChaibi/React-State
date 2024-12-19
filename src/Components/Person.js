import React, { Component } from 'react'

export default class person extends Component {
    constructor (props) {
        super(props);
        this.person = {
            fullName: "Mohamed",
            bio: "Student",
            imgSrc: "https://cdn5.vectorstock.com/i/1000x1000/52/54/male-student-graduation-avatar-profile-vector-12055254.jpg",
            profession: "web developer",
        };
    }
  render() {
    return (
      <div>
        <h1>{this.person.fullName}</h1>
        <h2>{this.person.bio}</h2>
        <h2>{this.person.profession}</h2>
        <img src={this.person.imgSrc} alt='Student' />
      </div>
    )
  }
}