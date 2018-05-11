import als from 'async-local-storage';

export default function () {
  als.enable();
  global.als = als;
}
