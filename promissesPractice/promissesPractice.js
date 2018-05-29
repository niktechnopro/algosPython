// Let's start with regular Promise
const users = [
  {
    id: 1,
    name: 'Nikolas',
    schoolId: 112
  },
  {
    id: 2,
    name: 'Jessica',
    schoolId: 121
  }
];
const grades = [
  {
    id: 1,
    schoolId: 112,
    grade: 86
  },
  {
    id: 2,
    schoolId: 121,
    grade: 100
  },
  {
    id: 1,
    schoolId: 112,
    grade: 97
  },
];
//this gets the user object based on id
const getUser = (id) => {
  return new Promise((resolve, reject)=>{
    // const user = users.find((user)=>{
    //   return user.id === id
    // })
    const user = users.find(user => user.id === id)
    if (user){
      resolve(user)
    }else{
      reject('user does not exist')
    }
  })
}

const getGrades = (schoolId) => {
  return new Promise((resolve, reject)=>{
    resolve(grades.filter(grade => grade.schoolId === schoolId));
  })
}

//over here we will be calling both of these functions
const getStatus = (userId) => {
  return getUser(userId).then(tempUser => {//here we'll have a school Id for that user
    // console.log(tempUser)
    return getGrades(tempUser.schoolId).then(grades => {
      //chaining map and reduce here
      var average = grades.map(grade => grade.grade).reduce((a,b) =>{
        return (a+b)/grades.length
      })
      // console.log(average)
      return (`The average grade in ${tempUser.name}'s is ${average}`)//that becomes return for the function getStatus;
    })
  })
}


getStatus(1).then(status => console.log(status)).catch(error => console.log(error));

// getGrades(112).then(result => console.log(result)).catch(err => console.log(err));

// getUser(2).then(result => console.log(result)).catch(err => console.log(err));

