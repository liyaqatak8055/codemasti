export const gitCourse = {
  id: 'git',
  title: 'Git & GitHub',
  description: 'Version control ka baap! Commits, Staging, Branches, 3-Way Merge, Conflicts, Rebase, Stash, Remotes, Pull Requests, Code Reviews, GitHub Actions CI/CD, SSH, Open Source aur Production Capstone Masti Sir style mein!',
  icon: '🐙',
  category: 'frontend',
  certificateName: 'GIT & GITHUB',
  topicsCount: 60,
  practiceCount: 75,
  projectsCount: 12,
  hoursEstimate: 22,
  level: 'Beginner to Advanced',
  chapters: [
    // ═══════════════════════════════════════════════════════
    // CHAPTER 1: VERSION CONTROL & GIT BASICS
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 1: Version Control Fundamentals, Setup & 3-Stage Architecture',
      lessons: [
        {
          id: 'git-init-commit-workflow',
          title: 'Git Architecture: Working Directory, Staging & Commits',
          emoji: '💾',
          xpReward: 35,
          badgeName: 'Time Traveler',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "File ka naam `final_v2_final_reallyFinal.js` rakhne walo! Git seekho aur apni file management ko superpower do! Git ek time machine hai — har commit ek checkpoint hai! 😎"',
            hint: '💡 Masti Sir: "Git ek software hai jo tumhare laptop pe chalta hai, GitHub ek online website hai jahan tum apni Git repo store aur share karte ho! Dono ko mix mat karna!"',
            success: '🎉 Masti Sir: "Pehla snapshot repo mein permanently save ho gaya! Congratulations!"',
            mistake: '😅 Masti Sir: "`git commit` se pehle `git add` karna zaroori hai! Photo khinchne se pehle stage pe khade toh ho jao! 😂"'
          },
          englishDef: 'Git is a distributed version control system (DVCS) that tracks file changes over time. Its core architecture consists of three local zones: the Working Directory (untracked/modified files), the Staging Area / Index (prepared snapshot), and the Git Repository / Commit History (`.git` object database).',
          hinglishExplain: 'Git ek time-machine ki tarah hai jo aapke code ke har version ka snapshot save karti hai. Jab aap code likhte ho (Working Directory), aap chuninda files ko stage pe bhejte ho (`git add`), aur phir permanent photo/checkpoint le lete ho (`git commit -m "msg"`). Agar kal ko code phat jaye, toh aap 1 second mein purane version pe wapas ja sakte ho.',
          storyExplain: 'Socho tum video game khel rahe ho (jaise GTA ya Prince of Persia). Jab tum koi mushkil level paar karte ho, tum game save karte ho (Commit). Agar aage chalke tumhari gaadi blast ho jaye (code mein bug aa jaye), toh tum wahi se game reload kar lete ho! Git software developers ki life ka save-point hai! 🎮',
          funnyExample: {
            scenario: 'Project Manager: "Bhai kal wala feature mast chal raha tha, aaj kisne tod diya?"\nDeveloper with Git: `git checkout HEAD~1` -> "Sir kal wala code wapas aa gaya, 2 second mein!" 😎',
            punchline: 'Git hai toh tension nahi!'
          },
          memoryTrick: 'Git 3-Stage Lifecycle:\n1. Working Directory (Files edited on disk)\n2. Staging Area (`git add .` -> Photo stage)\n3. Local Repository (`git commit -m "..."` -> Snapshot saved)\n4. Remote GitHub (`git push origin main` -> Cloud backup)',
          visualDiagram: {
            title: 'Git 3-Stage Architecture Flow',
            nodes: ['Working Directory (Untracked / Modified)', 'git add -> Staging Area (Index)', 'git commit -> Local Repository (.git/objects)', 'git push -> Remote GitHub Repo'],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Inside the .git Directory Structure:',
            steps: ['git init creates hidden `.git` folder', 'git add computes SHA-1/SHA-256 hash and stores compressed file Blob in `.git/objects`', 'git commit creates Tree object (directory map) and Commit object pointing to parent commit', 'HEAD file in `.git/HEAD` points to active branch ref']
          },
          code: `# 1. Configure user identity globally
git config --global user.name "Vikramaditya"
git config --global user.email "vikram@example.com"
git config --global init.defaultBranch main

# 2. Initialize a new local Git repository
git init my-awesome-project
cd my-awesome-project

# 3. Create project files
echo "# CodeMasti Git Project" > README.md
echo "console.log('Namaste Git!');" > app.js

# 4. Check repository status (Untracked files)
git status

# 5. Move files to Staging Area (Index)
git add README.md app.js
# Or stage everything: git add .

# 6. Commit staged snapshot with Conventional Commit message
git commit -m "feat: initial commit with README and app entry point"

# 7. View rich formatted commit history
git log --oneline --graph --decorate`,
          codeBreakdown: [
            { part: 'git config --global ...', label: 'Sets author metadata permanently across all local repositories', color: '#3b82f6' },
            { part: 'git add .', label: 'Moves all new and modified files into the staging index', color: '#10b981' },
            { part: 'git commit -m "feat: ..."', label: 'Creates an immutable snapshot with timestamp, author, and message', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Committing huge folders like `node_modules` or sensitive `.env` files without a `.gitignore`',
            '❌ Writing vague commit messages like "fixed", "update", "wip"',
            '❌ Initializing a git repo inside another git repo (Nested repository confusion)'
          ],
          proTips: [
            '💡 Always use Conventional Commits format: `feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `test:`, `chore:`',
            '💡 Run `git status -s` for a compact, fast status summary with 2-letter status codes (`M`, `A`, `??`)'
          ],
          interviewQuestions: [
            'What is the fundamental difference between Git and GitHub?',
            'Explain the difference between the Working Directory, Staging Area, and Local Repository in Git.',
            'What is stored inside the `.git` folder and how does Git represent files as Blobs, Trees, and Commits?'
          ],
          miniChallenge: 'Initialize a new git repository, configure `.gitignore` for `.env` and `dist/`, stage files, and make an atomic initial commit.',
          quiz: {
            type: 'mcq',
            question: 'Files ko working directory se staging area (Index) mein move karne ke liye kaunsi command use hoti hai?',
            options: ['git commit', 'git add', 'git push', 'git stage'],
            answer: 'git add',
            explanation: '`git add <files>` moves modified or untracked files into the Staging Area preparing them for commit.'
          },
          miniQuiz: [
            {
              type: 'fillblank',
              question: 'Git command fill karo:',
              sentence: 'Current repository mein kaunsi files modified, untracked ya staged hain ye dekhne ke liye `git ___` command use karte hain.',
              answer: 'status',
              explanation: '`git status` inspects the state of the working directory and staging area.'
            }
          ],
          summary: ['Git is a distributed version control system', 'Working Directory -> Staging Area -> Commit History', 'Conventional commits ensure clean team collaboration'],
          flashcard: { q: 'What is a Git Commit?', a: 'An immutable snapshot of staged files at a specific point in time, identified by a unique SHA hash.' },
          funFact: 'Linus Torvalds created Git in just 10 days in April 2005 to replace BitKeeper for Linux kernel development!',
          didYouKnow: 'Git does not store diffs; it stores complete, compressed snapshots of files (Blobs) with pointers to identical unchanged files.',
          realWorldUseCases: ['Tracking code changes in software teams', 'Reverting breaking bugs in production', 'Auditing who changed which line of code (`git blame`)', 'Open source collaboration across the globe'],
          practiceQuestions: [
            'Initialize a git repo, make 3 distinct commits, and view history using `git log --oneline`',
            'Create a `.gitignore` ignoring OS files (`.DS_Store`) and log files (`*.log`)'
          ]
        },
        {
          id: 'git-diff-undo-restore',
          title: 'Git Diff, Undoing Changes (restore, reset, revert) & .gitignore',
          emoji: '⏪',
          xpReward: 40,
          badgeName: 'Undo Specialist',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Galti se galat file stage kar di ya galat code likh diya? Ghabrao mat! `git restore` se file wapas theek karo aur `git revert` se team ki shared history ko bina tode safe undo karo! 😎"',
            hint: '💡 Masti Sir: "`git reset --hard` ko atomic bomb samjho! Bina commited changes ko permanently delete kar deta hai — hamesha soch samajh ke use karo!"',
            success: '🎉 Masti Sir: "Safe undo patterns and .gitignore configuration mastered!"',
            mistake: '😅 Masti Sir: "File pehle commit kar di aur baad mein `.gitignore` mein daali? Git use ignore nahi karega jab tak `git rm --cached` na karo!"'
          },
          englishDef: 'Git provides granular inspection (`git diff`) and safe undo workflows. `git restore` discards uncommitted working tree changes or unstages files. `git reset` moves the branch HEAD pointer locally (`--soft`, `--mixed`, `--hard`). `git revert` creates a new inverse commit to safely undo public shared history without rewriting commits.',
          hinglishExplain: '`git diff` se aap dekhte ho ki pichle commit ke baad konsi exact lines add ya delete hui hain. Agar aapne local file mein kuch galat likh diya, toh `git restore file` se wo purani fresh state mein aa jati hai. Agar team ke saath push kiya hua commit undo karna ho, toh `git revert` sabse safe command hai.',
          storyExplain: 'Socho tum white paper pe pencil se likh rahe ho. `git restore`: Eraser se abhi likhi hui line mita dena. `git revert`: Agar tumne pen se official document pe galat signature kar diya, toh tum document phadte nahi — tum ek naya correction letter attach karte ho (New commit reversing the old action)!',
          funnyExample: {
            scenario: 'Junior Dev: "Maine `git reset --hard` chala diya aur subah se likha 500 lines ka uncommitted code gayab ho gaya!" 😱\nMasti Sir: "Isliye uncommitted changes ko pehle `git stash` ya commit karna chahiye!" 🤦',
            punchline: 'Learn safe undo: restore and revert before touching reset --hard!'
          },
          memoryTrick: 'Undo Matrix:\n- Uncommitted changes discard: `git restore <file>`\n- Unstage file: `git restore --staged <file>`\n- Undo local commit (keep files): `git reset --soft HEAD~1`\n- Undo shared/pushed commit safely: `git revert <commit-hash>`',
          visualDiagram: {
            title: 'Git Diff & Reset vs Revert',
            nodes: ['Working Directory Changes (git diff)', 'Staging Area Changes (git diff --staged)', 'Local Undo: git reset --soft (HEAD moves back)', 'Shared Safe Undo: git revert (Creates New Inverse Commit)'],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'How git revert Works Under the Hood:',
            steps: ['Reads target commit diff (e.g. +Added Line 10)', 'Calculates inverse patch (-Removes Line 10)', 'Creates a brand new commit on top of HEAD', 'Preserves complete audit trail without rewriting Git history']
          },
          code: `# 1. Inspect uncommitted changes vs last commit
git diff

# 2. Inspect staged changes ready to be committed
git diff --staged

# 3. SAFE UNDO: Discard local changes in a specific file
git restore app.js

# 4. SAFE UNDO: Unstage a file without losing your edits
git restore --staged app.js

# 5. LOCAL UNDO: Undo last commit but keep changes staged
git reset --soft HEAD~1

# 6. PUBLIC SAFE UNDO: Invert a pushed commit cleanly
git revert 8f2a1b9 -m "revert: rollback broken payment gateway update"

# 7. Untrack a file that was mistakenly committed before .gitignore
git rm --cached .env
git commit -m "chore: remove tracked .env file from repository"`,
          codeBreakdown: [
            { part: 'git restore app.js', label: 'Restores working directory file to matching HEAD state (discards uncommitted edits)', color: '#3b82f6' },
            { part: 'git restore --staged app.js', label: 'Removes file from staging area while preserving your edits in working directory', color: '#10b981' },
            { part: 'git revert <hash>', label: 'Generates a new opposite commit reversing changes without breaking shared branch history', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Running `git reset --hard` on uncommitted work (uncommitted changes cannot be recovered)',
            '❌ Using `git reset` on public shared branches (breaks branch history for all teammates)',
            '❌ Forgetting that `.gitignore` only ignores UNTRACKED files'
          ],
          proTips: [
            '💡 Use `git log -p` to see the full commit history along with the exact line-by-line diffs for each commit',
            '💡 If you ever lose a commit with accidental reset, use `git reflog` to recover orphaned commit hashes!'
          ],
          interviewQuestions: [
            'What is the difference between `git reset` and `git revert`, and why is `git revert` the only safe way to undo pushed commits?',
            'Explain the difference between `git reset --soft`, `git reset --mixed`, and `git reset --hard`.',
            'How do you stop tracking a file in Git that has already been committed without deleting it from your local disk?'
          ],
          miniChallenge: 'Simulate a bug in `app.js`, stage it, unstage it with `git restore --staged`, and restore the clean version with `git restore`.',
          quiz: {
            type: 'mcq',
            question: 'Team ke sath shared branch pe kisi purane commit ko bina history tode undo karne ka sabse SAFE tarika kaunsa hai?',
            options: ['git reset --hard', 'git revert <commit-hash>', 'git delete', 'git rm -rf'],
            answer: 'git revert <commit-hash>',
            explanation: '`git revert` creates a new commit that applies the exact inverse changes, preserving linear commit history for teammates.'
          },
          miniQuiz: [
            {
              type: 'predict',
              question: '`git reset --soft HEAD~1` command chalane par kya hota hai?',
              code: 'git reset --soft HEAD~1',
              options: ['Files permanently delete ho jaati hain', 'Last commit undo ho jata hai par saari files STAGED rehti hain', 'Branch delete ho jati hai', 'Remote repo reset ho jati hai'],
              answer: 'Last commit undo ho jata hai par saari files STAGED rehti hain',
              explanation: '`--soft` moves the HEAD pointer back by 1 commit while leaving all your modified files in the Staging Area.'
            }
          ],
          summary: ['git restore cleans up working tree and staged files', 'git reset alters local branch history', 'git revert creates new inverse commits for safe shared undo', '.gitignore excludes secrets and dependencies'],
          flashcard: { q: 'What is git reflog?', a: 'A local log recording every time HEAD was updated (commits, checkouts, resets), allowing you to recover seemingly lost commits.' },
          funFact: 'Git objects are immutable: even when you "delete" or "reset" a commit, the commit object remains in the database until garbage collection (`git gc`) purges it weeks later!',
          didYouKnow: 'The `.gitignore` file supports glob patterns like `*.log` (all log files) and `build/**` (everything inside build folder).',
          realWorldUseCases: ['Preventing API key leaks in public repos', 'Safely rolling back broken production releases via PR revert', 'Reviewing pull request diffs before code review', 'Recovering lost branch commits with reflog'],
          practiceQuestions: [
            'Make a commit, run `git reset --soft HEAD~1`, and re-commit with an amended message',
            'Recover a lost commit using `git reflog`'
          ]
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 2: BRANCHING, MERGING & REBASE
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 2: Branching, 3-Way Merge, Conflicts & Rebase',
      lessons: [
        {
          id: 'git-branch-merge-conflicts',
          title: 'Branching Workflows, Fast-Forward, 3-Way Merge & Conflict Lab',
          emoji: '🌿',
          xpReward: 45,
          badgeName: 'Branch Commander',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Main branch pe direct push karne walo ko dev community mein jurmana lagna chahiye 😂! Feature branch banao, code karo, test karo aur merge karo!"',
            hint: '💡 Masti Sir: "Merge conflict tab hota hai jab 2 developers ek hi line ko alag-alag edit kar dete hain! Ghabrao mat, conflict markers padho aur sahi code select karo!"',
            success: '🎉 Masti Sir: "Merge conflict resolved smoothly! Ab tum professional team developer ban chuke ho!"',
            mistake: '😅 Masti Sir: "Conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`) ko bina delete kiye commit kar diya? Code phat jayega!"'
          },
          englishDef: 'Branches are lightweight pointers to commits representing independent lines of development. Merging combines histories via Fast-Forward (linear pointer advance) or 3-Way Merge Commits. Merge Conflicts occur when divergent branches modify identical lines and require manual resolution.',
          hinglishExplain: 'Branching se aap main codebase ko bina disturb kiye apna naya feature alag branch mein bana sakte ho. Jab feature complete ho jata hai, aap use `main` branch mein merge karte ho. Agar do log ek hi file ki same line badal dein, toh Git conflict markers deta hai jise theek karke commit karna hota hai.',
          storyExplain: 'Socho tum building ka main blueprint (Main branch) bana rahe ho. Tum swimming pool design karna chahte ho. Tum us blueprint ki ek photocopy nikalte ho (Feature branch `feat/pool`). Tum photocopy pe drawing karte ho. Jab sab approve karte hain, tum drawing ko original blueprint mein copy (Merge) kar dete ho! 🏊‍♂️',
          funnyExample: {
            scenario: 'Dev A: `const primaryColor = "blue";`\nDev B: `const primaryColor = "green";`\nGit: "Bhai tum dono aapas mein faisla kar lo ki blue rakhna hai ya green!" 😂',
            punchline: 'Merge conflict = Git ka "aapas mein faisla kar lo" moment!'
          },
          memoryTrick: 'Modern Branch Commands:\n- Create & switch: `git switch -c feat/auth` (or `git checkout -b feat/auth`)\n- Switch existing: `git switch main`\n- Merge: `git merge feat/auth`\n- Delete branch: `git branch -d feat/auth`',
          visualDiagram: {
            title: 'Branching & 3-Way Merge Diagram',
            nodes: ['Main Branch (Commit A -> B)', 'Feature Branch (Commit C -> D)', '3-Way Merge Commit (B + D into Main)', 'Clean Integrated History'],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Anatomy of Merge Conflict Markers:',
            steps: ['<<<<<<< HEAD (Current branch code)', '======= (Divider line separating changes)', '>>>>>>> feat/new-ui (Incoming branch code)', 'Delete markers, keep desired code, run `git add` & `git commit`']
          },
          code: `# 1. Create and switch to a modern feature branch
git switch -c feat/user-dashboard

# 2. Make code edits and commit
echo "export function Dashboard() { return <h1>Dashboard</h1>; }" > Dashboard.jsx
git add Dashboard.jsx
git commit -m "feat: add user dashboard component"

# 3. Switch back to main and pull latest updates
git switch main
git pull origin main

# 4. Merge feature branch into main
git merge feat/user-dashboard

# 5. Delete local branch after successful merge
git branch -d feat/user-dashboard

# 6. IF CONFLICT OCCURS:
# Open conflicted file, resolve <<<<<<< HEAD markers, then:
# git add Dashboard.jsx
# git commit -m "merge: resolve conflict between main and feat/user-dashboard"
# Or cancel merge cleanly: git merge --abort`,
          codeBreakdown: [
            { part: 'git switch -c <branch>', label: 'Modern Git 2.23+ syntax creating and switching to a new branch in one step', color: '#3b82f6' },
            { part: 'git merge feat/user-dashboard', label: 'Integrates feature commits into the currently active branch', color: '#10b981' },
            { part: 'git merge --abort', label: 'Safely restores branch state if a merge conflict becomes too tangled to resolve', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Forgetting to pull latest changes from `main` before merging your feature branch',
            '❌ Committing unresolved conflict markers (`<<<<<<< HEAD`) into production code',
            '❌ Doing long-lived 6-month branches instead of integrating small, frequent feature branches'
          ],
          proTips: [
            '💡 Use `git merge --abort` anytime a merge goes messy to return instantly to your pre-merge state',
            '💡 Use VS Code 3-Way Merge Editor to click "Accept Current", "Accept Incoming", or "Accept Both"'
          ],
          interviewQuestions: [
            'What is the difference between a Fast-Forward Merge and a 3-Way Merge Commit in Git?',
            'What causes a Merge Conflict and what is the exact step-by-step procedure to resolve it?',
            'What is the difference between `git switch` and `git checkout` in modern Git?'
          ],
          miniChallenge: 'Create two branches modifying the same line in `index.html`, merge them to trigger a conflict, and resolve it cleanly.',
          quiz: {
            type: 'mcq',
            question: 'Merge conflict hone par agar aapko merge cancel karke purani clean state pe wapas aana ho toh kaunsi command use karenge?',
            options: ['git merge --cancel', 'git merge --abort', 'git reset --kill', 'git clean -f'],
            answer: 'git merge --abort',
            explanation: '`git merge --abort` stops the merge process and restores the branch to the exact state before the merge was attempted.'
          },
          miniQuiz: [
            {
              type: 'predict',
              question: 'Conflict markers mein `<<<<<<< HEAD` kiska code represent karta hai?',
              code: '<<<<<<< HEAD\nconst x = 1;\n=======\nconst x = 2;\n>>>>>>> feat',
              options: ['Incoming branch ka code', 'Current checked-out branch ka code', 'Deleted code', 'Server backup code'],
              answer: 'Current checked-out branch ka code',
              explanation: '`HEAD` represents the current branch you are currently on when running `git merge`.'
            }
          ],
          summary: ['Branches provide isolated development lines', 'Fast-forward occurs when history is linear; 3-way merge occurs on divergent branches', 'Conflict markers must be resolved and committed cleanly'],
          flashcard: { q: 'What is a Fast-Forward Merge?', a: 'When the target branch pointer simply moves forward to the latest commit of the feature branch without creating a new merge commit.' },
          funFact: 'A Git branch is not a container of files — it is literally a 41-byte text file inside `.git/refs/heads/` containing a 40-character commit hash!',
          didYouKnow: 'Git introduced `git switch` and `git restore` in Git 2.23 (2019) to separate the overloaded responsibilities of the old `git checkout` command.',
          realWorldUseCases: ['Feature isolation in agile sprints', 'Hotfix branches for emergency production bugs', 'Release candidate branches (v1.2.0-rc)', 'Experimental spikes and proof-of-concept testing'],
          practiceQuestions: [
            'Create a feature branch, commit 2 changes, and merge it into main with a merge commit',
            'Simulate and resolve a merge conflict in VS Code merge editor'
          ]
        },
        {
          id: 'git-rebase-stash-cherrypick',
          title: 'Interactive Rebase, Git Stash & Cherry-Pick',
          emoji: '🪄',
          xpReward: 45,
          badgeName: 'History Craftsman',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Git Stash matlab cupboard ka drawer! Urgent bug fix karna hai? Current kaam drawer mein daalo (`git stash`), bug fix karo, aur wapas aake drawer se kaam nikaal lo (`git stash pop`)! 🪄"',
            hint: '💡 Masti Sir: "Shared public branch pe `git rebase` mat chalana! Rebase commit hashes badal deta hai — sirf apni private local feature branch pe rebase karo!"',
            success: '🎉 Masti Sir: "Interactive Rebase and Stashing mastered! Linear, clean Git history achieved!"',
            mistake: '😅 Masti Sir: "`git stash drop` bina soche mat dabana — wo stashed changes ko permanently delete kar deta hai!"'
          },
          englishDef: 'Advanced Git workflows optimize history. `git rebase` replays commits on top of another base creating a linear history. `git rebase -i` (Interactive Rebase) squashes, reorders, and edits commits. `git stash` temporarily shelves uncommitted work. `git cherry-pick` selectively applies specific commits from another branch.',
          hinglishExplain: '`git stash` ek temporary pocket hai jahan aap apna adha-adhura kaam bina commit kiye temporarily hide kar sakte ho taaki dusri branch pe ja sakein. `git rebase` se branch ki history linear aur clean banti hai. `git cherry-pick` se aap kisi dusri branch ka sirf ek specific commit utha kar apni branch mein la sakte ho.',
          storyExplain: 'Socho tum painting bana rahe ho. Achanak mummy ne bola "Bazar se doodh le aao". Tum painting ko cupboard mein rakh dete ho (`git stash`). Bazaar jaate ho (Urgent task). Wapas aakar cupboard se painting nikaal kar continue karte ho (`git stash pop`)! 🎨',
          funnyExample: {
            scenario: 'You have 6 messy commits: "wip", "fixed typo", "trying again", "finally works"\nInteractive Rebase (`squash`):\nAll 6 messy commits combined into 1 clean commit: `feat: implement user registration with validation`! ✨',
            punchline: 'Interactive rebase turns messy developer drafts into clean production history!'
          },
          memoryTrick: 'Advanced Git Toolkit:\n- Save uncommitted work: `git stash`\n- Restore stashed work: `git stash pop`\n- Clean up last 3 commits: `git rebase -i HEAD~3`\n- Pick 1 commit from another branch: `git cherry-pick <hash>`',
          visualDiagram: {
            title: 'Merge vs Rebase History Comparison',
            nodes: ['Merge Workflow (Creates 3-Way Merge Commit with Diamond Graph)', 'Rebase Workflow (Replays commits linearly on top of main)', 'Linear Git History without extra merge commits!'],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'How Git Rebase Works Internally:',
            steps: ['Identifies common ancestor commit', 'Temporarily saves feature branch commits as patches in `.git/rebase-apply`', 'Resets feature branch to target base commit', 'Replays each patch one by one, generating brand NEW commit hashes']
          },
          code: `# ── 1. GIT STASH WORKFLOW ──
# Temporarily shelve uncommitted working changes
git stash -u # -u includes untracked files

# View list of stashed snapshots
git stash list

# Pop and apply the most recent stash
git stash pop

# ── 2. GIT CHERRY-PICK WORKFLOW ──
# Apply a single critical hotfix commit from 'feat/payments' into 'main'
git switch main
git cherry-pick 7b9a4c1

# ── 3. INTERACTIVE REBASE (SQUASH COMMITS) ──
# Clean up the last 3 local commits before opening a Pull Request
git rebase -i HEAD~3

# In the interactive editor:
# pick 1a2b3c4 feat: add login form UI
# squash 2b3c4d5 fix: typo in button label
# squash 3c4d5e6 test: add unit test for email validation
# Result: All 3 commits squashed into 1 professional commit!`,
          codeBreakdown: [
            { part: 'git stash -u', label: 'Saves both tracked and untracked uncommitted modifications to the stash stack', color: '#3b82f6' },
            { part: 'git cherry-pick <hash>', label: 'Applies the exact diff of a single chosen commit onto current branch', color: '#10b981' },
            { part: 'git rebase -i HEAD~3', label: 'Opens interactive editor to squash, reword, reorder, or drop commits', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Rebasing a public branch that teammates are actively pulling from (rewriting shared history causes chaos)',
            '❌ Forgetting that `git stash` by default ignores untracked files unless you pass `-u` or `--include-untracked`'
          ],
          proTips: [
            '💡 Use `git stash branch <new-branch>` to pop your stash directly into a brand new branch',
            '💡 Always use `git pull --rebase` to pull remote changes cleanly without creating cluttered "Merge branch main of..." commits'
          ],
          interviewQuestions: [
            'What is the Golden Rule of Git Rebase and why should you never rebase a shared public branch?',
            'What is the difference between `git stash pop` and `git stash apply`?',
            'How do you squash the last 4 messy commits into a single conventional commit before raising a PR?'
          ],
          miniChallenge: 'Make 3 quick commits, use `git rebase -i HEAD~3` to squash them into 1 clean commit, and verify with `git log --oneline`.',
          quiz: {
            type: 'mcq',
            question: '`git stash pop` aur `git stash apply` mein kya farak hota hai?',
            options: ['Dono bilkul same hain', '`pop` changes apply karke stash list se delete kar deta hai, jabki `apply` stash list mein save rakhta hai', '`pop` code delete kar deta hai', '`apply` sirf main branch pe chalta hai'],
            answer: '`pop` changes apply karke stash list se delete kar deta hai, jabki `apply` stash list mein save rakhta hai',
            explanation: '`git stash pop` restores the stashed changes and removes the entry from the stash list, whereas `apply` keeps the stash for future reuse.'
          },
          miniQuiz: [
            {
              type: 'predict',
              question: '`git cherry-pick 3a4b5c6` command kya karegi?',
              code: 'git cherry-pick 3a4b5c6',
              options: ['Entire branch merge karegi', 'Sirf commit 3a4b5c6 ke changes ko current branch pe apply karegi', 'Commit delete karegi', 'Branch create karegi'],
              answer: 'Sirf commit 3a4b5c6 ke changes ko current branch pe apply karegi',
              explanation: '`git cherry-pick` extracts and applies the changes introduced by a specific single commit hash.'
            }
          ],
          summary: ['git stash temporarily shelves uncommitted work', 'Interactive rebase cleans and squashes messy local history', 'Cherry-pick selectively pulls individual commits across branches'],
          flashcard: { q: 'What does "squash" mean in Git?', a: 'Combining multiple small or messy commits into a single unified commit with a clean descriptive message.' },
          funFact: 'Git\'s rebase command was created to give open-source maintainers a way to accept patches from contributors without creating spiderweb merge graphs!',
          didYouKnow: 'You can name your stashes with `git stash save "my descriptive note"` to easily remember what work you stashed.',
          realWorldUseCases: ['Switching branches to fix emergency hotfixes while mid-feature', 'Cleaning up PR commit history before code review', 'Porting a critical security bugfix from `main` to `v1.x-legacy` with cherry-pick', 'Keeping a feature branch up-to-date with `git rebase main`'],
          practiceQuestions: [
            'Stash uncommitted changes, switch branches, come back, and pop stash',
            'Perform an interactive rebase to rename a commit message using `reword`'
          ]
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 3: GITHUB, PULL REQUESTS & TEAM WORKFLOWS
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 3: GitHub, Pull Requests, Code Reviews & Workflows',
      lessons: [
        {
          id: 'git-github-pull-requests',
          title: 'Remote Repos, Pull Requests, Code Reviews & Team Workflows',
          emoji: '🚀',
          xpReward: 50,
          badgeName: 'Open Source Contributor',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "GitHub developers ka Instagram hai! Green contribution squares dekh ke recruiters ka dil pighal jata hai! Pull Request (PR) ka matlab: Team se code review karwana aur approval ke baad merge karna! 🚀"',
            hint: '💡 Masti Sir: "Fork matlab GitHub pe repo ki online photocopy banana, Clone matlab remote repo ko apne laptop pe download karna!"',
            success: '🎉 Masti Sir: "PR reviewed and merged successfully! Welcome to collaborative software engineering!"',
            mistake: '😅 Masti Sir: "Friday shaam ko bina review aur tests ke direct production merge mat karna 😂!"'
          },
          englishDef: 'GitHub hosts Git repositories in the cloud and provides team collaboration tools: Pull Requests (PRs), Code Reviews, Issues, Branch Protection Rules, and Forking workflows for open-source contributions.',
          hinglishExplain: 'GitHub remote cloud platform hai jahan code store hota hai aur teams milkar kaam karti hain. Jab aap feature branch bana kar GitHub pe push karte ho, aap Pull Request (PR) create karte ho taaki senior engineers code review karein, comments dein, aur test pass hone par use `main` mein merge karein.',
          storyExplain: 'Socho tum Wikipedia pe koi bada article update kar rahe ho. Tum direct live article mein change nahi kar sakte. Tum ek edit proposal submit karte ho (Pull Request). Wikipedia ke editors (Code Reviewers) line-by-line check karte hain, suggestions dete hain, aur verify karke publish (Merge) kar dete hain! 📰',
          funnyExample: {
            scenario: 'Junior Dev raises a 2,500-line PR on Friday at 5:55 PM 😱\nSenior Dev: "Reviewing 10 lines = 10 comments. Reviewing 2500 lines = Looks good to me! (LGTM) 😂"\nKeep PRs small, atomic, and focused (< 300 lines)!',
            punchline: 'Small PRs get reviewed fast, huge PRs get delayed forever!'
          },
          memoryTrick: 'Collaboration Flow:\nFork / Clone -> Branch (`feat/xyz`) -> Commit -> Push -> Open PR -> Code Review -> Green CI Tests -> Squash & Merge',
          visualDiagram: {
            title: 'GitHub Team Pull Request Workflow',
            nodes: ['Local Feature Branch (feat/auth)', 'git push origin feat/auth', 'Open Pull Request on GitHub', 'Peer Code Review & Automated CI Tests', 'Approved & Merged into main'],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'GitHub Pull Request Merge Options:',
            steps: ['Merge Commit: Preserves all individual commits and creates 3-way merge commit', 'Squash and Merge: Condenses all PR commits into 1 clean commit on main (Recommended)', 'Rebase and Merge: Replays all commits individually onto main without merge commit']
          },
          code: `# 1. Link local repository to GitHub remote
git remote add origin https://github.com/username/codemasti-web-app.git

# 2. Push feature branch and set upstream tracking
git push -u origin feat/auth-system

# 3. Pull latest team updates using rebase to avoid merge clutter
git pull --rebase origin main

# 4. Fetch all remote branches and prune deleted remote branches
git fetch --all --prune

# 5. Check remote URLs
git remote -v`,
          codeBreakdown: [
            { part: 'git remote add origin <url>', label: 'Registers remote server address with default alias "origin"', color: '#3b82f6' },
            { part: 'git push -u origin <branch>', label: 'Uploads commits and establishes default upstream tracking', color: '#10b981' },
            { part: 'git pull --rebase origin main', label: 'Replays local commits on top of incoming remote changes for clean history', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Committing secrets, `.env` files, or private SSH keys to public GitHub repositories',
            '❌ Force pushing (`git push --force`) to shared team branches (overwrites teammates work — use `--force-with-lease` if necessary)',
            '❌ Creating huge monolithic PRs modifying 50 unrelated files'
          ],
          proTips: [
            '💡 Use SSH keys (`ed25519`) instead of personal access tokens for secure, passwordless Git authentication',
            '💡 Use GitHub CLI (`gh pr create`, `gh pr checkout <number>`) to manage pull requests directly from your terminal'
          ],
          interviewQuestions: [
            'What is the difference between `git fetch` and `git pull`?',
            'What is the difference between Forking a repository and Cloning a repository?',
            'Explain GitHub Flow vs Git Flow vs Trunk-Based Development workflows and when to use each.'
          ],
          miniChallenge: 'Create a GitHub repo, push your code, configure a Branch Protection Rule requiring 1 PR approval on `main`, and merge a PR.',
          quiz: {
            type: 'mcq',
            question: 'Remote server se updates download karke local branch mein merge karne ke liye kaunsi command use hoti hai?',
            options: ['git fetch', 'git pull', 'git push', 'git clone'],
            answer: 'git pull',
            explanation: '`git pull` runs `git fetch` to download remote data followed by `git merge` to integrate into the current branch.'
          },
          miniQuiz: [
            {
              type: 'predict',
              question: 'Forking aur Cloning mein primary difference kya hai?',
              code: 'GitHub UI: Fork vs Terminal: git clone',
              options: ['Dono identical hain', 'Forking creates a remote copy on GitHub under your account; Cloning copies to your local machine', 'Forking deletes local code', 'Cloning requires paid GitHub plan'],
              answer: 'Forking creates a remote copy on GitHub under your account; Cloning copies to your local machine',
              explanation: 'Forking creates a server-side copy of another user\'s repository on GitHub, while cloning downloads files to your local computer.'
            }
          ],
          summary: ['GitHub provides cloud hosting and team collaboration tools', 'Pull Requests enable peer review and automated testing', 'Squash & Merge maintains a clean, linear main branch history'],
          flashcard: { q: 'What is a Branch Protection Rule in GitHub?', a: 'A repository setting that prevents direct pushes to `main` and enforces required PR reviews, passing CI tests, and linear history before merging.' },
          funFact: 'GitHub\'s Octocat mascot was designed by Simon Oxley (who also created the original Twitter bird logo) and was named "Mona Lisa Octocat" by GitHub founders!',
          didYouKnow: 'Adding keywords like `Fixes #42` or `Closes #15` in your Pull Request description automatically closes the corresponding GitHub Issue when the PR merges!',
          realWorldUseCases: ['Open source contributions to libraries (React, Vite, Node.js)', 'Enterprise team pull requests with automated linting', 'Branch protection rules guarding production releases', 'Managing feature roadmaps with GitHub Projects and Issues'],
          practiceQuestions: [
            'Fork an open source repository, create a branch, push, and open a Pull Request',
            'Configure GitHub branch protection rules requiring status checks to pass before merging'
          ]
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 4: GITHUB ACTIONS, CI/CD & SECURITY
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 4: GitHub Actions CI/CD, Security & Capstone Workflow',
      lessons: [
        {
          id: 'git-actions-cicd-capstone',
          title: 'GitHub Actions CI/CD, Git Security & Production Capstone Workflow',
          emoji: '🏆',
          xpReward: 60,
          badgeName: 'Git Workflow Master',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Automated CI/CD testing ke bina production code push karna bina helmet bike chalane jaisa hai! GitHub Actions se automated tests chalao, security leaks roko aur production ready bano! 🎓"',
            hint: '💡 Masti Sir: "Kabhi bhi `.env` ya API secrets GitHub pe push mat karna! GitHub Secrets (`${{ secrets.API_KEY }}`) use karo!"',
            success: '🎉 Masti Sir: "Congratulations! Complete Git & GitHub Professional Mastery Achieved! You are now 100% Team & Job Ready! 🚀"',
            mistake: '😅 Masti Sir: "Agar galti se API key commit ho jaye, toh repo private karna solution nahi hai — API key ko provider dashboard pe jakar REVOKE karo!"'
          },
          englishDef: 'Production Git engineering integrates automated CI/CD via GitHub Actions (`.github/workflows/*.yml`), enforces Git Hooks (Husky, commitlint), manages Semantic Versioning tags, and guarantees strict repository security (secret scanning, Dependabot alerts).',
          hinglishExplain: 'Professional development mein har PR par GitHub Actions automatically automated tests, linting, aur build check chalata hai. Agar test fail ho jaye, toh PR merge button lock ho jata hai taaki production mein bug na jaye. Sensitive keys ke liye GitHub Secrets use kiya jata hai.',
          storyExplain: 'Socho tum car factory mein quality inspector ho. Har gaadi (PR) showroom mein jaane se pehle ek automated test track (GitHub Actions CI) pe chalti hai — crash test, brake test, emission test. Agar sab green pass hota hai, tabhi car ko showroom (Production) bhejte hain! 🏎️',
          funnyExample: {
            scenario: 'Junior Dev accidentally pushes AWS Secret Key to public GitHub repo:\nWithin 30 seconds -> Hacker bot scans repo and spins up $5,000 crypto-mining servers! 😱\nAlways use `.gitignore` and GitHub Secret Scanning!',
            punchline: 'Never commit secrets to Git — revoke immediately if leaked!'
          },
          memoryTrick: 'CI/CD Pipeline Flow:\nPush / PR -> GitHub Action Trigger -> Spin up Ubuntu Runner -> Install Dependencies -> Run Linter -> Run Tests -> Build Project -> Deploy to Cloud',
          visualDiagram: {
            title: 'GitHub Actions Automated CI/CD Pipeline',
            nodes: ['Developer Opens PR', 'Trigger: on: [pull_request]', 'Job: Run on ubuntu-latest', 'Step 1: Checkout Code', 'Step 2: npm install', 'Step 3: npm test', 'Step 4: npm run build', 'Status Check: 🟢 Green -> Merge Allowed'],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'GitHub Actions Runner Lifecycle:',
            steps: ['GitHub allocates an isolated ephemeral virtual machine runner', 'Clones repo using `actions/checkout@v4`', 'Caches `node_modules` for fast subsequent runs', 'Executes test script and streams live output logs to GitHub PR UI']
          },
          code: `# ── .github/workflows/ci.yml ──
name: Production CI/CD Pipeline

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-test:
    runs-on: ubuntu-latest

    steps:
      - name: 1. Checkout repository
        uses: actions/checkout@v4

      - name: 2. Set up Node.js environment
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: 3. Install dependencies
        run: npm ci

      - name: 4. Run ESLint code quality check
        run: npm run lint

      - name: 5. Execute automated test suite
        run: npm test

      - name: 6. Build production bundle
        run: npm run build
        env:
          VITE_API_URL: \${{ secrets.PRODUCTION_API_URL }}`
,
          codeBreakdown: [
            { part: 'on: [push, pull_request]', label: 'Triggers automated workflow on code pushes or PR events', color: '#3b82f6' },
            { part: 'runs-on: ubuntu-latest', label: 'Spins up clean isolated cloud Linux container runner', color: '#10b981' },
            { part: '${{ secrets.PRODUCTION_API_URL }}', label: 'Injects encrypted environment secrets securely without exposing them in code', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Hardcoding private API keys, JWT secrets, or DB passwords in source code or YAML files',
            '❌ Using `npm install` in CI instead of `npm ci` (`npm ci` installs exact versions from `package-lock.json`)',
            '❌ Not setting up branch protection rules to require CI checks to pass before merging'
          ],
          proTips: [
            '💡 Use Git Tags (`git tag -a v1.0.0 -m "Release version 1.0.0"`) to mark production releases adhering to Semantic Versioning (`MAJOR.MINOR.PATCH`)',
            '💡 Enable Dependabot alerts on GitHub to automatically open PRs whenever security vulnerabilities are detected in your NPM packages'
          ],
          interviewQuestions: [
            'What is Continuous Integration (CI) and how does a GitHub Actions workflow automate testing and build validation?',
            'What should you immediately do if an engineer accidentally commits a sensitive private API key or password to a public repository?',
            'Explain Semantic Versioning (SemVer: MAJOR.MINOR.PATCH) and how Git Tags are used in release workflows.'
          ],
          miniChallenge: 'Create a `.github/workflows/ci.yml` workflow that checks out a project, installs dependencies, and runs `npm run build`.',
          quiz: {
            type: 'mcq',
            question: 'CI/CD environments (jaise GitHub Actions) mein reproducible dependency installation ke liye `npm install` ki jagah kaunsi command recommend hoti hai?',
            options: ['npm update', 'npm ci', 'npm build', 'npm global install'],
            answer: 'npm ci',
            explanation: '`npm ci` (Clean Install) installs dependencies strictly matching `package-lock.json` without modifying it, making it faster and reproducible in CI/CD.'
          },
          miniQuiz: [
            {
              type: 'predict',
              question: 'Semantic Versioning `v2.4.1` mein agar koi Breaking Change release ho, toh naya version number kya hoga?',
              code: 'v2.4.1 -> Breaking Change -> ?',
              options: ['v2.4.2', 'v2.5.0', 'v3.0.0', 'v2.4.1-patch'],
              answer: 'v3.0.0',
              explanation: 'In Semantic Versioning (MAJOR.MINOR.PATCH), a breaking API change requires incrementing the MAJOR version number (v3.0.0).'
            }
          ],
          summary: ['GitHub Actions automates linting, testing, and cloud deployments', 'Never commit secrets — use GitHub encrypted secrets', 'Semantic Versioning and Git Tags organize production releases'],
          flashcard: { q: 'What is npm ci?', a: 'A command designed for automated CI/CD pipelines that performs a clean, fast installation of dependencies strictly based on `package-lock.json`.' },
          funFact: 'GitHub Actions executes over 1 billion minutes of automated CI/CD workflows every single month across open-source and enterprise repositories!',
          didYouKnow: 'GitHub automatically scans public repositories for over 100 token types (AWS, Slack, Stripe, Google Cloud) and alerts the cloud provider to revoke compromised credentials within minutes.',
          realWorldUseCases: ['Automated unit and integration test pipelines', 'Automatic deployment to Vercel, Netlify, or AWS on merge to main', 'Automated NPM package publishing with version tags', 'Dependabot automated security dependency updates'],
          practiceQuestions: [
            'Build a complete GitHub Actions workflow that lints and builds a React project on every PR',
            'Tag a release `v1.0.0` using `git tag -a` and push tags to GitHub with `git push --tags`'
          ]
        }
      ]
    }
    // ═══════════════════════════════════════════════════════
    // CHAPTER 5: ADVANCED GIT TECHNIQUES
    // ═══════════════════════════════════════════════════════
    ,{
      chapterTitle: 'Chapter 5: Advanced Git — Stash, Cherry-Pick, Bisect & Submodules',
      lessons: [
        {
          id: 'git-stash-workflow',
          title: 'Git Stash — Save Work Temporarily',
          emoji: '🗄️',
          xpReward: 35,
          badgeName: 'Stash Master',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Kaam adha hua aur urgent bug fix karna hai? git stash se kaam shelf pe rakh do, bug fix karo, wapas aa jao! 🗄️"',
            hint: '💡 Masti Sir: "git stash se sirf tracked files save hote hain! Naye untracked files ke liye `git stash -u` ya `git stash --include-untracked` use karo!"',
            success: '🥳 Masti Sir: "Stash perfectly kaam kar raha hai! Context switch nimbu pani jaisa smooth ho gaya 🔥"',
            mistake: '😅 Masti Sir: "`git stash pop` conflict kar sakta hai — careful! `git stash apply` safer hai kyunki stash entry remove nahi hoti."'
          },
          englishDef: 'Git stash temporarily shelves uncommitted changes so you can work on something else. Changes are stored in a stack. `git stash push` saves, `git stash pop` restores and removes, `git stash apply` restores without removing.',
          hinglishExplain: '`git stash` adhe kaam ko ek temporary drawer mein daal deta hai. Phir aap dusra kaam karo — bug fix ya urgent feature. Kaam complete hone par `git stash pop` se apna purana work wapas milta hai.',
          code: `# Scenario: Working on feature, urgent bug reported!

# 1. Save current work to stash
git stash push -m "feat: user dashboard half done"
# Working tree is now clean!

# 2. List all stashes
git stash list
# stash@{0}: On feature/dashboard: feat: user dashboard half done

# 3. Fix urgent bug on main branch
git checkout main
git pull origin main
# ... fix bug, commit ...

# 4. Return to feature work
git checkout feature/dashboard

# 5a. Apply stash and remove it (like pop from stack)
git stash pop

# 5b. Apply without removing (safe option)
git stash apply stash@{0}

# 6. Apply stash on different branch
git stash branch feature/new-branch stash@{0}

# 7. Show stash diff before applying
git stash show -p stash@{0}

# 8. Delete a stash
git stash drop stash@{0}

# 9. Clear all stashes (careful!)
git stash clear`,
          commonMistakes: [
            '❌ Untracked files stash mein nahi jaate by default — `-u` flag use karo',
            '❌ `git stash pop` conflict hone par stash automatically remove ho jaata hai — pop se pehle stash show karo'
          ],
          quiz: {
            question: 'git stash pop aur git stash apply mein kya fark hai?',
            options: ['Koi fark nahi', 'pop stash apply karke stash stack se remove karta hai, apply sirf apply karta hai remove nahi karta', 'apply faster hai', 'pop untracked files bhi stash karta hai'],
            answer: 'pop stash apply karke stash stack se remove karta hai, apply sirf apply karta hai remove nahi karta',
            explanation: '`stash pop` = apply + drop. Safe workflow ke liye `stash apply` use karo — agar conflicts aaye toh stash entry safe rahegi.'
          },
          summary: ['git stash uncommitted changes temporarily save karta hai', 'Multiple stashes ek stack mein store hote hain', 'stash apply stash entry preserve karta hai — safer for conflict scenarios'],
          flashcard: { q: 'Stash sirf current branch pe kaam karta hai?', a: 'Nahi! Stash branch-agnostic hai — kisi bhi branch pe apply kar sakte ho. Ye ek global stack hai.' }
        },
        {
          id: 'git-cherry-pick',
          title: 'Cherry-Pick — Specific Commits Apply Karo',
          emoji: '🍒',
          xpReward: 35,
          badgeName: 'Cherry Picker',
          englishDef: 'git cherry-pick applies the changes of a specific commit from one branch to another, creating a new commit with the same changes but a different SHA. Useful for hotfixes and selective feature backporting.',
          hinglishExplain: 'Cherry-pick se aap ek specific commit dusri branch pe apply kar sakte ho. Jaise production branch pe ek bug fix commit apply karna bina poori feature branch merge kiye. Ye surgical precision git operation hai.',
          code: `# Scenario: Bug fix commit on feature branch, need on main too!

# Find the commit hash from feature branch
git log --oneline feature/login
# abc1234 fix: null check on login validation
# def5678 feat: add remember me checkbox

# Apply ONLY the bug fix commit to main branch
git checkout main
git cherry-pick abc1234
# Now main has the bug fix without the "remember me" feature!

# Cherry-pick multiple commits (range)
git cherry-pick abc1234..def5678

# Cherry-pick without creating a commit (stage only)
git cherry-pick --no-commit abc1234
# Review changes, then commit manually

# If cherry-pick has conflicts
git cherry-pick abc1234
# Conflict! Edit files to resolve...
git add .
git cherry-pick --continue
# or abort
git cherry-pick --abort`,
          quiz: {
            question: 'Git cherry-pick ka main use case kya hai?',
            options: ['Sabhi branches merge karna', 'Ek specific commit changes dusri branch pe apply karna bina full merge ke', 'Remote se code download karna', 'Conflicts resolve karna'],
            answer: 'Ek specific commit changes dusri branch pe apply karna bina full merge ke',
            explanation: 'Cherry-pick surgical precision tool hai — sirf wahi commit lao jo chahiye. Production hotfixes aur selective backporting ke liye perfect.'
          },
          summary: ['Cherry-pick specific commit ko dusri branch pe apply karta hai', 'Naya commit banta hai same changes ke saath, alag SHA ke saath', 'Hotfixes aur selective backporting ke liye ideal'],
          flashcard: { q: 'Cherry-pick aur merge mein kya fark hai?', a: 'Merge poori branch history integrate karta hai. Cherry-pick sirf ek ya kuch specific commits apply karta hai — selective surgery.' }
        },
        {
          id: 'git-bisect-reflog',
          title: 'Git Bisect (Bug Hunt) & Reflog (Recovery)',
          emoji: '🔍',
          xpReward: 40,
          badgeName: 'Bug Detective',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "500 commits mein bug dhundna? git bisect binary search se automatically dhundh dega! git reflog se khoya hua commit bhi wapas aata hai! 🔍"',
            hint: '💡 Masti Sir: "git bisect binary search algorithm use karta hai — worst case O(log n) commits! 1000 commits mein sirf 10 steps!"',
            success: '🥳 Masti Sir: "Bug introducing commit mil gaya! Ye skills advanced Git developer ki pehchaan hai 🔥"',
            mistake: '😅 Masti Sir: "git bisect end hone ke baad `git bisect reset` karna bhool gaye? Detached HEAD state mein phans jaoge!"'
          },
          englishDef: 'git bisect uses binary search to find the commit that introduced a bug. git reflog shows a complete history of all HEAD movements, allowing recovery of lost commits, deleted branches, and undone resets.',
          hinglishExplain: 'git bisect se: ek good commit batao (bug tha nahi), ek bad commit batao (bug hai), Git automatically binary search karta hai. git reflog se koi bhi committed ya reset hua kaam wapas milta hai — ultimate undo!',
          code: `# === GIT BISECT — Binary Search for Bugs ===
git bisect start

# Mark current commit as BAD (bug present)
git bisect bad HEAD

# Mark a known good commit (bug didn't exist)
git bisect good v1.2.0
# Git automatically checks out middle commit!

# Test the code — does bug exist?
# If YES: git bisect bad
# If NO: git bisect good

# Repeat until Git finds the culprit commit!
# "abc1234 is the first bad commit"

# Automate with a script!
git bisect run npm test -- --testPathPattern="login"

# Always reset after bisect!
git bisect reset

# === GIT REFLOG — Complete History ===
git reflog
# Lists every HEAD movement with timestamps

# Recover a "deleted" branch!
git reflog | grep "checkout: moving from deleted-branch"
# Find the SHA of last commit on that branch
git checkout -b recovered-branch abc1234

# Undo a bad git reset --hard
git reflog
# Find the commit before the reset
git reset --hard abc1234  # Restore to that point!`,
          quiz: {
            question: 'git bisect kis algorithm se bug introducing commit dhundta hai?',
            options: ['Linear search — har commit check karta hai', 'Binary search — O(log n) steps mein dhundta hai', 'DFS traversal', 'Random sampling'],
            answer: 'Binary search — O(log n) steps mein dhundta hai',
            explanation: 'Binary search se 1000 commits mein bug ~10 steps mein dhundh jaata hai! Good/bad boundary pe automatically half karta rehta hai.'
          },
          summary: ['git bisect binary search se bug-introducing commit dhundta hai', 'git reflog har HEAD movement track karta hai — ultimate recovery tool', 'Bisect ke baad hamesha `git bisect reset` karo'],
          flashcard: { q: 'git reflog kitne din tak history rakhta hai?', a: 'By default 90 days reflog entries rakhta hai (gc.reflogExpire setting). git gc se purani entries clean hoti hain.' }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 6: GITHUB ADVANCED FEATURES
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 6: GitHub Advanced — Issues, Projects, Releases & Wikis',
      lessons: [
        {
          id: 'github-issues-projects',
          title: 'GitHub Issues, Labels, Milestones & Project Boards',
          emoji: '📋',
          xpReward: 30,
          badgeName: 'Project Manager',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "GitHub sirf code host karne ki jagah nahi — complete project management tool hai! Issues, Milestones, Project Boards — sab kuch! 📋"',
            hint: '💡 Masti Sir: "Issue template banao! `CONTRIBUTING.md` aur `PULL_REQUEST_TEMPLATE.md` se contributors ko clear guidance milti hai!"',
            success: '🥳 Masti Sir: "Professional project management setup ho gaya! Agile workflow GitHub par perfectly implement 🔥"',
            mistake: '😅 Masti Sir: "Issues bina label ke chhor doge toh chaos hoga! Labels se priority aur type mark karo!"'
          },
          englishDef: 'GitHub Issues track bugs, features, and tasks. Labels categorize issues (bug, enhancement, priority). Milestones group issues for releases. Project Boards provide Kanban-style workflow visualization.',
          hinglishExplain: 'GitHub Issues ek task management system hai. Har bug ya feature request ek issue hai. Labels se categorize karo (bug, enhancement, help-wanted). Milestones se release planning karo. Project Boards (Kanban) se team workflow visualize karo.',
          code: `# GitHub Issue Templates
# File: .github/ISSUE_TEMPLATE/bug_report.md
---
name: Bug Report
about: Report a bug in CodeMasti
labels: bug, needs-triage
assignees: ''
---

## Bug Description
<!-- Clear description of the bug -->

## Steps to Reproduce
1. Go to '...'
2. Click on '...'
3. See error

## Expected Behavior
<!-- What should happen -->

## Actual Behavior
<!-- What actually happens -->

## Screenshots
<!-- If applicable -->

## Environment
- OS: [e.g. macOS 14]
- Browser: [e.g. Chrome 120]
- Version: [e.g. v2.1.0]

# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# File: .github/PULL_REQUEST_TEMPLATE.md
## Description
<!-- What does this PR do? -->

## Type of Change
- [ ] Bug fix (non-breaking)
- [ ] New feature (non-breaking)
- [ ] Breaking change

## Testing
- [ ] Unit tests added
- [ ] E2E tests pass
- [ ] Manual testing done

## Checklist
- [ ] Code follows project style
- [ ] Self-reviewed
- [ ] Documentation updated`,
          quiz: {
            question: 'GitHub Milestone ka kya kaam hai?',
            options: ['Code linting karna', 'Issues aur PRs ko ek version/sprint ke around group karna aur progress track karna', 'Branch protect karna', 'Secrets store karna'],
            answer: 'Issues aur PRs ko ek version/sprint ke around group karna aur progress track karna',
            explanation: 'Milestones release planning ke liye hain — "v2.0 Release" milestone mein sab related issues group karo aur completion percentage track karo.'
          },
          summary: ['GitHub Issues bugs aur features track karte hain', 'Labels aur Milestones se project organization hoti hai', 'Issue/PR templates se contributors ko clear guidance milti hai'],
          flashcard: { q: 'GitHub ke 3 main project management tools kaunse hain?', a: 'Issues (tasks/bugs), Milestones (release grouping), Projects (Kanban boards for workflow visualization).' }
        },
        {
          id: 'github-releases-tags',
          title: 'Git Tags, Releases & Semantic Versioning',
          emoji: '🏷️',
          xpReward: 35,
          badgeName: 'Release Manager',
          englishDef: 'Git tags mark specific commits as important points (releases). Annotated tags store extra metadata. GitHub Releases package tagged commits with release notes, binaries, and changelogs for users to download.',
          hinglishExplain: 'Tags permanent bookmarks hote hain specific commits ke liye. Jaise "v1.0.0" release. Annotated tags (-a flag) mein message aur tagger info hoti hai. GitHub Releases tags pe release notes, downloadable assets add karte hain.',
          code: `# Semantic Versioning: MAJOR.MINOR.PATCH
# MAJOR: Breaking changes (v2.0.0)
# MINOR: New backward-compatible features (v1.1.0)
# PATCH: Bug fixes (v1.0.1)

# 1. Create annotated tag
git tag -a v1.0.0 -m "Release v1.0.0: Initial stable release with auth and courses"

# 2. Create tag for specific commit
git tag -a v0.9.0 abc1234 -m "Beta release"

# 3. List all tags
git tag -l "v1.*"

# 4. Push tags to remote
git push origin v1.0.0    # Push specific tag
git push origin --tags    # Push all tags

# 5. Checkout specific release
git checkout v1.0.0
# Note: Creates detached HEAD state!

# 6. Delete tag (local and remote)
git tag -d v1.0.0
git push origin --delete v1.0.0

# 7. Generate Changelog automatically
git log v0.9.0..v1.0.0 --oneline --no-merges
# Shows all commits between releases`,
          quiz: {
            question: 'Semantic Versioning mein v1.2.3 → v2.0.0 kab karte hain?',
            options: ['Naya feature add karne par', 'Bug fix hone par', 'Breaking API changes hone par (backward incompatible)', 'Performance improvement hone par'],
            answer: 'Breaking API changes hone par (backward incompatible)',
            explanation: 'MAJOR version increment = breaking changes. Existing users ka code update karna padega. MINOR = new features (backward compatible). PATCH = bug fixes.'
          },
          summary: ['Tags specific commits ko permanently mark karte hain', 'Annotated tags mein metadata hoti hai', 'GitHub Releases user-facing release notes aur assets provide karte hain'],
          flashcard: { q: 'Lightweight tag aur annotated tag mein kya fark hai?', a: 'Lightweight = sirf pointer to commit (no metadata). Annotated (-a) = stores tagger name, date, message, GPG signature — use these for releases.' }
        },
        {
          id: 'github-actions-advanced',
          title: 'GitHub Actions — Advanced Workflows & Matrix Builds',
          emoji: '⚡',
          xpReward: 45,
          badgeName: 'Actions Ninja',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "GitHub Actions se har PR pe automatic tests, linting, aur deployment! Manual kaam zero, quality maximum! ⚡"',
            hint: '💡 Masti Sir: "Matrix builds se Node.js v18, v20, v21 pe simultaneous tests! Cache dependencies se build 3x fast hoti hai!"',
            success: '🥳 Masti Sir: "CI/CD pipeline ekdum professional! Push karo → Tests ✅ → Deploy ✅ Automatically! 🔥"',
            mistake: '😅 Masti Sir: "Secrets ko YAML mein hardcode mat karo! GitHub Secrets use karo aur `${{ secrets.API_KEY }}` se access karo!"'
          },
          englishDef: 'GitHub Actions allows defining custom CI/CD workflows triggered by events (push, PR, schedule). Matrix builds test across multiple environments simultaneously. Reusable workflows and composite actions eliminate code duplication.',
          hinglishExplain: 'Advanced GitHub Actions: Matrix builds se multiple Node.js versions simultaneously test karo. Caching se npm install fast hoti hai. Reusable workflows se code duplication avoid hoti hai. Jobs ke beech artifacts share karo.',
          code: `# .github/workflows/ci-cd.yml
name: CI/CD Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

env:
  NODE_ENV: test

jobs:
  # Matrix Build: Test on multiple Node.js versions
  test:
    name: Test (Node \${{ matrix.node-version }})
    runs-on: ubuntu-latest
    
    strategy:
      matrix:
        node-version: [18.x, 20.x, 21.x]
        fail-fast: false  # Don't stop if one fails
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js \${{ matrix.node-version }}
        uses: actions/setup-node@v4
        with:
          node-version: \${{ matrix.node-version }}
          cache: 'npm'  # Cache node_modules!
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run linter
        run: npm run lint
      
      - name: Run tests with coverage
        run: npm run test:coverage
      
      - name: Upload coverage to Codecov
        uses: codecov/codecov-action@v4
        if: matrix.node-version == '20.x'  # Only once!
        with:
          token: \${{ secrets.CODECOV_TOKEN }}

  # Deploy job (only on main push)
  deploy:
    needs: test  # Wait for tests!
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: \${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: \${{ secrets.ORG_ID }}
          vercel-project-id: \${{ secrets.PROJECT_ID }}`,

          interviewQuestions: [
            'GitHub Actions matrix builds ka kya fayda hai?',
            'Secrets aur environment variables mein kya fark hai GitHub Actions mein?'
          ],
          quiz: {
            question: 'GitHub Actions mein `needs:` keyword kya karta hai?',
            options: ['Job ko trigger karta hai', 'Job dependency define karta hai — listed jobs complete hone ke baad hi ye job run hoga', 'Secrets import karta hai', 'Artifact download karta hai'],
            answer: 'Job dependency define karta hai — listed jobs complete hone ke baad hi ye job run hoga',
            explanation: '`needs: [test]` se deploy job sirf tab run hogi jab test job successfully complete ho. Ye sequential execution guarantee karta hai.'
          },
          summary: ['Matrix builds se multiple environments simultaneously test hote hain', 'Cache actions se build significantly faster hoti hai', 'needs: se job dependencies define hoti hain'],
          flashcard: { q: 'GitHub Secrets kaise use karte hain workflow mein?', a: '${{ secrets.SECRET_NAME }} syntax se — GitHub automatically mask karta hai logs mein. Settings → Secrets and Variables → Actions mein add karo.' }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 7: OPEN SOURCE & TEAM WORKFLOWS
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 7: Open Source Contribution & Team Git Workflows',
      lessons: [
        {
          id: 'git-fork-contribution',
          title: 'Fork, Contribute & Open Source Workflow',
          emoji: '🌐',
          xpReward: 40,
          badgeName: 'Open Source Contributor',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Open source mein contribute karo! Resume mein GitHub link hona ab zaroori hai — recruiters code dekhte hain! 🌐"',
            hint: '💡 Masti Sir: "Fork karke kaam karo original repo touch na karo! Upstream remote add karo taaki latest changes sync ho sake!"',
            success: '🥳 Masti Sir: "Teri pehli PR merge ho gayi! Ye feeling aur kuch nahi! Open source contributor ab tum officially! 🔥"',
            mistake: '😅 Masti Sir: "Fork ke baad upstream changes sync karna bhool gaye? Merge conflicts bahut aayenge!"'
          },
          englishDef: 'The open source contribution workflow: Fork (personal copy), Clone, Create branch, Make changes, Push, Create Pull Request. Keeping fork synced with upstream prevents conflicts.',
          hinglishExplain: 'Open source contribution flow: upstream repo Fork karo (tumhari own copy ban jaaye) → Clone karo → Feature branch pe kaam karo → Push karo → Pull Request kholo original repo pe. Upstream se sync rehna zaroori hai.',
          code: `# Complete Open Source Contribution Workflow

# 1. Fork on GitHub UI → Then clone YOUR fork
git clone https://github.com/YOUR-USERNAME/react.git
cd react

# 2. Add upstream remote (original repo)
git remote add upstream https://github.com/facebook/react.git

# 3. Verify remotes
git remote -v
# origin    https://github.com/YOUR-USERNAME/react.git (fetch)
# origin    https://github.com/YOUR-USERNAME/react.git (push)
# upstream  https://github.com/facebook/react.git (fetch)
# upstream  https://github.com/facebook/react.git (push)

# 4. Sync with upstream before starting work
git fetch upstream
git checkout main
git merge upstream/main
git push origin main  # Update your fork's main

# 5. Create feature branch
git checkout -b fix/button-accessibility-aria

# 6. Make changes, commit
git add .
git commit -m "fix: add aria-label to Button component for accessibility"

# 7. Push to YOUR fork
git push origin fix/button-accessibility-aria

# 8. Create PR on GitHub from your fork → upstream
# Follow their CONTRIBUTING.md guidelines!

# 9. Sync again (if PR review takes time)
git fetch upstream
git rebase upstream/main`,
          quiz: {
            question: 'Open source contribution workflow mein upstream remote kya hota hai?',
            options: ['Tumhari fork ka remote', 'Original repository ka remote jahan se fork kiya', 'CI/CD server', 'Package registry'],
            answer: 'Original repository ka remote jahan se fork kiya',
            explanation: 'upstream = original repo (facebook/react). origin = tumhari fork. Upstream se fetch karke latest changes milte hain jo tumhara fork miss kar sakta hai.'
          },
          summary: ['Fork personal copy banata hai jahan PR merge kiye bina kaam karte hain', 'upstream remote se original repo ke saath sync rehta hai', 'Sync ke baad hi feature branch start karo conflict avoid karne ke liye'],
          flashcard: { q: 'CONTRIBUTING.md file kya hoti hai?', a: 'Open source projects mein contribution guidelines — coding style, PR process, issue reporting, setup instructions. Hamesha pehle yahi padho!' }
        },
        {
          id: 'git-team-workflows',
          title: 'Team Git Workflows — Git Flow, Trunk-Based & GitHub Flow',
          emoji: '👥',
          xpReward: 40,
          badgeName: 'Team Lead',
          englishDef: 'Team Git workflows define how branches are created, managed, and merged. Git Flow (feature/develop/release/hotfix branches), GitHub Flow (simple: main + feature branches), and Trunk-Based Development (frequent small commits to main) are the three main approaches.',
          hinglishExplain: 'Teams ke liye 3 main workflows: Git Flow (complex, multiple long-lived branches — good for scheduled releases), GitHub Flow (simple, only main + short feature branches — good for continuous deployment), Trunk-Based (sabhi main pe commit — extreme CI/CD).',
          code: `# === GITHUB FLOW (Most popular) ===
# Simple: main always deployable + short-lived feature branches

# 1. Always start from updated main
git checkout main
git pull origin main

# 2. Create short-lived feature branch
git checkout -b feature/user-notifications

# 3. Small, focused commits
git commit -m "feat: add notification bell icon component"
git commit -m "feat: integrate notification API endpoint"
git commit -m "test: add unit tests for NotificationBell"

# 4. PR → Code review → Merge to main → Deploy immediately!

# === GIT FLOW (Complex projects) ===
# Long-lived branches: main, develop, feature/*, release/*, hotfix/*

git checkout develop
git checkout -b feature/premium-membership

# Finish feature → merge to develop
git checkout develop
git merge --no-ff feature/premium-membership
git branch -d feature/premium-membership

# Create release branch when ready
git checkout -b release/v1.1.0
# Bug fixes only on release branch
git checkout main
git merge --no-ff release/v1.1.0
git tag -a v1.1.0 -m "Release v1.1.0"
git checkout develop
git merge --no-ff release/v1.1.0

# Hotfix directly from main
git checkout -b hotfix/critical-payment-bug main
# Fix → merge to BOTH main AND develop`,
          interviewQuestions: [
            'GitHub Flow aur Git Flow mein kya difference hai? Kaunsa kab use karein?',
            'Trunk-Based Development ke advantages aur challenges kya hain?'
          ],
          quiz: {
            question: 'GitHub Flow workflow mein `main` branch ke baare mein kya guarantee hoti hai?',
            options: ['Main mein sirf tested code hoga', 'Main hamesha production-deployable state mein rehti hai', 'Main read-only hoti hai', 'Main mein sirf hotfix merge hote hain'],
            answer: 'Main hamesha production-deployable state mein rehti hai',
            explanation: 'GitHub Flow ka core rule: main hamesha deployable hai. Feature branches PR aur code review ke baad hi main mein merge hote hain — never broken code reaches main.'
          },
          summary: ['GitHub Flow simplest hai — continuous deployment ke liye ideal', 'Git Flow complex scheduled releases ke liye structured approach deta hai', 'Team size aur release cadence ke basis pe workflow choose karo'],
          flashcard: { q: 'Squash and Merge kab use karte hain PR mein?', a: 'Jab feature branch ke many messy commits ko ek clean commit mein consolidate karna ho main branch mein. History clean rehti hai.' }
        },
        {
          id: 'git-advanced-rebase-interactive',
          title: 'Interactive Rebase — Clean History Rewriting',
          emoji: '✍️',
          xpReward: 45,
          badgeName: 'History Rewriter',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Interactive rebase se commit history ko khoobsurat banao! Messy WIP commits ko ek professional commit mein squash karo! ✍️"',
            hint: '💡 Masti Sir: "Golden Rule: Kabhi pushed/shared commits rebase mat karo! Sirf local/personal commits rewrite karo — dusron ka history disturb hoga!"',
            success: '🥳 Masti Sir: "Clean, professional git history! HR/Reviewers impress ho jaayenge 🔥"',
            mistake: '😅 Masti Sir: "force push `git push -f` shared branch pe mat karo! Teammates ka kaam toot jaayega!"'
          },
          englishDef: "Interactive rebase (`git rebase -i`) allows rewriting commit history: reorder commits, squash multiple into one, edit commit messages (reword), drop unwanted commits, or split one commit into multiple.",
          hinglishExplain: 'Interactive rebase se apna commit history clean karo PR se pehle. `pick`, `squash`/`fixup`, `reword`, `drop`, `edit` — ye sab commands se commits manipulate karo. Sirf unshared commits pe karo!',
          code: `# Interactive rebase last 5 commits
git rebase -i HEAD~5

# Editor opens with:
# pick abc1234 feat: add login form UI
# pick def5678 fix: typo in form label
# pick ghi9012 fix: another typo
# pick jkl3456 wip: working on validation
# pick mno7890 feat: complete login validation

# CHANGE to:
# pick abc1234 feat: add login form UI
# squash def5678 fix: typo in form label   ← combine with above
# squash ghi9012 fix: another typo          ← combine with above
# drop jkl3456 wip: working on validation  ← remove this commit!
# reword mno7890 feat: complete login validation ← edit message

# Result: 2 clean commits instead of 5 messy ones!

# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# Rebase-on-upstream vs Merge workflow
git checkout feature/dashboard
git fetch upstream
git rebase upstream/main  # Linear history!
# vs
git merge upstream/main  # Creates merge commit — cluttered history

# Fix a specific commit message
git commit --amend -m "fix: correct spelling in login button"
# Only amends the LATEST commit!`,
          quiz: {
            question: 'Interactive rebase mein `squash` kya karta hai?',
            options: ['Commit delete karta hai', 'Commit ko previous commit ke saath combine karta hai', 'Commit message edit karta hai', 'Commit ko different branch pe move karta hai'],
            answer: 'Commit ko previous commit ke saath combine karta hai',
            explanation: '`squash` (or `s`) current commit ko uske upar wale commit ke saath merge karta hai. `fixup` bhi same karta hai lekin commit message discard ho jaata hai.'
          },
          summary: ['Interactive rebase se local commit history clean hoti hai PR se pehle', 'Shared commits kabhi rebase mat karo — force push issues!', 'Squash se multiple WIP commits ek professional commit mein aate hain'],
          flashcard: { q: 'git commit --amend kya karta hai?', a: 'Latest commit ko modify karta hai — message change ya staged changes include karne ke liye. Sirf unpushed commits amend karo!' }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 8: FINAL MASTERY & INTERVIEW PREP
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 8: Git Internals, SSH, GPG & Career Mastery',
      lessons: [
        {
          id: 'git-ssh-gpg-security',
          title: 'SSH Keys, GPG Signing & GitHub Security',
          emoji: '🔐',
          xpReward: 35,
          badgeName: 'Secure Dev',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "SSH keys se GitHub pe password-free push karo! GPG signing se commits authentic aur verified dikhte hain! 🔐"',
            hint: '💡 Masti Sir: "Ed25519 algorithm use karo SSH key generate karne ke liye — RSA se modern aur more secure hai!"',
            success: '🥳 Masti Sir: "GitHub account secure ho gaya! SSH + GPG + 2FA — triple security 🔥"',
            mistake: '😅 Masti Sir: "Private SSH key `.ssh/id_ed25519` kabhi kisi ke saath share mat karo! Sirf public key GitHub pe add hoti hai!"'
          },
          englishDef: 'SSH keys provide passwordless authentication to GitHub. GPG signing allows verifying that commits are genuinely authored by you (shows "Verified" badge on GitHub). 2FA adds another security layer to your account.',
          hinglishExplain: 'SSH keys ek cryptographic pair hain — public key GitHub pe, private key tumhare machine pe. Har push authentication automatic hoti hai. GPG signing se commits "Verified" badge milta hai — ye prove karta hai ki commit genuinely tumhari hai.',
          code: `# === SSH KEY SETUP ===

# 1. Generate Ed25519 SSH key pair
ssh-keygen -t ed25519 -C "youremail@example.com"
# Saves to ~/.ssh/id_ed25519 (private) and ~/.ssh/id_ed25519.pub (public)

# 2. Start SSH agent and add key
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519

# 3. Copy PUBLIC key to clipboard (Mac)
pbcopy < ~/.ssh/id_ed25519.pub
# Add this to GitHub: Settings → SSH Keys → New SSH Key

# 4. Test SSH connection
ssh -T git@github.com
# "Hi username! You've successfully authenticated"

# 5. Update remote from HTTPS to SSH
git remote set-url origin git@github.com:username/repo.git

# === GPG SIGNING ===

# 1. Generate GPG key
gpg --full-generate-key
# Choose: RSA 4096 bits, 2 years expiry

# 2. Export GPG public key
gpg --armor --export your@email.com
# Add to GitHub: Settings → SSH and GPG Keys → New GPG key

# 3. Tell Git to sign commits automatically
git config --global user.signingkey YOUR_GPG_KEY_ID
git config --global commit.gpgsign true

# All commits now have "Verified" badge on GitHub! ✅`,
          quiz: {
            question: 'SSH key mein public key aur private key mein kya fark hai?',
            options: ['Koi fark nahi', 'Public key GitHub pe add hoti hai, private key machine pe secure rakhi jaati hai aur kabhi share nahi hoti', 'Private key GitHub pe, public key locally', 'Dono kisi ke saath share ho sakti hain'],
            answer: 'Public key GitHub pe add hoti hai, private key machine pe secure rakhi jaati hai aur kabhi share nahi hoti',
            explanation: 'Asymmetric cryptography: public key freely share karo. Private key NEVER share karo — isse tumhari identity prove hoti hai. Private key = master password!'
          },
          summary: ['SSH keys password-free GitHub authentication dete hain', 'Ed25519 modern aur secure algorithm hai', 'GPG signing commits ko "Verified" badge deta hai'],
          flashcard: { q: 'HTTPS vs SSH GitHub authentication mein kya fark hai?', a: 'HTTPS: har push pe password ya Personal Access Token chahiye. SSH: ek baar setup karo, phir automatic passwordless authentication.' }
        },
        {
          id: 'git-internals-objects',
          title: 'Git Internals — Objects, DAG & Plumbing Commands',
          emoji: '🔬',
          xpReward: 45,
          badgeName: 'Git Internalist',
          englishDef: "Git stores data as four object types: Blob (file contents), Tree (directory structure), Commit (snapshot metadata), Tag (annotated reference). All objects are content-addressed by SHA-1/SHA-256 hash. The commit graph forms a Directed Acyclic Graph (DAG).",
          hinglishExplain: 'Git ki andar ki duniya: har file ek Blob object hai, folder ek Tree object hai, har commit ek Commit object hai jo parent commits ke pointers carry karta hai. Sab SHA-1 hash se identify hote hain. Ye hi Git ki "time machine" power hai.',
          code: `# Explore Git objects directly!

# After a commit, explore .git/objects
git init explore-git
cd explore-git
echo "Hello CodeMasti" > hello.txt
git add hello.txt
git commit -m "initial commit"

# 1. List all objects
find .git/objects -type f

# 2. Read Blob (file content)
git cat-file -t HEAD:hello.txt  # "blob"
git cat-file -p HEAD:hello.txt  # "Hello CodeMasti"

# 3. Read Tree (directory structure)
git cat-file -t HEAD^{tree}     # "tree"
git cat-file -p HEAD^{tree}
# 100644 blob abc1234... hello.txt

# 4. Read Commit object
git cat-file -t HEAD    # "commit"
git cat-file -p HEAD
# tree def5678
# author Name <email> timestamp
# committer Name <email> timestamp
# initial commit

# 5. Count objects
git count-objects -v

# 6. See full DAG (Directed Acyclic Graph)
git log --oneline --graph --all

# 7. Verify repository integrity
git fsck`,
          quiz: {
            question: 'Git mein Blob object kya store karta hai?',
            options: ['Directory structure', 'Commit metadata (author, date, message)', 'File ka actual content (bytes)', 'Branch pointer'],
            answer: 'File ka actual content (bytes)',
            explanation: 'Blob = Binary Large Object = file ka raw content. Filename ya permissions Blob mein store nahi hoti — woh Tree object mein hoti hain.'
          },
          summary: ['Git mein 4 object types hain: Blob, Tree, Commit, Tag', 'Sab objects SHA hash se content-addressed hain', 'git cat-file se Git objects directly inspect kiye jaate hain'],
          flashcard: { q: 'Git ka Merkle Tree structure kyon important hai?', a: 'SHA hashes chain karte hain — ek bhi file change karo toh uska Blob hash badlega, Tree hash badlega, Commit hash badlega. Tamper-proof history guarantee hoti hai.' }
        },
        {
          id: 'git-final-mastery',
          title: 'Git & GitHub Complete Career Cheat Sheet',
          emoji: '🏆',
          xpReward: 60,
          badgeName: 'Git Expert',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "GIT MASTER BANO! Ye cheat sheet aur interview prep tum hamesha reference karte rahe! Congratulations! 🏆"',
            hint: '💡 Masti Sir: "Employers sirf code dekhte hain — GitHub profile attractive banao! Green contribution graph, quality READMEs, aur open source contributions resume se zyada impressive hain!"',
            success: '🥳 Masti Sir: "GIT & GITHUB EXPERT CERTIFICATE! Tum ab version control ke master ho! Real team mein collaborate kar sakte ho confidently! 🎉🔥"',
            mistake: '😅 Masti Sir: "Git seekhna khatam nahi hua — daily use karo aur naye features explore karte raho!"'
          },
          englishDef: 'Complete Git & GitHub mastery: version control internals, advanced workflows, team collaboration, CI/CD automation, security, and open source contribution skills.',
          hinglishExplain: 'Complete Git mastery: daily git workflow, advanced techniques (rebase, cherry-pick, bisect), team workflows, GitHub Actions CI/CD, SSH security, open source contribution, aur interview preparation.',
          code: `# === COMPLETE GIT CHEAT SHEET ===

# ─── BASICS ───────────────────────
git init                     # Initialize repo
git clone <url>              # Clone remote repo
git status                   # Check status
git add .                    # Stage all changes
git commit -m "msg"          # Commit staged changes
git log --oneline --graph    # View history

# ─── BRANCHES ─────────────────────
git branch                   # List branches
git checkout -b feature/xyz  # Create + switch
git switch -c feature/xyz    # Modern syntax
git merge --no-ff branch     # Merge with merge commit
git rebase main              # Linear rebase
git branch -d branch         # Delete local branch
git push origin -d branch    # Delete remote branch

# ─── REMOTE ───────────────────────
git remote -v               # List remotes
git fetch origin            # Fetch without merge
git pull origin main        # Fetch + merge
git push origin main        # Push to remote
git push -u origin main     # Push + set tracking

# ─── UNDO ─────────────────────────
git restore file.js         # Discard working dir changes
git restore --staged file   # Unstage (keep changes)
git reset --soft HEAD~1     # Undo commit (keep staged)
git reset --mixed HEAD~1    # Undo commit (keep working dir)
git reset --hard HEAD~1     # Undo commit (lose changes!) ⚠️
git revert HEAD             # Safe undo (creates new commit)

# ─── ADVANCED ─────────────────────
git stash push -m "desc"    # Save work temporarily
git stash pop               # Restore stashed work
git cherry-pick abc1234     # Apply specific commit
git bisect start            # Binary search for bug
git rebase -i HEAD~5        # Interactive history rewrite
git reflog                  # See all HEAD movements

# ─── GITHUB CLI ───────────────────
gh repo create my-app --public   # Create repo
gh pr create --title "..." --body "..."  # Create PR
gh pr merge --squash --delete-branch    # Merge PR`,
          interviewQuestions: [
            'git fetch aur git pull mein kya fark hai?',
            'git merge aur git rebase mein kya fark hai? Kab kaunsa use karein?',
            'git reset soft, mixed, hard mein kya fark hai?',
            'Detached HEAD state kya hai aur kaise fix karte hain?',
            'Git bisect kaise kaam karta hai?',
            'Merge conflict resolve karne ka process kya hai?',
            'CI/CD pipeline kya hai aur GitHub Actions se kaise implement karte hain?'
          ],
          quiz: {
            question: 'git reset --hard HEAD~1 kya karta hai?',
            options: ['Latest commit undo karta hai, changes staging mein stay karte hain', 'Latest commit undo karta hai, changes working directory mein stay karte hain', 'Latest commit aur uske changes permanently delete karta hai', 'Commit message change karta hai'],
            answer: 'Latest commit aur uske changes permanently delete karta hai',
            explanation: '--hard ek destructive operation hai — commit AND working directory changes dono permanently hata deta hai. Use with extreme caution! `git reflog` se recover possible hai agar recently deleted.'
          },
          summary: ['Git & GitHub Course 100% Complete! 🏆', 'Version Control, Branching, Rebase, CI/CD, Security, Open Source — sab master hua!', 'Next: DevOps aur Cloud deployment seekhte hain!'],
          flashcard: { q: 'Git ka sabse important Golden Rule kya hai?', a: "Never rebase/force-push shared/public commits — dusron ki history disturb hoti hai. Sirf local, unshared commits rewrite karo." },
          funFact: '🎉 Git duniya ka sabse popular version control system hai — 94% developers use karte hain! Linus Torvalds (Linux creator) ne 2005 mein sirf 2 hafte mein Git develop kiya tha!'
        }
      ]
    }
  ]
}

export default gitCourse
