import React, { useState, useRef } from "react";
import Sidenav from "../Sidenav";
import { Typography, Grid, Button, Card, CardContent } from "@mui/material";
import Editor from "@monaco-editor/react";

import questions from "./Questions";
import axios from "axios";
import base64 from "base-64";

const files = {
  "script.py": {
    name: "script.py",
    language: "python",
    value: "# some comment",
  },
  "index.html": {
    name: "index.html",
    language: "html",
    value: "<!-- some comment -->",
  },
};

const Code = () => {
  const [fileName, setFileName] = useState("script.py");
  const file = files[fileName];
  const editorRef = useRef(null);

  const [selectedQuestion, setSelectedQuestion] = useState(questions[0]);
  const [testResults, setTestResults] = useState([]);

  async function runCode() {
    const code = editorRef.current.getValue();
    console.log("Code:", code);
    console.log("Selected Question:", selectedQuestion.testCases);
    const encodedCode = base64.encode(code);
    const requestData = {
      code: encodedCode,
      test_cases: selectedQuestion.testCases,
    };
    try {
      const response = await axios.post(
        "http://localhost:8000/run",
        requestData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Response:", response.data);
      setTestResults(response.data);
    } catch (error) {
      alert("Error running code:", error);
    }
  }

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }
  function getEditorValue() {
    console.log(editorRef.current.getValue());
  }

  return (
    <>
      <Sidenav />

      <Grid container spacing={2}>
        {/* Left side: Question */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h4" marginBottom="10px">
                {" "}
                Question{" "}
              </Typography>
              <Typography variant="h5">{selectedQuestion.question}</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Button
                variant="outlined"
                onClick={() => setFileName("script.py")}
              >
                Switch to script.py
              </Button>
              <Button
                variant="outlined"
                onClick={() => setFileName("index.html")}
              >
                Switch to index.html
              </Button>
              <Button variant="contained" onClick={runCode}>
                Run Code
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Editor
                    height="50vh"
                    width="100%"
                    theme="vs-light"
                    onMount={handleEditorDidMount}
                    path={file.name}
                    defaultLanguage={file.language}
                    defaultValue={file.value}
                  />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12}>
              {testResults.length > 0 && (
                <Card>
                  <CardContent>
                    <Typography variant="h5">Test Results:</Typography>
                    {testResults.map((result, index) => (
                      <div key={index}>
                        <Typography>
                          Test {index + 1}: {result.pass ? "Pass" : "Fail"}
                        </Typography>
                        <Typography>
                          Input: {result.input}, Expected: {result.expected},
                          Output: {result.output}
                        </Typography>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* <div style={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="h3" align="center">
          {" "}
          Question{" "}
        </Typography>
      </div>
      <div align="center">
        <div>
          <Typography variant="h5">{selectedQuestion.question}</Typography>
        </div>
        <Button variant="outlined" onClick={() => setFileName("script.py")}>
          Switch to script.py{" "}
        </Button>
        <Button variant="outlined" onClick={() => setFileName("index.html")}>
          Switch to index.html
        </Button>
        <Button variant="outlined" onClick={getEditorValue}>Get Editor Value on console</Button>

        <Button variant="contained" onClick={runCode}>
          Run Code
        </Button>

        <Editor
          height="100vh"
          width="70%"
          theme="vs-light"
          onMount={handleEditorDidMount}
          path={file.name}
          defaultLanguage={file.language}
          defaultValue={file.value}
        />

        <div>
          {testResults.length > 0 && (
            <div>
              <Typography variant="h5">Test Results:</Typography>
              {testResults.map((result, index) => (
                <div key={index}>
                  <Typography>
                    Test {index + 1}: {result.pass ? "Pass" : "Fail"}
                  </Typography>
                  <Typography>
                    Input: {result.input}, Expected: {result.expected}, Output:{" "}
                    {result.output}
                  </Typography>
                </div>
              ))}
            </div>
          )}
        </div>
      </div> */}
    </>
  );
};

export default Code;
