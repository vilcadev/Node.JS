const fs = require("node:fs/promises");
const path = require("node:path");

const pc = require("picocolors");

const folder = process.argv[2] ?? ".";

async function ls(folder) {
  let files;
  try {
    // Ascincronía secuencial, ya que necesitamos leer todos los archivos
    // - del directorio antes de continuar
    files = await fs.readdir(folder);
  } catch {
    console.error(pc.red(`No se pudo leer el directorio ${folder}`));
    process.exit(1);
  }

  // Asincronía en paralelo, ya que en este caso si podemos recuperar todos los
  // - ficheros del directorio en paralelo
  const filesPromises = files.map(async (file) => {
    const filePath = path.join(folder, file);
    let stats;
    try {
      stats = await fs.stat(filePath); // status - información del archivo
    } catch {
      console.error(`No se pudo leer el archivo ${filePath}`);
      process.exit(1);
    }

    // Hacemos uso del fileSystem, para también recuperar la información de cada archivo
    const isDirectory = stats.isDirectory();
    const fileType = isDirectory ? "d" : "f"; // "d" es de directorio y "f" es de fichero
    const fileSize = stats.size.toString();
    const fileModified = stats.mtime.toLocaleString();

    return `${fileType} ${pc.blue(file.padEnd(20))} ${pc.green(
      fileSize.padStart(10)
    )} ${pc.yellow(fileModified)}`;
  });

  const filesInfo = await Promise.all(filesPromises);
  filesInfo.forEach((fileInfo) => console.log(fileInfo));
}

ls(folder);
