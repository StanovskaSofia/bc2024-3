const { program } = require('commander');
const fs = require('fs');

program
  .option('-i, --input <path>', 'input file path')
  .option('-o, --output <path>', 'output file path')
  .option('-d, --display', 'display result in console');

program.parse(process.argv);
const options = program.opts();

if (!options.input) {
  console.error("Please, specify input");
  process.exit(1);
}

if (!fs.existsSync(options.input)) {
  console.error("Cannot find input file");
  process.exit(1);
}

let data;
  data = JSON.parse(fs.readFileSync(options.input, 'utf-8'));

let result = "";

data.forEach(item => {
  result += `${item.StockCode}-${item.ValCode}-${item.Attraction}\n`;
});

if (options.display) {
  console.log(result);
}

if (options.output) {
  fs.writeFileSync(options.output, result);
}
