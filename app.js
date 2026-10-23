import fs from "fs/promises"; 
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const directory1 = async() => {
     try {
        const folder1Path = path.join(path.dirname(__filename), "folder_1");
        await fs.mkdir(folder1Path);
    } catch (error) {
        console.log(error.message);
    }
}

const directory2 = async() => {
     try {
        const folder2Path = path.join(path.dirname(__filename), "folder_2");
        await fs.mkdir(folder2Path);
    } catch (error) {
        console.log(error.message);
    }
}

const fileNotes = async()=>{
      try {
        const filePath = path.join(path.dirname(__filename), "folder_1", "notes.txt");
        await fs.writeFile(filePath, "Hi from NodeJs" ,"utf-8");
    } catch (error) {
        console.log(error.message);
    }
}

const fileNotesLog = async()=>{
      try {
        const filePath = path.join(path.dirname(__filename), "folder_1", "notes.txt");
        const data = await fs.readFile(filePath,"utf-8");
        console.log(data);
    } catch (error) {
        console.log(error.message);
    }
}

const renameFile = async() => {
     try {
        const oldFolder1Path = path.join(path.dirname(__filename), "folder_1", "notes.txt");
        const newFolder1Path = path.join(path.dirname(__filename), "folder_1", "my_notes.txt");
        await fs.rename(oldFolder1Path, newFolder1Path);
    } catch (error) {
        console.log(error.message);
    }
}

const moveFolder = async() => {
     try {
        const oldFolder1Path = path.join(path.dirname(__filename), "folder_1", "my_notes.txt");
        const newFolder1Path = path.join(path.dirname(__filename), "folder_2", "my_notes.txt");
        await fs.rename(oldFolder1Path, newFolder1Path);
    } catch (error) {
        console.log(error.message);
    }
}

const helperTask = async(old_path, new_path)=>{
    await fs.rename(old_path, new_path);
}

const renameBothFolders = async()=>{
      try {
        const root_path = path.dirname(__filename);
        await helperTask(path.join(root_path, "folder_1"), path.join(root_path, "temp"));
        await helperTask(path.join(root_path, "folder_2"), path.join(root_path, "folder_1"));
        await helperTask(path.join(root_path, "temp"), path.join(root_path, "folder_2"));
        
    } catch (error) {
        console.log(error.message);
    } 
}//watvhed the sol vid for this and the move one

const deleteFolder2 = async() => {
     try {
        const folder2PathDelete = path.join(path.dirname(__filename), "folder_2");
        await fs.rm(folder2PathDelete,  {recursive:true, force:true});
    } catch (error) {
        console.log(error.message);
    }
}

const deleteMyNotes = async() => {
     try {
        const notesFile = path.join(path.dirname(__filename), "folder_1", "my_notes.txt");
        await fs.unlink(notesFile);
    } catch (error) {
        console.log(error.message);
    }
}

const deleteFolder1 = async() => {
     try {
        const folder1PathDelete = path.join(path.dirname(__filename), "folder_1");
        await fs.rm(folder1PathDelete,  {recursive:true, force:true});
    } catch (error) {
        console.log(error.message);
    }
}




const requirements = async()=>{
    await directory1();
    await directory2();
    await fileNotes();
    await fileNotesLog();
    await renameFile();
    await moveFolder();
    await renameBothFolders();
    await deleteFolder2();
    await deleteMyNotes();
    await deleteFolder1();
}

requirements();