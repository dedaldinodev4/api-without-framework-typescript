import { Movie } from "@/entities";
import { existsSync } from "fs";
import { readFile, writeFile } from "fs/promises";

export class Database {
  private filename: string;

  constructor({ filename }: { filename: string }) {
    this.filename = filename;
  }

  async write (data: Movie | Movie[]): Promise<void> {
    let currentFile: Movie[] = [];
    if (existsSync(this.filename)) {
      const fileContent = await this._currentFileContent();
      if (Array.isArray(fileContent)) {
        currentFile = fileContent;
      }
    }

    Array.isArray(data) ? currentFile.push(...data) : currentFile.push(data);
   
    await writeFile(this.filename, JSON.stringify(currentFile, null, 2));
   
  }

  async _currentFileContent(): Promise<Movie[]> {
    const fileContent = await readFile(this.filename, { encoding: 'utf8' });
    return JSON.parse(fileContent) as Movie[];
  }
}