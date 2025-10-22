/**
 * Agrega las rutas de styles/ y assets/ al campo exports de dist/package.json ya que no en la version de ng-packagr 
 * no hay forma de incorporarlas por parámetro.
 */
const fs = require('fs');
const path = require('path');

const pkgPath = path.join(__dirname, '..', 'dist', 'package.json');
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));

pkg.exports = pkg.exports || {};
// No tocar pkg.exports["."] (lo genera ng-packagr), solo agregar subrutas
pkg.exports["./styles/*"] = "./styles/*";
// Si en algun momento hubiera fuentes/img en assets/ (hoy no existe) descomentar la linea siguiente:
// pkg.exports["./assets/*"] = "./assets/*";

// types extra (además de "typings")
pkg.types = pkg.types || pkg.typings || './index.d.ts';

const needed = new Set([
    'fesm2020/',
    'esm2020/',
    'styles/',
    // 'assets/',             
    'index.d.ts',
    'public-api.d.ts',
    'lib/',
    'package.json',
    'README.md',
    'LICENSE'
]);

// si ya hay "files", fusionar; si no, crearla
const files = new Set(pkg.files || []);
for (const f of needed) files.add(f);
pkg.files = Array.from(files);

fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
console.log('✅ exports agregados en dist/package.json');
