import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Grid,
} from "@mui/material";

const CourseInstructor = () => {
  const [question, setQuestion] = useState("");
  const [testCaseInput, setTestCaseInput] = useState("");
  const [expectedOutput, setExpectedOutput] = useState("");
  const [testCases, setTestCases] = useState([]);

  const addTestCase = () => {
    const newTestCase = {
      input: testCaseInput,
      output: expectedOutput,
    };
    setTestCases([...testCases, newTestCase]);
    setTestCaseInput("");
    setExpectedOutput("");
  };

  const handleQuestionSubmit = () => {
    const newAssignment = {
      question,
      testCases,
    };
    console.log("Assignment Submitted: ", newAssignment);
    // TODO: Implement the logic to save this assignment
  };

  return (
    <Container maxWidth="md" style={{ marginTop: "2rem" }}>
      <Card>
        <CardContent>
          <Typography variant="h4" align="center" gutterBottom>
            Set Programming Assignment
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Question"
                fullWidth
                multiline
                rows={4}
                variant="outlined"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                label="Test Case Input"
                fullWidth
                variant="outlined"
                value={testCaseInput}
                onChange={(e) => setTestCaseInput(e.target.value)}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                label="Expected Output"
                fullWidth
                variant="outlined"
                value={expectedOutput}
                onChange={(e) => setExpectedOutput(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                onClick={addTestCase}
                fullWidth
              >
                Add Test Case
              </Button>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h6">Test Cases:</Typography>
              {testCases.map((testCase, index) => (
                <Card key={index} style={{ marginTop: "0.5rem" }}>
                  <CardContent>
                    <Typography>
                      <strong>Input:</strong> {testCase.input}
                    </Typography>
                    <Typography>
                      <strong>Expected Output:</strong> {testCase.output}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Grid>

            <Grid item xs={12}>
              <Button
                variant="contained"
                color="secondary"
                width="50%"
                onClick={handleQuestionSubmit}
                fullWidth
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};

export default CourseInstructor;
