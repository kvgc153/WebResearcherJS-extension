## WebResearcherJS (WBJS) <img width="40px" src="logo.png">

Actively engage with webpages by annotating with WBJS sticky notes.


## Getting Started
- **WBJS Sticky Notes**: Download the WBJS Sticky Notes. Available on  [Firefox](https://addons.mozilla.org/en-US/firefox/addon/webresearcherjs/) and [Chrome](https://chromewebstore.google.com/detail/webresearcherjs/gbddmghbmmnaioleipogfekanoahjeei?authuser=0&hl=en-GB). 

- **Local server**: All the notes taken on the browser using the extension will be saved to a server running locally. Requires node and npm.

```shell 
git clone https://github.com/kvgc153/WebResearcherJS-extension.git
cd WebResearcherJS-extension/wbjs-server/
npm install
node server.js
```
When the server successfully starts, you will get the following message:

```shell
Server is running on port 3000
Connected to the SQLite database.
Table created if it did not exist.
```
A sqlite DB will be created in the same folder which will contain all the notes taken by the webclipper. Check that this exists in the folder before procedding further.


## How to take notes using WBJS?

<img width="100%" src="demo/demo1.gif">

1. **Create a Note:** Click on the 'Make Note' button to start a note.

2. **Move Note:** Drag the note around the page by holding down the left mouse button and moving your mouse.

3. **Delete Note:** Right-click on the note, then select 'Delete' from the menu to remove it.

4. **Add tags:** Add relevant tags to your note for easy organization.
   
   
<img height="200px" src="demo/demo2.gif">

5. **Saving notes**: Save notes to server by pressing the save button. The notes will be automatically displayed the next time you visit the page.

<img width="100%" src="demo/demo3.gif">

6. **View all notes** : Visit http://127.0.0.1:3000/notesViewer to view and search all the notes taken.

## Support and development
Checkout the notes posted [here](docs/docs.md) to understand how the webclipper code works. Code, suggestions, and feedback are welcome. 


