---
layout: default
title: Developing Anathema with Eclipse
---

Required JDK
------------
  JDK 6 (Note that there is a 32 and 64 bit version too, you can download and install both if you so wish).

  It is possible to use JDK 7 but using it can easily introduce unwanted dependency on it so be wary.

I. Preparing to download Anathema
---------------------------------
1.  Create an account on <a href="https://github.com">https://github.com</a> and log in.
2.  Go to (while logged in) <a href="https://github.com/anathema/anathema">https://github.com/anathema/anathema</a> and fork the project by clicking the "fork" button.
3.  Now, on the "code" page of your account, you should see your forked project.
4.  You should there see some options to download the files of the project: "ZIP", "SSH", "HTTP", "Git Read-only".
5.  Here select "HTTP" and be prepared to copy the provided link to your clipboard later.


II. Install Eclipse & download/run Anathema
-------------------------------------------
1.  Download Eclipse (IDE for Java developers, 32 or 64 bit version whichever JDK you have): <a href="http://www.eclipse.org/downloads">http://www.eclipse.org/downloads</a>
2.  Extract Eclipse wherever you like to.
3.  Start Eclipse and choose a directory for the for the workspace when requested to do so.
4.  Open Windows/Open Perspective/Other and choose "Git Repository Exploring". (don't bother yourself with the pop-up dialog about the HOME directory, just click ok)
5.  Copy the HTTP link of your forked project on github to the clipboard.
6.  Right click into the "Git Repositories" window and select "Paste Repository Path or URI".
6.  The popping window should contain all the information filled except for your password (so enter it). (check your firewall in case of failure)
8.  On the next screen you should see the possible branches which you can clone to your local disk.
9.  "master" is the main branch, so select it and unselect the other branches.
10.  On the next screen you need to specify the directory where you want to download Anathema (preferably an empty directory).
11.  Click finish and wait for Anathema to be downloaded.
12.  Once Anathema was downloaded you should see a new node (starting with "master" if you have not specified otherwise) in the "Git Repositories" window.
12. Open a terminal window in the Anathema directory and run ``gradlew eclipseProject eclipseClasspath eclipseJdt``.
13.  Right click on this node and select "Import projects...".
14.  On the appearing window select "Import Existing Projects" and click next.
15.  On the next screen select all the projects in the list and leave "Add project to working sets" unchecked.
16.  Once the projects are imported, at Windows/Open Perspective/Other choose "Java".
17.  In the menu click Run/Run and if asked choose "Anathema" and Anathema should start.


III. Other settings in Eclipse
------------------------------
1. In the menu select Windows/Preferences.
2. In the appearing window select Java/Code Style/Formatter.
3. Click "Import" and select the file `[Repository]/Development_Miscellaneous/Eclipse/preferences/anathema.formatter.xml`.
4. Apply.


IV. Commit changes
------------------
1.  After you have modified a project right click on the project (in the Package Explorer window) and in the "Team" menu select "Commit..."
2.  Enter a description of the changes you have made in the Commit message.
3.  Review the files and select only those you really want to commit.
4.  Once done, right click on the project again and in the "Team" menu select "Push to Upstream".
5.  Now at github you can simply click "Pull Request" on your project and wait until the changes are merged into the main repository.
