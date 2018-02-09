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
    content: ["Basic android app", "Addig controls", "Deployment", "Word counter lab"]
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
