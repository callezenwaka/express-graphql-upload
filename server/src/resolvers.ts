import { GraphQLList } from "graphql";
import { Uploads, File } from './types';
import path from "path";
import  fs from "fs";

export const Files = {
  type: new GraphQLList(File),
  resolve(root: any, args: any, context: any) {
    return [];
  },
};

export const addFile = {
  type: File,
  args: { file: { type: Uploads } },
  async resolve(parent: any, { file }: any, context: any) {
    const { createReadStream, filename } = await file.file;
    const stream = createReadStream();
    const name = Date.now()+'_'+filename;
    const pathName = path.join(__dirname, `/public/images/${name}`);
    await stream.pipe(fs.createWriteStream(pathName));

    return { 
      photoURL: `http://localhost:4000/images/${name}`,
      filename: filename,
    }
  }
}