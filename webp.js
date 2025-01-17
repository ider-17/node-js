// not ended
import sharp from 'sharp';
import fs from 'fs';

const files = fs.readFileSync('./input');

for (let i = 0; i < files.length; i++) {
    sharp(`./input/${files[i]}`).webp({
        quality: 10
    }).toFile(`./output/result-${i}.webp`, (err, info) => {
        console.log({ err, info });
        
    });
};