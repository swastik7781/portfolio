# EmailJS Setup Guide

## Quick Setup (5 minutes)

### 1. Create Account
1. Go to https://www.emailjs.com/
2. Click **Sign Up** (top right)
3. Use your Google account or email
4. Verify your email

### 2. Add Email Service
1. In dashboard, click **Email Services**
2. Click **Add New Service**
3. Select **Gmail** (recommended)
4. Click **Connect Account**
5. Sign in with your Gmail (swastikbhardwaj457@gmail.com)
6. **Copy the Service ID** (looks like `service_abc123`)

### 3. Create Email Template
1. Click **Email Templates**
2. Click **Create New Template**
3. **Template Name**: Portfolio Contact Form
4. **Subject**: `New message from {{from_name}}`
5. **Content**:
```
You have a new message from your portfolio!

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

Message:
{{message}}
```
6. **To Email**: swastikbhardwaj457@gmail.com
7. Click **Save**
8. **Copy the Template ID** (looks like `template_xyz789`)

### 4. Get Public Key
1. Click your profile icon (top right)
2. Click **Account**
3. Go to **General** tab
4. Find **Public Key** section
5. **Copy the Public Key** (looks like `AbCdEfGhIjKlMnOp`)

### 5. Configure Your Portfolio
1. Open `portfolio-vite` folder
2. Copy `.env.example` to `.env.local`
3. Edit `.env.local` and paste your credentials:
```
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=AbCdEfGhIjKlMnOp
```

### 6. Test It!
1. Run `npm run dev`
2. Go to Contact section
3. Fill out the form
4. Click Send
5. Check your email!

## Free Tier Limits
- ✅ 100 emails per month
- ✅ Unlimited templates
- ✅ All features included

## Troubleshooting

**Not receiving emails?**
- Check spam folder
- Verify Service ID, Template ID, and Public Key are correct
- Make sure template has `{{from_name}}`, `{{from_email}}`, `{{phone}}`, `{{message}}`
- Check EmailJS dashboard for sent emails

**"Failed to send" error?**
- Restart dev server after changing `.env.local`
- Check browser console for detailed error
- Verify you're not over the 100 email/month limit

**Template variables not working?**
- Make sure template uses double curly braces: `{{variable}}`
- Variable names must match exactly: `from_name`, `from_email`, `phone`, `message`
