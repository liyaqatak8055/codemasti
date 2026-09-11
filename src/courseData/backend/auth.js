export const authCourse = {
  id: 'auth',
  title: 'Authentication',
  description: 'Production-Grade Authentication & Web Security Masterclass! Password hashing with bcrypt & Argon2, Session authentication with Redis & HttpOnly cookies, JWT architecture, Access vs Refresh Token Rotation, Multi-Factor Authentication (MFA & TOTP Authenticator apps), OAuth 2.0 & OpenID Connect (OIDC) with PKCE, Social Logins (Google/GitHub), Email verification & single-use password reset tokens, RBAC & ABAC permissions, CSRF tokens, CORS preflight, Rate limiting & brute-force defense, multi-device session revocation, audit logging, CodeMasti Auth Capstone, aur FAANG interview problems Masti Sir style mein!',
  icon: '🔐',
  category: 'backend',
  certificateName: 'AUTHENTICATION',
  topicsCount: 93,
  practiceCount: 120,
  projectsCount: 10,
  hoursEstimate: 30,
  level: 'Beginner to Advanced',
  chapters: [
    // ═══════════════════════════════════════════════════════
    // CHAPTER 1: AUTHENTICATION & IDENTITY FUNDAMENTALS
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 1: Authentication & Identity Fundamentals',
      lessons: [
        {
          id: 'auth-fundamentals-identity',
          title: 'What is Authentication, AuthN vs AuthZ, Identity & Credential Factors',
          emoji: '🔐',
          xpReward: 35,
          badgeName: 'Identity Pioneer',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Authentication ka simple matlab: \'Bhai tu kaun hai?\' (Identity Verification) aur Authorization ka matlab: \'Andar aane ki permission hai kya?\' (Access Control)! Gatekeeper aur VIP lounge ka farak samajh lo! 🚪🎫😎"',
            hint: '💡 Masti Sir: "Credentials ke 3 core factors hote hain: 1. Something you know (Password), 2. Something you have (Phone/OTP), 3. Something you are (Fingerprint/Biometrics)!"',
            success: '🎉 Masti Sir: "Authentication fundamentals aur identity architecture crystal clear ho gaya! 🔥"',
            mistake: '😅 Masti Sir: "AuthN aur AuthZ ko mix mat karna — User login hona AuthN hai, Admin panel ka access milna AuthZ hai!"'
          },
          englishDef: 'Authentication (AuthN) verifies the identity of an entity ("Who are you?"), whereas Authorization (AuthZ) verifies permissions ("What are you allowed to do?"). Identity is anchored by stable, unique user identifiers (UUIDs). Credentials span three authentication factors: (1) Knowledge (Passwords, PINs), (2) Possession (Hardware Keys, OTPs, Authenticator Apps), and (3) Inherence (Biometrics, Passkeys).',
          hinglishExplain: 'Authentication web applications ka sabse pehla aur sabse critical security layer hota hai. Jab user login karta hai, toh server verify karta hai ki kya credentials sahi hain (AuthN). Ek baar identity confirm hone ke baad server check karta hai ki user ke paas us page ya API ko access karne ki permission hai ya nahi (AuthZ). Modern systems mein identity ke liye stable UUIDs use kiye jaate hain.',
          funnyExample: {
            scenario: 'The School Campus Gate Analogy:\n- School Gatekeeper: "Student ID Card dikhao" 🪪 -> Verification passed! (Authentication: "You are Kabir!") ✅\n- Principal Office Guard: "Kya tum Principal ho?" 🚪 -> "No, I am a student" -> Access Denied! (Authorization: 403 Forbidden!) 🚫',
            punchline: 'Authentication verifies your identity; Authorization gates your permissions!'
          },
          visualDiagram: {
            title: 'Authentication (AuthN) vs Authorization (AuthZ) Pipeline',
            nodes: [
              '1. User submits Credentials (Email + Password)',
              '2. AUTHENTICATION (AuthN): Server verifies password hash -> "Identity Confirmed: User #101"',
              '3. AUTHORIZATION (AuthZ): Server checks Role/Permissions -> "Has role: admin?"',
              '4A. If Authorized -> Grant Access (200 OK)',
              '4B. If Forbidden -> Deny Access (403 Forbidden)'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'The 3 Authentication Factors:',
            steps: [
              '1. Knowledge Factor (Something you know): Passwords, PINs, Security questions',
              '2. Possession Factor (Something you have): Smartphone with Authenticator App (TOTP), SMS OTP, FIDO2 YubiKey',
              '3. Inherence Factor (Something you are): Fingerprint, Face ID, Biometric Passkeys (WebAuthn)'
            ]
          },
          code: `// ── CONCEPTUAL IDENTITY & CREDENTIAL DATA CONTRACT ──

// Stable User Entity Model
const userProfile = {
  id: "550e8400-e29b-41d4-a716-446655440000", // Stable immutable UUID
  email: "kabir@codemasti.com",
  username: "kabir_dev",
  isEmailVerified: true,
  role: "student",
  mfaEnabled: true,
  createdAt: "2026-08-21T03:30:00.000Z"
};

// Authentication Verification Function
function checkAccess(user, requiredRole) {
  // 1. Verify Authentication State
  if (!user || !user.id) {
    return { status: 401, message: "Authentication required. Please log in." };
  }

  // 2. Verify Authorization State
  if (requiredRole && user.role !== requiredRole) {
    return { status: 403, message: "Access forbidden: Insufficient role permissions." };
  }

  return { status: 200, message: "Access granted!" };
}`,
          codeBreakdown: [
            { part: 'id: "550e8400..."', label: 'Immutable unique identifier guaranteeing consistent identity mapping across email updates', color: '#3b82f6' },
            { part: 'status: 401 (Authentication)', label: 'Returned when client credentials are missing or unverified', color: '#10b981' },
            { part: 'status: 403 (Authorization)', label: 'Returned when verified identity lacks required role permissions for target resource', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ User ID ke taur par mutable fields (jaise username ya phone number) use karna jo future mein change ho sakein',
            '❌ 401 Unauthorized aur 403 Forbidden ke status codes ko mix kar dena'
          ],
          miniChallenge: 'Ek function likho jo check kare ki user logged-in hai ya nahi, aur agar logged-in hai toh check kare ki role `admin` hai ya nahi.',
          quiz: {
            question: 'Ek user valid login credentials ke sath login ho chuka hai, lekin wo Admin Dashboard open karne ki koshish karta hai aur server request reject kar deta hai. Yahan kaunsa check fail hua?',
            options: ['Authentication (AuthN)', 'Authorization (AuthZ)', 'DNS Resolution', 'Encryption'],
            answer: 'Authorization (AuthZ)',
            explanation: 'User login ho chuka hai (Authentication passed), lekin uske paas Admin Dashboard dekhne ki required permission nahi hai (Authorization failed).'
          },
          summary: [
            'Authentication identity confirm karta hai ("Who are you?")',
            'Authorization access permissions regulate karta hai ("What can you do?")',
            'Multi-Factor Authentication (MFA) knowledge, possession aur inherence factors combine karta hai'
          ],
          flashcard: {
            q: 'Authentication mein `Stable User Identifier` kyun zaroori hota hai?',
            a: 'Kyonki users apna email ya username change kar sakte hain, isliye database mein relationships hamesha permanent immutable UUIDs se link hone chahiye.'
          }
        },
        {
          id: 'auth-intro-bcrypt',
          title: 'Password Security, Cryptographic Salt, bcrypt & Argon2 Hashing',
          emoji: '🔑',
          xpReward: 40,
          badgeName: 'Crypto Guardian',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Plain text password database mein save kiya toh samajho hacker ko chabi de di! Hashing seekho! Password ko hash karo — database ko password ka asli raaz kabhi mat batao! 🔒🧠😎"',
            hint: '💡 Masti Sir: "Salt ek random cryptographic string hoti hai jo har password mein mix hoti hai taaki Rainbow Table dictionary attacks fail ho jayein!"',
            success: '🎉 Masti Sir: "Salted cryptographic password hashing successfully mastered! 🔥"',
            mistake: '😅 Masti Sir: "Password hashing ke liye fast algorithms jaise MD5 ya SHA256 use mat karna — always use slow salted hashing (bcrypt/Argon2)!"'
          },
          englishDef: 'Storing passwords requires irreversible, computationally expensive, memory-hard cryptographic hashing functions: **bcrypt** (Blowfish-based with adaptive work factor) or **Argon2id** (winner of the Password Hashing Competition, immune to GPU/ASIC cracking). A unique cryptographic **Salt** is generated per user to eliminate pre-computed Rainbow Table attacks.',
          hinglishExplain: 'Passwords ko database mein kabhi bhi plain text mein save nahi kiya jata. Hum One-Way Cryptographic Hashing use karte hain (jise decrypt karna impossible hota hai). Har password ke sath ek unique random "Salt" mix hota hai jisse agar do users ka password exact same (`Password123`) bhi ho, tab bhi unka hash completely alag banta hai. Login karte waqt `bcrypt.compare()` candidate password ko hash karke stored hash se verify karta hai.',
          funnyExample: {
            scenario: 'The Coffee Grinder Analogy (One-Way Hashing):\n- Fresh Coffee Beans = Plain Password (`SuperSecret2026`) ☕\n- Grinder + Spices (bcrypt + Salt) = Ground Coffee Powder (`$2b$12$e8...`) 🫘🧂\n- Can you turn powder back into whole raw beans? IMPOSSIBLE! ❌\n- Verification: Grind candidate beans with same spices -> Compare powder color & smell! ✅',
            punchline: 'Cryptographic hashing is strictly one-way and irreversible!'
          },
          visualDiagram: {
            title: 'bcrypt Password Hashing & Verification Process',
            nodes: [
              'User Registration: Plain Password ("mySecret123") -> bcrypt.genSalt(12) -> One-Way Hash -> DB Hash: $2b$12$e8... (Irreversible)',
              'User Login: Plain Password ("mySecret123") -> bcrypt.compare("mySecret123", DB_Hash) -> Re-computes & Verifies -> Returns True'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Hashing vs Encryption vs Encoding:',
            steps: [
              'Hashing: One-way, irreversible transformation (Used for Passwords)',
              'Encryption: Two-way reversible transformation using a secret key (Used for sensitive documents/data at rest)',
              'Encoding: Reversible data representation without secrets (e.g. Base64, URL encoding)'
            ]
          },
          code: `// ── SECURE BCRYPT PASSWORD HASHING UTILITY ──
import bcrypt from 'bcrypt';

const SALT_ROUNDS = 12; // 2^12 cost factor (~250ms hashing calculation time)

// 1. Registration: Hash plain password before database insertion
export async function hashUserPassword(plainPassword) {
  const salt = await bcrypt.genSalt(SALT_ROUNDS);
  const hashedPassword = await bcrypt.hash(plainPassword, salt);
  return hashedPassword;
}

// 2. Login: Timing-safe comparison against stored hash
export async function verifyUserPassword(plainPassword, storedHash) {
  const isMatch = await bcrypt.compare(plainPassword, storedHash);
  return isMatch; // Returns true or false
}

// ── REGISTRATION DATABASE SCHEMA DESIGN ──
/*
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(100) NOT NULL UNIQUE,
  password_hash TEXT NOT NULL, -- Never store plain password!
  is_verified BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);
*/`,
          codeBreakdown: [
            { part: 'const salt = await bcrypt.genSalt(12);', label: 'Generates 128-bit cryptographically secure random salt defeating rainbow table lookups', color: '#3b82f6' },
            { part: 'await bcrypt.compare(plainPassword, storedHash)', label: 'Executes constant-time comparison immune to microsecond side-channel timing attacks', color: '#10b981' },
            { part: 'password_hash TEXT NOT NULL', label: 'Database schema column strictly storing irreversible cryptographic hashes', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Plain text passwords database mein store karna',
            '❌ Outdated fast hashing algorithms jaise MD5 ya SHA-256 use karna (easily cracked via GPU brute force)'
          ],
          miniChallenge: 'Ek login function likho jo `verifyUserPassword` use karke user authentication verify kare.',
          quiz: {
            question: 'Password hashing mein "Salt" ka primary purpose kya hota hai?',
            options: [
              'Password ko fast verify karna',
              'Har password ke sath unique random string jodna taaki Rainbow Table dictionary attacks fail ho jayein',
              'Password encrypt/decrypt karna',
              'Database space bachana'
            ],
            answer: 'Har password ke sath unique random string jodna taaki Rainbow Table dictionary attacks fail ho jayein',
            explanation: 'Salt ensure karta hai ki agar multiple users ka password same ho, tab bhi unka hash completely alag banta hai, defeating pre-computed rainbow table dictionaries.'
          },
          summary: [
            'Passwords ko hamesha slow adaptive salted hashing (bcrypt/Argon2) se protect karein',
            'Hashing One-Way hoti hai, Encryption Two-Way hoti hai, Encoding public hoti hai',
            'Constant-time comparison timing side-channel attacks ko eliminate karti hai'
          ],
          flashcard: {
            q: 'Encryption aur Hashing mein kya main difference hai?',
            a: 'Encryption two-way hoti hai (secret key se decrypt ki ja sakti hai); Hashing one-way hoti hai (wapas plain text mein badli nahi ja sakti).'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 2: USER LIFECYCLE: REGISTRATION, LOGIN & RESET
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 2: User Lifecycle: Registration, Verification & Password Reset',
      lessons: [
        {
          id: 'auth-registration-login-flows',
          title: 'Complete Registration, Login & Secure Email Verification Workflows',
          emoji: '📋',
          xpReward: 45,
          badgeName: 'Flow Architect',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Registration se lekar Login aur Email Verification tak — har step par security check lagana zaroori hai! Email verify karne ke liye single-use time-bound cryptographic token bhejo! 📧📋😎"',
            hint: '💡 Masti Sir: "Logout karte waqt sirf frontend state clear karna kaafi nahi hota — server-side session revoke karo aur cookies clear karo!"',
            success: '🎉 Masti Sir: "End-to-end user lifecycle flows successfully implemented! 🔥"',
            mistake: '😅 Masti Sir: "Verification token ko plain text mein database mein store mat karna — hash the token in the database for extra safety!"'
          },
          englishDef: 'The user authentication lifecycle encompasses **Registration** (input validation, duplication checks, salted password hashing, verification email dispatch), **Email Verification** (single-use cryptographic tokens expiring in 24h), **Login** (credential validation, rate limiting, session/token generation), and **Logout** (session revocation, refresh token blacklisting, and cookie clearing).',
          hinglishExplain: 'User lifecycle mein 4 main stages hoti hain:\n1. **Registration**: User ka data validate hota hai, password hash hota hai aur email verification link bheja jata hai.\n2. **Email Verification**: User email ke link par click karta hai jisme ek secure random token hota hai jo 24 ghante mein expire ho jata hai.\n3. **Login**: Credentials verify karke session ya JWT token issue hota hai.\n4. **Logout**: Server session ko permanently destroy karta hai aur cookies delete karta hai.',
          funnyExample: {
            scenario: 'The Club Membership Onboarding:\n- Step 1 (Register): Fill application form 📝\n- Step 2 (Verification): Postman brings an activation letter to your physical address 📬\n- Step 3 (Login): Show activation badge at the club door -> Entry granted! 🎟️\n- Step 4 (Logout): Hand over visitor badge at the gate upon exit! 🚪',
            punchline: 'Every step in the authentication lifecycle must be verified and tracked!'
          },
          visualDiagram: {
            title: 'Complete User Registration & Verification Lifecycle',
            nodes: [
              '1. User submits Registration Form (Email + Password)',
              '2. Server validates input -> Hashes password -> Generates 256-bit Verification Token',
              '3. Saves User (is_verified = FALSE) + Token Hash in DB',
              '4. Dispatches Email with link: https://codemasti.com/verify?token=xyz',
              '5. User clicks link -> Server verifies token hash & expiry -> Sets is_verified = TRUE'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Secure Verification Token Architecture:',
            steps: [
              'Generate 32-byte cryptographic random token: `crypto.randomBytes(32).toString(\'hex\')`',
              'Hash the token with SHA-256 before saving to database: `tokenHash = crypto.createHash(\'sha256\').update(token).digest(\'hex\')`',
              'Send raw token in email; compare hashes upon verification (protects against database breach token exposure)'
            ]
          },
          code: `// ── USER REGISTRATION & EMAIL VERIFICATION CONTROLLER ──
import crypto from 'crypto';
import { hashUserPassword } from '../utils/auth.util.js';

export async function handleRegistration(req, res, next) {
  try {
    const { email, password, username } = req.body;

    // 1. Check existing account
    const existing = await db.query('SELECT id FROM users WHERE email = $1', [email]);
    if (existing.rows.length > 0) {
      return res.status(409).json({ success: false, error: 'An account with this email already exists' });
    }

    // 2. Hash Password
    const passwordHash = await hashUserPassword(password);

    // 3. Generate Cryptographic Email Verification Token
    const rawToken = crypto.randomBytes(32).toString('hex');
    const tokenHash = crypto.createHash('sha256').update(rawToken).digest('hex');
    const tokenExpiry = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours expiry

    // 4. Save User & Token in Database
    const userRes = await db.query(
      'INSERT INTO users (email, username, password_hash) VALUES ($1, $2, $3) RETURNING id',
      [email, username, passwordHash]
    );

    await db.query(
      'INSERT INTO verification_tokens (user_id, token_hash, expires_at) VALUES ($1, $2, $3)',
      [userRes.rows[0].id, tokenHash, tokenExpiry]
    );

    // 5. Send Email (Simulated)
    const verificationUrl = \`https://codemasti.com/verify-email?token=\${rawToken}\`;
    console.log(\`[EMAIL SERVICE] Verification Link sent to \${email}: \${verificationUrl}\`);

    res.status(201).json({
      success: true,
      message: 'Registration successful! Please check your email to verify your account.'
    });
  } catch (error) {
    next(error);
  }
}`,
          codeBreakdown: [
            { part: 'crypto.randomBytes(32).toString("hex")', label: 'Generates 256-bit cryptographically secure un-guessable random token string', color: '#3b82f6' },
            { part: 'crypto.createHash("sha256").update(rawToken)...', label: 'Hashes verification token before database persistence preventing token theft during DB leaks', color: '#10b981' },
            { part: 'tokenExpiry = new Date(Date.now() + 24 * 60 * 60 * 1000)', label: 'Enforces strict 24-hour expiration window on activation link', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Verification tokens ko bina expiry ke database mein chhod dena',
            '❌ Logout hone par server-side session ya refresh token invalidate na karna'
          ],
          miniChallenge: 'Ek `/verify-email` route likho jo email link se token accept karke user account activate kare.',
          quiz: {
            question: 'Email verification tokens aur Password reset tokens ko database mein kaise store karna best security practice hai?',
            options: [
              'Plain text format mein',
              'SHA-256 cryptographic hash ke roop mein (raw token email mein jayega aur database mein sirf hash store hoga)',
              'Base64 format mein',
              'Local storage mein'
            ],
            answer: 'SHA-256 cryptographic hash ke roop mein (raw token email mein jayega aur database mein sirf hash store hoga)',
            explanation: 'Database mein token ka hash store karne se agar database leak bhi ho jaye, toh attacker database se token nikaal kar account verify ya password reset nahi kar sakta.'
          },
          summary: [
            'User lifecycle registration, verification, login aur logout encompass karta hai',
            'Verification tokens single-use aur time-bound (24h) hone chahiye',
            'Logout par server session destroy aur cookies wipe karna mandatory hai'
          ],
          flashcard: {
            q: 'Logout karte waqt frontend aur backend dono par kya actions hone chahiye?',
            a: 'Frontend par in-memory auth state clear honi chahiye; Backend par session/refresh token database se revoke hona chahiye aur HttpOnly cookies expire (`Max-Age=0`) karni chahiye.'
          }
        },
        {
          id: 'auth-password-reset-enumeration',
          title: 'Secure Password Reset, Token Invalidation & Email Enumeration Defense',
          emoji: '🛡️',
          xpReward: 45,
          badgeName: 'Reset Guardian',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Forgot Password page par agar user galat email dale aur server bole: \'Email does not exist!\' — toh hacker ko pata chal gaya ki kaunsa email registered hai aur kaunsa nahi! Isse Email Enumeration kehte hain! Hamesha generic response do! 🕵️‍♂️🛡️😎"',
            hint: '💡 Masti Sir: "Chahe email database mein mile ya na mile, response hamesha bolo: \'Agar account exist karta hai toh reset link bhej diya gaya hai!\' Zero information leakage!"',
            success: '🎉 Masti Sir: "Secure password reset with zero email enumeration leaks mastered! 🔥"',
            mistake: '😅 Masti Sir: "Naya password set hone ke baad user ke saare purane active sessions aur tokens invalidate karna mandatory hai!"'
          },
          englishDef: '**Secure Password Reset** generates short-lived (15-30 min), single-use cryptographic tokens dispatched via email. Security mandates defending against **Email Enumeration Attacks** by returning identical generic responses regardless of whether the submitted email exists in the database. Successful password resets must immediately invalidate all existing sessions and refresh tokens.',
          hinglishExplain: 'Password Reset security ka sabse sensitive part hota hai:\n1. **Email Enumeration Defense**: Agar koi user "Forgot Password" form mein email dale, toh server ko hamesha same message bolna chahiye: "Agar aapka email registered hai, toh reset link bhej diya gaya hai". Isse hacker email list scan nahi kar sakta.\n2. **Reset Token Expiry**: Token sirf 15-30 minutes ke liye valid hona chahiye aur 1 baar use hote hi delete ho jana chahiye.\n3. **Session Revocation**: Password change hone par hacker ke saare active sessions instantly logout ho jane chahiye.',
          funnyExample: {
            scenario: 'The Poker Face Defense (Email Enumeration):\n- Hacker enters: `ceo@target.com` 🦹‍♂️\n- Bad Server: "Email does not exist!" (Hacker learns CEO uses personal email! ❌)\n- Secure Server: "If your email is registered, instructions have been sent." (Poker face! Hacker learns NOTHING! 🕶️🛡️)',
            punchline: 'Always keep a poker face on password recovery endpoints!'
          },
          visualDiagram: {
            title: 'Secure Password Reset Workflow',
            nodes: [
              '1. User requests: POST /api/v1/auth/forgot-password (email: "user@ex.com")',
              '2. Server checks DB -> If found, generates 32-byte token (Expires in 15 mins)',
              '3. Server returns Generic 200 OK: "If registered, reset link sent" (Zero email leakage)',
              '4. User clicks link -> POST /api/v1/auth/reset-password (token + newPassword)',
              '5. Server validates token -> Hashes new password -> Invalidates ALL active sessions/tokens'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Why Global Session Revocation is Mandatory on Password Change:',
            steps: [
              'If an attacker previously compromised the account and held an active session or refresh token',
              'Updating the password must revoke all existing session records and refresh tokens in the database',
              'Forces the attacker\'s session to terminate immediately'
            ]
          },
          code: `// ── 1. FORGOT PASSWORD CONTROLLER (EMAIL ENUMERATION PROOF) ──
export async function requestPasswordReset(req, res, next) {
  try {
    const { email } = req.body;
    const userRes = await db.query('SELECT id FROM users WHERE email = $1', [email]);

    if (userRes.rows.length > 0) {
      const userId = userRes.rows[0].id;
      const rawToken = crypto.randomBytes(32).toString('hex');
      const tokenHash = crypto.createHash('sha256').update(rawToken).digest('hex');
      const expiresAt = new Date(Date.now() + 15 * 60 * 1000); // 15 Minutes expiry

      // Save token hash
      await db.query(
        'INSERT INTO password_reset_tokens (user_id, token_hash, expires_at) VALUES ($1, $2, $3)',
        [userId, tokenHash, expiresAt]
      );

      // Dispatch Email with raw token
      const resetUrl = \`https://codemasti.com/reset-password?token=\${rawToken}\`;
      console.log(\`[EMAIL SERVICE] Password Reset Link: \${resetUrl}\`);
    }

    // ALWAYS return the EXACT SAME generic response (Prevents Email Enumeration!)
    res.json({
      success: true,
      message: 'If an account exists with this email, a password reset link has been dispatched.'
    });
  } catch (error) {
    next(error);
  }
}

// ── 2. RESET PASSWORD EXECUTION CONTROLLER ──
export async function executePasswordReset(req, res, next) {
  try {
    const { token, newPassword } = req.body;
    const tokenHash = crypto.createHash('sha256').update(token).digest('hex');

    // 1. Verify token validity and expiration
    const tokenRes = await db.query(
      'SELECT user_id FROM password_reset_tokens WHERE token_hash = $1 AND expires_at > NOW() AND is_used = FALSE',
      [tokenHash]
    );

    if (tokenRes.rows.length === 0) {
      return res.status(400).json({ success: false, error: 'Invalid or expired password reset token' });
    }

    const userId = tokenRes.rows[0].user_id;

    // 2. Hash New Password
    const newHash = await hashUserPassword(newPassword);

    // 3. Atomic Database Update & Session Revocation
    await db.query('BEGIN');
    await db.query('UPDATE users SET password_hash = $1, updated_at = NOW() WHERE id = $2', [newHash, userId]);
    await db.query('UPDATE password_reset_tokens SET is_used = TRUE WHERE token_hash = $1', [tokenHash]);
    await db.query('DELETE FROM active_sessions WHERE user_id = $1', [userId]); // Invalidate all existing sessions!
    await db.query('COMMIT');

    res.json({ success: true, message: 'Password has been successfully updated. Please log in with your new password.' });
  } catch (error) {
    await db.query('ROLLBACK');
    next(error);
  }
}`,
          codeBreakdown: [
            { part: 'message: "If an account exists with this email..."', label: 'Generic constant response preventing attackers from harvesting registered email lists', color: '#3b82f6' },
            { part: 'expires_at > NOW() AND is_used = FALSE', label: 'Strict single-use cryptographic validation ensuring tokens cannot be replayed', color: '#10b981' },
            { part: 'DELETE FROM active_sessions WHERE user_id = $1', label: 'Mandatory session revocation terminating all existing sessions across all devices', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Email exist na hone par `404 Email not found` return karna (enables Email Enumeration reconnaissance)',
            '❌ Password reset hone ke baad purane active sessions ko terminate na karna'
          ],
          miniChallenge: 'Ek password reset route test karo jo single-use token use hone ke baad dobara submit karne par 400 error de.',
          quiz: {
            question: 'Forgot password endpoint par "Email does not exist" message return karna security vulnerability kyun maana jata hai?',
            options: [
              'Kyonki ye hackers ko database mein registered valid emails verify karne ki permission deta hai (Email Enumeration Attack)',
              'Kyonki isse database size badh jata hai',
              'Kyonki email bhejna free nahi hota',
              'Kyonki browser crash ho jata hai'
            ],
            answer: 'Kyonki ye hackers ko database mein registered valid emails verify karne ki permission deta hai (Email Enumeration Attack)',
            explanation: 'Attackers email lists ko script se test karke confirm kar sakte hain ki kaunse users registered hain, which enables targeted phishing and credential stuffing attacks.'
          },
          summary: [
            'Generic responses email enumeration reconnaissance attacks ko block karte hain',
            'Password reset tokens single-use aur short-lived (15 mins) hone chahiye',
            'Password change par sabhi purane active sessions aur tokens revoke karna mandatory hai'
          ],
          flashcard: {
            q: 'Email Enumeration Attack kya hota hai?',
            a: 'Jab attacker login ya forgot-password form mein alag-alag emails test karke error messages se pata laga leta hai ki kaunsa email registered hai.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 3: SESSION AUTHENTICATION & SECURE COOKIES
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 3: Stateful Session Authentication & Secure Cookies',
      lessons: [
        {
          id: 'auth-session-cookies-httponly',
          title: 'Stateful Session Architecture, Session Stores & Cookie Security (HttpOnly, Secure, SameSite)',
          emoji: '🍪',
          xpReward: 45,
          badgeName: 'Cookie Master',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Session ka matlab: server ke pass register mein likha hai ki \'Haan bhai, Kabir login ho chuka hai!\'. Aur Cookies ke 3 bodyguard hote hain: HttpOnly (No JavaScript XSS theft), Secure (HTTPS only), aur SameSite=Strict (No CSRF)! 🍪🛡️😎"',
            hint: '💡 Masti Sir: "`HttpOnly` cookie ko `document.cookie` se padha nahi ja sakta — agar page par XSS script bhi aa jaye toh token chori nahi ho sakta!"',
            success: '🎉 Masti Sir: "Stateful session authentication and secure cookie flags mastered! 🔥"',
            mistake: '😅 Masti Sir: "Production par `SameSite=None` bina `Secure` flag ke nahi chalega — browser cookie reject kar dega!"'
          },
          englishDef: '**Session-Based Authentication** maintains state on the server (e.g. inside Redis or PostgreSQL session tables). When a user authenticates, the server generates a cryptographically random **Session ID** (`connect.sid`), stores the user context server-side, and sends the Session ID in a Cookie. Security requires strict cookie attributes: **`HttpOnly`** (blocks client JavaScript access), **`Secure`** (transmits only over HTTPS), and **`SameSite=Strict/Lax`** (mitigates CSRF).',
          hinglishExplain: 'Session-Based Authentication mein server par state save hoti hai (jaise Redis memory mein). Login hone par server ek random Session ID generate karta hai aur use cookie ke through browser ko bhej deta hai. Browser har agli request ke sath automatically ye cookie bhejta hai. Cookie ko secure banane ke 3 main flags hote hain:\n1. `HttpOnly`: JavaScript se cookie padhna block karta hai (XSS protection).\n2. `Secure`: Sirf HTTPS encrypted connection par cookie bhejta hai.\n3. `SameSite=Strict`: Third-party websites se cookie bhejna block karta hai (CSRF protection).',
          funnyExample: {
            scenario: 'The Coat Check Token Analogy (Session Auth):\n- You enter hotel -> Hand over your heavy jacket 🧥\n- Counter staff hangs jacket on Rack #45 (Server Session Store) 🗄️\n- Gives you a plastic Token #45 (Session ID Cookie) 🪙\n- Next time you want your jacket, show Token #45 -> Staff instantly matches Rack #45 and knows it is yours! 🎟️✨',
            punchline: 'Session IDs are lightweight tokens pointing to server-side user data!'
          },
          visualDiagram: {
            title: 'Session Authentication & Cookie Lifecycle Flow',
            nodes: [
              '1. POST /auth/login (Email + Password)',
              '2. Server validates credentials -> Generates Session ID (sess_abc123)',
              '3. Saves { userId: 101, role: "admin" } inside Redis Session Store',
              '4. Returns Header: Set-Cookie: sid=sess_abc123; HttpOnly; Secure; SameSite=Strict',
              '5. Subsequent Requests: Browser sends Cookie: sid=sess_abc123 automatically'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Cookie Security Flags Deep Dive:',
            steps: [
              '`HttpOnly`: Prevents `document.cookie` execution in browser console or malicious injected scripts',
              '`Secure`: Cookie is transmitted strictly over TLS (HTTPS port 443), preventing Wi-Fi packet sniffing',
              '`SameSite=Strict`: Cookie is never sent on cross-site requests (e.g. clicking a link from an external email or blog)',
              '`SameSite=Lax`: Default modern browser behavior; allows top-level GET navigation'
            ]
          },
          code: `// ── EXPRESS-SESSION WITH REDIS STORE & SECURE COOKIES ──
import session from 'express-session';
import RedisStore from 'connect-redis';
import { createClient } from 'redis';

// 1. Initialize Redis Client
export const redisClient = createClient({ url: process.env.REDIS_URL || 'redis://localhost:6379' });
await redisClient.connect();

// 2. Configure Express Session Middleware
export const sessionMiddleware = session({
  store: new RedisStore({ client: redisClient, prefix: 'sess:' }),
  name: '__Host-codemasti_sid', // Secure Cookie Prefix
  secret: process.env.SESSION_SECRET || 'SuperSecretSessionKey2026!',
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true, // XSS Defense: JavaScript cannot read this cookie
    secure: process.env.NODE_ENV === 'production', // HTTPS only
    sameSite: 'strict', // CSRF Defense: Never sent cross-site
    maxAge: 24 * 60 * 60 * 1000, // 24 Hours Session Lifetime
    domain: process.env.NODE_ENV === 'production' ? '.codemasti.com' : undefined
  }
});

// ── LOGIN ROUTE WITH SESSION CREATION ──
app.post('/api/v1/auth/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await verifyCredentials(email, password);

  if (!user) {
    return res.status(401).json({ success: false, error: 'Invalid email or password' });
  }

  // Session Fixation Defense: Regenerate session ID upon login
  req.session.regenerate((err) => {
    if (err) throw err;

    req.session.userId = user.id;
    req.session.role = user.role;

    res.json({ success: true, message: 'Logged in successfully', user: { id: user.id, email: user.email } });
  });
});`,
          codeBreakdown: [
            { part: 'store: new RedisStore(...)', label: 'Persists active session records in fast in-memory Redis cluster decoupled from app servers', color: '#3b82f6' },
            { part: 'cookie: { httpOnly: true, sameSite: "strict" }', label: 'Hardened cookie flags neutralizing script-based XSS theft and cross-site CSRF attacks', color: '#10b981' },
            { part: 'req.session.regenerate(...)', label: 'Regenerates session ID upon login defeating Session Fixation hijack attacks', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ In-memory session store (`MemoryStore`) production mein use karna (leaks memory and fails across multiple server instances)',
            '❌ Production cookies par `HttpOnly` ya `Secure` flags omit kar dena'
          ],
          miniChallenge: 'Ek Express logout route likho jo `req.session.destroy()` aur `res.clearCookie()` execute kare.',
          quiz: {
            question: 'Authentication cookie par `HttpOnly` flag lagane ka primary security benefit kya hota hai?',
            options: [
              'Cookie ko client-side JavaScript (`document.cookie`) access nahi kar sakti, reducing token theft in XSS attacks',
              'Cookie sirf HTTP/2 par chalti hai',
              'Cookie ka size double ho jata hai',
              'Database fast ho jata hai'
            ],
            answer: 'Cookie ko client-side JavaScript (`document.cookie`) access nahi kar sakti, reducing token theft in XSS attacks',
            explanation: '`HttpOnly` browser ko instruct karta hai ki cookie ko JavaScript context se hide rakhe, so malicious XSS scripts cannot read session tokens.'
          },
          summary: [
            'Session authentication stateful server-side validation (Redis) use karti hai',
            'HttpOnly, Secure aur SameSite flags cookie defense standard hain',
            'Session ID regeneration login par Session Fixation attacks ko prevent karta hai'
          ],
          flashcard: {
            q: 'Session Fixation Attack kya hota hai?',
            a: 'Jab attacker victim ko pehle se pata Session ID wala link bhejta hai, victim us ID par login karta hai, aur attacker usi Session ID se victim ka account access kar leta hai (prevented by `session.regenerate()`).'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 4: STATELESS JWT & REFRESH TOKEN ROTATION
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 4: Stateless JWT & Dual-Token Rotation Architecture',
      lessons: [
        {
          id: 'auth-jwt-tokens',
          title: 'JSON Web Tokens (JWT RFC 7519), Standard Claims & Asymmetric Signatures',
          emoji: '🎫',
          xpReward: 45,
          badgeName: 'Token Master',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "JWT digital wristband jaisa hai! Header, Payload, aur Signature! Server secret key se sign karta hai aur har microservice bina database query kiye verify kar leti hai! 🎫😎"',
            hint: '💡 Masti Sir: "Payload ke standard claims: `sub` (User ID), `exp` (Expiration Time), `iat` (Issued At), `iss` (Issuer)!"',
            success: '🎉 Masti Sir: "JWT structure and cryptographic signature verification mastered! 🔥"',
            mistake: '😅 Masti Sir: "JWT Payload public hota hai (Base64Url encoded) — isme passwords ya secret keys kabhi mat daalna!"'
          },
          englishDef: 'JSON Web Token (JWT, RFC 7519) is an open standard for securely transmitting claims as a compact JSON object. A JWT consists of three dot-separated components: **Header** (`alg`, `typ`), **Payload** (claims: `sub`, `email`, `role`, `exp`, `iat`), and **Signature** (`HMAC-SHA256` symmetric with shared secret, or `RS256/ES256` asymmetric with public/private key pairs).',
          hinglishExplain: 'JWT ek self-contained digital token hota hai. Jab user login karta hai toh server use ek signed JWT token deta hai. Token ke 3 parts hote hain jo dot (`.`) se jude hote hain: `Header.Payload.Signature`.\n1. **Header**: Kaunsa algorithm use hua hai (e.g. HS256).\n2. **Payload**: User ka data (User ID, Role, Expiry timestamp).\n3. **Signature**: Cryptographic signature jo prove karti hai ki data ke sath koi chhed-chhaad nahi hui hai.',
          funnyExample: {
            scenario: 'The Concert VIP Wristband:\n- Entry Gate = ID verify hui -> Holographic VIP Wristband mila 🎟️✨\n- Food Stall & VIP Lounge = Staff checks holographic signature on wristband -> Access Granted! (Zero phone calls to manager! ⚡)',
            punchline: 'JWT allows instant verification without hitting the central database every time!'
          },
          visualDiagram: {
            title: 'JWT Structure: Header . Payload . Signature',
            nodes: [
              '1. Header (Base64Url): {"alg": "HS256", "typ": "JWT"}',
              '2. Payload (Base64Url): {"sub": "101", "role": "admin", "exp": 1762819200}',
              '3. Signature: HMACSHA256(Header + "." + Payload, SECRET_KEY)',
              'Combined Token: eyJhbGciOi... . eyJzdWIiOi... . 5K9x_a...'
            ],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'Symmetric (HS256) vs Asymmetric (RS256) Signing:',
            steps: [
              'Symmetric (HS256): Single shared secret key signs and verifies token (Best for monolithic backends)',
              'Asymmetric (RS256 / ES256): Auth Server signs with Private Key; microservices verify with Public Key (Best for distributed architectures & OAuth/OIDC)',
              'Public key can be distributed freely without compromising signature security'
            ]
          },
          code: `// ── JWT GENERATION & VERIFICATION (jwt.util.js) ──
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'ProductionSuperSecretKey2026!';

// 1. Generate Signed JWT with Standard Claims
export function createAccessToken(user) {
  const payload = {
    sub: user.id, // Subject (Stable User ID)
    email: user.email,
    role: user.role,
    iss: 'codemasti-auth-service' // Issuer
  };

  return jwt.sign(payload, JWT_SECRET, {
    algorithm: 'HS256',
    expiresIn: '15m' // Short lifetime (15 minutes)
  });
}

// 2. Authentication Route Middleware
export function verifyAccessTokenMiddleware(req, res, next) {
  const authHeader = req.headers['authorization'];
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ success: false, error: 'Access token missing or malformed' });
  }

  const token = authHeader.split(' ')[1];

  jwt.verify(token, JWT_SECRET, { algorithms: ['HS256'] }, (err, decoded) => {
    if (err) {
      if (err.name === 'TokenExpiredError') {
        return res.status(401).json({ success: false, error: 'Token expired', code: 'TOKEN_EXPIRED' });
      }
      return res.status(403).json({ success: false, error: 'Invalid token signature' });
    }

    req.user = decoded; // Attach verified payload claims to request
    next();
  });
}`,
          codeBreakdown: [
            { part: "sub: user.id, iss: 'codemasti-auth-service'", label: 'Standard RFC 7519 registered claims providing normalized identity metadata', color: '#3b82f6' },
            { part: "expiresIn: '15m'", label: 'Strict short-lived access token boundary minimizing risk window if token is intercepted', color: '#10b981' },
            { part: "jwt.verify(token, JWT_SECRET, { algorithms: ['HS256'] })", label: 'Explicit algorithm pinning preventing algorithm confusion attacks (e.g. none-algorithm exploit)', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ JWT Payload ke andar passwords ya credit card numbers daalna (Payload is base64 encoded, not encrypted!)',
            '❌ Algorithm pinning omit kar dena (`{ algorithms: [\'HS256\'] }`) during verification'
          ],
          miniChallenge: 'Ek JWT token decode karo aur verify karo ki `sub` claim aur `exp` timestamp valid hain.',
          quiz: {
            question: 'JWT ke Payload part ke bare mein kaunsa statement sach hai?',
            options: [
              'Payload encrypted hota hai aur koi nahi padh sakta',
              'Payload Base64Url encoded hota hai jise token rakhne wala koi bhi padh sakta hai, isliye isme passwords nahi hone chahiye',
              'Payload mein sirf image files hoti hain',
              'Payload har second badalta hai'
            ],
            answer: 'Payload Base64Url encoded hota hai jise token rakhne wala koi bhi padh sakta hai, isliye isme passwords nahi hone chahiye',
            explanation: 'JWT encrypted nahi hota, sirf cryptographically signed hota hai. Iska payload publicly readable hota hai, isliye sensitive secrets kabhi payload mein nahi rakhne chahiye.'
          },
          summary: [
            'JWT stateless digital identity tokens provide karta hai',
            'Header, Payload aur Signature dot-separated structure banate hain',
            'Algorithm pinning aur strict expiry verification security standard hain'
          ],
          flashcard: {
            q: 'JWT mein `exp` claim kya represent karta hai?',
            a: '`exp` (Expiration Time) ek Unix timestamp hota hai jo batata hai ki token kis exact second ke baad invalid aur expired maana jayega.'
          }
        },
        {
          id: 'auth-jwt-refresh-rotation-storage',
          title: 'Dual-Token Architecture, Refresh Token Rotation & Session vs JWT Comparison',
          emoji: '🔄',
          xpReward: 50,
          badgeName: 'Rotation Ninja',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Access token bolta hai: \'Main sirf 15 minute ke liye zinda hoon\', aur Refresh token bolta hai: \'Main HttpOnly cookie mein baitha hoon aur naya access token laa kar dunga!\' Sliding Refresh Token Rotation se bank-grade security milti hai! 🔄🛡️😎"',
            hint: '💡 Masti Sir: "Refresh Token Rotation mein jab naya access token banta hai, purana refresh token invalidate ho jata hai aur ek naya refresh token issue hota hai!"',
            success: '🎉 Masti Sir: "Refresh token rotation and reuse detection architecture mastered! 🔥"',
            mistake: '😅 Masti Sir: "Chori hua refresh token agar dubara use ho (Token Reuse), toh server ko us user ke saare sessions instantly revoke kar dene chahiye!"'
          },
          englishDef: 'The **Dual-Token Pattern** pairs short-lived **Access Tokens** (15 mins, held in client memory) with long-lived **Refresh Tokens** (7 days, stored in `HttpOnly SameSite=Strict` cookies and persisted in database/Redis). **Refresh Token Rotation (RTR)** issues a brand-new refresh token on every refresh exchange and invalidates the previous one. If an invalidated refresh token is reused, the server detects token theft and revokes all active family sessions immediately.',
          hinglishExplain: 'Production web apps mein Dual-Token strategy use hoti hai:\n1. **Access Token**: Sirf 15 minutes ke liye valid hota hai aur memory mein rehta hai.\n2. **Refresh Token**: 7 din ke liye valid hota hai aur `HttpOnly SameSite=Strict` cookie mein store hota hai.\n**Refresh Token Rotation (RTR)**: Jab bhi user naya access token mangta hai, purana refresh token expire ho jata hai aur ek naya refresh token issue ho jata hai. Agar koi hacker chori hua purana refresh token use karega, toh system turant Fraud detect karke user ke saare active sessions ko revoke kar dega.',
          funnyExample: {
            scenario: 'The Bank Security Card Renewal:\n- Access Token = 15-minute temporary visitor pass 🎟️\n- Refresh Token = Master Keycard in your pocket 💳\n- Counter Renewal: Give Keycard #1 -> Counter shreds Keycard #1 and gives you Keycard #2 + Fresh Visitor Pass! 🔄✨\n- If someone tries to use shredded Keycard #1 -> ALARMS RING! All cards blocked! 🚨',
            punchline: 'Token rotation catches token theft automatically!'
          },
          visualDiagram: {
            title: 'Refresh Token Rotation & Theft Detection Pipeline',
            nodes: [
              'Client sends POST /auth/refresh (Cookie: refreshToken=RT_1)',
              'Server checks DB: Is RT_1 valid and un-used?',
              'Valid -> Mark RT_1 USED -> Issue AccessToken + New RT_2 in HttpOnly Cookie',
              'Reused / Stolen RT_1 detected -> REVOKE ALL TOKENS in family -> Force re-login!'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Sessions vs JWT Architectural Trade-offs:',
            steps: [
              'Sessions: Stateful (Requires Redis lookup on every API call), Instant revocation, Ideal for traditional web apps',
              'JWTs: Stateless (Fast verification across microservices without DB lookup), Harder revocation, Ideal for mobile apps & distributed APIs',
              'Hybrid (Dual-Token): Best of both worlds: Stateless Access Tokens + Stateful Revocable Refresh Tokens'
            ]
          },
          code: `// ── REFRESH TOKEN ROTATION WITH THEFT REUSE DETECTION ──
export async function handleTokenRefresh(req, res, next) {
  const incomingRefreshToken = req.cookies.refreshToken;
  if (!incomingRefreshToken) {
    return res.status(401).json({ success: false, error: 'Refresh token missing' });
  }

  try {
    const payload = jwt.verify(incomingRefreshToken, process.env.JWT_REFRESH_SECRET);
    const tokenHash = crypto.createHash('sha256').update(incomingRefreshToken).digest('hex');

    // 1. Query Refresh Token Record in Database
    const tokenRecord = await db.query(
      'SELECT id, user_id, is_revoked, family_id FROM refresh_tokens WHERE token_hash = $1',
      [tokenHash]
    );

    // 2. THEFT DETECTION: If token was already revoked/used, breach has occurred!
    if (tokenRecord.rows.length === 0 || tokenRecord.rows[0].is_revoked) {
      if (tokenRecord.rows.length > 0) {
        // Invalidate the entire token family for this compromised user session!
        await db.query('UPDATE refresh_tokens SET is_revoked = TRUE WHERE family_id = $1', [tokenRecord.rows[0].family_id]);
        console.warn(\`[SECURITY ALERT] Token reuse detected for family: \${tokenRecord.rows[0].family_id}!\`);
      }
      return res.status(403).json({ success: false, error: 'Compromised session. Please log in again.' });
    }

    const userId = tokenRecord.rows[0].user_id;
    const familyId = tokenRecord.rows[0].family_id;

    // 3. Mark current token as Revoked (Single-use rotation)
    await db.query('UPDATE refresh_tokens SET is_revoked = TRUE WHERE id = $1', [tokenRecord.rows[0].id]);

    // 4. Issue Fresh Token Pair
    const userRes = await db.query('SELECT id, email, role FROM users WHERE id = $1', [userId]);
    const newAccessToken = createAccessToken(userRes.rows[0]);
    const newRawRefreshToken = crypto.randomBytes(32).toString('hex');
    const newRefreshTokenHash = crypto.createHash('sha256').update(newRawRefreshToken).digest('hex');

    await db.query(
      'INSERT INTO refresh_tokens (user_id, token_hash, family_id, expires_at) VALUES ($1, $2, $3, NOW() + INTERVAL \\'7 days\\')',
      [userId, newRefreshTokenHash, familyId]
    );

    // Set Rotated Refresh Token in HttpOnly Cookie
    res.cookie('refreshToken', newRawRefreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000
    });

    res.json({ success: true, accessToken: newAccessToken });
  } catch (error) {
    next(error);
  }
}`,
          codeBreakdown: [
            { part: 'if (tokenRecord.rows[0].is_revoked)', label: 'Automatic token reuse theft detection: detects when an attacker tries to use an old rotated token', color: '#3b82f6' },
            { part: 'UPDATE refresh_tokens SET is_revoked = TRUE WHERE family_id = ...', label: 'Revokes the entire session hierarchy protecting compromised user accounts', color: '#10b981' },
            { part: 'res.cookie("refreshToken", newRawRefreshToken, ...)', label: 'Transmits rotated refresh token inside hardened HttpOnly SameSite cookie', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Refresh tokens ko browser ke localStorage mein save karna (vulnerable to XSS theft)',
            '❌ Token rotation mein reuse detection na lagana'
          ],
          miniChallenge: 'Ek endpoint likho jo `/auth/refresh` par token exchange kare aur sliding expiry extend kare.',
          quiz: {
            question: 'Refresh Token Rotation mein "Token Reuse Detection" ka kya role hota hai?',
            options: [
              'Agar koi attacker purana rotated refresh token use karne ki koshish kare, toh system theft detect karke us session ke saare tokens revoke kar deta hai',
              'Ye token ko delete hone se bachata hai',
              'Ye CSS load karta hai',
              'Ye database backup banata hai'
            ],
            answer: 'Agar koi attacker purana rotated refresh token use karne ki koshish kare, toh system theft detect karke us session ke saare tokens revoke kar deta hai',
            explanation: 'Token reuse detection ensure karta hai ki agar token chori ho chuka ho aur legitimate user ya attacker dono use karein, toh conflict detect hote hi session kill ho jaye.'
          },
          summary: [
            'Dual-token architecture short-lived access tokens aur secure refresh tokens use karta hai',
            'Refresh Token Rotation single-use token lifecycle maintain karta hai',
            'Token reuse detection session hijacking breaches ko neutralize karta hai'
          ],
          flashcard: {
            q: 'Access Token ko 15 minutes jaise short lifetime par kyun rakha jata hai?',
            a: 'Taaki agar access token kisi network sniffer ya client issue se leak bhi ho jaye, toh attacker ke paas sirf 15 minute ka chhota sa window ho aur 15 minute baad token automatically bekar ho jaye.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 5: MULTI-FACTOR AUTHENTICATION (MFA & TOTP)
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 5: Multi-Factor Authentication (MFA, TOTP & Backup Codes)',
      lessons: [
        {
          id: 'auth-mfa-totp-authenticator',
          title: 'MFA Fundamentals, TOTP RFC 6238 Authenticator Apps & Emergency Recovery Codes',
          emoji: '📱',
          xpReward: 50,
          badgeName: 'MFA Master',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Password sahi hai... lekin security uncle bol rahe hain: \'Google Authenticator ka 6-digit code dikhao bhai!\'. Time-Based One-Time Password (TOTP) — har 30 second mein naya code! Hacker password jaan bhi le tab bhi login nahi kar sakta! 📱🛡️😎"',
            hint: '💡 Masti Sir: "TOTP RFC 6238 par chalta hai — server aur phone ke beech ek Shared Secret Key hoti hai aur current time se 6-digit code calculate hota hai!"',
            success: '🎉 Masti Sir: "TOTP 2FA Authenticator flow and recovery codes successfully built! 🔥"',
            mistake: '😅 Masti Sir: "2FA setup karte waqt 10 Emergency Backup Recovery Codes zaroor generate karein agar user ka phone kho jaye!"'
          },
          englishDef: '**Multi-Factor Authentication (MFA/2FA)** requires verification across multiple independent credential categories. The industry standard is **Time-Based One-Time Password (TOTP, RFC 6238)** used by Google Authenticator, Authy, and 1Password. TOTP generates a 6-digit code derived from HMAC of a shared Base32 secret key and current Unix time slice ($T = \\lfloor \\text{time} / 30 \\rfloor$). Systems provide single-use hashed **Backup Recovery Codes** for device loss.',
          hinglishExplain: 'MFA (Multi-Factor Authentication) security ko 100x badha deta hai. Sabse secure tarika hai **TOTP** (Time-Based One-Time Password jaise Google Authenticator app). Setup ke time server ek secret key (QR Code) deta hai jo user phone app mein scan karta hai. Phone aur Server dono mathematically har 30 second mein same 6-digit code generate karte hain bina kisi SMS ya internet connection ke.',
          funnyExample: {
            scenario: 'The Two-Lock Bank Locker:\n- Key 1 (Password): Customer has Key 1 🔑\n- Key 2 (TOTP Authenticator): Bank Officer has Key 2 which changes its shape every 30 seconds! ⏱️🗝️\n- Both keys must be turned simultaneously to open the vault! 🏦✨',
            punchline: 'MFA requires two independent keys to open your digital vault!'
          },
          visualDiagram: {
            title: 'TOTP MFA Setup & Verification Math Flow',
            nodes: [
              '1. Setup: Server generates Base32 Secret ("JBSWY3DPEHPK3PXP") -> Displays QR Code',
              '2. User scans QR code into Google Authenticator App',
              '3. App & Server calculate: T = floor(UnixTime / 30 seconds)',
              '4. Hash = HMAC-SHA1(Secret, T) -> Truncates to 6-digit number (e.g. 482910)',
              '5. Verification: User enters 482910 -> Matches Server calculation -> 2FA Verified!'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Why TOTP is Superior to SMS OTP:',
            steps: [
              'SMS OTP is vulnerable to SIM Swapping attacks and SS7 telecom interception',
              'TOTP works completely offline without SMS or cellular network dependency',
              'TOTP codes automatically expire after 30 seconds'
            ]
          },
          code: `// ── TOTP MFA ENROLLMENT & VERIFICATION (mfa.service.js) ──
import { generateSecret, generateToken, verifyToken } from 'node-2fa';
import crypto from 'crypto';

// 1. Step 1: Generate MFA Enrollment Secret & QR Code Data
export async function setupMfaEnrollment(userId, userEmail) {
  const secret = generateSecret({
    name: 'CodeMasti LMS',
    account: userEmail
  });

  // Generate 8 Single-Use Backup Recovery Codes
  const backupCodes = Array.from({ length: 8 }, () => crypto.randomBytes(4).toString('hex').toUpperCase());
  const hashedBackupCodes = backupCodes.map(code => crypto.createHash('sha256').update(code).digest('hex'));

  // Save Secret & Hashed Backup Codes in DB (Status: PENDING)
  await db.query(
    'UPDATE users SET mfa_secret = $1, mfa_backup_codes = $2 WHERE id = $3',
    [secret.secret, JSON.stringify(hashedBackupCodes), userId]
  );

  return {
    qrCodeUrl: secret.qr, // Data URL image of QR Code for user to scan
    manualKey: secret.secret,
    backupCodes // Display ONCE to user to save securely!
  };
}

// 2. Step 2: Verify TOTP Code & Activate 2FA
export async function verifyAndEnableMfa(userId, submittedCode) {
  const user = await db.query('SELECT mfa_secret FROM users WHERE id = $1', [userId]);
  const secret = user.rows[0].mfa_secret;

  // Verify 6-digit code (checks window of ±1 step for clock drift)
  const result = verifyToken(secret, submittedCode);

  if (!result || result.delta !== 0) {
    return { success: false, error: 'Invalid or expired 6-digit TOTP code' };
  }

  // Activate MFA permanently
  await db.query('UPDATE users SET is_mfa_enabled = TRUE WHERE id = $1', [userId]);
  return { success: true, message: 'Two-Factor Authentication successfully enabled!' };
}`,
          codeBreakdown: [
            { part: 'generateSecret({ name: "CodeMasti LMS", ... })', label: 'Initializes Base32 cryptographic TOTP seed shared secret and QR code URI', color: '#3b82f6' },
            { part: 'verifyToken(secret, submittedCode)', label: 'Validates 6-digit TOTP code against current 30-second time-slice window', color: '#10b981' },
            { part: 'const backupCodes = Array.from(...)', label: 'Generates single-use emergency recovery codes if user loses physical authenticator device', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Backup recovery codes generate na karna (leaves user permanently locked out if phone is lost)',
            '❌ Time drift (±30s server clock drift) handle na karna'
          ],
          miniChallenge: 'Ek TOTP verification check function likho jo regular code ke sath sath backup recovery code se bhi login allow kare.',
          quiz: {
            question: 'TOTP (Time-Based One-Time Password jaise Google Authenticator) codes calculate karne ke liye kin do cheezon ka use hota hai?',
            options: [
              'Shared Secret Key aur Current 30-second Unix Time slice',
              'User ka phone number aur SMS balance',
              'Browser cookie aur RAM size',
              'GPS location aur battery percentage'
            ],
            answer: 'Shared Secret Key aur Current 30-second Unix Time slice',
            explanation: 'TOTP algorithm (RFC 6238) shared secret key aur current time ($T = \\lfloor \\text{time} / 30 \\rfloor$) ko HMAC hash karke 6-digit code nikaalta hai.'
          },
          summary: [
            'MFA knowledge, possession aur biometrics factors combine karta hai',
            'TOTP offline 30-second rotating cryptographic codes generate karta hai',
            'Hashed emergency backup codes account recovery safeguard provide karte hain'
          ],
          flashcard: {
            q: 'SMS OTP ke mukable TOTP Authenticator apps zyada secure kyun hain?',
            a: 'Kyonki SMS OTP ko SIM Swap attacks ya telecom network sniffing se intercept kiya ja sakta hai, jabki TOTP device ke andar offline mathematically compute hota hai.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 6: AUTHORIZATION: RBAC, ABAC & PERMISSIONS
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 6: Authorization: RBAC, ABAC & Resource Ownership Guards',
      lessons: [
        {
          id: 'auth-rbac-abac-ownership',
          title: 'Role-Based Access Control (RBAC), ABAC & Resource Ownership Guards',
          emoji: '🛡️',
          xpReward: 45,
          badgeName: 'AuthZ Architect',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Authentication pass ho gaya. Ab security uncle pooch rahe hain: \'Andar jaane ki permission hai?\' (403 Forbidden). RBAC aur ABAC authorization models master karenge! 🛡️😎"',
            hint: '💡 Masti Sir: "RBAC role par chalta hai (Student/Mentor/Admin), ABAC attributes par chalta hai (Department + Time + IP + Ownership)!"',
            success: '🎉 Masti Sir: "Enterprise RBAC and granular resource ownership guards active! 🔥"',
            mistake: '😅 Masti Sir: "Client-side UI par button hide karna authorization nahi hai — backend API route par hamesha guard lagayein!"'
          },
          englishDef: 'Authorization controls access to protected resources. **Role-Based Access Control (RBAC)** assigns permissions to coarse roles (`admin`, `instructor`, `student`). **Attribute-Based Access Control (ABAC)** evaluates dynamic attributes (user department, resource classification, time of day, location). **Resource Ownership Guards** enforce tenant and user boundaries (`req.user.id === resource.authorId`).',
          hinglishExplain: 'Authorization decide karta hai ki kaun kya kar sakta hai:\n1. **RBAC**: Roles ke hisab se permission milti hai (e.g. Admin = sab kuch, Instructor = course create, Student = course read).\n2. **ABAC**: Complex rules (e.g. "Sirf finance department ke managers office hours mein invoice approve kar sakte hain").\n3. **Ownership Guard**: User sirf apna data edit kar sakta hai, doosre ka nahi.',
          funnyExample: {
            scenario: 'The Corporate Office Elevator:\n- Floor 1 (Lobby) = Public (Anyone) 🏢\n- Floor 5 (Classrooms) = Student Role (RBAC) 🧑‍🎓\n- Floor 10 (Server Room) = SysAdmin Role (RBAC) 💻\n- Boardroom on Weekend = ABAC Rule: "Only Directors during Business Hours" 🔒',
            punchline: 'RBAC sets role permissions, ABAC evaluates contextual attributes!'
          },
          visualDiagram: {
            title: 'Authorization Middleware Pipeline Architecture',
            nodes: [
              'Request: PATCH /api/v1/courses/101 (With JWT Token)',
              '1. authenticateUser -> Decodes Token -> Attaches req.user',
              '2. requireRoles("instructor", "admin") -> Passes',
              '3. requireCourseOwnership -> Checks if course.instructor_id === req.user.id',
              '4. Controller executes update successfully (200 OK)'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Granular Permission Matrix Architecture:',
            steps: [
              'Define granular permission strings: `courses:read`, `courses:write`, `courses:delete`, `users:manage`',
              'Map roles to permissions arrays in database or memory',
              'Middleware checks: `hasPermission(req.user, \'courses:delete\')`'
            ]
          },
          code: `// ── 1. GRANULAR PERMISSION MATRIX (permissions.config.js) ──
export const ROLE_PERMISSIONS = {
  admin: ['courses:read', 'courses:create', 'courses:edit', 'courses:delete', 'users:manage'],
  instructor: ['courses:read', 'courses:create', 'courses:edit'],
  student: ['courses:read']
};

export function requirePermission(requiredPermission) {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ success: false, error: 'Authentication required' });
    }

    const userPermissions = ROLE_PERMISSIONS[req.user.role] || [];
    if (!userPermissions.includes(requiredPermission)) {
      return res.status(403).json({
        success: false,
        error: \`Forbidden: Missing required permission [\${requiredPermission}]\`
      });
    }

    next();
  };
}

// ── 2. RESOURCE OWNERSHIP GUARD (course.middleware.js) ──
export async function requireCourseOwnership(req, res, next) {
  const courseId = req.params.id;
  const userId = req.user.id;
  const userRole = req.user.role;

  const course = await db.query('SELECT instructor_id FROM courses WHERE id = $1', [courseId]);
  if (course.rows.length === 0) {
    return res.status(404).json({ success: false, error: 'Course not found' });
  }

  const isOwner = course.rows[0].instructor_id === userId;
  const isAdmin = userRole === 'admin';

  if (!isOwner && !isAdmin) {
    return res.status(403).json({ success: false, error: 'You do not have permission to modify this course' });
  }

  next();
}`,
          codeBreakdown: [
            { part: 'ROLE_PERMISSIONS = { admin: [...], ... }', label: 'Declarative permission matrix decoupling authorization capabilities from hardcoded role names', color: '#3b82f6' },
            { part: 'requirePermission("courses:create")', label: 'Granular route middleware verifying specific capability token authorization', color: '#10b981' },
            { part: 'isOwner || isAdmin', label: 'Resource ownership guard preventing IDOR vulnerabilities while allowing superuser admin override', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ IDOR vulnerability: URL parameter `userId` par trust karna instead of verified token `req.user.id`',
            '❌ Authorization checks ko sirf frontend buttons par lagana aur backend API endpoint un-guarded chhod dena'
          ],
          miniChallenge: 'Ek route guard banao jo ensure kare ki sirf course author ya admin hi lesson delete kar sake.',
          quiz: {
            question: 'RBAC (Role-Based Access Control) aur ABAC (Attribute-Based Access Control) mein kya primary difference hota hai?',
            options: [
              'RBAC static user roles par permission deta hai; ABAC dynamic contextual attributes (Department, Time, IP, Ownership) evaluate karta hai',
              'RBAC sirf frontend mein chalta hai',
              'ABAC mein koi password nahi hota',
              'Dono bilkul same hote hain'
            ],
            answer: 'RBAC static user roles par permission deta hai; ABAC dynamic contextual attributes (Department, Time, IP, Ownership) evaluate karta hai',
            explanation: 'RBAC user ke role (admin/student) par based hota hai; ABAC multiple dynamic contextual attributes (user, resource, time, environment) ko evaluate karke fine-grained decisions leta hai.'
          },
          summary: [
            'Authorization verify karti hai ki user ko target action ki permission hai ya nahi',
            'RBAC coarse roles manage karta hai, ABAC dynamic contextual rules evaluate karta hai',
            'Resource ownership checks IDOR vulnerabilities ko neutralize karte hain'
          ],
          flashcard: {
            q: 'IDOR (Insecure Direct Object Reference) se protect karne ke liye kya rule hai?',
            a: 'Kabhi bhi client ke bheje gaye ID par direct update/delete na chalayein; hamesha check karein: `WHERE id = $targetId AND owner_id = $authenticatedUserId`.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 7: FEDERATED IDENTITY: OAUTH 2.0 & OIDC
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 7: Modern Federated Identity: OAuth 2.0, OpenID Connect & PKCE',
      lessons: [
        {
          id: 'auth-oauth2-oidc-pkce',
          title: 'OAuth 2.0 Framework, PKCE Flow, OpenID Connect (OIDC) & Social Logins (Google/GitHub)',
          emoji: '🌐',
          xpReward: 50,
          badgeName: 'OAuth Explorer',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "OAuth 2.0 ko sirf \'Login\' mat samjho — OAuth ek Delegated Authorization Framework hai! Aur OpenID Connect (OIDC) uske upar Identity Layer add karta hai! Google aur GitHub Social Login with PKCE master karenge! 🌐😎"',
            hint: '💡 Masti Sir: "PKCE (Proof Key for Code Exchange) SPAs aur Mobile apps mein Authorization Code injection theft ko 100% prevent karta hai!"',
            success: '🎉 Masti Sir: "OAuth 2.0, OIDC ID Tokens, and PKCE authorization code flow mastered! 🔥"',
            mistake: '😅 Masti Sir: "OAuth Client Secret ko frontend React code mein kabhi leak mat karna — use Authorization Code Flow with PKCE!"'
          },
          englishDef: '**OAuth 2.0 (RFC 6749)** is a delegated authorization framework allowing third-party applications to access HTTP resources on behalf of a resource owner without sharing passwords. **OpenID Connect (OIDC)** extends OAuth 2.0 by adding an identity layer, providing cryptographically signed **ID Tokens** (JWTs containing user profile claims). Modern Single Page Applications (SPAs) and Mobile Apps mandate **Authorization Code Flow with PKCE (RFC 7636)**.',
          hinglishExplain: 'OAuth 2.0 aur OIDC modern web ke sabse popular authentication standards hain:\n1. **OAuth 2.0**: Delegated Access deta hai (e.g. "CodeMasti ko Google Drive se files read karne ki permission do bina Google password diye").\n2. **OpenID Connect (OIDC)**: OAuth ke upar Identity layer add karta hai (e.g. "Login with Google" jisme Google ek `id_token` JWT deta hai jisme user ka naam, email aur photo hoti hai).\n3. **PKCE**: Code Verifier aur Code Challenge use karke public clients (React/Mobile) ko code interception attacks se protect karta hai.',
          funnyExample: {
            scenario: 'The Hotel Valet Parking Key Analogy (OAuth 2.0):\n- You give Valet Driver a specialized Valet Key 🚗🔑\n- Valet Key can start the car and park it (Scoped Access).\n- Valet Key CANNOT open the trunk or glove compartment!\n- You never give your Master House Key to the valet! ✨',
            punchline: 'OAuth 2.0 grants scoped, limited access without sharing master credentials!'
          },
          visualDiagram: {
            title: 'OAuth 2.0 + OIDC Authorization Code Flow with PKCE',
            nodes: [
              '1. React App generates Code Verifier + Code Challenge (SHA256)',
              '2. Redirects user to Google Auth Server with Code Challenge',
              '3. User logs in & grants consent -> Google redirects back with Authorization Code',
              '4. Backend exchanges Auth Code + Code Verifier -> Google verifies match',
              '5. Google returns: Access Token + ID Token (OIDC User Identity JWT)'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Why PKCE is Mandatory for Modern Public Clients:',
            steps: [
              'Public clients (React SPAs, iOS apps) cannot securely hide a client secret in their code',
              'Client generates random high-entropy `code_verifier` (43-128 chars) and hashes it into `code_challenge = BASE64URL(SHA256(code_verifier))`',
              'When exchanging the Authorization Code, client sends the raw `code_verifier`',
              'Auth Server hashes verifier and confirms it matches original challenge, blocking intercepted code attacks'
            ]
          },
          code: `// ── GOOGLE OIDC SOCIAL LOGIN CONTROLLER (oauth.controller.js) ──
import { OAuth2Client } from 'google-auth-library';

const client = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  'https://api.codemasti.com/api/v1/auth/google/callback'
);

// 1. Exchange Authorization Code for Tokens
export async function handleGoogleCallback(req, res, next) {
  try {
    const { code } = req.query; // Auth code returned by Google redirect
    if (!code) {
      return res.status(400).json({ success: false, error: 'Authorization code missing' });
    }

    // Exchange Auth Code for OIDC Tokens
    const { tokens } = await client.getToken(code);
    client.setCredentials(tokens);

    // 2. Verify and Decode Google ID Token (OIDC Identity Claims)
    const ticket = await client.verifyIdToken({
      idToken: tokens.id_token,
      audience: process.env.GOOGLE_CLIENT_ID
    });

    const payload = ticket.getPayload();
    const { email, name, picture, sub: googleId, email_verified } = payload;

    if (!email_verified) {
      return res.status(400).json({ success: false, error: 'Google email is not verified' });
    }

    // 3. Upsert User Account & Account Linking in Database
    let user = await db.query('SELECT id, email, role FROM users WHERE email = $1', [email]);

    if (user.rows.length === 0) {
      // Auto-provision new user
      const newUser = await db.query(
        'INSERT INTO users (email, username, is_verified, avatar_url, google_id) VALUES ($1, $2, TRUE, $3, $4) RETURNING id, email, role',
        [email, name, picture, googleId]
      );
      user = newUser;
    } else {
      // Link Google ID if existing email account
      await db.query('UPDATE users SET google_id = $1, is_verified = TRUE WHERE id = $2', [googleId, user.rows[0].id]);
    }

    // 4. Issue CodeMasti Application Session / JWT Tokens
    const appTokens = generateTokens(user.rows[0]);
    res.json({ success: true, ...appTokens });
  } catch (error) {
    next(error);
  }
}`,
          codeBreakdown: [
            { part: 'client.verifyIdToken({ idToken, audience })', label: 'Cryptographically verifies Google OIDC digital signature and confirms audience matches client ID', color: '#3b82f6' },
            { part: 'sub: googleId, email_verified', label: 'Extracts verified OIDC claims preventing unverified social email impersonation', color: '#10b981' },
            { part: 'UPDATE users SET google_id = $1 ...', label: 'Secure account linking associating federated identity provider credentials to local user entity', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ OAuth 2.0 ko bina OIDC ke Authentication ke liye use karna (OAuth gives Access Token for APIs; OIDC gives ID Token for Identity)',
            '❌ Frontend se aane wale raw Google tokens ko backend par verify kiye bina trust kar lena'
          ],
          miniChallenge: 'Explain karo: "OAuth 2.0 Access Token aur OpenID Connect ID Token mein kya difference hai?"',
          quiz: {
            question: 'OAuth 2.0 framework ke upar "User Identity" (User profile, name, email) provide karne ke liye kaunsa protocol layer use hota hai?',
            options: ['OpenID Connect (OIDC)', 'SAML 1.0', 'FTP', 'WebSockets'],
            answer: 'OpenID Connect (OIDC)',
            explanation: 'OpenID Connect (OIDC) OAuth 2.0 ke upar ek dedicated Identity Layer hai jo cryptographically signed `ID Token` (JWT) ke through user identity share karta hai.'
          },
          summary: [
            'OAuth 2.0 delegated authorization provide karta hai',
            'OpenID Connect (OIDC) identity layer aur ID Tokens introduce karta hai',
            'PKCE public SPAs aur Mobile apps ko code interception attacks se protect karta hai'
          ],
          flashcard: {
            q: 'OAuth PKCE (Proof Key for Code Exchange) kyun zaroori hai?',
            a: 'Kyonki frontend React ya Mobile apps mein Client Secret safely chhipaya nahi ja sakta; PKCE dynamic runtime secret (Code Verifier) use karke code interception attacks ko eliminate karta hai.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 8: THREAT MODELING & ATTACK DEFENSES
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 8: Threat Modeling & Web Attacks Defense (CSRF, XSS, CORS & Headers)',
      lessons: [
        {
          id: 'auth-web-attacks-csrf-cors-xss',
          title: 'Defending Authentication: CSRF Tokens, XSS Token Mitigations & Security Headers',
          emoji: '🛡️',
          xpReward: 45,
          badgeName: 'Security Defender',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Authentication banayi par XSS aur CSRF se nahi bachayi toh hacker bina password jaane aapka session uda le jayega! SameSite=Strict cookies, Anti-CSRF tokens, aur Content Security Policy (CSP) headers lagao! 🛡️💻😎"',
            hint: '💡 Masti Sir: "CSRF attack tab hota hai jab victim kisi malicious site par click karta hai aur browser authenticated cookies ke sath backend ko request bhej deta hai!"',
            success: '🎉 Masti Sir: "Web application attack defenses and HTTP security headers active! 🔥"',
            mistake: '😅 Masti Sir: "CORS ko security boundary mat samajhna — CORS sirf browser ko restrict karta hai, curl ya backend scripts ko nahi!"'
          },
          englishDef: 'Securing authentication requires defending against the OWASP Top 10 web vulnerabilities. **Cross-Site Request Forgery (CSRF)** forces an authenticated browser to execute unwanted actions; mitigated via `SameSite=Strict/Lax` cookies, Custom Request Headers (`X-Requested-With`), and Double-Submit Anti-CSRF Tokens. **Cross-Site Scripting (XSS)** is mitigated by `HttpOnly` cookies, HTML output encoding, and strict `Content-Security-Policy (CSP)` headers.',
          hinglishExplain: 'Web security mein 3 main attacks hote hain:\n1. **CSRF (Cross-Site Request Forgery)**: Hacker aapko ek fake website ka link bhejta hai. Jab aap click karte ho toh browser aapki login cookie ke sath backend par `POST /transfer-money` request bhej deta hai. Isse `SameSite=Strict` cookie aur CSRF Tokens rokte hain.\n2. **XSS (Cross-Site Scripting)**: Hacker website par malicious JavaScript inject karta hai jo tokens chori karti hai. `HttpOnly` cookies se JS tokens nahi padh sakti.\n3. **Security Headers**: Helmet se CSP aur X-Frame-Options headers lagte hain.',
          funnyExample: {
            scenario: 'The Forged Bank Transfer (CSRF):\n- You are logged into your Bank (`mybank.com`) 🏦\n- You visit an evil funny cat website (`evilcat.com`) 🐱\n- Evil site has hidden image tag: `<img src="https://mybank.com/transfer?amount=50000&to=hacker">`\n- Browser sends bank cookie automatically! 😱\n- Defense: `SameSite=Strict` blocks cookie on cross-site requests! Transfer Blocked! 🛡️✨',
            punchline: 'SameSite cookies and CSRF tokens protect your authenticated sessions!'
          },
          visualDiagram: {
            title: 'CSRF Attack Execution vs SameSite Cookie Defense',
            nodes: [
              'Victim logged into Bank (Cookie present)',
              'Victim clicks link on Malicious Site (evil.com)',
              'Malicious site submits form to bank.com/transfer',
              'With SameSite=Strict: Browser REFUSES to attach bank.com cookie on cross-site link -> Attack Fails!'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Essential HTTP Security Headers:',
            steps: [
              '`Content-Security-Policy: default-src \'self\'`: Restricts scripts only to trusted first-party origins',
              '`Strict-Transport-Security: max-age=31536000; includeSubDomains`: Forces all future connections over HTTPS (HSTS)',
              '`X-Frame-Options: DENY`: Prevents website from being loaded inside hidden iframes (Clickjacking defense)',
              '`X-Content-Type-Options: nosniff`: Prevents MIME-type sniffing'
            ]
          },
          code: `// ── HARDENED SECURITY HEADERS & ANTI-CSRF SETUP ──
import express from 'express';
import helmet from 'helmet';
import csrf from 'csurf';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cookieParser());
app.use(express.json());

// 1. Helmet Security Headers
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "https://cdn.codemasti.com"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        imgSrc: ["'self'", "data:", "https://cdn.codemasti.com"],
        objectSrc: ["'none'"],
        frameAncestors: ["'none'"] // Clickjacking defense
      }
    },
    hsts: {
      maxAge: 31536000, // 1 Year HSTS
      includeSubDomains: true,
      preload: true
    }
  })
);

// 2. Anti-CSRF Token Middleware for Cookie-based Sessions
const csrfProtection = csrf({ cookie: { httpOnly: true, sameSite: 'strict' } });

// Route to fetch CSRF Token for Frontend forms
app.get('/api/v1/csrf-token', csrfProtection, (req, res) => {
  res.json({ csrfToken: req.csrfToken() });
});

// Protected State-Changing Route requiring valid CSRF Token
app.post('/api/v1/account/transfer', csrfProtection, (req, res) => {
  res.json({ success: true, message: 'Transfer processed securely' });
});`,
          codeBreakdown: [
            { part: "frameAncestors: ['none']", label: 'Blocks website from being embedded inside unauthorized iframes preventing Clickjacking attacks', color: '#3b82f6' },
            { part: 'hsts: { maxAge: 31536000 }', label: 'HTTP Strict Transport Security forcing browsers to strictly use HTTPS encrypted connections', color: '#10b981' },
            { part: 'csrfProtection = csrf(...)', label: 'Enforces cryptographic double-submit anti-CSRF token verification on state-changing requests', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ State-changing operations (jaise money transfer ya account delete) ko `GET` request par allow karna (GET must always be Safe & Idempotent!)',
            '❌ Plain HTTP use karna in production (credentials transmitted in plaintext over Wi-Fi)'
          ],
          miniChallenge: 'Helmet CSP configuration setup karo jo third-party unauthorized scripts ko block kare.',
          quiz: {
            question: 'Cross-Site Request Forgery (CSRF) attack ko modern web browsers mein neutralize karne ke liye cookie par kaunsa attribute lagana sabse effective hai?',
            options: ['SameSite=Strict (or Lax)', 'Max-Age=0', 'Domain=*', 'Path=/'],
            answer: 'SameSite=Strict (or Lax)',
            explanation: '`SameSite=Strict` browser ko instruct karta hai ki third-party cross-site requests par authentication cookies ko block kare, eliminating traditional CSRF attacks.'
          },
          summary: [
            'CSRF attacks ko SameSite cookies aur Anti-CSRF tokens se mitigate karein',
            'XSS token theft ko HttpOnly cookies aur Content Security Policy (CSP) se rokein',
            'HSTS aur HTTPS connection encryption security baseline hain'
          ],
          flashcard: {
            q: 'HSTS (`Strict-Transport-Security`) header kya karta hai?',
            a: 'Ye browser ko order deta hai ki agle 1 saal tak is domain par sirf aur sirf HTTPS par hi connect kare, blocking SSL Stripping man-in-the-middle downgrade attacks.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 9: ABUSE PREVENTION & SECRETS MANAGEMENT
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 9: Abuse Prevention: Rate Limiting, Brute Force & Audit Logging',
      lessons: [
        {
          id: 'auth-rate-limiting-brute-force',
          title: 'Authentication Rate Limiting, Credential Stuffing Defenses & Security Audit Logs',
          emoji: '⏳',
          xpReward: 45,
          badgeName: 'Audit Guardian',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Hacker ne dictionary attack chalaya aur 10,000 passwords try kiye? Rate Limiter 5 attempts ke baad gate lock kar dega! Saath hi Security Audit Log mein record karo: \'Who, What, When, and IP Address!\' ⏳📋😎"',
            hint: '💡 Masti Sir: "Permanent account lock mat lagana varna hacker sabhi users ke accounts intentionally lock karke Denial-of-Service kar dega — progressive delays aur temporary lockouts use karo!"',
            success: '🎉 Masti Sir: "Brute-force protection and structured audit logging active! 🔥"',
            mistake: '😅 Masti Sir: "Audit logs mein passwords, OTPs ya raw JWT tokens kabhi print mat karna!"'
          },
          englishDef: 'Authentication endpoints require specialized abuse defenses: **Rate Limiting** with sliding windows (max 5 failed attempts per 15 mins), **Credential Stuffing Detection** (monitoring breached password dumps & repeated login failures across IPs), **Progressive Delays** (exponential backoff), and **Structured Security Audit Logging** tracking authentication events (`LOGIN_SUCCESS`, `LOGIN_FAILED`, `MFA_CHALLENGE`, `PASSWORD_RESET`).',
          hinglishExplain: 'Authentication security mein abuse prevention ke 3 pillars hote hain:\n1. **Brute-Force & Credential Stuffing Defense**: 5 failed login attempts ke baad account ko 15 minutes ke liye temporary throttle karna.\n2. **Avoid Permanent Lockout**: Permanent account lock nahi karte kyonki attacker competitors ke accounts lock kar sakta hai (DoS).\n3. **Security Audit Logs**: Har security event (Login, Password change, 2FA setup) ko database audit table mein store karna (Who, Action, Timestamp, IP Address, Device).',
          funnyExample: {
            scenario: 'The Bank ATM Security Camera (Audit Logs):\n- 10:00 AM: Kabir logged in from Chrome / Mumbai IP (LOGIN_SUCCESS) 📷\n- 10:05 AM: Password updated (PASSWORD_CHANGED) 📷\n- 10:06 AM: 5 wrong attempts from Russian IP (BRUTE_FORCE_THROTTLED) 🚨\n- Complete audit trail preserved for legal compliance & security analysis!',
            punchline: 'Security audit logs provide an unalterable black-box flight recorder for your system!'
          },
          visualDiagram: {
            title: 'Authentication Abuse Defense & Audit Trail',
            nodes: [
              'Login Request -> Rate Limiter Check (< 5 failed attempts)',
              'Validate Password Hash -> Success -> Log: LOGIN_SUCCESS (IP, UserAgent, Time)',
              'Failed Password -> Increment Failed Counter -> Log: LOGIN_FAILED',
              'Failed Counter >= 5 -> Throttle IP & User for 15 minutes (HTTP 429)'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'What to Log vs What NEVER to Log:',
            steps: [
              'DO LOG: Event type (LOGIN_SUCCESS/FAILED), User ID, Timestamp, IP address, User-Agent, Session ID hash',
              'NEVER LOG: Raw passwords, OTP codes, Raw JWT secret tokens, Credit card numbers (PCI/GDPR Violation!)'
            ]
          },
          code: `// ── SECURITY AUDIT LOGGING SERVICE (audit.service.js) ──
export async function logSecurityEvent({ userId, action, status, ipAddress, userAgent, metadata = {} }) {
  try {
    await db.query(
      \`INSERT INTO security_audit_logs (
        user_id, action_type, status, ip_address, user_agent, metadata, created_at
      ) VALUES ($1, $2, $3, $4, $5, $6, NOW())\`,
      [
        userId || null,
        action, // e.g. 'LOGIN_SUCCESS', 'LOGIN_FAILED', 'PASSWORD_RESET'
        status, // 'SUCCESS', 'FAILURE', 'BLOCKED'
        ipAddress,
        userAgent,
        JSON.stringify(metadata)
      ]
    );
  } catch (err) {
    console.error('[AUDIT LOG ERROR] Failed to persist audit record:', err.message);
  }
}

// ── LOGIN ROUTE WITH AUDIT LOGGING & RATE LIMITING ──
app.post('/api/v1/auth/login', loginBruteForceLimiter, async (req, res, next) => {
  const { email, password } = req.body;
  const ipAddress = req.ip;
  const userAgent = req.headers['user-agent'];

  const user = await findUserByEmail(email);

  if (!user || !(await verifyUserPassword(password, user.password_hash))) {
    // Record Security Failure in Audit Trail
    await logSecurityEvent({
      userId: user?.id,
      action: 'LOGIN_FAILED',
      status: 'FAILURE',
      ipAddress,
      userAgent,
      metadata: { attemptedEmail: email }
    });

    return res.status(401).json({ success: false, error: 'Invalid email or password' });
  }

  // Record Security Success in Audit Trail
  await logSecurityEvent({
    userId: user.id,
    action: 'LOGIN_SUCCESS',
    status: 'SUCCESS',
    ipAddress,
    userAgent
  });

  const tokens = generateTokens(user);
  res.json({ success: true, ...tokens });
});`,
          codeBreakdown: [
            { part: 'logSecurityEvent({ action, status, ipAddress })', label: 'Persists structured immutable security audit trail for forensic compliance', color: '#3b82f6' },
            { part: 'metadata: { attemptedEmail: email }', label: 'Captures forensic contextual telemetry without ever storing attempted plaintext passwords', color: '#10b981' },
            { part: 'loginBruteForceLimiter', label: 'Enforces strict sliding window throttle preventing automated dictionary attacks', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Security audit logs mein user ka plain password ya OTP log kar dena',
            '❌ Permanent account lockouts enable karna (attackers abuse this to lock legitimate user accounts)'
          ],
          miniChallenge: 'Ek audit query likho jo kisi specific user ke pichle 30 dino ke failed login attempts count kare.',
          quiz: {
            question: 'Brute-force attacks se bachne ke liye permanent account lockout ki jagah temporary progressive rate limiting kyun recommend ki jaati hai?',
            options: [
              'Kyonki permanent lockout ko attacker abuse karke legitimate users ke accounts intentionally lock kar sakta hai (Denial of Service)',
              'Kyonki permanent lockout se server band ho jata hai',
              'Kyonki rate limiting free hoti hai',
              'Kyonki permanent lockout SQL mein allowed nahi hai'
            ],
            answer: 'Kyonki permanent lockout ko attacker abuse karke legitimate users ke accounts intentionally lock kar sakta hai (Denial of Service)',
            explanation: 'Agar permanent lockout ho, toh attacker target victim ka email jaan kar 5 baar galat password enter karke victim ka account permanently block karwa sakta hai (Account Denial of Service).'
          },
          summary: [
            'Sliding window rate limiting brute-force aur credential stuffing rokti hai',
            'Progressive delays DoS lockout vulnerabilities ko eliminate karte hain',
            'Security audit logs compliance, forensics aur incident response empower karte hain'
          ],
          flashcard: {
            q: 'Credential Stuffing Attack kya hota hai?',
            a: 'Jab hackers doosri websites se leak hue username aur password ke database dumps ko automated bots ke through aapki website par test karte hain.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 10: MULTI-DEVICE SESSIONS & SUSPICIOUS LOGINS
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 10: Multi-Device Sessions & Suspicious Login Detection',
      lessons: [
        {
          id: 'auth-device-sessions-suspicious',
          title: 'Multi-Device Session Management, Suspicious Logins & "Logout All Devices"',
          emoji: '📱',
          xpReward: 50,
          badgeName: 'Session Architect',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Netflix aur Google jaisa \'Logged-in Devices\' dashboard banana hai? Jahan user dekh sake ki uska account Mac, iPhone, ya Windows PC par kahan active hai aur 1 click mein \'Logout All Other Devices\' kar sake! 📱💻😎"',
            hint: '💡 Masti Sir: "Suspicious login detection: agar user 10 minute pehle Delhi mein tha aur abhi New York se login request aayi (Impossible Travel) — toh instant 2FA trigger karo!"',
            success: '🎉 Masti Sir: "Multi-device session revocation and suspicious login detection mastered! 🔥"',
            mistake: '😅 Masti Sir: "Session revoke karte waqt current active device session ko delete mat karna agar user \'Logout OTHER Devices\' click kare!"'
          },
          englishDef: '**Multi-Device Session Management** tracks active user sessions across browsers and devices (`user_sessions` table with User-Agent, IP, and Last Active timestamp). Users can view active sessions and trigger selective revocation or **"Logout All Other Devices"**. **Suspicious Login Detection** analyzes behavioral anomalies: New Device/Browser, Unusual Geo-IP Location, and **Impossible Travel** (physically impossible geographic jumps within short time deltas).',
          hinglishExplain: 'Modern applications mein user ke multiple devices par sessions active hote hain:\n1. **Logged-in Devices Dashboard**: User dekh sakta hai ki uska account Chrome on Mac ya Safari on iPhone par kab se active hai.\n2. **Logout All Devices**: Agar phone kho jaye ya account compromise ho jaye, toh user 1 click mein sabhi doosre devices ko revoke kar sakta hai.\n3. **Suspicious Login Detection**: Agar user 5 minute pehle Mumbai se login tha aur abhi London se login request aati hai (Impossible Travel), toh system password accept karne ke bawajood email alert ya mandatory 2FA trigger kar deta hai.',
          funnyExample: {
            scenario: 'The Impossible Teleportation:\n- 2:00 PM: Kabir logs in from Office in Delhi 🇮🇳\n- 2:05 PM: Login attempt with Kabir\'s password from San Francisco, USA 🇺🇸✈️\n- Physics Check: Can Kabir travel 12,000 km in 5 minutes? NO! 🚀❌\n- Security Engine: Flagged as "Impossible Travel" -> Blocks session & sends emergency email alert! 🛡️',
            punchline: 'Impossible Travel algorithms detect compromised accounts instantly!'
          },
          visualDiagram: {
            title: 'Multi-Device Session Management Architecture',
            nodes: [
              'User Account #101',
              '├── Session 1: Chrome on macOS | Delhi, India | IP: 103.21.x.x | Active Now (Current)',
              '├── Session 2: Safari on iPhone | Mumbai, India | IP: 49.36.x.x | Last active: 2 hours ago',
              'Action: "Revoke Session 2" -> Deletes Session 2 in DB/Redis -> iPhone logged out instantly!'
            ],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'Impossible Travel Calculation Math:',
            steps: [
              'Calculate geographic distance between previous login coordinates and new login coordinates (Haversine formula)',
              'Calculate time delta: $\\Delta t = \\text{Time}_{\\text{new}} - \\text{Time}_{\\text{prev}}$',
              'Calculate required speed: $V = \\text{Distance} / \\Delta t$',
              'If $V > 900\\text{ km/h}$ (Commercial Airplane Speed), trigger security challenge (Impossible Travel anomaly)'
            ]
          },
          code: `-- ── DATABASE SCHEMA FOR MULTI-DEVICE SESSION MANAGEMENT ──
CREATE TABLE user_devices (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  device_name VARCHAR(100) NOT NULL, -- e.g. 'Chrome on macOS'
  ip_address INET NOT NULL,
  location_city VARCHAR(50),
  location_country VARCHAR(50),
  last_active_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
  created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- ── REVOKE ALL OTHER SESSIONS CONTROLLER ──
export async function logoutAllOtherDevices(req, res, next) {
  try {
    const userId = req.user.id;
    const currentSessionId = req.sessionId; // ID of active device session

    // Delete all sessions belonging to user EXCEPT the current session
    await db.query(
      'DELETE FROM user_devices WHERE user_id = $1 AND id != $2',
      [userId, currentSessionId]
    );

    // Also revoke associated refresh token families in Redis / DB
    await revokeOtherRefreshTokens(userId, currentSessionId);

    res.json({
      success: true,
      message: 'All other device sessions have been successfully logged out.'
    });
  } catch (error) {
    next(error);
  }
}`,
          codeBreakdown: [
            { part: 'user_devices (user_id, device_name, ip_address, ...)', label: 'Device telemetry entity mapping active sessions to hardware and geographic context', color: '#3b82f6' },
            { part: 'WHERE user_id = $1 AND id != $2', label: 'Selective revocation terminating all remote sessions while preserving current user session context', color: '#10b981' },
            { part: 'revokeOtherRefreshTokens(...)', label: 'Synchronously cleans up database and Redis tokens ensuring immediate client disconnect', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ "Logout other devices" karte waqt current active session ko bhi delete kar dena (logs user out of their own screen)',
            '❌ User-Agent string ko bina parsing ke raw format mein display karna (parse into friendly "Chrome on macOS")'
          ],
          miniChallenge: 'Ek API endpoint likho `GET /api/v1/account/devices` jo user ke saare active devices list kare with "isCurrentDevice" boolean flag.',
          quiz: {
            question: 'Security mein "Impossible Travel" anomaly detection ka kya matlab hota hai?',
            options: [
              'Jab do consecutive login attempts ke beech ka physical distance aur time delta commercial travel speed (>900 km/h) se zyada ho',
              'Jab user flight mode on kare',
              'Jab internet slow ho',
              'Jab password galat ho'
            ],
            answer: 'Jab do consecutive login attempts ke beech ka physical distance aur time delta commercial travel speed (>900 km/h) se zyada ho',
            explanation: 'Impossible Travel tab detect hota hai jab geographical locations mein itna bada jump ho jo physically possible na ho (jaise 10 minute mein India se USA login), indicating stolen credentials.'
          },
          summary: [
            'Multi-device session dashboards users ko centralized security control dete hain',
            'Selective revocation compromised remote devices ko instant disconnect karti hai',
            'Impossible travel aur anomalous device detection proactive defense provide karte hain'
          ],
          flashcard: {
            q: 'User-Agent parsing se friendly device name kaise banta hai?',
            a: '`ua-parser-js` jaisi libraries raw User-Agent header ko parse karke Browser (`Chrome 120`), OS (`macOS 14.2`), aur Device Type (`Desktop/Mobile`) mein convert karti hain.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 11: SECURITY TESTING & DEBUGGING LAB
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 11: Defensive Security Testing & Broken Auth Debugging Lab',
      lessons: [
        {
          id: 'auth-security-testing-debugging',
          title: 'Defensive Security Testing, Broken Auth Vulnerabilities & Step-by-Step Fixes',
          emoji: '🧪',
          xpReward: 45,
          badgeName: 'Security QA',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Authentication code likh liya? Ab use tod kar dekho! Expired token submit karo, bina token ke admin route hit karo, aur password reset token 2 baar chalao! Agar system ne rok diya toh aapka code Bulletproof hai! 🧪🛡️😎"',
            hint: '💡 Masti Sir: "Automated Supertest integration tests se AuthN bypass, token expiry, aur IDOR vulnerabilities ko CI/CD pipeline mein catch karo!"',
            success: '🎉 Masti Sir: "Defensive security test suite and vulnerability fixes mastered! 🔥"',
            mistake: '😅 Masti Sir: "Security testing karte waqt real production credentials kabhi use mat karein — use isolated test mock databases!"'
          },
          englishDef: 'Defensive Security Testing systematically audits authentication mechanisms against common implementation vulnerabilities: Authentication Bypass, Broken Access Control (IDOR), Expired/Forged Token acceptance, Reusable Password Reset Tokens, Missing Secure/HttpOnly Cookie Flags, and Insecure CORS configurations. Automated integration test suites verify security boundaries on every build.',
          hinglishExplain: 'Security Testing mein hum intentional broken scenarios test karte hain:\n1. Kya expired JWT token accept ho raha hai? (Should fail with 401).\n2. Kya bina token ke admin route khul raha hai? (Should fail with 401).\n3. Kya Student user doosre student ka profile delete kar sakta hai? (Should fail with 403).\n4. Kya Password Reset token 2 baar use ho sakta hai? (Should fail with 400).\nSupertest ke through in sabhi test cases ko automated banaya jata hai.',
          funnyExample: {
            scenario: 'The Vault Stress Testing:\n- Test 1 (Expired Key): Try yesterday\'s expired key 🔑⌛ -> Bouncer rejects with 401!\n- Test 2 (Fake Hologram): Try forged signature 🎟️❌ -> Bouncer rejects with 403!\n- Test 3 (Reused Ticket): Try already punched ticket 🎫❌ -> Bouncer rejects with 400!\n- Vault passes all security stress tests with 100% score! 🛡️✨',
            punchline: 'Automated security testing proves your defense holds under attack!'
          },
          visualDiagram: {
            title: 'Defensive Security Audit Test Matrix',
            nodes: [
              'Security Test Suite Execution',
              '├── Test 1: POST /courses without Authorization header -> Expects 401 Unauthorized',
              '├── Test 2: POST /courses with Expired Token -> Expects 401 TOKEN_EXPIRED',
              '├── Test 3: DELETE /courses/10 with Student Token -> Expects 403 Forbidden',
              '└── Test 4: Reusing Password Reset Token -> Expects 400 Token Already Used'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Top 5 Common Authentication Implementation Bugs:',
            steps: [
              'Bug 1: Forgetting to verify `is_used = FALSE` on password reset tokens (Allows replay attacks)',
              'Bug 2: Missing `algorithm` verification in `jwt.verify` (Vulnerable to algorithm confusion)',
              'Bug 3: Trusting client-provided `userId` in `req.body` instead of verified `req.user.id` (IDOR)',
              'Bug 4: Omitting `HttpOnly` flag on cookies (Vulnerable to XSS theft)',
              'Bug 5: Not revoking refresh tokens upon password reset/change'
            ]
          },
          code: `// ── AUTOMATED DEFENSIVE SECURITY TEST SUITE (auth.security.test.js) ──
import request from 'supertest';
import { app } from '../app.js';
import jwt from 'jsonwebtoken';

describe('Defensive Authentication Security Audit Suite', () => {
  // 1. Test: Expired Token Rejection
  it('should strictly reject expired access tokens with 401 status', async () => {
    // Forge an expired token (expired 1 hour ago)
    const expiredToken = jwt.sign(
      { sub: 'user_123', role: 'student' },
      process.env.JWT_SECRET || 'ProductionSuperSecretKey2026!',
      { expiresIn: '-1h' }
    );

    const response = await request(app)
      .get('/api/v1/users/profile')
      .set('Authorization', \`Bearer \${expiredToken}\`);

    expect(response.status).toBe(401);
    expect(response.body.code).toBe('TOKEN_EXPIRED');
  });

  // 2. Test: Tampered Token Signature Rejection
  it('should reject tokens with tampered signature with 403 status', async () => {
    const validToken = jwt.sign(
      { sub: 'user_123', role: 'student' },
      'WrongSecretKeyHere!'
    );

    const response = await request(app)
      .get('/api/v1/users/profile')
      .set('Authorization', \`Bearer \${validToken}\`);

    expect(response.status).toBe(403);
  });

  // 3. Test: IDOR Protection (Prevent editing other users)
  it('should prevent standard student from modifying another student profile', async () => {
    const attackerToken = jwt.sign(
      { sub: 'attacker_uuid', role: 'student' },
      process.env.JWT_SECRET || 'ProductionSuperSecretKey2026!',
      { expiresIn: '15m' }
    );

    const response = await request(app)
      .patch('/api/v1/users/victim_uuid')
      .set('Authorization', \`Bearer \${attackerToken}\`)
      .send({ email: 'hacked@victim.com' });

    expect(response.status).toBe(403);
  });
});`,
          codeBreakdown: [
            { part: "expiresIn: '-1h'", label: 'Generates intentionally expired cryptographic token to verify rejection handling in middleware', color: '#3b82f6' },
            { part: 'expect(response.status).toBe(401)', label: 'Test assertion verifying expired tokens cannot access protected private profile routes', color: '#10b981' },
            { part: 'expect(response.status).toBe(403)', label: 'Test assertion validating IDOR ownership guard blocks cross-account modifications', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Only testing happy path scenarios (always write negative tests for 401, 403, and expired tokens!)',
            '❌ Test cases mein mock secrets aur production secrets ko mix kar dena'
          ],
          miniChallenge: 'Ek Supertest test case likho jo verify kare ki bina token ke `/api/admin/users` hit karne par 401 Unauthorized return hota hai.',
          quiz: {
            question: 'Defensive security testing mein IDOR (Insecure Direct Object Reference) vulnerability check karne ke liye kaisa test case likhna chahiye?',
            options: [
              'User A ke token ke sath User B ke resource ID ko modify karne ki request bhejna aur verify karna ki 403 Forbidden return ho',
              'Valid password se login karna',
              'Database tables count karna',
              'CSS layout test karna'
            ],
            answer: 'User A ke token ke sath User B ke resource ID ko modify karne ki request bhejna aur verify karna ki 403 Forbidden return ho',
            explanation: 'IDOR test case verify karta hai ki logged-in User A kisi doosre User B ke record ID ko modify ya delete na kar sake (enforcing 403 Forbidden).'
          },
          summary: [
            'Defensive security testing authentication edge cases validate karti hai',
            'Negative test suites (expired token, wrong signature, IDOR attempt) security guarantees prove karte hain',
            'CI/CD integration regression security flaws ko deploy hone se rokti hai'
          ],
          flashcard: {
            q: 'Negative Testing kya hoti hai?',
            a: 'System ko intentionally galat data (expired token, tampered signature, unauthorized role) bhej kar ye check karna ki system gracefully aur securely error (401/403) throw karta hai ya nahi.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 12: INDUSTRY CAPSTONE PROJECT
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 12: Industry Capstone: Complete CodeMasti Production Auth System',
      lessons: [
        {
          id: 'auth-projects-capstone-system',
          title: 'Full Stack Capstone: Enterprise CodeMasti Production Authentication Architecture',
          emoji: '🏆',
          xpReward: 50,
          badgeName: 'Identity Architect',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Ab tak jo kuch seekha — bcrypt Hashing, Email Verification, Rate Limiting, Dual-Token Rotation with HttpOnly Cookies, TOTP 2FA, Multi-Device Revocation, RBAC Guards, aur Security Audit Logs — sab kuch jod kar ek Production-Grade Auth System banayenge! 🏆😎"',
            hint: '💡 Masti Sir: "Student, Instructor, aur Admin roles ke sath secure session lifecycle active rahega!"',
            success: '🎉 Masti Sir: "Outstanding achievement! You have engineered a production-grade enterprise Authentication Architecture! 🚀"',
            mistake: '😅 Masti Sir: "Production deployment checklist verify karein: HTTPS mandatory, secure cookies active, secrets in .env!"'
          },
          englishDef: 'The final Capstone Project synthesizes all authentication and security concepts into a unified enterprise authentication architecture for the CodeMasti platform. Features span Salted Registration, Single-Use Email Verification, Brute-Force Rate Limiting, Dual-Token Rotation with HttpOnly cookies, TOTP 2FA Authenticator support, Logged-in Devices management with selective revocation, RBAC route guards, and Immutable Security Audit Logging.',
          hinglishExplain: 'Is Capstone Project mein hum CodeMasti platform ka complete production Authentication & Identity system architect karenge. Isme Registration, Email Verification, Login with Rate Limiting, Dual-Token Rotation in HttpOnly cookies, TOTP Authenticator 2FA, Multi-Device Session Management, RBAC authorization guards, aur Security Audit Logging shamil hain.',
          funnyExample: {
            scenario: 'The Enterprise Security Fortress:\n- 1,000,000 Registered Learners 🧑‍🎓\n- Zero Plaintext Password Storage via bcrypt 🛡️\n- Zero Token Theft via HttpOnly SameSite Cookies 🍪\n- Zero Stolen Session Breaches via Token Rotation & 2FA 📱\n- Complete Immutable Security Audit Logging 📊',
            punchline: 'From beginner to certified enterprise Identity Architect!'
          },
          visualDiagram: {
            title: 'Complete CodeMasti Production Authentication Architecture',
            nodes: [
              'Client (React Web / Mobile)',
              'Reverse Proxy + Helmet + CORS + Rate Limiter',
              'Authentication Gateway (/api/v1/auth/...)',
              '├── /register & /verify-email (Single-use tokens)',
              '├── /login & /refresh (Dual-token rotation + HttpOnly cookies)',
              '├── /mfa/setup & /mfa/verify (TOTP RFC 6238)',
              '├── /devices (Multi-device session revocation)',
              '└── PostgreSQL / Redis (Users, Refresh Tokens, Audit Logs)'
            ],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'Production Hardening Checklist:',
            steps: [
              '1. Enforce HTTPS across all endpoints (`Strict-Transport-Security`)',
              '2. Set `HttpOnly`, `Secure`, and `SameSite=Strict` on all auth cookies',
              '3. Store secrets in environment variables / vault, never committed to git',
              '4. Implement automated rate limiting on login, reset, and MFA endpoints'
            ]
          },
          code: `// ═══════════════════════════════════════════════════════
// CODEMASTI PRODUCTION AUTHENTICATION SERVER (auth.server.js)
// ═══════════════════════════════════════════════════════
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { loginBruteForceLimiter, globalApiLimiter } from './middleware/rateLimit.js';
import { handleRegistration } from './controllers/register.controller.js';
import { handleTokenRefresh } from './controllers/refresh.controller.js';
import { setupMfaEnrollment, verifyAndEnableMfa } from './controllers/mfa.controller.js';
import { logoutAllOtherDevices } from './controllers/devices.controller.js';
import { verifyAccessTokenMiddleware } from './middleware/jwt.middleware.js';
import { requireRoles } from './middleware/rbac.middleware.js';

const app = express();

// 1. Security Baseline Pipeline
app.use(helmet());
app.use(cors({ origin: 'https://codemasti.com', credentials: true }));
app.use(cookieParser());
app.use(express.json({ limit: '100kb' }));
app.use('/api/', globalApiLimiter);

// 2. Public Authentication Endpoints
app.post('/api/v1/auth/register', handleRegistration);
app.post('/api/v1/auth/refresh', handleTokenRefresh);

// 3. Protected User Endpoints (Requires Valid Access Token)
app.use(verifyAccessTokenMiddleware);

app.post('/api/v1/auth/mfa/setup', (req, res, next) => setupMfaEnrollment(req.user.id, req.user.email));
app.post('/api/v1/auth/mfa/verify', (req, res, next) => verifyAndEnableMfa(req.user.id, req.body.code));
app.post('/api/v1/auth/devices/logout-others', logoutAllOtherDevices);

// 4. Role-Guarded Admin Endpoints
app.get('/api/v1/admin/audit-logs', requireRoles('admin'), async (req, res) => {
  const logs = await db.query('SELECT * FROM security_audit_logs ORDER BY created_at DESC LIMIT 100');
  res.json({ success: true, data: logs.rows });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(\`🔒 CodeMasti Production Auth Service running on port \${PORT}\`);
});`,
          codeBreakdown: [
            { part: 'app.use(helmet()); app.use(cors(...));', label: 'Security headers and origin whitelisting protecting against XSS, Clickjacking and CORS leaks', color: '#3b82f6' },
            { part: 'app.use(verifyAccessTokenMiddleware)', label: 'JWT bearer authentication boundary establishing verified user identity context', color: '#10b981' },
            { part: "requireRoles('admin')", label: 'RBAC authorization guard gating confidential security audit logging data', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Production secrets ko `.env` ki jagah code repository mein commit kar dena',
            '❌ Refresh tokens par revocation check na lagana'
          ],
          miniChallenge: 'Ek complete integration test suite likho jo register, login, refresh, aur logout pipeline test kare.',
          quiz: {
            question: 'Production web applications mein Access Token aur Refresh Token ko kahan store karna highest security standard maana jata hai?',
            options: [
              'Access Token in-memory (JavaScript variable/React state) aur Refresh Token in HttpOnly SameSite=Strict Cookie',
              'Dono localStorage mein',
              'Dono URL query parameters mein',
              'HTML body ke andar'
            ],
            answer: 'Access Token in-memory (JavaScript variable/React state) aur Refresh Token in HttpOnly SameSite=Strict Cookie',
            explanation: 'Access token memory mein hone se disk par persist nahi hota; Refresh token HttpOnly cookie mein hone se XSS theft aur CSRF attacks se immune rehta hai.'
          },
          summary: [
            'Enterprise authentication security, reliability aur user experience combine karti hai',
            'Dual-token rotation, TOTP 2FA aur RBAC authorization defense standards hain',
            'CodeMasti Auth Architecture millions of users ko securely scale karne ke liye ready hai'
          ],
          flashcard: {
            q: 'Production Authentication system launch karne se pehle Top 3 checks kya hain?',
            a: '1. HTTPS/TLS mandatory with HSTS, 2. HttpOnly SameSite=Strict cookies for tokens, 3. Rate limiting on all login, reset & MFA endpoints.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 13: FAANG INTERVIEW MASTERY & SYSTEM DESIGN
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 13: FAANG Authentication Interview Mastery & Scalable System Design',
      lessons: [
        {
          id: 'auth-interview-system-design',
          title: 'Top 35 FAANG Authentication Interview Questions & High-Scale Distributed Identity System Design',
          emoji: '💼',
          xpReward: 50,
          badgeName: 'Identity Champion',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Google, Amazon, Microsoft aur Uber ke security & backend interviews mein aane wale classic questions — Session vs JWT at 10M scale, Refresh Token Rotation mechanics, OAuth vs OIDC, PKCE deep dive, aur Distributed Session Revocation — sab yahan master karenge! 😎"',
            hint: '💡 Masti Sir: "System design answer dete waqt Explain karo: Centralized Auth Service -> Redis Session/Token Cache -> Read Replicas -> Async Email/SMS Queues -> Global Rate Limiting at Gateway!"',
            success: '🥳 Masti Sir: "Congratulations! You have completed the Complete Production Authentication Masterclass! You are now a Certified Authentication & Identity Architect! 🚀"',
            mistake: '😅 Masti Sir: "Interview mein answer dete waqt sirf tool ka naam mat bolo — underlying cryptographic mechanisms (HMAC, Salt, PKCE, Base64Url) zaroor explain karo!"'
          },
          englishDef: 'Comprehensive preparation for FAANG and Tier-1 technical interviews covering core authentication architecture: Stateful Sessions vs Stateless JWT at 10M scale, Refresh Token Rotation and family reuse detection, OAuth 2.0 vs OpenID Connect, PKCE authorization code exchange mechanics, mitigating Session Hijacking and Fixation, and architecting globally distributed High-Availability Identity Providers (IdP).',
          hinglishExplain: 'Top product companies ke technical aur system design interviews mein aane wale classic Authentication & Security questions ko master karein. Isme Session vs JWT deep comparison, token rotation mechanics, OAuth/OIDC internals, aur 10 Million users ke liye scalable Identity Provider (IdP) architecture shamil hai.',
          funnyExample: {
            scenario: 'The FAANG Security System Design Interview:\n- Interviewer: "How would you design an Authentication System for 10 Million Active Users with instant session revocation?" 🏢\n- Candidate: "1. Stateless JWT Access Tokens (15m) for high-speed microservice verification\n2. Stateful Refresh Tokens in Redis Cluster with Refresh Token Rotation\n3. Instant Revocation via Redis Bloom Filter / Token Blacklist\n4. Rate Limiting at Cloudflare & API Gateway\n5. TOTP 2FA + WebAuthn Passkeys support!" 🎯\n- Interviewer: "Hired on the spot as Principal Security & Identity Architect!" 🚀',
            punchline: 'True authentication mastery connects low-level crypto to high-level distributed identity architecture!'
          },
          visualDiagram: {
            title: 'High-Scale Distributed Identity Provider Architecture',
            nodes: [
              '10,000,000 Active Users -> Global Anycast CDN / Cloudflare (DDoS & WAF)',
              'API Gateway (Rate Limiting & JWT Signature Verification)',
              'Dedicated Authentication Microservice Cluster (Autoscaled)',
              'Redis Distributed Cluster (Refresh Token Families & Rate Limit Buckets)',
              'PostgreSQL Primary (User Identities) + 4 Read Replicas'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Top 5 Interview Rules for Authentication Engineers:',
            steps: [
              '1. Never store plain text passwords; always use slow salted hashing (bcrypt/Argon2id)',
              '2. Differentiate 401 Unauthorized (AuthN failure) from 403 Forbidden (AuthZ failure)',
              '3. Store refresh tokens in HttpOnly SameSite=Strict cookies to neutralize XSS & CSRF',
              '4. Explain that OAuth 2.0 is for Authorization; OIDC adds the Identity Layer',
              '5. Always propose Refresh Token Rotation with Token Reuse Detection for mobile/web apps'
            ]
          },
          code: `// ── TOUGH INTERVIEW PROBLEM: DISTRIBUTED TOKEN REVOCATION BLACKLIST (REDIS) ──
export async function isTokenRevoked(jti) {
  // Check fast in-memory Redis blacklist for revoked JWT unique identifier (jti)
  const isBlacklisted = await redisClient.get(\`revoked_jti:\${jti}\`);
  return Boolean(isBlacklisted);
}

export async function revokeToken(jti, remainingExpirySeconds) {
  // Add JWT ID (jti) to Redis blacklist with TTL matching remaining token lifetime
  await redisClient.setEx(\`revoked_jti:\${jti}\`, remainingExpirySeconds, 'true');
}`,
          codeBreakdown: [
            { part: 'isTokenRevoked(jti)', label: 'Sub-millisecond token revocation verification checking unique JWT ID (jti) against Redis memory cache', color: '#3b82f6' },
            { part: 'redisClient.setEx(..., remainingExpirySeconds, "true")', label: 'Sets automatic TTL matching remaining token lifespan preventing perpetual Redis memory bloat', color: '#10b981' }
          ],
          commonMistakes: [
            '❌ Interview mein JWT ko "completely secure by default" bol dena (JWT is just a format; security depends on implementation!)',
            '❌ Large scale system design mein instant token revocation mechanism propose na karna'
          ],
          miniChallenge: 'Explain karo: "Agar JWT stateless hai, toh user logout karne par server par token revoke kaise kiya ja sakta hai?" (Using short lifetimes + Redis token blacklist with TTL).',
          quiz: {
            question: 'Stateless JWT tokens use karte waqt immediate session logout / token revocation implement karne ka industry-standard pattern kya hota hai?',
            options: [
              'Token ke unique ID (`jti`) ko Redis blacklist mein store karna with TTL matching remaining token expiry time',
              'Saare users ke passwords change karna',
              'Database drop karna',
              'JWT delete karna'
            ],
            answer: 'Token ke unique ID (`jti`) ko Redis blacklist mein store karna with TTL matching remaining token expiry time',
            explanation: 'JWT ke unique identifier (`jti` claim) ko Redis blacklist mein store karke token expiry tak track kiya jata hai, allowing instant revocation while keeping verification fast.'
          },
          summary: [
            'Authentication aur Identity enterprise cloud systems ka backbone hain',
            'Dual-token rotation, TOTP 2FA, OAuth/OIDC aur PKCE core interview topics hain',
            'Scalable distributed system design stateless microservices aur Redis caching combine karta hai'
          ],
          flashcard: {
            q: 'OAuth 2.0 aur OpenID Connect (OIDC) mein kya primary distinction hai?',
            a: 'OAuth 2.0 API resources ka delegated access deta hai (Access Token); OpenID Connect (OIDC) user identity verify karta hai (ID Token containing name, email, profile).'
          }
        }
      ]
    }
  ]
}

export default authCourse
