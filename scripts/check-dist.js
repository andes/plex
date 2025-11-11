const { existsSync, statSync } = require('fs');
const path = require('path');

const distDir = path.join(__dirname, '..', 'dist');
const pkg = path.join(distDir, 'package.json');

if (!existsSync(distDir) || !existsSync(pkg)) {
    console.error('❌ No existe un build de la lib en dist/. Corré primero: npm run build:lib:full');
    process.exit(1);
}

const { mtime } = statSync(pkg);

const formatter = new Intl.DateTimeFormat('es-AR', {
    timeZone: 'America/Argentina/Buenos_Aires',
    dateStyle: 'short',
    timeStyle: 'medium'
});

console.log(`✅ Usando build existente de la lib en dist/ (package.json modificado: ${formatter.format(mtime)})`);
