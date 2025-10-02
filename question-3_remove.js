// Question 3 
// Remove Log Files

const fs = require("fs").promises;
const path = require("path");

async function removeLogs() {
  const logsDir = path.join(__dirname, "Logs");

  try {
    await fs.access(logsDir);    // Check if Logs directory exists or not
  } catch {
    console.log("No Logs directory to delete.");
    return;
  }

  try {
    const files = await fs.readdir(logsDir);

    if (files.length === 0) {   
      console.log("Logs directory is empty. Removing directory");
    } else {
      console.log("Deleting files:");
      for (const file of files) {
        console.log(` delete files...${file}`);
        await fs.unlink(path.join(logsDir, file));
      }
    }

    await fs.rmdir(logsDir);
    console.log("Logs directory removed!");
  } catch (err) {
    console.error("Something went wrong.", err.message);
  }
}


// Run if this file is executed directly

if (require.main === module) {
  removeLogs();
}

module.exports = removeLogs;