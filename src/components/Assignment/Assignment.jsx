// const Assignment = () => {
//   return (
//     <>
//      <Sidenav />
//      <div>
//         <Typography variant='h3' align='center'> Assignment </Typography>
//      </div>
//     </>
//   );
// };

// export default Assignment;

import React from "react";
import {
  Container,
  Typography,
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  TextField,
} from "@mui/material";
import questions from "./questions";
import Sidenav from "../Sidenav";

const QuestionCard = ({ question }) => {
  const renderOptions = () => {
    if (question.type === "MCQ") {
      return (
        <FormControl component="fieldset">
          <RadioGroup name={`question-${question.id}`}>
            {question.options.map((option, index) => (
              <FormControlLabel
                key={index}
                value={option}
                control={<Radio />}
                label={option}
              />
            ))}
          </RadioGroup>
        </FormControl>
      );
    } else if (question.type === "MSQ") {
      return (
        <FormControl component="fieldset">
          {question.options.map((option, index) => (
            <FormControlLabel
              key={index}
              control={<Checkbox name={`question-${question.id}-${index}`} />}
              label={option}
            />
          ))}
        </FormControl>
      );
    } else if (question.type === "Numerical") {
      return <TextField type="number" label="Your Answer" variant="outlined" />;
    }
  };

  return (
    <Card variant="outlined" style={{ marginBottom: "16px" }}>
      <CardContent>
        <Typography variant="h6">{question.text}</Typography>
        {renderOptions()}
      </CardContent>
    </Card>
  );
};

const Assignment = () => {
  return (
    <>
      <Sidenav />
      <Container>
        <Box my={4}>
          <Typography variant="h4" gutterBottom>
            SOLVE THIS Assignment
          </Typography>
          {questions.map((question) => (
            <QuestionCard key={question.id} question={question} />
          ))}
          <Button variant="contained" color="primary">
            Submit
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default Assignment;
