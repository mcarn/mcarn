import * as fs from 'fs';
import * as path from 'path';

const date: Date = new Date();

const readme = fs.readFileSync(path.join(__dirname, '../README.md'), 'utf8');
const newReadme = readme.replace(
  /[0-9]{2}[/][0-9]{2}[/][0-9]{4}/,
  `${date.getUTCDate() + 1}/${date.getUTCMonth() + 1}/${date.getUTCFullYear()}`
);

fs.writeFileSync(path.join(__dirname, '../README.md'), newReadme);
