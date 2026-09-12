import fs from "fs";
import { execSync } from "child_process";

let changedFiles = [];

try {
  const output = execSync("git diff --name-status HEAD~1 HEAD", {
    encoding: "utf8",
  });

  changedFiles = output
    .trim()
    .split("\n")
    .filter((line) => line.trim() !== "")
    .map((line) => {
      const parts = line.split("\t");

      return {
        status: parts[0],
        file: parts.slice(1).join("\t"),
      };
    });
} catch (error) {
  console.log("ERROR: Unable to read Git changes.");
  process.exit(1);
}

// Ignore accidental Git entry
changedFiles = changedFiles.filter(
  (item) => item.file !== "git" && item.file !== ".git"
);

let passed = 0;
let failed = 0;
let created = 0;
let modified = 0;

const output = [];

output.push("========================================");
output.push("       JENKINS AUTOMATED TEST");
output.push("========================================");
output.push("");
output.push("Files Changed in Latest Commit:");
output.push("----------------------------------------");

for (const item of changedFiles) {
  let type = "OTHER";

  if (item.status === "A") {
    type = "CREATED";
    created++;
  } else if (item.status === "M") {
    type = "MODIFIED";
    modified++;
  } else if (item.status === "D") {
    type = "DELETED";
  }

  let filePassed = true;

  if (type !== "DELETED") {
    if (!fs.existsSync(item.file)) {
      filePassed = false;
    } else {
      const content = fs.readFileSync(item.file, "utf8");

      if (content.trim().length === 0) {
        filePassed = false;
      }
    }
  }

  if (filePassed) {
    passed++;
    output.push(`PASS - ${type.padEnd(8)} - ${item.file}`);
  } else {
    failed++;
    output.push(`FAIL - ${type.padEnd(8)} - ${item.file}`);
  }
}

output.push("");
output.push("========================================");
output.push("             TEST SUMMARY");
output.push("========================================");

output.push(`Total Files Checked : ${changedFiles.length}`);
output.push(`Created Files       : ${created}`);
output.push(`Modified Files      : ${modified}`);
output.push(`Passed              : ${passed}`);
output.push(`Failed              : ${failed}`);

output.push("----------------------------------------");

if (failed === 0) {
  output.push("Overall Result      : PASSED");
} else {
  output.push("Overall Result      : FAILED");
}

output.push("========================================");

// Show result in terminal
console.log(output.join("\n"));

// Automatically create/update feedback.txt
fs.writeFileSync("feedback.txt", output.join("\n") + "\n", "utf8");

console.log("\nFeedback file updated: feedback.txt");

if (failed > 0) {
  process.exit(1);
}