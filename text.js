// ================================================ Talwind-CSS ================================================== //
// Chat GPT Se Liya Hau Syntext ---> Tailwind CSS ek utility-first CSS framework hai jo ki web development mein kaafi popular hai, kyunki ye predefined classes provide karta hai jo directly HTML elements par lagayi ja sakti hain. Iska basic idea ye hai ki instead of writing custom CSS for styling elements, Tailwind ke classes use karke aap elements ko fast aur consistent styling de sakte hain. Yani, aapko CSS file me styling likhne ki zaroorat nahi hoti; bas Tailwind classes use karke styling apply kar sakte hain.




// ========================================= Talwind-CSS ke Features ============================================= //
// Chat GPT Se Liya Hau Syntext ---> Tailwind CSS ke Features.

// 1. Utility-First Approach: Tailwind mein mostly atomic classes hoti hain jo specific styling properties ko control karti hain, jaise color, spacing, typography, borders, shadows, etc. Isse aapko custom CSS likhne ki zaroorat nahi padti.

// 2. Highly Customizable: Tailwind CSS ko aap apne project ke hisaab se easily customize kar sakte hain. tailwind.config.js file mein aap apne colors, fonts, spacing, aur breakpoints define kar sakte hain.

// 3. Responsive Design: Tailwind me responsive design ke liye bhi predefined classes hain. Aap easily sm:, md:, lg:, xl: jaise breakpoints laga ke responsive layouts bana sakte hain. Jaise: md:bg-red-500 se background color medium screen par red ho jayega.

// 4. Flexbox aur Grid Support: Tailwind ne Flexbox aur CSS Grid ko implement karna easy kar diya hai. Isme aap sirf specific classes ka use karke layout structure bana sakte hain, jaise flex, flex-col, grid, grid-cols-3, etc.

// 5. Dark Mode Support: Tailwind me built-in dark mode support bhi hai, jo dark: prefix ke sath aata hai. Aap easily dark aur light themes ke bich toggle kar sakte hain.

// 6. JIT (Just-in-Time) Mode: Tailwind CSS ka JIT compiler dynamically only wohi classes generate karta hai jo aap apne HTML me use kar rahe hain. Isse CSS file ka size kaafi kam ho jata hai aur aapko faster build aur performance milta hai.




// ============================================ Tailwind CSS Setup =============================================== //
// Chat GPT Se Liya Hau Syntext ---> Tailwind CSS Setup.

// Install Tailwind via npm:

// npm install -D tailwindcss
// npx tailwindcss init



// 2. Configure Tailwind: Tailwind ko apne tailwind.config.js file mein configure kar sakte hain, aur custom theme banane ke liye bhi isme settings define kar sakte hain.
// module.exports = {
//     content: [
//       "./src/**/*.{js,jsx,ts,tsx}",
//     ],
//     theme: {
//       extend: {},
//     },
//     plugins: [],
//   }
  

// 3. Import Tailwind CSS: Apni CSS file mein Tailwind ke directives ko import karna hota hai:
// @tailwind base;
// @tailwind components;
// @tailwind utilities;



// ========================================== Tailwind CSS Ka Faayda ============================================= //
// Chat GPT Se Liya Hau Syntext ---> Tailwind CSS Ka Faayda:
// 1. Faster Development: Iski utility classes se fast development hota hai aur repetitive CSS likhne ki zaroorat nahi hoti.

// 2. Lightweight: JIT compiler se sirf wahi classes generate hoti hain jo use hoti hain, jisse file size chhoti hoti hai.

// 3. Customizable: Isme predefined design rules ko customize karne ka option hota hai, taaki project ka unique look ho.








const app = document.getElementById("app");
app.innerHTML = `<div class="text-yellow-500  text-xl place-content-center hover:text-pink-500">Talwind-CSS</div>`
console.log("hello",app.innerHTML);