# My Portfolio Website (and Open-Source React Resume Template)

![image](https://user-images.githubusercontent.com/38395166/85216161-b895ac00-b3c4-11ea-8337-1ee78e3436c1.png)

View my portfolio at https://avu120.github.io/portfolio/.

## Description

This is my portfolio website. I have placed Tim Baker's react resume template (https://github.com/tbakerx/react-resume-template) inside a create-react-app template then built on top of it to create this.

## New features/changes I've made:

- Activated the previously static download resume button so that when clicked, a pdf resume is downloaded.
- Activated the previously static contact form at the bottom to send an email
  to the website owner (using EmailJS service).
- Separated portfolio into a professional and a personal section.
- Created a professional project viewer component to display screenshots and descriptions of corresponding achievements in a pop-up window. This was created so that professional work can be articulately displayed in a way that doesn't violate propriety source code ownership. Note: all related css has been added into the global monolithic css files.
- Added/modified other css styling around the application.
- Replaced Tim Baker's images and details with mine.

## To take my portfolio website and change it/build on top of it to suit your needs:

### 1. Set up and run the application.

### `git clone https://github.com/AVu120/portfolio.git`

### `cd portfolio`

### `npm i`

### `npm start`

Then open http://localhost:3000 in a browser.

<em>The development server started by `npm start` will automatically reload the page whenever a code change is made.</em>

### 2. Replace styles and images.

Replace the styles inside public/css and the images inside public/images with your own. Note: YOU MUST KEEP THE SAME NAMES ON THE IMAGES. Also, you should ideally choose a 1920 x 1080 pixels image to replace header-background.jpg.

### 3. Fill in your personal information.

To populate the website with all of your own data, open the public/resumeData.json file and simply replace the data in there with your own.

### 4. Upload your resume.

Replace my public/resume.pdf file with yours and and ensure it has the same file name.

### 5. Upload your portfolio work.

Replace my portfolio images, urls and descriptions with yours. Note: this app has been optimally styled for project preview images with dimensions of 975 x 800 pixels (a free online tool like https://resizeimage.net/ would be useful in resizing your images to this). For images of professional projects, I have used the image blurring/pixelizing tool https://www.facepixelizer.com/ to blur/obfuscate my company/client's intellectual-property and personal identifiable data (PID).

### 6. Connect your email to the contact form.

- Create an emailJS account at https://www.emailjs.com/ (the free tier service includes sending up to 200 emails/month, an emailJS footer in emails and excludes file attachments).
- Log in.
- Go to dashboard > Email Services. Then add the email service you want to use to send & receive emails from the contact form (e.g. gmail).
- Go to dashboard > Email Templates. Then create a new template or edit the existing email template example. This template will be used to structure & format emails sent from the webform. The template I used in this project is:
  ![image](https://user-images.githubusercontent.com/38395166/84444815-f177a780-ac85-11ea-8ac1-83996681af9b.png)
- To connect the contact form to your emailJS account. Go to dashboard > Account > API Keys. Then copy your User ID and replace
  my user ID in this code block in public/index.html.

```
<script
  type="text/javascript"
  src="https://cdn.jsdelivr.net/npm/emailjs-com@2.4.1/dist/email.min.js"
></script>
<script type="text/javascript">
  (function () {
    emailjs.init("user_l4Ab26kjizmxRu7L22O55");
  })();
</script>
```

- Finally, to ensure emails sent from the contact form are structured as per your defined emailJS template, go to dashboard > Email Templates. Copy the
  desired Template ID, then replace my email service ("gmail"), template ID, and template variable parameters object with yours in this code block in src\Components\Contact.js:

```
window.emailjs
  .send("gmail", "template_8RW6Q4vx", {
    message: formMessage,
    from_name: fromName,
    email: fromEmail,
    subject: formSubject || "No Subject",
  })
```

If you're using my email template, you can leave all code as it currently is. Otherwise you might have to change some code to fit your emailJS template.

### 7. Have fun and please credit me & Tim Baker if you wish to publish this code after using/modifying it.

## Credits

- Tim Baker's react resume template: https://github.com/tbakerx/react-resume-template
