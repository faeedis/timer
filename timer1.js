
const args = process.argv.slice(2);

// Iterate over the arguments
for (let i = 0; i < args.length; i++) {
  const time = Number(args[i]);

  // Check if the argument is a valid poitive number
  if (!isNaN(time) && time > 0) {
    setTimeout(() => {
      process.stdout.write('\x07'); // System sound
    }, time * 1000); // Convert seconds to milliseconds i hope so XD
  }
}
