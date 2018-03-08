# Codeclan Student Dashboard:

An intranet dashboard for Codeclan students.
A place for students to access daily and weekly information - what the syllabus is for the week ahead, to be able to view the plan for future weeks and to see at a glance what events are happening internally that week.

The page is dynamic and displays information based on the date and time of the day. Students can see their full schedule and presented with the weekly breakdown of the schedule of each cohort. There is also a list of tech Meetups in Edinburgh, and a list of internal events of CodeClan in the near future. Meetup venues are displayed on Google maps. There is also a dedicated Careers section with employer partners and available jobs.

### MVP:
 - To show all the current cohorts weekly/daily schedule.
 - To be able to view the full syllabus by week.
 - To show the events that are taking place internally in any week.

### Extensions:
  - To be able to see what events are happening in the future (may be a calendar view)
  - To add links to PDA, Careers/Jobs, contact links to admin/homework submission etc.
  - To add data on local Tech Meetups using an external API, possibly with Map view.
  - And any other extensions…

## Getting started

### Prerequisites:
  After pulling the project down to the local directory, install all front-end and back-end packages with the npm package manager.
  ```
  npm install
  ```
  Inside both the back_end and front_end directories of the project.

### Installing:
  First, set up the back-end server and Mongo database:

  In the `back_end` directory, start the database and seed with the syllabus api.
  ```
  mongod
  mongo < database_seed.js
  ```
  Start the back-end server.
  ```
  npm start
  ```
  Then set up the front-end server:

  Start webpack in the `front_end` directory.
  ```
  npm run build
  ```
  Then start the server in the `front_end` directory.
  ```
  npm start
  ```

  Use `http://localhost:3000/` to start the app in the browser.

### Created with:

Vanilla JavaScript, MongoDB, External and internal APIs, HTML, CSS

#### Authors:

Anna Lanigan, Andrew Wright, Krisztian Der
 
