import { useEffect } from "react";
import * as Blockly from "blockly/core";
import * as libraryBlocks from "blockly/blocks";
import { javascriptGenerator } from "blockly/javascript";
import * as En from "blockly/msg/en";
import Navbar from "./components/Navbar";

const App = () => {
  const toolbox = {
    kind: "categoryToolbox",
    contents: [
      {
        kind: "category",
        name: "Logic",
        colour: "green",
        contents: [
          { kind: "block", type: "controls_if" },
          { kind: "block", type: "logic_compare" },
          { kind: "block", type: "logic_operation" },
        ],
      },
      {
        kind: "category",
        name: "Loops",
        colour: "red",
        contents: [
          { kind: "block", type: "controls_whileUntil" },
          { kind: "block", type: "controls_for" },
        ],
      },
      {
        kind: "category",
        name: "Animation",
        colour: "purple",
        contents: [
          {
            kind: "block",
            type: "animation_block_1",
            colour: "purple", // Specify the color here
          },
          {
            kind: "block",
            type: "animation_block_2",
            colour: "purple", // Specify the color here
          },
        ],
      },
    ],
  };
  
  const options = {
    toolboxPosition: "start",
    zoom: {
      controls: true,
      // wheel: true,
      startScale: 1,
      maxScale: 3,
      minScale: 0.3,
      scaleSpeed: 1.2,
      css: true,
    },
    grid: {
      spacing: 20, // Spacing between grid lines
      length: 5, // Length of the grid lines (increase this value for larger dots)
      colour: "#d1d5db", // Color of the grid lines
      snap: true, // Snap to grid
    },
  };

  useEffect(() => {
    const workspace = Blockly.inject(document.getElementById("blocklyDiv"), {
      toolbox: toolbox,
      width: "100%",
      height: "100%",
      ...options,
    });
    Blockly.setLocale(En);
    // Clean up function to dispose the workspace when the component is unmounted
    return () => {
      workspace.dispose();
    };
  }, [toolbox, options]);

  return (
    <div className="flex flex-col lg:flex-col h-screen justify-end p-2">
      <Navbar/>
      <div className="flex flex-row  h-screen justify-end">
        <div
          id="blocklyDiv"
          className="lg:w-1/2 h-full border-r-2 border-gray-200 flex flex-col "
        >
          {/* BlocklyDiv */}
        </div>
        <div id="animContainer" className="w-1/2 h-full border border-gray-200">
          animContainer
        </div>
      </div>
    </div>
  );
};

export default App;
