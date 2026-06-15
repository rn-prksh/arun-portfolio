# Arun Prakash V Portfolio

## How to run

```bash
npm install
npm run dev
```

## Where to add images

1. Profile photo:
   - Add image here: `public/images/profile.jpg`
   - Open `src/components/Hero.jsx`
   - Replace the placeholder div with:
   ```jsx
   <img src="/images/profile.jpg" alt="Arun Prakash V" />
   ```

2. Project screenshots:
   - Add images:
     - `public/images/hostel-project.png`
     - `public/images/industrial-project.png`
     - `public/images/task-project.png`
   - Open `src/components/Projects.jsx`
   - Change image values:
   ```jsx
   image: '/images/hostel-project.png'
   ```

3. Resume:
   - Add your resume here:
     `public/resume/Arun_Prakash_Resume.pdf`

## Deploy in Netlify

```bash
npm run build
```

Upload the `dist` folder to Netlify or connect GitHub repo.
