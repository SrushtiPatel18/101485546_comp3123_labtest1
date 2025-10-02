// Question 3
// Create Log Files

const fs = require("fs").promises;
const path = require("path");

async function addLogs() {
  const logsDir = path.join(__dirname, "Logs");

  try {
    await fs.mkdir(logsDir, { recursive: true });    // Ensure Logs directory exists
    process.chdir(logsDir);
    console.log(`Logs directory ready at: ${logsDir}`);

    const createdFiles = [];
    for (let i = 1; i <= 10; i++) {
      const fileName = `log${i}.txt`;
      const content = `This is log file number ${i}`;
      await fs.writeFile(fileName, content);
      createdFiles.push(fileName);
    }

    console.log("Created files:");
    createdFiles.forEach(f => console.log(` ${f}`));
  } catch (err) {
    console.error("Error creating log files:", err.message);
  }
}


// Run if this file is executed directly

if (require.main === module) {
  addLogs();
}

module.exports = addLogs;
