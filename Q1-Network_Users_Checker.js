/*
Question - 1

You are a college student and you want to stream a movie over one of the campus’s Wi-Fi networks. 
Based on the number of users, some networks won’t have the data to stream a movie.

Create Network class to track how much total data and how many users each network has:

The properties of the Network class should be:

data: Total units of data supplied by the network
users: Total numbers of users currently on the network

Each user on average deducts 5 units from the network’s total data. 
To watch a movie you must connect to a network that has at least 10 remaining units of data.

Add a method movieTime() to the Network class that returns true if there is enough data available to watch a movie, false if there isn’t.
*/

// Answer

class Network {
  constructor(data, users) {
    this.data = data;
    this.users = users;
  }

  // Insert code
  movieTime() {
    const singleData = this.data / this.users
    if(singleData >= 10) {
      return true;
    }
    return false;
  }
}

// Test
const library = new Network(50, 9) 
console.log(library.movieTime())