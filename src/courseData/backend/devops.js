export const devopsCourse = {
  id: 'devops',
  title: 'DevOps, Docker & Deployment',
  description: 'Production Engineering & Cloud Masterclass! Linux fundamentals, Shell scripting, Docker containers, Multi-stage builds, Docker Compose, CI/CD with GitHub Actions, AWS Cloud architecture, Nginx Reverse Proxy, HTTPS/SSL, Infrastructure as Code with Terraform, Kubernetes (K8s) & Helm, Prometheus & Grafana Observability, DevSecOps pipeline scanning, Zero-Downtime deployments (Blue/Green, Canary), CodeMasti Production Capstone, aur FAANG SRE interview problems Masti Sir ke saath!',
  icon: '🐳',
  category: 'backend',
  certificateName: 'DEVOPS, DOCKER & DEPLOYMENT',
  topicsCount: 120,
  practiceCount: 140,
  projectsCount: 6,
  hoursEstimate: 35,
  level: 'Beginner to Advanced',
  chapters: [
    // ═══════════════════════════════════════════════════════
    // CHAPTER 1: DEVOPS FUNDAMENTALS, LIFECYCLE & CULTURE
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 1: DevOps Fundamentals, Lifecycle & Culture',
      lessons: [
        {
          id: 'devops-fundamentals-culture-ci-cd',
          title: 'DevOps Philosophy, Dev vs Ops, 8-Phase Lifecycle & CI vs CD Breakdown',
          emoji: '♾️',
          xpReward: 40,
          badgeName: 'DevOps Pioneer',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Developer ne code bana diya... ab Ops bolega: \'Bhai isko production server par safely pahunchao bina crash kiye!\' Development aur Operations ki dosti ka naam hi DevOps hai! ♾️🚀😎"',
            hint: '💡 Masti Sir: "CI vs CD: Continuous Integration = Auto-Test on every PR; Continuous Delivery = Deploy to staging with 1-click approval; Continuous Deployment = Automatic production deployment without manual click!"',
            success: '🎉 Masti Sir: "DevOps culture and the 8-phase infinite loop crystal clear ho gaye! 🔥"',
            mistake: '😅 Masti Sir: "DevOps ko sirf \'Docker commands seekhna\' mat samajhna — ye collaboration, automation aur continuous feedback ka culture hai!"'
          },
          englishDef: '**DevOps** is a set of practices, cultural philosophies, and tools that automates and integrates the processes between software development (Dev) and IT operations (Ops). The **DevOps Lifecycle** forms an infinite loop across 8 continuous phases: **Plan -> Code -> Build -> Test -> Release -> Deploy -> Operate -> Monitor**. Crucially, it differentiates **Continuous Integration (CI)** from **Continuous Delivery (CD)** and **Continuous Deployment**.',
          hinglishExplain: 'DevOps software development aur IT operations ke beech ke gap ko khatam karta hai:\n1. **Dev vs Ops**: Pehle developers code likh kar Ops team ke upar phek dete the, aur server pe code phat jata tha. DevOps dono teams ko unite karta hai.\n2. **8-Phase Lifecycle**: Plan -> Code -> Build -> Test -> Release -> Deploy -> Operate -> Monitor.\n3. **CI vs CD**: Continuous Integration (har commit par automated tests), Continuous Delivery (production ke liye ready build with 1-click manual trigger), aur Continuous Deployment (test pass hote hi auto-deploy directly to live users).',
          funnyExample: {
            scenario: 'The Restaurant Kitchen Analogy:\n- Chef (Developer): Cooks delicious new dish recipe 👨‍🍳🍳\n- Waiter / Floor Manager (Ops): Serves food to 100 hungry customers at the tables 🍽️\n- Without DevOps: Chef throws uncooked raw ingredients into dining hall! Chaos! 😱\n- With DevOps Kitchen Automation: Automated conveyor belt prepares, tests food temperature, and delivers dishes in 30 seconds smoothly! ⚡✨',
            punchline: 'DevOps automates your kitchen from raw code recipe to live customer serving!'
          },
          visualDiagram: {
            title: 'The Continuous DevOps Infinite Loop',
            nodes: [
              'DEV CYCLE: 1. Plan (Jira) -> 2. Code (Git) -> 3. Build (Webpack/Vite) -> 4. Test (Vitest/Playwright)',
              'INTEGRATION & DEPLOYMENT GATEWAY (CI/CD Pipeline with Quality Gates)',
              'OPS CYCLE: 5. Release (Docker Hub/GHCR) -> 6. Deploy (AWS/K8s) -> 7. Operate (Nginx) -> 8. Monitor (Prometheus/Grafana)'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Continuous Integration vs Delivery vs Deployment:',
            steps: [
              'Continuous Integration (CI): Code is merged, built, and tested automatically on every pull request',
              'Continuous Delivery (CD): Code is automatically packaged and deployed to Staging; production deployment requires 1 manual approval click',
              'Continuous Deployment (CD): Every change that passes all automated test quality gates is deployed directly to live production users with ZERO human intervention'
            ]
          },
          code: `// ── CONCEPTUAL DEVOPS AUTOMATION MANIFEST (devops.config.js) ──
export const DEVOPS_METRICS = {
  doraMetrics: {
    deploymentFrequency: 'Multiple times per day (High Performing)',
    leadTimeForChanges: '< 1 Hour (From commit to production live)',
    changeFailureRate: '< 5% (Rollback / incident rate)',
    timeToRestoreService: '< 15 Minutes (MTTR via automated rollback)'
  },
  pipelineStages: [
    'Linting & Static Analysis',
    'Unit & Integration Testing',
    'Container Image Build & Scan',
    'Staging Smoke Verification',
    'Production Canary Deployment',
    'Observability Health Probing'
  ]
};`,
          codeBreakdown: [
            { part: 'doraMetrics', label: 'Industry-standard DORA metrics measuring DevOps engineering velocity and software delivery stability', color: '#3b82f6' },
            { part: 'leadTimeForChanges: "< 1 Hour"', label: 'Time elapsed between developer writing code commit to deployment in live production cluster', color: '#10b981' },
            { part: 'timeToRestoreService: "< 15 Minutes"', label: 'Mean Time to Recovery (MTTR) restored via automated canary circuit breakers and image rollbacks', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Continuous Delivery aur Continuous Deployment ko exact same samajhna',
            '❌ Deployment ke baad production monitoring aur feedback loop ko ignore karna'
          ],
          miniChallenge: 'Explain karo: "Aapki company mein Continuous Delivery use honi chahiye ya Continuous Deployment, aur kyun?"',
          quiz: {
            question: 'Continuous Delivery aur Continuous Deployment ke beech kya primary difference hota hai?',
            options: [
              'Continuous Delivery mein production deployment ke liye ek manual human approval step hota hai; Continuous Deployment mein bina human click ke direct production auto-deploy ho jata hai',
              'Continuous Delivery sirf Java ke liye hoti hai',
              'Continuous Deployment mein koi tests nahi chalte',
              'Dono bilkul same hote hain'
            ],
            answer: 'Continuous Delivery mein production deployment ke liye ek manual human approval step hota hai; Continuous Deployment mein bina human click ke direct production auto-deploy ho jata hai',
            explanation: 'Continuous Delivery automates everything up to staging and prepares release artifacts with manual approval; Continuous Deployment deploys every passing build directly to production automatically.'
          },
          summary: [
            'DevOps development aur operations ki collaboration aur automation automate karta hai',
            '8-phase infinite loop continuous improvement aur feedback loop provide karta hai',
            'DORA metrics engineering team velocity aur release stability measure karte hain'
          ],
          flashcard: {
            q: 'DORA Metrics ke 4 core indicators kya hain?',
            a: '1. Deployment Frequency, 2. Lead Time for Changes, 3. Change Failure Rate, 4. Time to Restore Service (MTTR).'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 2: LINUX & SHELL SCRIPTING FOR DEVOPS
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 2: Linux Mastery & Shell Scripting for DevOps',
      lessons: [
        {
          id: 'devops-linux-shell-permissions',
          title: 'Linux Fundamentals, File Hierarchy, Permissions (chmod/chown), systemd & Shell Scripting',
          emoji: '🐧',
          xpReward: 45,
          badgeName: 'Linux Navigator',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Cloud ke 95% servers Linux par chalte hain! Terminal se dosti kar lo! `chmod`, `chown`, `systemctl`, `journalctl`, aur Bash scripting se automation ka power unlock karo! 🐧💻😎"',
            hint: '💡 Masti Sir: "Permissions Rule: `chmod 755` matlab Owner sab kar sakta hai (Read, Write, Execute = 7), baaki log sirf Read aur Execute (5) kar sakte hain! Principle of Least Privilege follow karo!"',
            success: '🎉 Masti Sir: "Linux navigation, process management and bash automation scripts mastered! 🔥"',
            mistake: '😅 Masti Sir: "`chmod 777` kabhi production files par mat lagana — ye sabhi ko write permission de deta hai (major security hole)!"'
          },
          englishDef: 'Linux is the foundation of cloud and container infrastructure. Mastery covers the **Linux Filesystem Hierarchy** (`/etc` for configs, `/var/log` for logs, `/opt` for apps), **Permissions & Ownership** (`chmod`, `chown`, octal notation 755/644, Least Privilege), **Process & Service Management** (`ps`, `top`, `kill`, `systemctl status/restart`, `journalctl -u app -f`), and **Bash Shell Scripting** for operational automation.',
          hinglishExplain: 'Linux DevOps ka core operating system hai:\n1. **Filesystem Structure**: `/etc` (Configuration files), `/var/log` (System logs), `/opt` (Installed custom apps).\n2. **Permissions (chmod & chown)**: Read (4), Write (2), Execute (1). `chmod 755 script.sh` owner ko full rights aur baakiyon ko read/execute deta hai.\n3. **Processes & Services**: `systemctl start myapp` service chalata hai aur `journalctl -f` real-time logs stream karta hai.\n4. **Shell Scripting**: Bash scripts se deployments, backups aur system health checks automate kiye jaate hain.',
          funnyExample: {
            scenario: 'The Janitor Keyring (Linux Permissions):\n- `chmod 777` = Leaving your house front door wide open with a sign: "Anyone can take or change anything!" 😱🔓\n- `chmod 755` = Front door locked, family has keys, guests can look through living room window! 🔒✨\n- Principle of Least Privilege keeps your Linux servers secure!',
            punchline: 'Never chmod 777 in production!'
          },
          visualDiagram: {
            title: 'Linux Octal Permission Calculation & Bitmasks',
            nodes: [
              'Permission Categories: User (Owner) | Group | Others',
              'Numeric Weights: Read (4) + Write (2) + Execute (1)',
              'chmod 755 script.sh -> User: 4+2+1=7 (rwx) | Group: 4+0+1=5 (r-x) | Others: 4+0+1=5 (r-x)',
              'chmod 644 config.env -> User: 4+2+0=6 (rw-) | Group: 4+0+0=4 (r--) | Others: 4+0+0=4 (r--)'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Essential DevOps Linux Commands Cheat Sheet:',
            steps: [
              '`ps aux | grep node`: Finds running Node.js process IDs (PID)',
              '`ss -tulpn`: Lists all active listening network ports and binding addresses',
              '`systemctl status nginx`: Checks if Nginx service daemon is active and running',
              '`journalctl -u my-api.service -n 50 -f`: Live streams the latest 50 logs of a systemd service',
              '`df -h` and `free -m`: Displays available disk storage and free RAM in human-readable units'
            ]
          },
          code: `#!/usr/bin/env bash
# ── AUTOMATED SERVER HEALTH & BACKUP BASH SCRIPT (health-check.sh) ──
set -euo pipefail # Strict error handling mode

APP_NAME="codemasti-api"
LOG_DIR="/var/log/\${APP_NAME}"
BACKUP_DIR="/opt/backups"
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")

echo "=== [DevOps Automated Health Check: \${TIMESTAMP}] ==="

# 1. Check System Memory Usage
FREE_MEM_MB=$(free -m | awk '/^Mem:/{print $7}')
echo "[INFO] Available Memory: \${FREE_MEM_MB} MB"

if [ "\${FREE_MEM_MB}" -lt 250 ]; then
  echo "[WARNING] Low memory threshold reached! Restarting worker cache..."
  systemctl restart "\${APP_NAME}"
fi

# 2. Check Disk Space Usage on Root Partition
DISK_USAGE_PERCENT=$(df / | awk 'NR==2 {print $5}' | tr -d '%')
echo "[INFO] Root Disk Usage: \${DISK_USAGE_PERCENT}%"

if [ "\${DISK_USAGE_PERCENT}" -gt 85 ]; then
  echo "[ALERT] Disk space exceeds 85%! Cleaning old rotated logs..."
  find "\${LOG_DIR}" -name "*.log.gz" -mtime +7 -delete
fi

echo "=== [Health Check Completed Successfully] ==="
exit 0`,
          codeBreakdown: [
            { part: 'set -euo pipefail', label: 'Strict Bash execution mode exiting immediately on any unhandled command error or unset variable', color: '#3b82f6' },
            { part: 'free -m | awk ...', label: 'Extracts real-time unallocated RAM buffer metrics to trigger proactive remediation', color: '#10b981' },
            { part: 'find "${LOG_DIR}" -name "*.log.gz" -mtime +7 -delete', label: 'Automated disk hygiene removing compressed log archives older than 7 days', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Production servers par bina `set -e` ke shell scripts execute karna (allows failed commands to silently continue)',
            '❌ Security ke khilaf jakar sensitive application services ko default `root` user se run karna'
          ],
          miniChallenge: 'Ek Bash script likho jo check kare ki port 3000 par application process chal raha hai ya nahi, aur agar nahi chal raha toh alert print kare.',
          quiz: {
            question: 'Linux permission mein `chmod 644 filename` ka kya matlab hota hai?',
            options: [
              'Owner: Read + Write (6), Group: Read only (4), Others: Read only (4)',
              'Sabhi ko full execute permission',
              'File delete ho jati hai',
              'Owner sirf execute kar sakta hai'
            ],
            answer: 'Owner: Read + Write (6), Group: Read only (4), Others: Read only (4)',
            explanation: 'Octal 6 = 4 (Read) + 2 (Write); Octal 4 = 4 (Read). So 644 grants owner read/write, while group and others can only read.'
          },
          summary: [
            'Linux filesystem hierarchy aur permission model cloud servers ka base hain',
            'systemd aur journalctl robust process management aur centralized log streaming dete hain',
            'Bash scripts operational maintenance aur health automation empower karte hain'
          ],
          flashcard: {
            q: 'Bash script mein `set -euo pipefail` kyun lagaya jata hai?',
            a: 'Ye "Unofficial Bash Strict Mode" hai jo ensure karta hai ki koi bhi command fail hone par, undefined variable aane par, ya pipeline error hone par script turant exit ho jaye.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 3: NETWORKING, DNS, SSH & FIREWALLS
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 3: Networking Fundamentals, DNS, SSH & Cloud Firewalls',
      lessons: [
        {
          id: 'devops-networking-dns-ssh',
          title: 'Networking Essentials: TCP/UDP, Ports, DNS Resolution (A/CNAME), SSH Key Security & Firewalls',
          emoji: '🌐',
          xpReward: 45,
          badgeName: 'Network Architect',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Domain name se server tak request kaise pahunchti hai? DNS ek global phonebook hai jo `codemasti.com` ko IP address `104.21.32.1` mein translate karta hai! Aur SSH public/private keys se bina password ke cloud servers secure login karo! 🌐🔑😎"',
            hint: '💡 Masti Sir: "DNS Records: A Record = Domain to IPv4; CNAME = Domain to another Domain; TXT = Verification keys (SPF/DKIM/SSL)!"',
            success: '🎉 Masti Sir: "DNS resolution, SSH key authorization and cloud firewall security groups mastered! 🔥"',
            mistake: '😅 Masti Sir: "SSH Private Key (`id_ed25519`) ko kabhi kisi ke sath share mat karna — server par sirf Public Key (`id_ed25519.pub`) paste hoti hai!"'
          },
          englishDef: 'DevOps networking bridges client browsers to infrastructure: **IP Addresses & Port Numbers** (Standard: 80 for HTTP, 443 for HTTPS, 22 for SSH, 5432 for Postgres), **DNS Resolution Hierarchy** (Root Servers -> TLD -> Authoritative Nameservers -> A/AAAA/CNAME/TXT records), **SSH Key-Pair Authentication** (Ed25519 / RSA keys placed in `~/.ssh/authorized_keys`), and **Firewalls / Cloud Security Groups** enforcing strict inbound/outbound port whitelisting.',
          hinglishExplain: 'Cloud networking ke 4 fundamental concepts:\n1. **IP & Ports**: IP server ka address hai, Port server ka room number hai (Port 80 = HTTP, 443 = HTTPS, 22 = SSH).\n2. **DNS Records**: A Record (Domain ko server IP se jodta hai), CNAME (Subdomain jaise `api.codemasti.com` ko alias karta hai).\n3. **SSH Keys**: Password login insecure hota hai. Hum SSH Key pair banate hain: Private Key aapke laptop par rehti hai, aur Public Key cloud server ke `~/.ssh/authorized_keys` mein save hoti hai.\n4. **Firewalls & Security Groups**: Cloud par sirf Port 80 aur 443 public open hone chahiye; database Port 5432 sirf private internal VPC mein hona chahiye.',
          funnyExample: {
            scenario: 'The Global Mail Delivery System (Networking):\n- Domain (`codemasti.com`) = Person\'s Name 👤\n- DNS = Global Phonebook matching Name to Street Address 📖\n- IP Address (`13.235.10.20`) = Physical Building Street Address 🏢\n- Port Number (`443`) = Apartment Door #443 (HTTPS Secure Reception) 🚪\n- Firewall = Security Guard at building gate checking ID badge! 👮‍♂️🛡️',
            punchline: 'DNS translates names to IPs; Firewalls guard the ports!'
          },
          visualDiagram: {
            title: 'End-to-End DNS Resolution & HTTPS Request Flow',
            nodes: [
              '1. User types "https://codemasti.com" in browser',
              '2. DNS Resolver queries Authoritative Nameserver -> Returns A Record: 76.76.21.21',
              '3. Browser initiates TCP 3-Way Handshake + TLS 1.3 Handshake on Port 443',
              '4. Cloud Firewall / Security Group permits inbound traffic on Port 443',
              '5. Nginx Reverse Proxy receives request -> Proxies to internal Container on Port 3000'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'SSH Hardening Best Practices on Linux Servers (`/etc/ssh/sshd_config`):',
            steps: [
              '`PasswordAuthentication no`: Disables vulnerable plaintext password guessing entirely',
              '`PermitRootLogin no`: Forces administrative logins through unprivileged user with `sudo`',
              '`PubkeyAuthentication yes`: Mandates cryptographic Ed25519/RSA public key authentication'
            ]
          },
          code: `// ── 1. GENERATING ED25519 SSH KEY PAIR (Terminal) ──
/*
ssh-keygen -t ed25519 -C "admin@codemasti.com"
# Generates:
# ~/.ssh/id_ed25519      -> PRIVATE KEY (Keep secret on laptop!)
# ~/.ssh/id_ed25519.pub  -> PUBLIC KEY (Copy to server authorized_keys)

# Copy public key to remote cloud server:
ssh-copy-id -i ~/.ssh/id_ed25519.pub ubuntu@13.235.10.20
*/

// ── 2. SECURE CLOUD SECURITY GROUP / FIREWALL RULES (Terraform Concept) ──
export const securityGroupRules = {
  inbound: [
    { port: 80, protocol: 'tcp', source: '0.0.0.0/0', description: 'Public HTTP traffic (redirects to HTTPS)' },
    { port: 443, protocol: 'tcp', source: '0.0.0.0/0', description: 'Public Secure HTTPS traffic' },
    { port: 22, protocol: 'tcp', source: '203.0.113.50/32', description: 'Restricted SSH from Office VPN IP only!' }
  ],
  outbound: [
    { port: 'all', protocol: 'all', destination: '0.0.0.0/0', description: 'Allow outbound package updates and external API calls' }
  ]
};`,
          codeBreakdown: [
            { part: 'ssh-keygen -t ed25519', label: 'Generates state-of-the-art high-speed elliptical curve cryptographic SSH key pair', color: '#3b82f6' },
            { part: "source: '0.0.0.0/0' (Port 443)", label: 'Public internet access allowed exclusively for encrypted web traffic', color: '#10b981' },
            { part: "source: '203.0.113.50/32' (Port 22)", label: 'Restricted SSH administration port whitelisted strictly to trusted static VPN IP address', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ SSH Port 22 ko `0.0.0.0/0` (pure world) ke liye open chhod dena with weak password authentication enabled',
            '❌ Database port (5432/3306) ko public internet par expose kar dena'
          ],
          miniChallenge: '`dig codemasti.com +short` ya `nslookup` command chalao aur domain ka DNS A-Record inspect karo.',
          quiz: {
            question: 'DNS mein "A Record" aur "CNAME Record" ke beech kya primary difference hota hai?',
            options: [
              'A Record domain ko IPv4 address par map karta hai; CNAME Record domain ko kisi doosre domain name (alias) par point karta hai',
              'A Record sirf email ke liye hota hai',
              'CNAME se password change hota hai',
              'Dono bilkul same hote hain'
            ],
            answer: 'A Record domain ko IPv4 address par map karta hai; CNAME Record domain ko kisi doosre domain name (alias) par point karta hai',
            explanation: 'An A Record maps a hostname directly to an IPv4 address (e.g. `104.21.32.1`); a CNAME (Canonical Name) maps a subdomain alias to another hostname (e.g. `api.domain.com -> app.render.com`).'
          },
          summary: [
            'DNS domain names ko IP addresses mein translate karta hai',
            'Ed25519 SSH keys cryptographic server access provide karti hain',
            'Cloud security groups least privilege port whitelisting enforce karte hain'
          ],
          flashcard: {
            q: 'DNS TTL (Time-To-Live) kya hota hai?',
            a: 'TTL ek timestamp (seconds) hota hai jo batata hai ki DNS resolvers aur browsers us DNS record ko kitni der tak cache mein store rakhein before querying again.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 4: DOCKER CONTAINERS & MULTI-STAGE BUILDS
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 4: Docker Containers, Images & Multi-Stage Builds',
      lessons: [
        {
          id: 'devops-docker-containers-dockerfile',
          title: 'Docker Fundamentals, Dockerfile & Multi-Stage Builds',
          emoji: '📦',
          xpReward: 45,
          badgeName: 'Container Captain',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: ""It works on my machine!" ka zamana gaya! 😂 Docker tumhare app aur uske saare dependencies ko ek lightweight container mein bandh deta hai jo har computer aur cloud pe ek jaisa chalta hai! Multi-Stage builds se 1GB image ko 50MB mein convert karo! 📦🐳😎"',
            hint: '💡 Masti Sir: "Docker Image = Blueprint / Frozen Recipe (Read-Only). Docker Container = Image ka live running instance! `docker run -d -p 3000:3000 my-image`!"',
            success: '🎉 Masti Sir: "Multi-stage Dockerfile and Alpine container execution mastered! 🔥"',
            mistake: '😅 Masti Sir: "Production Dockerfile mein `node_modules` copy mat karo aur heavy base images mat use karo — `.dockerignore` use karo aur non-root user se chalao!"'
          },
          englishDef: '**Docker** is an open-source containerization engine that packages an application and all its runtime dependencies (OS libraries, Node runtime, tools) into an isolated, lightweight **Container**. A **Dockerfile** declares the layered build instructions. **Multi-Stage Builds** compile assets in a heavy builder stage and copy only production artifacts into an ultra-lean runtime stage (Alpine/Distroless), shrinking image sizes by 90%+ and eliminating build-time security vulnerabilities.',
          hinglishExplain: 'Docker se "meri machine pe chal raha tha, server pe phat gaya" ki problem 100% solve ho jati hai:\n1. **Container vs VM**: VM poora heavy OS boot karta hai (Gigabytes of RAM, slow); Container host Linux kernel share karta hai aur milliseconds mein start hota hai.\n2. **Dockerfile Instructions**: `FROM` (Base image), `WORKDIR` (App folder), `COPY` (Files copy), `RUN` (Install commands), `USER` (Non-root security), `CMD` (Start command).\n3. **Multi-Stage Builds**: Pehle stage mein compiler aur devDependencies se app build hota hai, phir doosre stage mein sirf final build files copy hoti hain.\n4. **Volumes & Networks**: Volumes se database data persist hota hai, aur Bridge networks se containers aapas mein connect hote hain.',
          funnyExample: {
            scenario: 'The Global Shipping Container Revolution:\n- Old Days (Before Docker): Apples, bicycles, and computers loose in ship cargo -> Broken and spoiled during transport! 🚲🍎💥\n- Modern Standard Container (Docker): Standardized metal container! Load it onto any ship, train, or truck anywhere in the world — fits perfectly and starts instantly! 🚢✨',
            punchline: 'Docker packages your app into a standardized, transportable shipping container!'
          },
          visualDiagram: {
            title: 'Production Multi-Stage Docker Build Pipeline',
            nodes: [
              'STAGE 1: BUILDER (node:20-alpine + npm ci + npm run build -> Generates dist/ bundle)',
              'DISCARD HEAVY DEV TOOLS & BUILD CACHE (Saves 850 MB!)',
              'STAGE 2: RUNNER (Minimal node:20-alpine -> Copies ONLY dist/ + production node_modules)',
              'Final Production Image Size: 45 MB (Lean, Fast & Secure non-root container)'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'How Docker Uses Linux Namespaces & Cgroups:',
            steps: [
              'Linux Namespaces: Provide isolated process trees (PID), network interfaces (NET), and mount points (MNT)',
              'Control Groups (cgroups): Enforce hardware resource limits (e.g. max 512MB RAM, 1 CPU Core)',
              'OverlayFS: Layered Union File System caching unchanged steps for instant zero-delay builds'
            ]
          },
          code: `# ── PRODUCTION MULTI-STAGE DOCKERFILE (Dockerfile) ──

# ── STAGE 1: Build & Compile Assets ──
FROM node:20-alpine AS builder
WORKDIR /app

# Optimize Layer Caching: Copy package manifests first
COPY package*.json ./
RUN npm ci

# Copy source code and compile production bundle
COPY . .
RUN npm run build
RUN npm prune --production # Prune devDependencies to keep modules lean

# ── STAGE 2: Minimal Production Runtime ──
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# Security: Create and switch to non-root unprivileged user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Copy ONLY necessary production artifacts from builder stage
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY package.json ./

# Switch to unprivileged non-root user
USER appuser

# Document exposed internal port
EXPOSE 3000

# Container Healthcheck Probe
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \\
  CMD wget --no-verbose --tries=1 --spider http://localhost:3000/health/live || exit 1

# Launch Application Process
CMD ["node", "dist/index.js"]`,
          codeBreakdown: [
            { part: 'FROM node:20-alpine AS builder', label: 'Ultra-lightweight Linux distribution base image minimizing attack surface and download time', color: '#3b82f6' },
            { part: 'COPY --from=builder /app/dist ./dist', label: 'Copies strictly compiled production artifacts leaving behind heavy build compilers and source code', color: '#10b981' },
            { part: 'USER appuser', label: 'Enforces non-root container execution preventing malicious container breakout root exploits', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ `.dockerignore` file omit kar dena (copies heavy local `node_modules` and `.git` into image)',
            '❌ Docker image ke andar API keys ya database passwords hardcode kar dena',
            '❌ Containers ko default `root` user se run karna in production'
          ],
          miniChallenge: 'Ek `.dockerignore` file likho jisme `node_modules`, `.git`, `.env`, aur `dist` exclude hon.',
          quiz: {
            question: 'Docker mein "Multi-Stage Builds" use karne ka sabse bada primary benefit kya hota hai?',
            options: [
              'Build tools aur devDependencies ko final image se discard karke image size 90% chhota aur secure bana deta hai',
              'Container mein multi-core CPU enable karta hai',
              'Internet free ho jata hai',
              'Database automatically create ho jata hai'
            ],
            answer: 'Build tools aur devDependencies ko final image se discard karke image size 90% chhota aur secure bana deta hai',
            explanation: 'Multi-stage builds allow developers to use heavy compilers and tools during the build phase while copying only compiled artifacts into a tiny, secure production runtime image.'
          },
          summary: [
            'Docker lightweight process isolation containers provide karta hai',
            'Multi-stage builds production image size aur security footprint minimize karte hain',
            'Non-root execution aur health checks container stability guarantee karte hain'
          ],
          flashcard: {
            q: 'Dockerfile mein `CMD` aur `ENTRYPOINT` mein kya farak hota hai?',
            a: '`ENTRYPOINT` container ka fixed executable process define karta hai (e.g. `node`); `CMD` uske default arguments provide karta hai jise `docker run` karte waqt override kiya ja sakta hai.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 5: DOCKER COMPOSE & MULTI-CONTAINER ARCHITECTURE
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 5: Docker Compose & Multi-Container Systems',
      lessons: [
        {
          id: 'devops-docker-compose-databases',
          title: 'Docker Compose & Multi-Container Orchestration',
          emoji: '🐙',
          xpReward: 50,
          badgeName: 'Compose Master',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Jab app mein React Frontend + Node.js API + PostgreSQL Database + Redis Cache sab ek sath chalana ho, toh 4 alag commands mat chalao! `docker compose up` dabao aur poora ecosystem 2 second mein zinda! 🐙🐳😎"',
            hint: '💡 Masti Sir: "Docker Compose mein containers ek doosre se service name se baat karte hain (e.g. `postgres:5432`) bina hardcoded IP ke! Aur Database data ko bachane ke liye Named Volumes lagana zaroori hai!"',
            success: '🎉 Masti Sir: "Multi-container full stack ecosystem interconnected and running with persistent volumes! 🔥"',
            mistake: '😅 Masti Sir: "Container ke andar se database ko `localhost:5432` connect mat karna — use the service name `db:5432`!"'
          },
          englishDef: '**Docker Compose** is an orchestration tool for defining and running multi-container Docker applications through declarative `compose.yaml` specifications. It manages interconnected **Services**, private **Bridge Networks** with built-in automatic DNS service discovery (allowing containers to communicate via service names), and persistent **Named Volumes** ensuring database records survive container restarts and rebuilds.',
          hinglishExplain: 'Docker Compose se hum multi-container applications ko ek file mein configure karte hain:\n1. **Declarative Services**: Ek hi `compose.yaml` mein Backend API, PostgreSQL Database, aur Redis Cache define hote hain.\n2. **Automatic Service Discovery**: Backend container database se `postgres://db:5432/mydb` ke through connect hota hai (service name `db` automatically internal DNS IP ban jata hai).\n3. **Named Volumes**: Database container destroy hone par bhi data host volume storage mein safely persist rehta hai.\n4. **One-Command Workflow**: `docker compose up -d` (start in background), `docker compose logs -f` (live logs), `docker compose down` (clean stop).',
          funnyExample: {
            scenario: 'The Orchestra Conductor (Docker Compose in Action):\n- Individual Musicians = Frontend, Backend API, PostgreSQL, Redis 🎻🎹🥁\n- Without Conductor: Everyone plays at random times, out of sync! 😱\n- Docker Compose Conductor: Raises baton (`docker compose up`) -> Database starts -> Redis starts -> Backend connects -> Entire symphony plays in perfect harmony! 🎶✨',
            punchline: 'Docker Compose coordinates your entire full-stack symphony with one command!'
          },
          visualDiagram: {
            title: 'Multi-Container Docker Compose Architecture',
            nodes: [
              'Client Browser -> Port 80 (Frontend React Web Container)',
              'Frontend Container -> Proxies /api to "http://api:5000" on Private Bridge Network',
              'Backend API Container (Node.js Express on Port 5000)',
              '├── Connects to "postgres:5432" (PostgreSQL DB with Named Persistent Volume)',
              '└── Connects to "redis:6379" (In-Memory Session & Cache Container)'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Docker Compose CLI Commands Reference:',
            steps: [
              '`docker compose up -d`: Builds, creates, and starts all containers in detached background mode',
              '`docker compose ps`: Lists status of all running services and mapped host ports',
              '`docker compose logs -f api`: Live follows streaming standard output logs for the API service',
              '`docker compose exec api sh`: Opens interactive shell inside the running API container',
              '`docker compose down -v`: Stops and removes containers, networks, AND deletes data volumes'
            ]
          },
          code: `# ── FULL-STACK DOCKER COMPOSE SPECIFICATION (compose.yaml) ──
services:
  # 1. Backend REST API Service
  api:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "5000:5000"
    environment:
      - NODE_ENV=production
      - PORT=5000
      - DATABASE_URL=postgresql://codemasti_user:SecurePass2026!@db:5432/codemastidb
      - REDIS_URL=redis://cache:6379
    depends_on:
      db:
        condition: service_healthy
      cache:
        condition: service_started
    networks:
      - app-network
    restart: unless-stopped

  # 2. PostgreSQL Relational Database Service
  db:
    image: postgres:16-alpine
    environment:
      POSTGRES_USER: codemasti_user
      POSTGRES_PASSWORD: SecurePass2026!
      POSTGRES_DB: codemastidb
    volumes:
      - postgres-data:/var/lib/postgresql/data # Persistent Storage
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U codemasti_user -d codemastidb"]
      interval: 10s
      timeout: 5s
      retries: 5
    networks:
      - app-network

  # 3. Redis In-Memory Caching Service
  cache:
    image: redis:7-alpine
    command: redis-server --appendonly yes
    volumes:
      - redis-data:/data
    networks:
      - app-network

# Declare Persistent Named Volumes
volumes:
  postgres-data:
  redis-data:

# Declare Private Isolated Bridge Network
networks:
  app-network:
    driver: bridge`,
          codeBreakdown: [
            { part: 'DATABASE_URL=postgresql://...@db:5432/...', label: 'Uses automatic internal DNS resolving service name "db" directly to database container private IP', color: '#3b82f6' },
            { part: 'condition: service_healthy', label: 'Ensures API container delays startup until PostgreSQL passes readiness healthcheck probe', color: '#10b981' },
            { part: 'volumes: - postgres-data:/var/lib/postgresql/data', label: 'Mounts persistent host storage volume preserving database records across restarts', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Database container par named volumes lagana bhool jana (causes catastrophic data loss on restart)',
            '❌ Secrets ko directly `compose.yaml` mein hardcode karna instead of using `.env` file'
          ],
          miniChallenge: 'Ek `compose.yaml` create karo jo Node API aur PostgreSQL container ko `depends_on: { condition: service_healthy }` ke sath start kare.',
          quiz: {
            question: 'Docker Compose mein containers ke restart ya rebuild hone par database records ko delete hone se bachane ke liye kya use kiya jata hai?',
            options: ['Named Volumes', 'Container Tags', 'Port Mapping', 'EXPOSE instruction'],
            answer: 'Named Volumes',
            explanation: 'Named Volumes decouple persistent data from the container lifecycle and store it on the host filesystem, so data survives container deletion and recreation.'
          },
          summary: [
            'Docker Compose multi-service applications ko declaratively manage karta hai',
            'Automatic DNS service discovery containers ko service names se connect karti hai',
            'Named volumes database state aur records ko safely persist karte hain'
          ],
          flashcard: {
            q: 'Docker Compose mein `depends_on` with `service_healthy` kyun zaroori hota hai?',
            a: 'Kyonki standard `depends_on` sirf container start hone ka wait karta hai, jabki `service_healthy` ensure karta hai ki database fully initialized aur queries accept karne ke liye ready ho.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 6: CI/CD PIPELINES WITH GITHUB ACTIONS
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 6: CI/CD with GitHub Actions & Automated Quality Gates',
      lessons: [
        {
          id: 'devops-cicd-github-actions-cloud',
          title: 'CI/CD Pipelines, GitHub Actions & Cloud Deployment',
          emoji: '🚀',
          xpReward: 50,
          badgeName: 'DevOps Architect',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Continuous Integration (CI) matlab har commit pe automated testing aur Docker image build; Continuous Deployment (CD) matlab tests pass hote hi direct production server pe auto-deploy! No manual FTP file uploads! 🚀🤖😎"',
            hint: '💡 Masti Sir: "GitHub Actions `.github/workflows/deploy.yml` mein `secrets.DOCKERHUB_TOKEN` use karo — workflow YAML file mein real passwords kabhi mat likho!"',
            success: '🎉 Masti Sir: "Green checkmark on Pull Request! 🟢 Automated CI/CD pipeline running in under 60 seconds!"',
            mistake: '😅 Masti Sir: "Deploy job ko test job par dependent (`needs: test`) banaye bina direct deploy mat karo — broken code live chala jayega!"'
          },
          englishDef: '**CI/CD Pipelines** automate the entire software delivery lifecycle. **Continuous Integration** validates every commit via automated linting, unit testing, integration testing, and container build verification. **Continuous Deployment** automatically publishes versioned container images to container registries (Docker Hub / GHCR) and triggers automated zero-downtime production deployment. Pipelines enforce strict **Quality Gates** and utilize encrypted **GitHub Secrets**.',
          hinglishExplain: 'CI/CD modern software deployment ka automated conveyor belt hai:\n1. **Trigger**: Developer jab bhi code push ya Pull Request open karta hai, GitHub Actions workflow trigger ho jata hai.\n2. **Test Job**: Robot runner code checkout karta hai, dependencies install karta hai aur Vitest tests run karta hai.\n3. **Quality Gate**: Agar ek bhi test fail hua toh pipeline ruk jati hai aur PR merge hona block ho jata hai.\n4. **Build & Publish**: Test pass hote hi Docker image build hoti hai aur Docker Hub registry par semantic version tag ke sath push ho jati hai.\n5. **Deploy Job**: Production server ko webhook ya SSH se trigger milta hai aur naya container zero downtime ke sath live ho jata hai.',
          funnyExample: {
            scenario: 'The High-Speed Factory Delivery Belt:\n- Developer types: `git push origin main` 🚀\n- Robot #1: Lints & checks types (Pass ✅)\n- Robot #2: Runs 150 automated tests in 12s (Pass ✅)\n- Robot #3: Builds & scans Docker container (Clean ✅)\n- Robot #4: Deploys to AWS EC2 cluster in 25s (Live ✅)\n- Developer sips chai: "Deployment complete!" ☕✨',
            punchline: 'Automate repetitive verification and deployment workflows with GitHub Actions!'
          },
          visualDiagram: {
            title: 'GitHub Actions Continuous Integration & Deployment Pipeline',
            nodes: [
              '1. Git Push / PR to "main" branch',
              '2. Job: lint-and-test (npm ci -> npm run lint -> npx vitest run --coverage)',
              '3. Quality Gate: Must PASS 100% tests with >80% code coverage',
              '4. Job: docker-build-publish (Builds Docker image -> Tags with Git SHA -> Pushes to Registry)',
              '5. Job: production-deploy (Zero-Downtime Rolling Update on Cloud Server)'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'GitHub Actions Core Architecture:',
            steps: [
              'Workflows: YAML configuration files stored in `.github/workflows/`',
              'Events / Triggers: Actions that fire workflows (`push`, `pull_request`, `schedule`, `workflow_dispatch`)',
              'Jobs: Series of sequential steps executed on an isolated virtual machine runner (`ubuntu-latest`)',
              'Runners: Ephemeral execution environments managed by GitHub or self-hosted',
              'Secrets & Environments: Encrypted variables securely injected at runtime'
            ]
          },
          code: `# ── COMPLETE GITHUB ACTIONS CI/CD PIPELINE (.github/workflows/deploy.yml) ──
name: Production CI/CD Quality Pipeline

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  # ── JOB 1: Test & Quality Gate ──
  test:
    name: Lint, Test & Quality Gate
    runs-on: ubuntu-latest
    steps:
      - name: 📥 Checkout Code
        uses: actions/checkout@v4

      - name: 🟢 Setup Node.js 20
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: 📦 Install Dependencies
        run: npm ci

      - name: 🔍 Linter & Type Check
        run: npm run lint

      - name: 🧪 Execute Automated Test Suite with Coverage
        run: npx vitest run --coverage --coverage.thresholds.lines=80

  # ── JOB 2: Build & Push Container Image ──
  build-and-push:
    name: Build & Publish Docker Image
    needs: test # Quality Gate: Only execute if test job passes!
    if: github.ref == 'refs/heads/main' && github.event_name == 'push'
    runs-on: ubuntu-latest
    steps:
      - name: 📥 Checkout Code
        uses: actions/checkout@v4

      - name: 🐳 Setup Docker Buildx
        uses: docker/setup-buildx-action@v3

      - name: 🔐 Login to GitHub Container Registry (GHCR)
        uses: docker/login-action@v3
        with:
          registry: ghcr.io
          username: \${{ github.actor }}
          password: \${{ secrets.GITHUB_TOKEN }}

      - name: 🚀 Build & Push Multi-Arch Docker Image
        uses: docker/build-push-action@v5
        with:
          context: .
          push: true
          tags: |
            ghcr.io/\${{ github.repository }}:latest
            ghcr.io/\${{ github.repository }}:\${{ github.sha }}
          cache-from: type=gha
          cache-to: type=gha,mode=max`,
          codeBreakdown: [
            { part: 'on: push: branches: [main]', label: 'Automated trigger executing workflow whenever verified commits land on production branch', color: '#3b82f6' },
            { part: 'needs: test', label: 'Enforces strict Quality Gate dependency preventing broken builds from reaching image registry', color: '#10b981' },
            { part: 'tags: ...:${{ github.sha }}', label: 'Tags container image with unique immutable Git commit SHA enabling instant, precise rollbacks', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Container image par sirf `latest` tag lagana bina Git commit SHA ke (makes rollbacks impossible)',
            '❌ Encrypted secrets ki jagah plain passwords workflow YAML mein commit kar dena'
          ],
          miniChallenge: 'Workflow mein `github.sha` tag add karo aur verify karo ki Docker registry par immutable commit hash tag push ho.',
          quiz: {
            question: 'CI/CD pipeline mein container images ko `latest` tag ke sath sath `Git commit SHA` se tag karna kyun mandatory best practice hai?',
            options: [
              'Taaki har image immutable aur traceable ho, jisse production failure ke time exact previous working commit par instant rollback kiya ja sake',
              'Git commit SHA se image ka size chhota ho jata hai',
              'Latest tag invalid ho chuka hai',
              'Database fast ho jata hai'
            ],
            answer: 'Taaki har image immutable aur traceable ho, jisse production failure ke time exact previous working commit par instant rollback kiya ja sake',
            explanation: 'Tagging images with immutable Git commit SHAs guarantees exact traceability between source code and running binaries, enabling instant, deterministic rollbacks if a release fails.'
          },
          summary: [
            'GitHub Actions automated verification aur deployment pipelines orchestrate karta hai',
            'Quality gates unverified code ko registry aur production tak pahunchne se rokte hain',
            'Immutable SHA image tagging instant production rollbacks empower karti hai'
          ],
          flashcard: {
            q: 'GitHub Actions mein `cache-from: type=gha` ka kya fayda hota hai?',
            a: 'Ye GitHub Actions runner cache use karke unchanged Docker layers ko reuse karta hai, cutting container build times from 5 minutes to 30 seconds.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 7: DEPLOYMENT STRATEGIES & ZERO-DOWNTIME RELEASES
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 7: Deployment Strategies & Zero-Downtime Releases',
      lessons: [
        {
          id: 'devops-deployment-strategies-zero-downtime',
          title: 'Deployment Strategies (Rolling, Blue/Green, Canary), Graceful Shutdown & Health Probes',
          emoji: '🔄',
          xpReward: 45,
          badgeName: 'Zero-Downtime Hero',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Release karte waqt \'Site Under Maintenance\' ka banner lagana 2010 ki baat thi! Modern DevOps mein Zero-Downtime Deployment hota hai: Blue/Green aur Canary releases! Users ko pata bhi nahi chalta aur naya version live ho jata hai! 🔄🛡️😎"',
            hint: '💡 Masti Sir: "Graceful Shutdown: Server ko jab `SIGTERM` signal mile, toh naye requests accept karna band karo, ongoing active requests complete hone ka intezar karo, database connection close karo, aur tab exit karo!"',
            success: '🎉 Masti Sir: "Zero-downtime rolling deployment and graceful shutdown architecture active! 🔥"',
            mistake: '😅 Masti Sir: "Canary release deploy karte waqt automated rollback trigger (circuit breaker) set karna mat bhoolna!"'
          },
          englishDef: '**Zero-Downtime Deployment** ensures continuous application availability during software releases. Strategies include: **Rolling Updates** (progressively replacing old instances with new ones), **Blue/Green Deployment** (two identical production environments where load balancers instantly switch traffic), and **Canary Releases** (routing 5% of traffic to the new version to monitor metrics before full rollout). Clean deployments mandate **Graceful Shutdown** (`SIGTERM` handling) and **Liveness/Readiness Health Probes**.',
          hinglishExplain: 'Zero-Downtime Deployment strategies se hum bina application band kiye naya code release karte hain:\n1. **Rolling Update**: Ek-ek karke purane containers ko naye containers se replace karna.\n2. **Blue/Green Deployment**: Blue environment (Live) aur Green environment (New). Green par deploy karke test karo, phir Load Balancer ka switch turn karke sara traffic Green par bhej do.\n3. **Canary Release**: Naya version sirf 5% users ko dikhana. Agar error rate normal raha, toh 100% rollout karo, varna instant rollback.\n4. **Graceful Shutdown**: Server close hote waqt active ongoing transactions ko successfully finish hone deta hai bina connection drop kiye.',
          funnyExample: {
            scenario: 'The In-Flight Jet Engine Replacement (Zero-Downtime):\n- Bad Deployment: Turn off airplane engines mid-flight to install upgrades! Airplane crashes! ✈️💥\n- Blue/Green Deployment: Airplane has Twin Engines (Blue & Green). Green is upgraded and tested while Blue flies the plane -> Switch thrust to Green smoothly! Passenger sips tea without spilling a single drop! ☕✈️✨',
            punchline: 'Zero-downtime releases upgrade your system without spilling a drop of user traffic!'
          },
          visualDiagram: {
            title: 'Blue/Green Deployment Traffic Switching Architecture',
            nodes: [
              'Public Traffic (HTTPS Requests via AWS ALB / Nginx Load Balancer)',
              'STATE A (Before Switch): Load Balancer routes 100% traffic to BLUE (v1.0 Live)',
              'Deploy and test v2.0 in GREEN environment (Idle / Testing)',
              'STATE B (Instant Switch): Load Balancer router flips target to GREEN (v2.0 Live)',
              'BLUE becomes standby -> If any bug appears, flip router back to BLUE in 1 second!'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Liveness vs Readiness Health Probes:',
            steps: [
              'Liveness Probe (`/health/live`): Checks if process is alive (if dead, orchestrator restarts container)',
              'Readiness Probe (`/health/ready`): Checks if database connection and cache are ready to accept traffic (if not ready, load balancer stops sending requests)',
              'Startup Probe: Gives slow-starting legacy apps extra time before liveness checks begin'
            ]
          },
          code: `// ── PRODUCTION NODE.JS GRACEFUL SHUTDOWN & HEALTH PROBES (server.js) ──
import express from 'express';
import { db } from './config/database.js';

const app = express();
let isShuttingDown = false;

// 1. Readiness Probe: Confirms DB connection is active and ready
app.get('/health/ready', async (req, res) => {
  if (isShuttingDown) {
    return res.status(503).json({ status: 'SHUTTING_DOWN', message: 'Server is terminating' });
  }

  try {
    await db.query('SELECT 1'); // Ping database
    res.status(200).json({ status: 'READY', database: 'CONNECTED' });
  } catch (err) {
    res.status(503).json({ status: 'UNHEALTHY', database: 'DISCONNECTED' });
  }
});

// 2. Liveness Probe: Confirms Node.js event loop is responsive
app.get('/health/live', (req, res) => {
  res.status(200).json({ status: 'ALIVE', uptime: process.uptime() });
});

const server = app.listen(3000, () => console.log('🚀 Server active on port 3000'));

// ── 3. GRACEFUL SHUTDOWN HANDLER (SIGTERM / SIGINT) ──
function handleGracefulShutdown(signal) {
  console.log(\`\n[DevOps] Received \${signal}. Starting graceful shutdown...\`);
  isShuttingDown = true;

  // Stop accepting new incoming connections
  server.close(async () => {
    console.log('[DevOps] Closed HTTP server. Releasing database connection pool...');
    try {
      await db.end(); // Gracefully drain database connections
      console.log('[DevOps] Database pool closed cleanly. Process exiting.');
      process.exit(0);
    } catch (err) {
      console.error('[DevOps] Error during database shutdown:', err);
      process.exit(1);
    }
  });

  // Force shutdown if active requests take longer than 15 seconds
  setTimeout(() => {
    console.error('[DevOps] Forceful shutdown timeout exceeded. Terminating.');
    process.exit(1);
  }, 15000);
}

process.on('SIGTERM', () => handleGracefulShutdown('SIGTERM'));
process.on('SIGINT', () => handleGracefulShutdown('SIGINT'));`,
          codeBreakdown: [
            { part: 'isShuttingDown = true', label: 'Flags readiness probe to return 503 so load balancer immediately stops routing new traffic to this node', color: '#3b82f6' },
            { part: 'server.close(...)', label: 'Stops accepting new connections while allowing active in-flight HTTP requests to complete cleanly', color: '#10b981' },
            { part: 'process.on("SIGTERM", ...)', label: 'Listens for standard container termination signal dispatched by Kubernetes / Docker / AWS', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Graceful shutdown handle na karna (abruptly kills active client payments and file uploads)',
            '❌ Readiness probe mein static 200 return karna bina real database connectivity check kiye'
          ],
          miniChallenge: 'Ek Express server mein graceful shutdown add karo jo `SIGTERM` par database connection pool drain kare.',
          quiz: {
            question: 'Zero-downtime deployment mein "Blue/Green Deployment" strategy ka sabse bada advantage kya hota hai?',
            options: [
              'Do identical environments hone ki wajah se traffic instant switch hota hai aur bug aane par 1-second mein instant rollback ho sakta hai',
              'Ye server cost free kar deta hai',
              'Isme testing ki zaroorat nahi padti',
              'Ye sirf CSS ke liye use hota hai'
            ],
            answer: 'Do identical environments hone ki wajah se traffic instant switch hota hai aur bug aane par 1-second mein instant rollback ho sakta hai',
            explanation: 'Blue/Green deployment maintains two full production environments, allowing instant zero-downtime traffic switching and near-instantaneous rollback simply by flipping the load balancer target.'
          },
          summary: [
            'Zero-downtime deployment releases ke dauran 100% uptime ensure karti hai',
            'Blue/Green aur Canary strategies release risk aur blast radius minimize karte hain',
            'Graceful shutdown in-flight user requests ko protect karta hai'
          ],
          flashcard: {
            q: 'Liveness Probe aur Readiness Probe mein kya farak hota hai?',
            a: 'Liveness Probe check karta hai ki process alive hai ya restart chahiye; Readiness Probe check karta hai ki container database aur cache se connected hai aur traffic accept karne ke liye ready hai ya nahi.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 8: SERVER DEPLOYMENT, NGINX & HTTPS
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 8: Server Deployment, Nginx Reverse Proxy & HTTPS',
      lessons: [
        {
          id: 'devops-nginx-reverse-proxy-https',
          title: 'Linux Server Hardening, Nginx Reverse Proxy, SSL/TLS Certificates & Let\'s Encrypt',
          emoji: '🛡️',
          xpReward: 45,
          badgeName: 'Server Guardian',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Node.js application ko directly public port 80/443 par expose mat karo! Aage Nginx Reverse Proxy lagao — Nginx static assets cache karega, SSL terminate karega, Gzip compression dega, aur attack se bachayega! 🛡️🌐😎"',
            hint: '💡 Masti Sir: "Certbot Let\'s Encrypt se free 90-day SSL/TLS certificates install aur auto-renew hote hain! `certbot --nginx -d codemasti.com`!"',
            success: '🎉 Masti Sir: "Hardened Linux server with Nginx Reverse Proxy and HTTPS padlock active! 🔥"',
            mistake: '😅 Masti Sir: "HTTP to HTTPS redirect lagana mat bhoolna — har Port 80 request ko 301 Permanent Redirect se Port 443 par bhejo!"'
          },
          englishDef: 'Production web applications are fronted by **Nginx**, a high-performance Reverse Proxy and web server. Nginx handles **SSL/TLS Termination** (decrypting HTTPS using automated Let\'s Encrypt certificates via Certbot), **Reverse Proxy Routing** (`proxy_pass http://127.0.0.1:3000`), **Static Asset Caching**, **Gzip/Brotli Compression**, and **Rate Limiting** before traffic reaches internal application containers.',
          hinglishExplain: 'Production server deployment ka standard architecture:\n1. **Linux Server Hardening**: SSH keys enable karna, root login disable karna aur UFW firewall setup karna.\n2. **Nginx as Reverse Proxy**: Internet se aane wali requests Nginx (Port 443) par aati hain. Nginx unhe internal Node.js container (Port 3000) par forward karta hai.\n3. **HTTPS & SSL/TLS**: Certbot ke through free Let\'s Encrypt SSL certificate install hota hai aur auto-renew hota hai.\n4. **HTTP to HTTPS 301 Redirect**: Agar user `http://` khole, toh Nginx use automatically `https://` par redirect kar deta hai.',
          funnyExample: {
            scenario: 'The Hotel Receptionist (Nginx Reverse Proxy):\n- Hotel Guests = Public Internet Users 🧑‍🎓\n- Hotel Receptionist (Nginx) = Checks room reservation, verifies passport (SSL decryption), handles luggage (Static files) 🏨✨\n- VIP Penthouse Master Chef (Node.js API) = Only cooks food when receptionist buzzes internal intercom! Never talks directly to raw street traffic! 👨‍🍳',
            punchline: 'Nginx acts as your bulletproof frontend receptionist!'
          },
          visualDiagram: {
            title: 'Nginx Reverse Proxy & SSL Termination Architecture',
            nodes: [
              'Public Client (Browser HTTPS request on Port 443)',
              'Cloud Firewall (UFW: Allows Ports 80 & 443 only)',
              'Nginx Reverse Proxy (/etc/nginx/sites-available/codemasti.conf)',
              '├── Terminates SSL/TLS (Let\'s Encrypt Certificates)',
              '├── Serves Static Assets from /var/www/dist with Gzip compression',
              '└── Proxies dynamic /api requests to "http://127.0.0.1:3000" (Docker Container)'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Nginx Performance & Security Advantages:',
            steps: [
              'Handles 100,000+ concurrent connections via asynchronous event-driven architecture',
              'Shields backend application servers from slow-client attacks (Slowloris)',
              'Offloads heavy CPU cryptographic SSL/TLS handshake operations from Node.js runtime'
            ]
          },
          code: `# ── PRODUCTION NGINX REVERSE PROXY CONFIGURATION (/etc/nginx/sites-available/codemasti.conf) ──

# 1. Redirect all HTTP traffic to secure HTTPS (Port 80 -> 443)
server {
    listen 80;
    listen [::]:80;
    server_name codemasti.com www.codemasti.com;
    return 301 https://$host$request_uri;
}

# 2. Primary Production HTTPS Server Block (Port 443)
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name codemasti.com www.codemasti.com;

    # SSL Certificates managed by Certbot
    ssl_certificate /etc/letsencrypt/live/codemasti.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/codemasti.com/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;

    # Security Headers
    add_header X-Frame-Options "DENY" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;

    # Gzip Compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml;

    # Static Assets Caching
    location /static/ {
        alias /var/www/codemasti/dist/static/;
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Reverse Proxy to Node.js Docker Container
    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}`,
          codeBreakdown: [
            { part: 'return 301 https://$host$request_uri;', label: 'Enforces permanent HTTP-to-HTTPS redirect securing all incoming client connections', color: '#3b82f6' },
            { part: 'proxy_pass http://127.0.0.1:3000;', label: 'Forwards verified decrypted requests to internal Docker container process', color: '#10b981' },
            { part: 'proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;', label: 'Preserves original client IP address for accurate authentication logging and rate limiting', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Nginx proxy headers mein `X-Forwarded-For` pass na karna (causes backend to see `127.0.0.1` for all user IPs)',
            '❌ Static files ko Node.js se serve karna instead of letting Nginx serve them directly with caching'
          ],
          miniChallenge: 'Nginx config test karo using `nginx -t` aur verify karo ki zero syntax errors hon.',
          quiz: {
            question: 'Production web architecture mein Node.js application ke aage Nginx Reverse Proxy lagane ka primary reason kya hota hai?',
            options: [
              'SSL/TLS termination, static asset caching, security headers aur high-concurrency request routing handle karne ke liye',
              'Node.js ko delete karne ke liye',
              'HTML ko CSS mein badalne ke liye',
              'Database fast format karne ke liye'
            ],
            answer: 'SSL/TLS termination, static asset caching, security headers aur high-concurrency request routing handle karne ke liye',
            explanation: 'Nginx is built in C and handles SSL handshakes, static caching, compression, and client connection management 10x more efficiently than raw application runtimes.'
          },
          summary: [
            'Nginx high-performance reverse proxying aur SSL termination provide karta hai',
            'Certbot Let\'s Encrypt automated TLS certificates deliver karta hai',
            'Proxy headers original client context aur IP address backend ko preserve karte hain'
          ],
          flashcard: {
            q: 'Nginx config modify karne ke baad zero-downtime reload kaise kiya jata hai?',
            a: 'Pehle `nginx -t` se syntax test karein, phir `systemctl reload nginx` (NOT restart) execute karein jo bina active connections drop kiye new config load karta hai.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 9: INFRASTRUCTURE AS CODE (TERRAFORM)
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 9: Infrastructure as Code (IaC) & Terraform',
      lessons: [
        {
          id: 'devops-terraform-iac',
          title: 'Infrastructure as Code (IaC), Terraform Core Workflow & Remote State Management',
          emoji: '🏗️',
          xpReward: 50,
          badgeName: 'Terraform Master',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Cloud console par ja kar 50 buttons click karke server banana band karo! Terraform se pure cloud infrastructure ko code (HCL) mein likho! `terraform plan` aur `terraform apply` — poora VPC, Server aur Database 2 minute mein create! 🏗️☁️😎"',
            hint: '💡 Masti Sir: "Terraform 4 Core Commands: 1. `terraform init`, 2. `terraform plan` (Dry run preview), 3. `terraform apply` (Create cloud resources), 4. `terraform destroy`!"',
            success: '🎉 Masti Sir: "Declarative Infrastructure as Code and remote state locking mastered! 🔥"',
            mistake: '😅 Masti Sir: "Terraform `.tfstate` file ko local machine par mat chhodna — use S3 remote backend with DynamoDB state locking!"'
          },
          englishDef: '**Infrastructure as Code (IaC)** provisions and manages compute, network, and storage resources through machine-readable definition files rather than manual console clicking. **Terraform (HashiCorp)** is the industry-standard cloud-agnostic declarative IaC tool. Core concepts include **Providers** (AWS/GCP/Azure), **Resources**, **Variables**, **Outputs**, and the **Terraform State File** (`terraform.tfstate`) managed via Remote S3 Backends with DynamoDB distributed locking.',
          hinglishExplain: 'Terraform cloud infrastructure ko code ki tarah version-control karne ka tool hai:\n1. **Why IaC?**: Manual click karne par galtiyan hoti hain aur documentation nahi banti. IaC se infrastructure Git repository mein code ke roop mein rehta hai.\n2. **Declarative Syntax (HCL)**: Aap Terraform ko batate ho ki "Mujhe 2 EC2 servers aur 1 Postgres RDS database chahiye", aur Terraform khud figure out karta hai ki use kaise create karna hai.\n3. **Core Workflow**: `init` (plugins download) -> `plan` (preview kya banega) -> `apply` (cloud par create karo) -> `destroy` (cleanup).\n4. **Remote State**: Team collaboration ke liye `.tfstate` file AWS S3 bucket mein securely store hoti hai with DynamoDB lock.',
          funnyExample: {
            scenario: 'The Architectural Blueprints (IaC):\n- Manual Admin: Builds house brick by brick from memory -> Forgets bathroom plumbing! 😱\n- Terraform Architect: Writes precise architectural blueprint (`main.tf`) -> Hands to robotic builder (`terraform apply`) -> 100 identical high-rise buildings constructed flawlessly in minutes! 🏗️🏢✨',
            punchline: 'Terraform turns infrastructure provisioning into repeatable, version-controlled code!'
          },
          visualDiagram: {
            title: 'Terraform State & Execution Lifecycle Workflow',
            nodes: [
              '1. Write Terraform Code (main.tf, variables.tf, outputs.tf)',
              '2. terraform init -> Downloads AWS Provider Plugins & Configures S3 Backend',
              '3. terraform plan -> Compares Desired State (code) vs Real Cloud State (tfstate)',
              '4. terraform apply -> Provisions VPC, EC2, Security Groups & RDS in AWS',
              '5. Remote State locked via DynamoDB during execution to prevent team collisions'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Terraform Remote State & DynamoDB Locking:',
            steps: [
              'S3 Bucket: Stores encrypted `terraform.tfstate` mapping code resources to real cloud IDs',
              'DynamoDB Table: Provides distributed mutex locking preventing two developers from running `apply` simultaneously',
              'State drift detection: Highlights manual console changes during `terraform plan`'
            ]
          },
          code: `# ── PRODUCTION TERRAFORM INFRASTRUCTURE MANIFEST (main.tf) ──
terraform {
  required_version = ">= 1.6.0"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  # Remote State Storage with S3 and DynamoDB State Locking
  backend "s3" {
    bucket         = "codemasti-terraform-state-prod"
    key            = "production/infrastructure.tfstate"
    region         = "ap-south-1"
    dynamodb_table = "codemasti-terraform-locks"
    encrypt        = true
  }
}

provider "aws" {
  region = var.aws_region
}

# 1. Virtual Private Cloud (VPC)
resource "aws_vpc" "main" {
  cidr_block           = "10.0.0.0/16"
  enable_dns_hostnames = true
  enable_dns_support   = true

  tags = {
    Name        = "codemasti-prod-vpc"
    Environment = "production"
  }
}

# 2. Security Group for Web App
resource "aws_security_group" "web_sg" {
  name        = "codemasti-web-sg"
  description = "Allow HTTPS and HTTP inbound traffic"
  vpc_id      = aws_vpc.main.id

  ingress {
    description = "Allow HTTPS"
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "Allow HTTP"
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

# 3. Output Values
output "vpc_id" {
  description = "The ID of the provisioned VPC"
  value       = aws_vpc.main.id
}`,
          codeBreakdown: [
            { part: 'backend "s3" { ... dynamodb_table = "..." }', label: 'Configures remote encrypted state persistence with distributed concurrency locking', color: '#3b82f6' },
            { part: 'resource "aws_vpc" "main"', label: 'Declarative resource block creating isolated software-defined cloud network infrastructure', color: '#10b981' },
            { part: 'ingress { from_port = 443 ... }', label: 'Defines declarative cloud firewall rules whitelisting secure HTTPS web traffic', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Local `.tfstate` file ko public GitHub repository mein commit kar dena (leaks database passwords and cloud credentials!)',
            '❌ `terraform apply` ko bina `terraform plan` review kiye blindly run kar dena'
          ],
          miniChallenge: 'Ek `variables.tf` file likho jo `aws_region` define kare with default value `"ap-south-1"`.',
          quiz: {
            question: 'Terraform mein `terraform plan` command ka primary purpose kya hota hai?',
            options: [
              'Cloud par bina koi change kiye preview dikhana ki kaunse resources CREATE, MODIFY ya DESTROY honge (Dry Run)',
              'Servers delete karna',
              'Code compile karna',
              'Database restart karna'
            ],
            answer: 'Cloud par bina koi change kiye preview dikhana ki kaunse resources CREATE, MODIFY ya DESTROY honge (Dry Run)',
            explanation: '`terraform plan` performs a dry-run comparison between your code configuration and real cloud state, generating an execution plan before changes are applied.'
          },
          summary: [
            'Terraform declarative HCL syntax se cloud infrastructure provision karta hai',
            'Remote S3 backends state file ko encrypted aur safe rakhte hain',
            'DynamoDB state locking team collaboration collisions prevent karti hai'
          ],
          flashcard: {
            q: 'Terraform State File (`terraform.tfstate`) kya hoti hai?',
            a: 'Ye ek JSON file hai jo Terraform code ke resources ko real cloud IDs (jaise AWS `vpc-0123456`) ke sath map karke track karti hai.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 10: KUBERNETES & CONTAINER ORCHESTRATION
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 10: Kubernetes (K8s) & Container Orchestration',
      lessons: [
        {
          id: 'devops-kubernetes-helm-orchestration',
          title: 'Kubernetes (K8s) Architecture, Pods, Deployments, Services, Ingress & Helm Package Manager',
          emoji: '☸️',
          xpReward: 50,
          badgeName: 'Kubernetes Captain',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "1 container chalana Docker ka kaam hai. 1000 containers ko auto-scale karna, self-heal karna aur multi-node cluster par manage karna — ye Kubernetes (K8s) ka magic hai! Helm charts se 1 command mein deployment! ☸️🚢😎"',
            hint: '💡 Masti Sir: "Kubernetes Core Hierarchy: Cluster -> Nodes -> Pods (Smallest unit) -> Containers! Deployments desired state maintain karte hain, aur Services network routing karti hain!"',
            success: '🎉 Masti Sir: "Kubernetes cluster architecture, Ingress routing and Helm charts mastered! 🔥"',
            mistake: '😅 Masti Sir: "Kubernetes Pods ephemeral (temporary) hote hain — persistent data ke liye PersistentVolumeClaims (PVC) use karo!"'
          },
          englishDef: '**Kubernetes (K8s)** is the open-source container orchestration engine that automates deployment, scaling, and operations of application containers across clusters of host nodes. Architecture spans the **Control Plane** (API Server, etcd, Scheduler, Controller Manager) and **Worker Nodes** (kubelet, kube-proxy, container runtime). Core primitives include **Pods**, **Deployments**, **Services** (ClusterIP, NodePort, LoadBalancer), **ConfigMaps/Secrets**, and **Ingress**. **Helm** serves as the package manager for templated Kubernetes applications.',
          hinglishExplain: 'Kubernetes production containers ko large scale par manage karta hai:\n1. **Control Plane vs Worker Nodes**: Control plane cluster ka brain hai jo decisions leta hai, Worker nodes par aapke application pods run hote hain.\n2. **Pods**: K8s ka sabse chhota deployable unit (ek ya do containers ka group).\n3. **Deployments**: Desired state manage karta hai (e.g. "Mujhe 5 replicas hamesha running chahiye"). Agar koi pod crash hota hai, K8s naya pod khud bana deta hai (Self-Healing).\n4. **Services & Ingress**: ClusterIP internal traffic route karta hai; Ingress external HTTPS domain traffic ko specific services par route karta hai.\n5. **Helm**: Kubernetes ka apt/npm package manager hai jo complex YAML manifests ko reusable templates banata hai.',
          funnyExample: {
            scenario: 'The Fleet of Cargo Ships (Kubernetes):\n- 1 Shipping Container = Docker Container 📦\n- 1 Cargo Ship = Kubernetes Worker Node 🚢\n- Master Port Admiral (Control Plane) = Directs 50 cargo ships, monitors fuel, replaces broken ships automatically, and scales fleet from 10 to 100 ships during holiday rush! ⚓✨',
            punchline: 'Kubernetes is the ultimate automated admiral of your container fleet!'
          },
          visualDiagram: {
            title: 'Kubernetes High-Level Cluster Architecture',
            nodes: [
              'KUBERNETES CONTROL PLANE (API Server, etcd State DB, Controller Manager, Scheduler)',
              'Ingress Controller (Routes "api.codemasti.com" traffic from Internet)',
              'Service: ClusterIP (Internal Load Balancer for Pods)',
              'WORKER NODE 1: [ Pod Replica 1 ] [ Pod Replica 2 ] (Kubelet + Container Runtime)',
              'WORKER NODE 2: [ Pod Replica 3 ] [ Pod Replica 4 ] (Self-Healing & Auto-Scaling)'
            ],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'Kubernetes Self-Healing Mechanics:',
            steps: [
              'Controller Manager constantly compares Desired State (e.g. 4 replicas) against Observed State',
              'If Node 2 crashes, Kubelet reports failure to Control Plane API Server',
              'Scheduler immediately schedules 2 new replacement Pods onto healthy Node 1',
              'Desired state restored automatically with zero manual engineer intervention'
            ]
          },
          code: `# ── PRODUCTION KUBERNETES DEPLOYMENT & SERVICE (deployment.yaml) ──
apiVersion: apps/v1
kind: Deployment
metadata:
  name: codemasti-api-deployment
  labels:
    app: codemasti-api
spec:
  replicas: 3 # Maintain 3 pod replicas at all times (High Availability)
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1        # Max 1 extra pod during updates
      maxUnavailable: 0  # Zero downtime!
  selector:
    matchLabels:
      app: codemasti-api
  template:
    metadata:
      labels:
        app: codemasti-api
    spec:
      containers:
        - name: api
          image: ghcr.io/codemasti/codemasti-api:v2.1.0
          ports:
            - containerPort: 3000
          resources:
            requests:
              memory: "256Mi"
              cpu: "250m"
            limits:
              memory: "512Mi"
              cpu: "500m"
          livenessProbe:
            httpGet:
              path: /health/live
              port: 3000
            initialDelaySeconds: 10
            periodSeconds: 15
          readinessProbe:
            httpGet:
              path: /health/ready
              port: 3000
            initialDelaySeconds: 5
            periodSeconds: 10
---
# ── KUBERNETES CLUSTER-IP SERVICE ──
apiVersion: v1
kind: Service
metadata:
  name: codemasti-api-service
spec:
  type: ClusterIP
  selector:
    app: codemasti-api
  ports:
    - protocol: TCP
      port: 80
      targetPort: 3000`,
          codeBreakdown: [
            { part: 'replicas: 3', label: 'Declares desired high-availability cluster state maintaining 3 concurrent active pod instances', color: '#3b82f6' },
            { part: 'maxUnavailable: 0', label: 'Enforces zero-downtime rolling update strategy keeping 100% capacity available during deployment', color: '#10b981' },
            { part: 'resources: limits: memory: "512Mi"', label: 'Enforces cgroup memory boundaries preventing runaway memory leaks from affecting neighbor pods', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Resource requests aur limits define na karna (allows a single leaking pod to crash the entire worker node)',
            '❌ Liveness aur readiness probes omit kar dena'
          ],
          miniChallenge: '`kubectl get pods`, `kubectl get services`, aur `kubectl describe pod` commands ka purpose explain karo.',
          quiz: {
            question: 'Kubernetes mein "Self-Healing" ka kya matlab hota hai?',
            options: [
              'Agar koi Pod ya Node crash ho jaye, toh Kubernetes controller automatically naya replacement pod schedule karke desired state restore kar deta hai',
              'Code ke bugs automatically fix ho jaate hain',
              'Server free mein upgrade ho jata hai',
              'Memory clean ho jati hai'
            ],
            answer: 'Agar koi Pod ya Node crash ho jaye, toh Kubernetes controller automatically naya replacement pod schedule karke desired state restore kar deta hai',
            explanation: 'The Kubernetes controller loop continuously compares observed state against desired state, automatically recreating failed pods to maintain specified replica counts.'
          },
          summary: [
            'Kubernetes large-scale automated container orchestration provide karta hai',
            'Deployments self-healing aur rolling zero-downtime updates manage karte hain',
            'Helm reusable templated package deployment facilitate karta hai'
          ],
          flashcard: {
            q: 'Kubernetes mein Helm Chart kya hota hai?',
            a: 'Helm Chart ek packaged collection of Kubernetes YAML templates aur default values file hai jo complex multi-service apps ko 1 command (`helm install`) mein deploy karti hai.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 11: OBSERVABILITY, LOGGING, METRICS & SRE
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 11: Observability, Logging, Metrics & SRE Principles',
      lessons: [
        {
          id: 'devops-observability-sre-monitoring',
          title: 'The 3 Pillars of Observability (Logs, Metrics, Traces), Prometheus, Grafana & SRE (SLO/SLA/SLI)',
          emoji: '📊',
          xpReward: 45,
          badgeName: 'Observability Hero',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Server deploy karke so gaye? Production koi Tamagotchi nahi hai! Observability ke 3 pillars hote hain: Structured Logs (Kyun hua?), Metrics (Kya hua?), aur Distributed Traces (Kahan atka?)! Prometheus aur Grafana se real-time dashboard banao! 📊📈😎"',
            hint: '💡 Masti Sir: "SRE Formula: SLI (Actual performance: 99.95%), SLO (Internal target: 99.9%), SLA (Customer contract promise: 99.5%). Remaining 0.1% is your Error Budget for rapid feature releases!"',
            success: '🎉 Masti Sir: "Prometheus metrics, Grafana dashboards and SRE reliability engineering mastered! 🔥"',
            mistake: '😅 Masti Sir: "Logs mein plain string mat print karo — use structured JSON logs with correlation `requestId`!"'
          },
          englishDef: '**Observability** is the degree to which internal system health can be inferred from external outputs: **Logs** (timestamped discrete event records via Winston/Pino/ELK), **Metrics** (numeric aggregations over time: Counters, Gauges, Histograms via Prometheus & Grafana), and **Distributed Traces** (tracking requests across microservices via OpenTelemetry). **Site Reliability Engineering (SRE)** governs reliability via **SLIs** (Indicators), **SLOs** (Objectives), **SLAs** (Agreements), and **Error Budgets**.',
          hinglishExplain: 'Production systems ko monitor aur maintain karne ke foundational principles:\n1. **3 Pillars of Observability**:\n   - **Logs**: JSON format mein event details (Who, What, When, Error stack trace).\n   - **Metrics**: Real-time graphs (CPU %, Memory, Requests/sec, p95 Latency) via Prometheus & Grafana.\n   - **Traces**: Ek user request microservice A se B aur Database tak kaise travel hui (OpenTelemetry).\n2. **SRE Metrics**:\n   - **SLI (Service Level Indicator)**: Real live uptime (e.g. 99.95%).\n   - **SLO (Service Level Objective)**: Internal target (e.g. 99.90%).\n   - **SLA (Service Level Agreement)**: Legal business contract (e.g. 99.50% uptime).\n   - **Error Budget**: Allowed downtime budget jisme naye risky features deploy kiye ja sakte hain.',
          funnyExample: {
            scenario: 'The Airplane Cockpit Dashboard (Observability & SRE):\n- Altimeter & Fuel Gauge = Metrics (Prometheus / Grafana) ✈️📊\n- Black Box Voice Recorder = Structured Logs (ELK) 🎙️📦\n- Radar Flight Path Tracker = Distributed Tracing (OpenTelemetry) 🛰️\n- Flight On-Time Guarantee = SLA / SLO ⏱️✨\n- Without cockpit dashboard, pilot flies blind in stormy weather!',
            punchline: 'Observability lets you see inside your distributed cloud systems in real time!'
          },
          visualDiagram: {
            title: 'Prometheus & Grafana Observability Architecture',
            nodes: [
              'Applications / Microservices (Expose /metrics endpoint with Prometheus client)',
              'Prometheus Time-Series DB (Scrapes /metrics every 15s via pull model)',
              'Grafana Visualization Engine (Real-time Dashboards for Latency, Traffic, Errors, Saturation)',
              'Alertmanager (Dispatches Slack / PagerDuty alerts if error rate exceeds SLO threshold)'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'The Google SRE 4 Golden Signals:',
            steps: [
              'Latency: Time taken to serve requests (Differentiate successful 200s from error 500s)',
              'Traffic: Demand placed on the system (Requests per second / concurrent transactions)',
              'Errors: Rate of requests failing explicitly (HTTP 5xx) or implicitly (wrong data)',
              'Saturation: Resource utilization percentage (CPU, Memory, Database connection pool capacity)'
            ]
          },
          code: `// ── PROMETHEUS METRICS INSTRUMENTATION (metrics.service.js) ──
import promClient from 'prom-client';

// 1. Initialize Prometheus Registry & Default System Metrics
export const register = new promClient.Registry();
promClient.collectDefaultMetrics({ register });

// 2. Custom Metric: HTTP Request Duration Histogram (Tracks Latency Percentiles)
export const httpRequestDurationMicroseconds = new promClient.Histogram({
  name: 'http_request_duration_seconds',
  help: 'Duration of HTTP requests in seconds',
  labelNames: ['method', 'route', 'status_code'],
  buckets: [0.05, 0.1, 0.25, 0.5, 1, 2.5, 5] // 50ms to 5s buckets
});
register.registerMetric(httpRequestDurationMicroseconds);

// 3. Express Metrics Middleware
export function metricsMiddleware(req, res, next) {
  const start = process.hrtime();

  res.on('finish', () => {
    const elapsed = process.hrtime(start);
    const durationInSeconds = elapsed[0] + elapsed[1] / 1e9;
    const route = req.route ? req.route.path : req.path;

    httpRequestDurationMicroseconds
      .labels(req.method, route, res.statusCode.toString())
      .observe(durationInSeconds);
  });

  next();
}

// 4. Endpoint for Prometheus to scrape
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
});`,
          codeBreakdown: [
            { part: 'promClient.collectDefaultMetrics({ register })', label: 'Automatically collects OS memory, CPU usage, and Node.js event loop lag metrics', color: '#3b82f6' },
            { part: 'new promClient.Histogram(...)', label: 'Captures duration distribution enabling precise p50, p95, and p99 latency queries in Grafana', color: '#10b981' },
            { part: 'app.get("/metrics", ...)', label: 'Standardized Prometheus scraping endpoint format consumed by cloud monitoring collectors', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ High cardinality labels daalna jaise `userId` in Prometheus metric labels (causes metric database memory explosion)',
            '❌ Alert fatigue: Har chhote warning par alert lagana jisse team critical alerts ignore karne lage'
          ],
          miniChallenge: 'Prometheus query likho: `rate(http_requests_total[5m])` aur iska meaning explain karo.',
          quiz: {
            question: 'SRE (Site Reliability Engineering) mein "Error Budget" ka kya concept hota hai?',
            options: [
              '100% minus SLO target se bacha hua allowable failure percentage (e.g. 0.1%), jise engineering team naye features release karne ke liye use karti hai',
              'Server khareedne ka budget',
              'Developer ki salary',
              'Database storage limit'
            ],
            answer: '100% minus SLO target se bacha hua allowable failure percentage (e.g. 0.1%), jise engineering team naye features release karne ke liye use karti hai',
            explanation: 'The Error Budget represents the allowable room for imperfection (100% - SLO). If the error budget is healthy, teams ship features rapidly; if depleted, focus shifts entirely to stability.'
          },
          summary: [
            'Observability logs, metrics aur traces unite karti hai',
            'Prometheus time-series metrics scrape karta hai aur Grafana dashboards render karta hai',
            'SRE SLIs, SLOs aur error budgets ke through data-driven reliability maintain karta hai'
          ],
          flashcard: {
            q: 'SLI, SLO aur SLA mein kya difference hai?',
            a: 'SLI = Actual measured metric (99.95%); SLO = Internal target goal (99.90%); SLA = Customer legal agreement with financial penalty (99.50%).'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 12: DEVSECOPS & SUPPLY CHAIN SECURITY
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 12: DevSecOps & Supply Chain Security',
      lessons: [
        {
          id: 'devops-devsecops-supply-chain',
          title: 'DevSecOps Pipeline Security: SAST, Container Vulnerability Scanning (Trivy), Secret Scans & SBOM',
          emoji: '🔒',
          xpReward: 45,
          badgeName: 'DevSecOps Guardian',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Security ko deployment ke aakhri din yaad mat karo! DevSecOps ka matlab: har code push par Static Analysis (SAST), Secret Scanning (Gitleaks), Dependency Scans (Snyk), aur Container Image Scans (Trivy) automatically chalna! 🔒🛡️😎"',
            hint: '💡 Masti Sir: "Trivy container scanner CRITICAL aur HIGH vulnerabilities ko build time par hi catch karke deployment block kar deta hai!"',
            success: '🎉 Masti Sir: "DevSecOps security pipeline and Software Bill of Materials (SBOM) active! 🔥"',
            mistake: '😅 Masti Sir: "Secret scanning ko ignore mat karna — agar API key GitHub par commit ho jaye toh bots 20 second mein use chori kar lete hain!"'
          },
          englishDef: '**DevSecOps** embeds automated security scanning across every phase of the CI/CD pipeline. Key automated gates include: **Secret Detection** (Gitleaks blocking committed tokens), **Static Application Security Testing (SAST)** (SonarQube/Semgrep analyzing source code), **Software Composition Analysis (SCA)** (auditing open-source dependencies via `npm audit` / Snyk), **Container Image Vulnerability Scanning** (Trivy/Clair detecting unpatched CVEs), and generating a **Software Bill of Materials (SBOM)**.',
          hinglishExplain: 'DevSecOps software delivery pipeline mein automated security gates integrate karta hai:\n1. **Secret Detection (Gitleaks)**: Commit push hone se pehle check karna ki koi `.env` password ya AWS key code mein toh nahi hai.\n2. **SAST (Static Analysis)**: Source code scan karke SQL injection ya insecure functions pakadna.\n3. **SCA (Dependency Scanning)**: `npm audit` se vulnerable third-party libraries detect karna.\n4. **Container Image Scanning (Trivy)**: Docker image ke Linux OS packages aur binaries mein known CVE vulnerabilities scan karna.\n5. **SBOM (Software Bill of Materials)**: Application ke saare open-source components ki transparent manifest list generate karna.',
          funnyExample: {
            scenario: 'The Automated Airport Luggage Scanner (DevSecOps):\n- Traditional Security: Airport guards search passengers with hand torches on the airplane runway right before takeoff! (Too late!) 😱\n- DevSecOps Scanner: Multi-layer X-Ray scanning at check-in (Secret scan), metal detector at gate (SAST/SCA), and cargo scan (Trivy container scan) -> 100% safe flight guaranteed! ✈️🔒✨',
            punchline: 'Automated security scanning at every gate prevents production compromises!'
          },
          visualDiagram: {
            title: 'End-to-End DevSecOps CI/CD Security Pipeline',
            nodes: [
              '1. Pre-Commit: Gitleaks Secret Scanner (Blocks accidental credential commits)',
              '2. CI Job: Semgrep SAST & npm audit (Scans code & vulnerable dependencies)',
              '3. Docker Build: Syft generates Software Bill of Materials (SBOM)',
              '4. Image Scan: Trivy scans Docker Image for Critical/High CVE vulnerabilities',
              'Quality Gate: Zero Critical CVEs -> Release Approved 🚀 (If Vulnerable -> BLOCK ❌)'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'The DevSecOps Security Stack:',
            steps: [
              'Secret Scanning: Gitleaks, TruffleHog (detects high-entropy regex patterns for AWS/GitHub keys)',
              'SAST: Semgrep, SonarQube (rules-based AST semantic source code analysis)',
              'SCA: Snyk, Dependabot, npm audit (checks dependencies against National Vulnerability Database)',
              'Container Scanning: Trivy, Grype, AWS ECR Scanner (inspects OS package managers for unpatched CVEs)'
            ]
          },
          code: `# ── TRIVY CONTAINER SECURITY SCAN IN GITHUB ACTIONS (.github/workflows/security.yml) ──
name: DevSecOps Vulnerability Scanner

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  security-audit:
    name: Secret & Container Security Scan
    runs-on: ubuntu-latest
    steps:
      - name: 📥 Checkout Repository
        uses: actions/checkout@v4
        with:
          fetch-depth: 0 # Required for deep commit secret scanning

      # 1. Automated Secret Scanning with Gitleaks
      - name: 🔐 Gitleaks Secret Detection
        uses: gitleaks/gitleaks-action@v2
        env:
          GITHUB_TOKEN: \${{ secrets.GITHUB_TOKEN }}

      # 2. Build Candidate Docker Image
      - name: 🐳 Build Docker Image for Inspection
        run: docker build -t codemasti-api:audit .

      # 3. Scan Image for CVE Vulnerabilities with Trivy
      - name: 🛡️ Trivy Container Vulnerability Scan
        uses: aquasecurity/trivy-action@master
        with:
          image-ref: 'codemasti-api:audit'
          format: 'table'
          exit-code: '1' # Fails the pipeline if CRITICAL vulnerabilities exist!
          ignore-unfixed: true
          severity: 'CRITICAL,HIGH'`,
          codeBreakdown: [
            { part: 'gitleaks-action@v2', label: 'Scans full repository commit history detecting accidentally committed API keys and credentials', color: '#3b82f6' },
            { part: 'severity: "CRITICAL,HIGH"', label: 'Filters vulnerability findings strictly to actionable severe Common Vulnerabilities and Exposures (CVEs)', color: '#10b981' },
            { part: "exit-code: '1'", label: 'Enforces hard security quality gate failing the build pipeline if unpatched critical CVEs are present', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Trivy exit-code ko 0 chhod dena (allows build to pass even when critical vulnerabilities are detected)',
            '❌ Base images ko update na karna (causes CVEs in base Alpine/Debian layers to accumulate)'
          ],
          miniChallenge: 'Ek CI workflow configure karo jo `npm audit --audit-level=high` execute kare.',
          quiz: {
            question: 'Software Supply Chain Security mein "SBOM" (Software Bill of Materials) ka kya significance hota is?',
            options: [
              'Ye application ke saare open-source packages, libraries, versions aur dependencies ka comprehensive inventory record hota hai',
              'Ye cloud billing invoice hota hai',
              'Ye database backup file hoti hai',
              'Ye domain name hota hai'
            ],
            answer: 'Ye application ke saare open-source packages, libraries, versions aur dependencies ka comprehensive inventory record hota hai',
            explanation: 'An SBOM (Software Bill of Materials) is an exhaustive inventory of all components, open-source libraries, and dependencies bundled in a software product, enabling rapid identification when new CVEs emerge.'
          },
          summary: [
            'DevSecOps security checks ko CI/CD pipeline ke har stage mein automate karta hai',
            'Trivy container images ko unpatched CVE vulnerabilities ke liye inspect karta hai',
            'Gitleaks hardcoded secrets aur API keys ke accidental leaks ko block karta hai'
          ],
          flashcard: {
            q: 'SAST aur DAST mein kya difference hota hai?',
            a: 'SAST (Static Application Security Testing) source code ko bina run kiye scan karta hai; DAST (Dynamic Application Security Testing) running live application ko outside se test karke vulnerabilities dhoondta hai.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 13: PRODUCTION TROUBLESHOOTING & SRE LAB
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 13: Production Troubleshooting, Disasters & High Availability',
      lessons: [
        {
          id: 'devops-troubleshooting-disaster-recovery',
          title: 'Production Troubleshooting: 502 Bad Gateway, CrashLoopBackOff, OOMKilled & Disaster Recovery (RPO/RTO)',
          emoji: '🚨',
          xpReward: 45,
          badgeName: 'Incident Commander',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "502 Bad Gateway dekh kar haath paanv phool gaye? CrashLoopBackOff ya OOMKilled ka error aaya? Systematic debugging seekho: Logs dekho, Port bindings check karo, memory limits inspect karo aur Disaster Recovery (RPO/RTO) se database restore karo! 🚨🛠️😎"',
            hint: '💡 Masti Sir: "502 Bad Gateway ka simple matlab: Nginx zinda hai, lekin piche ka Node.js container ya toh band hai ya galat port par listen kar raha hai!"',
            success: '🎉 Masti Sir: "Production debugging root cause analysis and Disaster Recovery mastered! 🔥"',
            mistake: '😅 Masti Sir: "Disaster Recovery plan ko sirf document mein mat rakho — test your backup restore process quarterly!"'
          },
          englishDef: 'Production troubleshooting resolves critical infrastructure incidents through systematic root-cause analysis: **502 Bad Gateway** (Reverse proxy cannot reach backend process), **CrashLoopBackOff** (Kubernetes pod repeatedly crashes due to uncaught exceptions/missing env vars), **OOMKilled** (container exceeded assigned cgroup RAM quota), and **Port Conflicts**. **Disaster Recovery (DR)** designs multi-zone failover governed by **RPO** (Recovery Point Objective - max data loss tolerance) and **RTO** (Recovery Time Objective - max downtime tolerance).',
          hinglishExplain: 'Production incidents ko systematically troubleshoot karne ke rules:\n1. **502 Bad Gateway Debugging**: Nginx request forward kar raha hai par backend process band hai (`systemctl status myapp` ya `docker ps` check karo).\n2. **Kubernetes CrashLoopBackOff**: `kubectl logs <pod>` aur `kubectl describe pod <pod>` chala kar crash hone ka exact exception dekho (missing `.env` or uncaught error).\n3. **OOMKilled (Exit Code 137)**: Container ne apni memory limit cross kar di aur Linux kernel ne process kill kar diya. Solution: Memory limit increase karo ya leak fix karo.\n4. **Disaster Recovery (RPO & RTO)**: RPO (Data loss window, e.g. last 15 min backup) aur RTO (System wapas khada karne ka time, e.g. 30 minutes).',
          funnyExample: {
            scenario: 'The 502 Bad Gateway Mystery:\n- Detective (SRE): "User sees 502 Bad Gateway! Is Nginx broken?" 🕵️‍♂️\n- Nginx: "I am fine! I knocked on Door #3000, but Node.js was sleeping!" 🚪\n- Detective: Checks `docker logs api` -> "Aha! Node.js crashed because DATABASE_URL env was missing!"\n- Fixes `.env` -> Container starts -> 502 disappears in 10 seconds! 💡✨',
            punchline: '502 means the proxy is healthy but the upstream backend is unreachable!'
          },
          visualDiagram: {
            title: 'Production 502 Bad Gateway Root Cause Diagnostics Flow',
            nodes: [
              'User experiences 502 Bad Gateway',
              'Step 1: Check Nginx error log: "connect() failed (111: Connection refused) while connecting to upstream"',
              'Step 2: Check Container Process Status: `docker ps` (Is container Running or Exited?)',
              'Step 3: Check Container Internal Logs: `docker logs <container-id>` (Look for missing ENV or uncaught throw)',
              'Step 4: Check Port Mapping: Is app listening on 0.0.0.0:3000 instead of 127.0.0.1?'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Top Production Exit Codes Taxonomy:',
            steps: [
              'Exit Code 0: Success (Clean voluntary termination)',
              'Exit Code 1: General uncaught exception / runtime error',
              'Exit Code 137: OOMKilled (Linux Kernel SIGKILL 9 sent due to Out Of Memory threshold)',
              'Exit Code 143: Graceful SIGTERM 15 received during rolling update'
            ]
          },
          code: `// ── DISASTER RECOVERY AUTOMATED POSTGRESQL BACKUP SCRIPT (backup-cron.sh) ──
/*
#!/usr/bin/env bash
set -euo pipefail

DB_NAME="codemastidb"
DB_USER="codemasti_user"
BACKUP_DIR="/var/backups/postgres"
S3_BUCKET="s3://codemasti-disaster-recovery-backups"
DATE_TAG=$(date +"%Y%m%d_%H%M%S")
BACKUP_FILE="\${BACKUP_DIR}/\${DB_NAME}_\${DATE_TAG}.sql.gz"

mkdir -p "\${BACKUP_DIR}"

echo "[DR] Starting automated database backup for \${DB_NAME}..."

# 1. Stream Compressed SQL Dump
docker exec -t postgres-container pg_dump -U "\${DB_USER}" "\${DB_NAME}" | gzip > "\${BACKUP_FILE}"

# 2. Upload Encrypted Archive to Offsite AWS S3 Bucket
aws s3 cp "\${BACKUP_FILE}" "\${S3_BUCKET}/" --sse AES256

# 3. Clean up local backups older than 3 days
find "\${BACKUP_DIR}" -name "*.sql.gz" -mtime +3 -delete

echo "[DR] Backup \${BACKUP_FILE} uploaded to S3 successfully."
*/`,
          codeBreakdown: [
            { part: 'docker exec -t postgres-container pg_dump ... | gzip', label: 'Executes non-blocking database streaming backup without requiring application downtime', color: '#3b82f6' },
            { part: 'aws s3 cp ... --sse AES256', label: 'Transfers encrypted backup snapshot to geographically isolated offsite cloud storage', color: '#10b981' },
            { part: 'find ... -mtime +3 -delete', label: 'Automated local storage rotation policy preventing disk saturation outages', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Container logs inspect kiye bina blindly server reboot kar dena',
            '❌ Backups ko same server ke hard drive par chhod dena bina offsite S3 replication ke'
          ],
          miniChallenge: 'Explain karo: "Exit Code 137 aane par aap application ko kaise diagnose aur fix karenge?"',
          quiz: {
            question: 'Disaster Recovery (DR) planning mein "RPO" (Recovery Point Objective) ka kya matlab hota hai?',
            options: [
              'Disaster hone par company maximum kitna data loss tolerate kar sakti hai (e.g. Last 15 minutes of transactions)',
              'Server restart hone ka time',
              'Developer ki response speed',
              'Cloud provider ka bill'
            ],
            answer: 'Disaster hone par company maximum kitna data loss tolerate kar sakti hai (e.g. Last 15 minutes of transactions)',
            explanation: 'Recovery Point Objective (RPO) is the maximum acceptable amount of data loss measured in time (e.g. with hourly backups, max RPO is 1 hour).'
          },
          summary: [
            'Systematic troubleshooting error codes aur logs ko connect karti hai',
            'Exit Code 137 OOMKilled memory exhaustion pinpoint karta hai',
            'Disaster Recovery RPO aur RTO SLAs guarantee karti hai'
          ],
          flashcard: {
            q: 'RPO aur RTO mein kya difference hota hai?',
            a: 'RPO (Recovery Point Objective) = Maximum allowable data loss in time (e.g. 15 min); RTO (Recovery Time Objective) = Maximum allowable system downtime before service is restored (e.g. 1 hour).'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 14: INDUSTRY CAPSTONE PROJECT
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 14: Industry Capstone: Complete CodeMasti Production Cloud Deployment',
      lessons: [
        {
          id: 'devops-projects-capstone-faang-interview',
          title: 'Full Stack Capstone: Complete CodeMasti Production Architecture & Top 35 FAANG DevOps/SRE Interview Questions',
          emoji: '🏆',
          xpReward: 50,
          badgeName: 'DevOps & SRE Champion',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Ab tak jo kuch seekha — Linux, Docker, Multi-Stage Builds, Compose, GitHub Actions CI/CD, Nginx Reverse Proxy, SSL, Terraform, Kubernetes, Prometheus Observability, aur DevSecOps — sab kuch integrate karke CodeMasti ka Complete Production Cloud System banayenge! 🏆🚀😎"',
            hint: '💡 Masti Sir: "FAANG SRE interview mein puchte hain: \'502 Bad Gateway at 10M scale kaise solve karoge?\' Answer: Load Balancer metrics -> Downstream latency -> Connection pool saturation -> Auto-scaling trigger!"',
            success: '🥳 Masti Sir: "Outstanding achievement! You have mastered Modern DevOps, Cloud, Containers and Production Engineering! You are now a Certified DevOps & SRE Production Architect! 🌟"',
            mistake: '😅 Masti Sir: "Production deployment sign-off checklist verify karein: Monitoring active, backups scheduled, secrets encrypted, zero critical CVEs!"'
          },
          englishDef: 'The final Capstone Project synthesizes all DevOps and SRE disciplines into a complete, enterprise-grade production cloud deployment for the CodeMasti platform. Architecture covers **Docker Multi-Stage Containerization**, **Nginx Reverse Proxy with Let\'s Encrypt SSL**, **Managed PostgreSQL Database with Automated Backups**, **GitHub Actions CI/CD with Quality Gates**, **Prometheus & Grafana Observability**, and **Zero-Downtime Rolling Releases**, accompanied by preparation for **Top 35 FAANG DevOps and SRE Technical Interview Questions**.',
          hinglishExplain: 'Is Final Capstone mein hum CodeMasti platform ka complete production DevOps ecosystem build aur review karenge. Isme Multi-stage Docker packaging, Nginx Reverse Proxy with HTTPS, GitHub Actions CI/CD quality pipelines, Prometheus monitoring, aur FAANG SRE technical interview preparation shamil hain.',
          funnyExample: {
            scenario: 'The FAANG DevOps & SRE System Design Interview:\n- Interviewer: "Design an automated, self-healing, zero-downtime deployment pipeline for 10 Million users." 🏢\n- Candidate: "1. GitHub Actions CI with Trivy security scans & unit/integration tests\n2. Multi-arch Docker images tagged with immutable Git SHA pushed to GHCR\n3. Kubernetes Rolling Deployment with Pod Anti-Affinity across 3 AZs\n4. Liveness & Readiness Probes with Graceful SIGTERM shutdown\n5. Prometheus & Grafana with Automated Alertmanager Circuit Breakers\n6. S3 Automated Backups with 15-min RPO!" 🎯\n- Interviewer: "Brilliant! Hired on the spot as Lead DevOps & Site Reliability Engineer!" 🚀',
            punchline: 'From beginner to certified enterprise DevOps, Cloud & SRE Architect!'
          },
          visualDiagram: {
            title: 'Complete CodeMasti Production Cloud Architecture',
            nodes: [
              'Internet Users (HTTPS Port 443 via Cloudflare CDN & DDoS Protection)',
              'Nginx Reverse Proxy / Cloud Application Load Balancer (SSL Termination)',
              'Application Cluster (Docker / Kubernetes Pod Replicas with Autoscaling)',
              'PostgreSQL Database Primary + Read Replicas + Persistent S3 Backups',
              'Prometheus & Grafana Monitoring + GitHub Actions Continuous Delivery Pipeline'
            ],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'Production Launch Verification Checklist:',
            steps: [
              '1. Security: HTTPS active with A+ SSL rating, all secrets in vault, non-root containers',
              '2. Reliability: Zero-downtime rolling strategy active with graceful shutdown handlers',
              '3. Observability: Prometheus scraping /metrics, Grafana dashboards active, alerts wired to Slack',
              '4. Backups: Daily automated database snapshots replicated to offsite S3 bucket with 15-min RPO'
            ]
          },
          code: `// ═══════════════════════════════════════════════════════
// CODEMASTI PRODUCTION DEVOPS ARCHITECTURE SPECIFICATION
// ═══════════════════════════════════════════════════════

export const productionTopology = {
  applicationName: 'CodeMasti Learning Platform',
  version: '2.0.0-production',
  infrastructure: {
    cloudProvider: 'AWS (ap-south-1 Mumbai Region)',
    orchestration: 'Docker Compose / Kubernetes Cluster (3 Replicas)',
    edgeCDN: 'Cloudflare (Global Caching & WAF Protection)',
    reverseProxy: 'Nginx 1.25 (HTTP/2, Let\\'s Encrypt TLS 1.3, Gzip)',
    database: 'PostgreSQL 16 with Automated S3 Snapshots (RPO: 15 mins)',
    caching: 'Redis 7 Alpine (In-Memory Session & Route Cache)'
  },
  ciCdPipeline: {
    platform: 'GitHub Actions',
    stages: [
      'Linting & Static Analysis (ESLint + TypeScript)',
      'Automated Test Verification (Vitest + Supertest)',
      'Security Audits (Gitleaks Secret Scan + Trivy Container Scan)',
      'Multi-Stage Docker Build & Push to GHCR (Tagged with Git SHA)',
      'Zero-Downtime Rolling Update & Health Probe Verification'
    ]
  },
  observability: {
    metricsEngine: 'Prometheus (Scrapes /metrics every 15s)',
    visualization: 'Grafana Dashboards (p50/p95/p99 Latency, Error Rate, CPU/RAM)',
    alerting: 'Alertmanager -> PagerDuty / Slack on SLO Breaches'
  }
};`,
          codeBreakdown: [
            { part: 'orchestration: "Kubernetes Cluster (3 Replicas)"', label: 'Multi-node high availability architecture preventing single points of failure', color: '#3b82f6' },
            { part: 'Trivy Container Scan + Git SHA Tagging', label: 'DevSecOps vulnerability prevention paired with deterministic immutable release artifacts', color: '#10b981' },
            { part: 'Prometheus + Grafana (p95/p99 Latency)', label: 'Real-time observability telemetry guaranteeing SLA reliability compliance', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Production launch se pehle disaster recovery restore test na karna',
            '❌ Interview mein sirf tools ke naam lena bina core trade-offs aur architecture explain kiye'
          ],
          miniChallenge: 'Explain karo: "Ek 502 Bad Gateway incident mein aap step-by-step investigation kaise execute karenge?"',
          quiz: {
            question: 'Production cloud architecture mein High Availability (HA) achieve karne ka foundational principle kya hota hai?',
            options: [
              'Zero Single Point of Failure: Multi-instance replicas, multi-availability zone distribution, aur automated load balancing',
              'Ek hi bada server khareedna',
              'Database band rakhna',
              'Deployments rok dena'
            ],
            answer: 'Zero Single Point of Failure: Multi-instance replicas, multi-availability zone distribution, aur automated load balancing',
            explanation: 'High Availability is achieved by eliminating single points of failure through multi-container replicas, multi-AZ cloud distribution, database read-replicas, and automated health-checking load balancers.'
          },
          summary: [
            'Production engineering code, containers, cloud, CI/CD aur observability unite karti hai',
            'Zero-downtime releases aur graceful shutdown user experience protect karte hain',
            'CodeMasti DevOps Architecture high-scale cloud production ke liye certified hai'
          ],
          flashcard: {
            q: 'Production Release Sign-Off ke Top 4 Golden Checks kya hain?',
            a: '1. Automated CI/CD test suites & security scans 100% green, 2. Zero-downtime rolling update with graceful shutdown, 3. Prometheus/Grafana observability active, 4. Automated offsite backups verified.'
          }
        }
      ]
    }
  ]
}

export default devopsCourse
