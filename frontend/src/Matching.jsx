import React, { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';

const fetchMatchCandidates = async () => {
  return {
    people: [
      {name: "John", linkToPicture: "https://i.insider.com/61f14a0ce996470011907119?width=600&format=jpeg&auto=webp"},
      {name: "Gabe", linkToPicture: "https://www.masterclass.com/course-images/attachments/rBJAtj5pz7vfNYdcbNsjkHeE?width=400&height=400&fit=cover&dpr=2"},
      {name: "Sam", linkToPicture: "https://i.insider.com/5cb8b133b8342c1b45130629?width=700"}
    ]
  }
}

function Matching(props) {
  const [peopleIndex, setPeopleIndex] = useState(-1)
  const [people, setPeople] = useState([])
  const [haveNotStarted, setHaveNotStarted] = useState(true)
  const [outOfPeople, setOutOfPeople] = useState(false)

  useEffect(() => {

    const fetchPeople = async () => {
      const people = await fetchMatchCandidates()
      setPeople(people.people)
    }

    fetchPeople()
  }, [])

  useEffect(() => {
    if (people.length > 0 && haveNotStarted) {
      setHaveNotStarted(false)
      setPeopleIndex(0)
    }
  }, [people])

  useEffect(() => {
    if (peopleIndex > people.length - 1) {
      setOutOfPeople(true)
    } else {
      setOutOfPeople(false)
    }
  }, [peopleIndex])

  const maybeImage = () => {
    if (props.profile && props.profile.linkToPicture) {
      return <Box
        component="img"
        sx={{
          maxHeight: { xs: 500, md: 250 },
          maxWidth: { xs: 500, md: 250 },
        }}
        alt="Match Candidate"
        src={props.profile.linkToPicture}
      />
    } else {
      return <div/>
    }
  }

  const maybeMatchCandidate = (people, peopleIndex) => {
    if (people.length > 0 && peopleIndex > -1 && peopleIndex < people.length) {
      return <div>
        <Typography variant="h5">{people[peopleIndex.name]}</Typography>
        <Box
            component="img"
            sx={{
              maxHeight: { xs: 500, md: 250 },
              maxWidth: { xs: 500, md: 250 },
            }}
            alt="Match Candidate"
            src={people[peopleIndex].linkToPicture}
        />
        </div>
    } else if (people.length > 0 && peopleIndex > -1) {
      return <Typography variant="h4"> All out of people, Sorry! </Typography>
    } else {
      return <div/>
    }
  }

  const like = async () => {
    // Call smart contract
  }

  const onClickYes = async () => {
    // Check if match
    await like(people)
    //setPeopleIndex(peopleIndex + 1)
  }

  const onClickNo = () => {
    setPeopleIndex(peopleIndex + 1)
  }

  return (
    <div className="App">
      <div className="App">
        <Typography variant="h3"> Find some matches! </Typography>
        <Typography variant="h6"> Account: {props.address} </Typography>
        <br/>
        {maybeMatchCandidate(people, peopleIndex)}
        <Button disabled={outOfPeople} onClick={onClickYes}>Yes</Button>
        <Button disabled={outOfPeople} onClick={onClickNo}>No</Button>
      </div>
    </div>
  );
}

export default Matching;
