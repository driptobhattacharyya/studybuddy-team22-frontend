import React, { useState, useEffect, useRef } from "react";
import Sidenav from "../Sidenav";
import { Typography } from "@mui/material";
import Flashcard from "./Flashcard";
import { Button, FormControl, Select, MenuItem } from "@mui/material";
// import FlashcardGenerateButton from '../FlashcardGenerateButton'
import "../../app.css";
import axios from "axios";
import { Box } from "@mui/material";

const FlashcardGenerateButton = () => {
  const handleGenerate = () => {
    // Logic for downloading PDF
    alert("Generating Flashcards...");
  };
  return (
    <Button variant="contained" color="primary" onClick={handleGenerate}>
      Generate
    </Button>
  );
};

// function handleChange(e){
//     e.preventDefault()

const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    subject: "Biology",
    question: "Mitochondria",
    answer:
      'Mitochondria are membrane-bound organelles present in the cytoplasm of all eukaryotic cells that produce adenosine triphosphate (ATP), the main energy molecule used by the cell. They are known as the "Powerhouse of the cell.',
  },
  {
    id: 2,
    question: "Mitochondrial Disorders",
    subject: "Biology",
    answer: "Alpers Disease, Barth Syndrome, and Kearns-Sayre syndrome (KSS)",
  },
  {
    id: 2,
    question: "Functions of Mitochondria",
    subject: "Biology",
    answer:
      "Beyond energy production, mitochondria regulate metabolism, promote cell growth and multiplication, detoxify ammonia in liver cells, facilitate apoptosis, build blood and hormones, maintain calcium levels, and are involved in cellular differentiation, signaling, senescence, and cell cycle control.",
  },
  {
    id: 2,
    question: "Structure of Mitochondria",
    subject: "Biology",
    answer:
      "he mitochondrion is a double-membraned, rod-shaped structure found in both plant and animal cells, ranging from 0.5 to 1.0 micrometre in diameter. ",
  },
  {
    id: 2,
    question: "What is 2+2?",
    subject: "Math",
    answer: "4",
  },
  {
    id: 3,
    question: "Colors?",
    answer: "VIBGYOR",
    subject: "Computer Science",
  },
  {
    id: 4,
    question: "What is a Membrane?",
    subject: "English",
    answer:
      "A membrane is a selective barrier; it allows some things to pass through but stops others. Such things may be molecules, ions, or other small particles. Membranes can be generally classified into synthetic membranes and biological membranes.",
  },
];

// }

const FlashcardList = () => {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS);
  // const [categories, setCategories] = useState([])
  const [subject, setSubject] = useState("Biology");

  // Handle change event
  const handleChange = (event) => {
    // setSubject(event.target.value);
  };
  const categoryEl = useRef();

  const [curr_category, setCategory] = useState("Biology");

  // useEffect(() => {
  //   axios
  //   .get('https://opentdb.com/api_category.php')
  //   .then(res => {
  //       console.log(res.data)
  //   })
  // }, [])

  // useEffect(() => {
  //   axios
  //    .get('https://opentdb.com/api_category.php')
  //    .then(res => {
  //     setCategories(res.data.trivia_categories)
  //    })
  // })

  // useEffect(() => {
  //   axios
  //    .get('https://opentdb.com/api_category.php') //change flashcard api
  //    .then(res => {
  //     setFlashcards(res.data)
  //    })
  // })

  return (
    <>
      <Sidenav />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <FormControl style={{ width: "10%" }}>
          {/* <InputLabel id="demo-simple-select-label">Subject</InputLabel> */}
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={subject}
            label="Subject"
            // onChange={handleChange}
            align="center"
          >
            <MenuItem
              onClick={() => {
                setSubject("Biology");
              }}
              value="Biology"
            >
              Biology
            </MenuItem>
            <MenuItem onClick={() => setSubject("Math")} value="Math">
              Math
            </MenuItem>
            <MenuItem onClick={() => setSubject("English")} value="English">
              English
            </MenuItem>
            <MenuItem
              onClick={() => setSubject("Computer Science")}
              value="Computer Science"
            >
              Computer Science
            </MenuItem>
          </Select>
        </FormControl>

        <Box sx={{ position: "absolute", left: 850, top: 90, m: 2 }}>
          <FlashcardGenerateButton />
        </Box>
      </div>

      <div className="container">
        <div className="card-grid" align="center">
          {flashcards
            .filter((card) => card.subject === subject)
            .map((flashcard) => {
              return (
                <Flashcard flashcard={flashcard} key={flashcard.subject} />
              );
            })}
        </div>
      </div>
    </>
  );
};

export default FlashcardList;
