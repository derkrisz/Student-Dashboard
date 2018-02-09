use codeclan_dashboard;

db.dropDatabase();

db.syllabus.insert({
  week_number: 1,
  week_title: "Intro to programming",
  language: "Ruby",
  day1: "Induction \n Intro to course structure \n Classroom culture \n Unix basics \n Git",
  day2: "Git review \n What is programming? \n Ruby conditionals \n Ruby functions \n Ruby testing \n Ruby functions TDD \n Intro to pair programming",
  day3: "Ruby arrays \n Ruby hashes \n Ruby loops \n Using loops in functions",
  day4: "Review \n TDD Fizzbuzz \n Effective text editing \n Ruby debugging \n Friends lab",
  day5: "Homework - Pet shop"
});

db.syllabus.insert({
  week_number: 2,
  week_title: "OO in Ruby",
  language: "Ruby",
  days: [
    {
    number: 1,
    content: ["Introduction to classes pt1", "Introduction to classes pt2", "Lab (single classes)"]
    },
    {
    number: 2,
    content: ["Intro to diagrams", "Multiple classes", "Bus lab"]
    },
    {
    number: 3,
    content: ["Paired lab", "Paired lab presentations", "Diagrams"]
    },
    {
    number: 4,
    content: ["Blocks and enumeration", "Pry", "Inheritance", "Inheritance minilab"]
    },
    {
    number: 5,
    content: ["Homework - Codeclan Caraoke"]
  }]
});

db.syllabus.insert({
  week_number: 3,
  week_title: "SQL",
  language: "SQL",
  days: [
    {
    number: 1,
    content: ["Intro to SQL", "Associations intro", "Zombies lab"]
    },
    {
    number: 2,
    content: ["Pizza shop code along", "Bounty hunters lab"]
    },
    {
    number: 3,
    content: ["Associations and association diagrams", "Extending pizza shop", "Music library lab"]
    },
    {
    number: 4,
    content: ["SQL inner joins intro", "Associations - many to many"]
    },
    {
    number: 5,
    content: ["Homework - Codeclan Cinema"]
  }]
});

db.syllabus.insert({
  week_number: 4,
  week_title: "Sinatra",
  language: "Ruby",
  days: [
    {
    number: 1,
    content: ["UX presentation by Wojtek"]
    },
    {
    number: 2,
    content: ["Planning/PDA lesson", "Web programming intro and MVC"]
    },
    {
    number: 3,
    content: ["First app (Sinatra intro)", "Sinatra calculator"]
    },
    {
    number: 4,
    content: ["Student enrolment lab", "Many to many Sinatra app codebase"]
    },
    {
    number: 5,
    content: ["Projects!"]
  }]
});

db.syllabus.insert({
  week_number: 5,
  week_title: "Ruby Project",
  language: "Ruby",
  days: [
    {
    number: 1,
    content: ["Project"]
    },
    {
    number: 2,
    content: ["Project"]
    },
    {
    number: 3,
    content: ["Project"]
    },
    {
    number: 4,
    content: ["Project"]
    },
    {
    number: 5,
    content: ["PRESENTATIONS"]
  }]
});

db.syllabus.insert({
  week_number: 6,
  week_title: "Java",
  language: "Java",
  days: [
    {
    number: 1,
    content: ["Intro to Java/IDEs", "Single classes & encapsulation", "Types", "ArrayLists", "Loops & Conditionals", "Eightball lab"]
    },
    {
    number: 2,
    content: ["Multiple classes", "Buses lab", "Hashmaps", "Enums", "Quiz"]
    },
    {
    number: 3,
    content: ["All day lab", "Generics lesson"]
    },
    {
    number: 4,
    content: ["Generics lab", "Inheritance", "Packages & access modifiers", "Try/Catch", "Employee lab"]
    },
    {
    number: 5,
    content: ["Weekend homework"]
  }]
});

db.syllabus.insert({
  week_number: 7,
  week_title: "Java",
  language: "Java",
  days: [
    {
    number: 1,
    content: ["Abstract Classes", "Interfaces", "Stereo system lab"]
    },
    {
    number: 2,
    content: ["Polymorphism", "Polymorphism lab", "Composition", "Composition lab"]
    },
    {
    number: 3,
    content: ["Adventure time lab"]
    },
    {
    number: 4,
    content: ["SOLID review", "SOLID lab", "Intro to Android", "Robot Android exercise"]
    },
    {
    number: 5,
    content: ["Weekend homework - Music shop"]
  }]
});

db.syllabus.insert({
  week_number: 8,
  week_title: "Android",
  language: "Java + Android",
  days: [
    {
    number: 1,
    content: ["Basic android app", "Adding controls", "Deployment", "Word counter lab"]
    },
    {
    number: 2,
    content: ["Activities and intents", "Custom Listview Adapters"]
    },
    {
    number: 3,
    content: ["Rock paper scissors lab"]
    },
    {
    number: 4,
    content: ["Data persistence", "Menu", "Movies ranking lab"]
    },
    {
    number: 5,
    content: ["Project time!"]
  }]
});

db.syllabus.insert({
  week_number: 9,
  week_title: "Java/AndroidProject",
  language: "Project Week",
  days: [
    {
    number: 1,
    content: ["Project"]
    },
    {
    number: 2,
    content: ["Project"]
    },
    {
    number: 3,
    content: ["Project"]
    },
    {
    number: 4,
    content: ["Project"]
    },
    {
    number: 5,
    content: ["PRESENTATIONS"]
  }]
});

db.syllabus.insert({
  week_number: 10,
  week_title: "CS",
  language: "CS and CV",
  day1: "Algorithms \n CV/PDA \n IT Industry Landscape \n CV/BIO workshop",
  day2: "Data Structures \n Brand of ME",
  day3: "Technical Testing and CV's \n Parallel Programming",
  day4: "Interview Skills Workshop",
  day5: "PDA Test \n CV Reviews \n Mock Interviews"
});

db.syllabus.insert({
  week_number: 11,
  week_title: "JS Foundations",
  language: "JavaScript",
  day1: "JS Intro - Fundamentals \n Functions, Scope, Let & Const",
  day2: "Objects and Constructor Functions \n Prototypal Inheritance \n Water Bottle TDD \n OO Bank",
  day3: "Intro to callbacks \n Enumeration",
  day5: "NPM recap"
 });

db.syllabus.insert({
  week_number: 12,
  week_title: "JS in the Browser",
  language: "JavaScript",
  day1: "Browser JS intro \n DOM review \n Reading the DOM \n Writing the DOM",
  day2: "Event Listeners \n Local storage \n Todo app Lab \n Google Maps intro",
  day3: "JS Requests \n Git Branching \n Countries pair lab",
  day4: "Canvas \n Charts",
  day5: "PDA lesson"
});

db.syllabus.insert({
  week_number: 13,
  week_title: "JS Full-stack",
  language: "JavaScript",
  day1: "Intro to Express \n Express REST \n Webpack",
  day2: "Intro to Mongo \n Serve up API from DB",
  day3: "Event Loop Video \n Practical GitHub \n Bucket List all day Lab",
  day4: "What is Scrum? \n Hand out Group Projects",
  day5: "Group Projects"
});

db.syllabus.insert({
  week_number: 14,
  week_title: "Group Project",
  language: "Group Project",
  day1: "Group Project",
  day2: "Group Project",
  day3: "Group Project",
  day4: "PRESENTATIONS",
  day5: "Speed Networking"
});

db.syllabus.insert({
  week_number: 15,
  week_title: "React",
  language: "React",
  day1: "ES6 intro \n Frameworks Introduction \n React Intro, React Hello World, React Piggy Bank \n React Comments",
  day2: "Add a form to React comments \n React Lifecycle \n React countries \n API pair lab",
  day3: "Quiz \n Tic Tac Toe all day lab",
  day4: "React Router \n Socket.io \n Socket lab",
  day5: "Mock Interviews"

});

db.syllabus.insert({
  week_number: 16,
  week_title: "Final Project",
  language: "Free Choice",
  day1: "Project",
  day2: "Project",
  day3: "Project",
  day4: "Project",
  day5: "GRADUATION"
});
