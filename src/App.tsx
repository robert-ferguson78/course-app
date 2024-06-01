import Programme from './components/programme'
import setuCrest from "./assets/setu_crest.png"
import './App.css'

const App = () => {
  const modules = [
    {
      name: "Web Development 1",
      noLectures: 1,
      noPracticals: 2,
    },
    {
      name: "Programming",
      noLectures: 2,
      noPracticals: 3,
    },
    {
      name: "Web Development 2",
      noLectures: 3,
      noPracticals: 1,
    },
    {
      name: "Computer Systems & Networks",
      noLectures: 4,
      noPracticals: 6,
    },
    {
      name: "Database",
      noLectures: 3,
      noPracticals: 1,
    },
    {
      name: "Full Stack Web Development 1",
      noLectures: 5,
      noPracticals: 2,
    },
    {
      name: "Developer Operations",
      noLectures: 6,
      noPracticals: 3,
    },
    {
      name: "Full Stack Web Development 2",
      noLectures: 5,
      noPracticals: 3,
    },
    {
      name: "Software Security",
      noLectures: 4,
      noPracticals: 1,
    },
    {
      name: "mobile App Development",
      noLectures: 2,
      noPracticals: 6,
    },
  ];
  const name = "Higher Diploma in Computer Science";


  return (
    <>
      <header className="App-header">
        <img className="center" src={setuCrest} alt="logo" />
      </header>
      <div className="programme">
        <Programme title={name} modules={modules} />
      </div>
    </>
  )
}

export default App
