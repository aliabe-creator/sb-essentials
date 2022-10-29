Note: this extension is only intended for use in modern Chrome and Firefox browsers. Additionally, Google has announced that Manifest V2 will be dropped in 2023, so this extension may break by then.

This tool is not meant to be used to gain an unfair advantage, and all features I add are carefully chosen so as to not cause a disproportionate impact in gameplay. For instance, being able to see and share coordinates simply allows teammates to know your location in-game. The same end goal can be achieved through fixed references, such as "I'm near the sun" or "I'm at base," but it simplifies the process.

# Inspiration

Have you ever been playing with a friend in Survival mode and wanted to organize a meet-up? Usually, you would ask your friend to meet you at a known location, say near the leader or at the sun. Or maybe you were in Team mode, and you wanted your friend to back you up in an attack.

This extension allows you to easily see your current ship coordinates without having to enter any console commands. Additionally, at the click of a button, you can copy your current coordinates to the clipboard and share it with whomever you want.

# Installation

Installation is as easy as 1 2 3.

For Firefox:
1. Download this repository and extract it to some known location.
2. Open Firefox and navigate to "about:debugging" without the quotes.
3. Click "Load Temporary Addon" and navigate to the firefox folder within the downloaded repository. Click on any file within the folder, say "manifest.json". You're done! You should see a new extension pop up on your toolbar.

For Chrome:
1. Download this repository and extract it to some known location.
2. Open Chrome and navigate to "chrome://extensions" without the quotes, and toggle the "Developer mode" switch in the top right to the on setting.
3. Click "Load unpacked" and click on the chrome folder within the downloaded repository.

# Usage
## Badge
When you visit https://starblast.io, you will notice the extension gains a blue badge. It's easy to interpret what you see.

The first message will be in the form of `[` + some number. The `[` indicates the beginning of that coordinate sequence. The number following it is simply your current x coordinate divided by 10 and rounded to the nearest whole number. For example, if your x coordinate was 212, the number displayed would be 21.

The second message will be in the form of some number + `]`. This is the y-coordinate, following the same rules as the x coordinate.

The process then loops after a delay to show your updated coordinates, and will keep running until you close the page.

## Copying coordinates
To copy your full current coordinates, simply click on the extension icon. You won't see anything except for a small popup, which you can close by clicking anywhere else on your screen. Your coordinates should now be on your clipboard, able to be pasted to Discord or any other app.

# Errors/Suggestions
If you encounter any errors or would like to suggest a feature, please create a new issue.
