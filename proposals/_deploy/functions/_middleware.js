const PASSWORDS = {
  'sk-trading': 'sktrading2026',
};

export async function onRequest(context) {
  const { request, next } = context;
  const url = new URL(request.url);

  // Extract client slug from path: /stephen/... -> "stephen"
  const slug = url.pathname.split('/').filter(Boolean)[0];
  if (!slug || !PASSWORDS[slug]) return next();

  const cookieName = `auth_${slug}`;
  const correctPassword = PASSWORDS[slug];

  // Handle password submission
  if (request.method === 'POST') {
    const formData = await request.formData();
    const password = formData.get('password');
    if (password === correctPassword) {
      return new Response(null, {
        status: 302,
        headers: {
          'Location': url.pathname,
          'Set-Cookie': `${cookieName}=1; Path=/${slug}; HttpOnly; Secure; SameSite=Strict; Max-Age=604800`,
        },
      });
    }
    return passwordPage(slug, true);
  }

  // Check for valid auth cookie
  const cookies = request.headers.get('Cookie') || '';
  if (cookies.includes(`${cookieName}=1`)) return next();

  return passwordPage(slug, false);
}

function passwordPage(slug, failed) {
  const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Proposal access</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="/${slug}/colors_and_type.css">
  <style>
    *, *:before, *:after { box-sizing: border-box; margin: 0; padding: 0; }
    html { height: 100%; }
    body {
      min-height: 100%; display: flex; align-items: center; justify-content: center;
      background: #0c0a08; color: #f7f3ed;
      font-family: "WorkSans", system-ui, sans-serif;
      -webkit-font-smoothing: antialiased;
    }
    .gate {
      width: 100%; max-width: 400px; padding: 40px;
      text-align: center;
    }
    .wm {
      font-family: "EditorsNote", Georgia, serif;
      font-weight: 100; font-size: 28px;
      letter-spacing: -0.01em; margin-bottom: 48px;
    }
    .wm .pros {
      font-family: "EditorsNoteThinItalic", Georgia, serif;
      font-style: italic; font-weight: 400;
    }
    .label {
      font-family: "AndaleMono", ui-monospace, monospace;
      font-size: 11px; letter-spacing: 0.2em;
      text-transform: uppercase; color: rgba(247,243,237,0.4);
      margin-bottom: 20px;
    }
    input[type="password"] {
      width: 100%; padding: 14px 18px;
      background: rgba(247,243,237,0.06);
      border: 1px solid rgba(247,243,237,0.12);
      border-radius: 8px; color: #f7f3ed;
      font-family: "WorkSans", system-ui, sans-serif;
      font-size: 15px; outline: none;
      transition: border-color 200ms;
    }
    input:focus { border-color: #cba765; }
    button {
      width: 100%; margin-top: 14px; padding: 14px;
      background: #cba765; color: #0c0a08;
      border: none; border-radius: 8px; cursor: pointer;
      font-family: "AndaleMono", ui-monospace, monospace;
      font-size: 11px; letter-spacing: 0.18em;
      text-transform: uppercase; font-weight: 400;
      transition: opacity 200ms;
    }
    button:hover { opacity: 0.85; }
    .error {
      color: #e87c6a; font-size: 13px;
      margin-top: 14px;
    }
  </style>
</head>
<body>
  <form class="gate" method="POST">
    <div class="wm">twinning <span class="pros">pros</span></div>
    <p class="label">Enter password to view this proposal</p>
    <input type="password" name="password" placeholder="Password" autofocus>
    <button type="submit">View proposal</button>
    ${failed ? '<p class="error">Incorrect password. Try again.</p>' : ''}
  </form>
</body>
</html>`;

  return new Response(html, {
    status: 401,
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  });
}
