// Allows for debugging current file, tricky thing was ${relativeFile}

{
  "type": "node",
  "request": "launch",
  "name": "Tap Current File",
  "program": "${workspaceFolder}/${relativeFile}",
  "args": [
    "${file}"
  ],
  "console": "integratedTerminal
}
