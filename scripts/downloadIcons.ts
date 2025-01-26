import * as fs from 'fs';
import * as path from 'path';
import * as https from 'https';

const ICONS: Record<string, string> = {
  'html5.svg': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg',
  'css3.svg': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg',
  'tailwindcss.svg': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg',
  'javascript.svg': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
  'typescript.svg': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
  'nextjs.svg': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg',
  'java.svg': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg',
  'php.svg': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg',
  'mysql.svg': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg',
  'git.svg': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg',
  'figma.svg': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg',
  'vercel.svg': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vercel/vercel-original.svg',
  'aws.svg': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg',
};

const ICONS_DIR = path.join(process.cwd(), 'public', 'icons');

// 디렉토리가 없으면 생성
if (!fs.existsSync(ICONS_DIR)) {
  fs.mkdirSync(ICONS_DIR, { recursive: true });
}

// 각 아이콘 다운로드
Object.entries(ICONS).forEach(([filename, url]) => {
  const filepath = path.join(ICONS_DIR, filename);
  https.get(url, (response) => {
    const file = fs.createWriteStream(filepath);
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log(`Downloaded: ${filename}`);
    });
  }).on('error', (err) => {
    console.error(`Error downloading ${filename}:`, err.message);
  });
}); 