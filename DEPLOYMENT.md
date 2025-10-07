# BioTap Vercel Deployment Guide

## ✅ Ready for Vercel Deployment
Your Next.js app is now configured for Vercel deployment with full server-side functionality:

1. ✅ Standard Next.js configuration (no static export)
2. ✅ Server actions for contact forms
3. ✅ API routes for beta signup
4. ✅ Vercel configuration file
5. ✅ Environment variables template

## Quick Deploy to Vercel

### Option 1: Deploy via Vercel CLI (Recommended)
```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy from your project directory
vercel --prod
```

### Option 2: Deploy via GitHub + Vercel Dashboard
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js and deploy

## Environment Variables Setup

### 1. Get Gmail App Password
1. Enable 2-Factor Authentication on your Gmail
2. Go to Google Account Settings > Security
3. Generate an "App Password" for "Mail"
4. Use this password (not your regular Gmail password)

### 2. Set Environment Variables in Vercel
In your Vercel dashboard, go to Settings > Environment Variables and add:

```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-16-character-app-password
EMAIL_TO=contact@bio-tap.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-16-character-app-password
```

## Domain Connection

### 1. Add Custom Domain in Vercel
1. Go to your project dashboard
2. Click "Domains" tab
3. Add your domain (e.g., `biophckn.com`)
4. Vercel will provide DNS records

### 2. Update DNS Records
In your domain registrar's DNS settings, add:
- **A Record**: `@` → `76.76.19.61`
- **CNAME Record**: `www` → `cname.vercel-dns.com`

### 3. SSL Certificate
Vercel automatically provides free SSL certificates for all domains.

## Testing Your Deployment

1. **Visit your Vercel URL**: `https://your-project.vercel.app`
2. **Test contact form**: Fill out and submit
3. **Test beta signup**: Enter email and submit
4. **Check email**: Verify you receive the emails
5. **Test custom domain**: Once DNS propagates (up to 24 hours)

## Benefits of Vercel

- ✅ **Free tier**: 100GB bandwidth/month
- ✅ **Automatic deployments**: Push to GitHub = auto deploy
- ✅ **Global CDN**: Fast loading worldwide
- ✅ **Serverless functions**: Your API routes work perfectly
- ✅ **Analytics**: Built-in performance monitoring
- ✅ **Custom domains**: Free SSL included
- ✅ **Zero maintenance**: No server management needed

## Troubleshooting

### Email not sending:
- Check Gmail App Password is correct
- Verify environment variables in Vercel dashboard
- Check Vercel function logs

### Domain not working:
- Wait 24 hours for DNS propagation
- Check DNS records are correct
- Verify domain is added in Vercel

### Build errors:
- Check all dependencies are in package.json
- Verify TypeScript errors are fixed
- Check Vercel build logs

## Next Steps After Deployment

1. **Set up monitoring**: Enable Vercel Analytics
2. **Configure backups**: Your code is in GitHub
3. **Set up staging**: Create preview deployments for testing
4. **Add database**: If needed, consider Vercel Postgres or PlanetScale
