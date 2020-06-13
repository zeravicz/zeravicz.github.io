# Still in progress, github pages and codesandbox link will be available upon completion.

## Description

This is my portfolio website.
![image](https://user-images.githubusercontent.com/38395166/84445901-b9716400-ac87-11ea-868e-276c80cca902.png)
I have placed
Tim Baker's react resume template (https://github.com/tbakerx/react-resume-template) inside a create-react-app template then built on top of it to create this.

## New features/changes I've made:

- Activated the previously static download resume button so that when clicked, a pdf resume is downloaded.
- Activated the previously static contact form at the bottom to send an email
  to the website owner.
- Separated portfolio into a professional and a personal section.
- Created a professional project viewer component to display screenshots and descriptions of corresponding achievements in a pop-up window. This was created so that professional work can be articulately displayed in a way that doesn't violate propriety source code ownership.
- Commented out testimonials section, simply uncomment to display it again.

## To take my portfolio website and change it/build on top of it to suit your needs:

### 1. Set up and run the application.

### `git clone https://github.com/AVu120/portfolio-website.git`

### `cd portfolio-website`

### `npm i`

### `npm start`

Then open http://localhost:3000 in a browser.

<em>The development server started by `npm start` will automatically reload the page whenever a code change is made.</em>

### 2. Replace styles and images.

Replace the styles inside public/css and the images inside public/images with your own. <em>Note: YOU MUST KEEP THE SAME NAMES ON THE IMAGES.</em>

### 3. Fill in your personal information.

To populate the website with all of your own data, open the public/resumeData.json file and simply replace the data in there with your own.

### 4. Upload your resume.

Replace my public/resume.pdf file with yours and and ensure it has the same file name as before.

### 5. Upload your portfolio work.

Replace my portfolio images, urls and descriptions with yours. Note: this portfolio has been optimally styled for project preview images with dimensions of 975 x 800 pixels (a free online tool like https://resizeimage.net/ would be useful in resizing your images to this).

### 6. Connect your email to the contact form.

- Create a free emailJS account at https://www.emailjs.com/.
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
  desired Template ID, then replace my email service, template ID, and template variable parameters object with yours in this code block in src\Components\Contact.js:

```
window.emailjs
  .send("gmail", "template_8RW6Q4vx", {
    message: formMessage,
    from_name: fromName,
    email: fromEmail,
    subject: formSubject || "No Subject",
  })
```

If you're using my email template, you can leave the parameters object and all other code as is. Otherwise you might have to change some code to fit your emailJS template.

### 7. Have fun!

## Credits

- ##### Tim Baker's react resume template: https://github.com/tbakerx/react-resume-template
