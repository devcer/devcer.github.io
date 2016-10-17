# bikeSHED
bikeSHED Project

##HOW TO START
1. Fork the repo by clicking the fork button.
2. create a folder (any), go into it.
3. `git clone https://github.com/kumarrishav/bikeSHED`  **[Repo cloned]**
4. `git remote add origin https://github.com/your_username/bikeSHED`  **[this is used for sending patch/code]**
4. `git remote add upstream https://github.com/kumarrishav/bikeSHED`  **[this is used for updating your code from master]**

##FEW BASIC COMMANDS
1. `git branch` **[to check in which branch you are in]**
2. `git status` **[to check what is the status, i.e what file changed from last time, is it commited or not etc]**
3. `git diff` **[to check the diff between your previous code and code after changes you made]**
4. `git checkout . ` **[to delete the code changed, i.e if you added something in various files, if u don't want those. use this command]**
5. `git checkout file_name` [if u want to remove the changes in a file, use that file name. use dot (.) above command, when you want to remove all cuurent changes from all the files]
5. `git branch branch_name` **[to create a new branch, to create a new branch, go to master then create. you can create branch from anywhere, but currently no need]**
6. `git checkout branch_name` **[if you want to change your branch, then use this command, give branch name, where you want to go]** 
7. `git stash` **[you can change branch only when, you didn't edit any code. i.e `git diff` shows nothing. if you have made some changes and don't want to loose it. use this command]**
8. `git stash apply` **[to get those changes back again, once you came to your branch, use this command to get those change back.]**

##HOW TO SUBMIT PATCH
1. From master branch, create a new branch (say issue-1 of github), so. `git branch issue-1` and go to that branch i.e `git checkout issue-1`
2. start coding. what ever you want to do. you can use git status to see the status i.e what files you changed. use git diff to see the changes in code.
3. once done, `git commit -m "commit__message"` **[keep commit message meaningfull]**
4. `git push origin branch_name` **[here: git push origin issue-1]**

##HOW TO UPDATE BRANCH [Keep your repo update with this repo]
* Goto master branch. do `git fetch upstream` <br>
* `git merge upstream\master` **[this will update your local master branch]** <br>
* `git push origin master` **[this will update your remote(i.e github) master branch]** <br>
* If you want to update your branch too, in which you are working on. then go to that branch.
* `git rebase master` **[this is update your local of that branch, `git push -f` , this will update that branch in remote (i.e github)]**

###Any issue ping me/tag me###
