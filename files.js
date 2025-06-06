import fs from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

class FileManager {

    async writeFile(filename, data){
        try {
            data = JSON.stringify(data, null, 2)
            await fs.writeFile(filename, data)
        } catch(error){
            console.log('write error => ', error)
        }
    }

    async readFile(filename) {
        try {
          // read content from file in text format
          const fileContent = await fs.readFile(filename, 'utf8');
      
          // convert content from text format to data format
          const fileData = JSON.parse(fileContent);
      
          return fileData;
        } catch (error) {
          console.error('read error => ', error);
          return null;
        }
      }
      

}



export default FileManager = new FileManager()