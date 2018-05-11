import als from 'async-local-storage';

function index () {
  als.enable();
  global.als = als;
}

export default index;
//# sourceMappingURL=bundle.esm.js.map
