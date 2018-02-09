use codeclan_dashboard;

db.syllabus.insert({
  week_number: 1,
  week_title: "Intro to programming",
  language: "Ruby",
  days: [
    {
    number: 1,
    content: ["Induction", "Intro to course structure", "Classroom culture", "Unix basics", "Git"]
    },
    {
    number: 2,
    content: ["Git review", "What is programming?", "Ruby conditionals", "Ruby functions", "Ruby testing", "Ruby functions TDD", "Intro to pair programming"]
    },
    {
    number: 3,
    content: ["Ruby arrays", "Ruby hashes", "Ruby loops", "Using loops in functions"]
    },
    {
    number: 4,
    content: ["Review", "TDD Fizzbuzz", "Effective text editing", "Ruby debugging", "Friends lab"]
    },
    {
    number: 5,
    content: ["Homework - Pet shop"]
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
});

db.syllabus.insert({
  week_number: 9,
  week_title: "Java/A ndroidProject",
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
    content: ["PRESENTATIONS"]
    },
    {
    number: 5,
    content: ["Review"]
    }
});

db.syllabus.insert({
  week_number: 10,
  week_title: "CS",
  language: "CS and CV",
  days: [
    {
    number: 1,
    content: ["Algorithms", "CV/PDA", "IT Industry Landscape", "CV/BIO workshop"]
    },
    {
    number: 2,
    content: ["Data Structures", "Brand of ME"]
    },
    {
    number: 3,
    content: ["TEchnical Testing and CV's", "Parallel Programming"]
    },
    {
    number: 4,
    content: ["Interview Skills Workshop"]
    },
    {
    number: 5,
    content: ["PDA Test", "CV Reviews", "Mock Interviews"]
    }
});

db.syllabus.insert({
  week_number: 11,
  week_title: "JS Foundations",
  language: "JavaScript",
  days: [
     {
     number: 1,
     content: ["JS Intro - Fundamentals", "Functions, Scope, Let & Const"]
     },
     {
     number: 2,
     content: ["Objects and Constructor Functions", "Prototypal Inheritance", "Water Bottle TDD". "OO Bank"]
     },
     {
     number: 3,
     content: ["Intro to callbacks", "Enumeration"]
     },
     {
     number: 4,
     content: ["This", "Lodash", "Closures"]
     },
     {
     number: 5,
     content: ["NPM recap"]
     }
 });

db.syllabus.insert({
  week_number: 12,
  week_title: "JS in the Browser",
  language: "JavaScript",
  days: [
    {
    number: 1,
    content: ["Browser JS intro", "DOM review", "Reading the DOM", "Writing the DOM"]
    },
    {
    number: 2,
    content: ["Event Listeners", "Local storage", "Todo app Lab". "Google Maps intro"s]
    },
    {
    number: 3,
    content: ["JS Requests", "Git Branching", "Countries pair lab"]
    },
    {
    number: 4,
    content: ["Canvas", "Charts"]
    },
    {
    number: 5,
    content: ["PDA lesson"]
    }
});

db.syllabus.insert({
  week_number: 13,
  week_title: "JS Full-stack",
  language: "JavaScript",
  days: [
    {
    number: 1,
    content: ["Intro to Express", "Express REST", "Webpack"]
    },
    {
    number: 2,
    content: ["Intro to Mongo", "Serve up API from DB"]
    },
    {
    number: 3,
    content: ["Event Loop Video", "Practical GitHub", "Bucket List all day Lab"]
    },
    {
    number: 4,
    content: ["What is Scrum?", "Hand out Group Projects"]
    },
    {
    number: 5,
    content: ["Group Projects"]
    }
});

db.syllabus.insert({
  week_number: 14,
  week_title: "Group Project",
  language: "Group Project",
  days: [
    {
    number: 1,
    content: ["Group Project"]
    },
    {
    number: 2,
    content: ["Group Project"]
    },
    {
    number: 3,
    content: ["Group Project"]
    },
    {
    number: 4,
    content: ["PRESENTATIONS"]
    },
    {
    number: 5,
    content: ["Speed Networking"]
    }
});

db.syllabus.insert({
  week_number: 15,
  week_title: "React",
  language: "React",
  days: [
    {
    number: 1,
    content: ["ES6 intro", "Frameworks Introduction", "React Intro, React Hello World, React Piggy Bank", "React Comments"]
    },
    {
    number: 2,
    content: ["Add a form to React comments", "React Lifecycle", "React countries", "API pair lab"]
    },
    {
    number: 3,
    content: ["Quiz", "Tic Tac Toe all day lab"]
    },
    {
    number: 4,
    content: ["React Router", "Socket.io", "Socket lab"]
    },
    {
    number: 5,
    content: ["Mock Interviews"]
    }
});
