// const date = new Date();

import { getCep } from './cep.service';

// const day = String(date.getTime());

// const id = `${day[6]}${day[7]}${day[8]}${day[9]}${day[10]}${day[11]}${day[12]}`;

interface ValidCep {
  zipcode: string;
  district: string;
}

// 12300-001 a 12349-999

const init = 12300001;
const end = 12349999;

let current = init;

const items: ValidCep[] = [];

const root = document.getElementById('root')!;

async function checkCep(cep: string) {
  await getCep(cep)
    .then((data: any) => {
      root.innerHTML += `{zipcode: ${data.zipcode}, district: ${data.district}}\n,`;

      current++;

      if (current < end) {
        setTimeout(() => {
          checkCep(String(current));
        }, 1000);
      } else if (current === end) {
        console.log('terminou');
      }
    })
    .catch(() => {
      current++;

      if (current < end) {
        setTimeout(() => {
          checkCep(String(current));
        }, 1000);
      } else if (current === end) {
        console.log('terminou');
      }
    });
}

checkCep(String(current));

// 12300-001 a 12349-999
