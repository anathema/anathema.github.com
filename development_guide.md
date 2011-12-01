---
layout: default
title: Developing Anathema with Eclipse
---

Required JDK
------------
  <p>JDK 6 (Note that there is a 32 and 64 bit version too, you can download and install both if you so wish).</p>
  <p>It is possible to use JDK 7 but using it can easily introduce unwanted dependency on it so be wary.</p>

I. Preparing to download Anathema
---------------------------------

<ol>
  <li>Create an account on <a href="https://github.com">https://github.com</a> and log in.</li>
  <li>Go to (while logged in) <a href="https://github.com/anathema/anathema">https://github.com/anathema/anathema</a> and fork the project by clicking the "fork" button.</li>
  <li>Now, on the "code" page of your account, you should see your forked project.</li>
  <li>You should there see some options to download the files of the project: "ZIP", "SSH", "HTTP", "Git Read-only".</li>
  <li>Here select "HTTP" and be prepared to copy the provided link to your clipboard later.</li>
</ol>

II. Install Eclipse & download/run Anathema
-------------------------------------------

<ol>
  <li>Download Eclipse (IDE for Java developers, 32 or 64 bit version whichever JDK you have): <a href="http://www.eclipse.org/downloads">http://www.eclipse.org/downloads</a></li>
  <li>Extract Eclipse wherever you like to.</li>
  <li>Start Eclipse and choose a directory for the for the workspace when requested to do so.</li>
  <li>Open Windows/Open Perspective/Other and choose "Git Repository Exploring". (don't bother yourself with the pop-up dialog about the HOME directory, just click ok)</li>
  <li>Copy the HTTP link of your forked project on github to the clipboard.</li>
  <li>Right click into the "Git Repositories" window and select "Paste Repository Path or URI".</li>
  <li>The popping window should contain all the information filled except for your password (so enter it). (check your firewall in case of failure)</li>
  <li>On the next screen you should see the possible branches which you can clone to your local disk.</li>
  <li>"master" is the main branch, so select it and unselect the other branches.</li>
  <li>On the next screen you need to specify the directory where you want to download Anathema (preferably an empty directory).</li>
  <li>Click finish and wait for Anathema to be downloaded.</li>
  <li>Once Anathema was downloaded you should see a new node (starting with "master" if you have not specified otherwise) in the "Git Repositories" window.</li>
  <li>Right click on this node and select "Import projects..."</li>
  <li>On the appearing window select "Import Existing Projects" and click next.</li>
  <li>On the next screen select all the projects in the list and leave "Add project to working sets" unchecked.</li>
  <li>Once the projects are imported, at Windows/Open Perspective/Other choose "Java".</li>
  <li>In the menu click Run/Run and if asked choose "Anathema" and Anathema should start.</li>
</ol>

III. Other settings in Eclipse
------------------------------

<ol>
  <li>In the menu select Windows/Preferences.</li>
  <li>In the appearing window select Java/Code Style/Formatter.</li>
  <li>Click "Import" and select the file `[Repository]/Development_Miscellaneous/Eclipse/preferences/anathema.formatter.xml`.</li>
  <li>Apply.</li>
</ol>

IV. Commit changes
------------------

<ol>
  <li>After you have modified a project right click on the project (in the Package Explorer window) and in the "Team" menu select "Commit..."</li>
  <li>Enter a description of the changes you have made in the Commit message.</li>
  <li>Review the files and select only those you really want to commit.</li>
  <li>Once done, right click on the project again and in the "Team" menu select "Push to Upstream".</li>
  <li>Now at github you can simply click "Pull Request" on your project and wait until the changes are merged into the main repository.</li>
</ol>