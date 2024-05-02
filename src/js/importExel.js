import readXlsxFile from 'read-excel-file';

export function readExel(e) {
  let file = e.target.files[0];
  readXlsxFile(file, { sheet: 'map table' }).then(row => {
    console.log(row);
  });
}
