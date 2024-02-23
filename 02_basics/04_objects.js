// singleton objects:

const fbUser = new Object();

fbUser.id = 122333;
fbUser.userName = "Raashid";
fbUser.isLoggedIn = true;

// console.log(fbUser);

const regularUser = {
    email: "rash@samsuung.com",
    userName: {
        fullName: {
            firstName: "Mohammed",
            lastName: "Raashid"
        }
    }
}
// console.log(regularUser.userName.fullName.lastName);

const obj1 = {1: "one", 2: "two"};
const obj2 = {3: "two", 4: "four"};
const obj4 = {5: "four", 6: "five"};

const obj3 = Object.assign(obj1, obj2);
// console.log(obj1);
// console.log(obj3);
const obj5 = Object.assign({}, obj1, obj2, obj4)
// console.log(obj1);
// console.log(obj5);

// Spread operator:
const newObj = {1: "one", 2: "two", 3: "three"};
const newObj1 = {4: "two", 5: "three", 6: "one"};
const newObj2 = {7: "four", 8: "five"};

const newObj3 = {...newObj, ...newObj1, ...newObj2};
// console.log(newObj3);

// We can create object inside an array and access it:
const users = [{
    email: "111@123.com",
    password: 123
}, {
    email: "222@123.com",
    password: 456
}, {
    email: "333@123.com",
    password: 789
}]
// console.log(users[2].password);

const instaUser = new Object();

instaUser.userName = "unique_one";
instaUser.password = "abc123";
instaUser.isLoggedIn = false;

// console.log(instaUser);
// console.log(Object.keys(instaUser));
// console.log(Object.values(instaUser));
// console.log(Object.entries(instaUser));

// console.log(instaUser.hasOwnProperty("password"));
// console.log(instaUser.hasOwnProperty("id"));

// Destructuring:
const course = {
    courseName: "React complete guide",
    coursePrice: 2999,
    courseInstructor: "Max"
}

console.log(course.courseInstructor);  // Instead of accessing like this we can go for object destructuring

const {courseInstructor : instructor} = course;
console.log(instructor);

// JSON format:
// {
//     "name": "Rash",
//     "email": "rash123@intel.com",
//     "id": 1243
// }