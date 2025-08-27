# Questions and Answers 

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementById দিয়ে HTML DOM থেকে কোন আইডি নাম ধরে এলিমেন্ট খোজার জন্য এটি ব্যবহার করা হয়। ID নাম যেহেতু ইউনিক অন্য HTML Element একই ID শেয়ার করে না তাই getElementById শুধুমাত্র একটি এলিমেন্ট রিটার্ন করে। 

getElementsByClassName দিয়ে একই class নাম এ থাকা সমস্ত HTML Element এর খুঁজে বের করা যায় এবং এটি একটি HTMLCollection রিটার্ন করে যা JS Array মত দেখতে কিন্তু এটা Array নয়।

querySelector দিয়ে CSS Selector ব্যবহার করে Element খোজা হয় তবে এটি প্রথম মিলে যাওয়া Element টা রিটার্ন করে। আর querySelectorAll দিয়েও CSS Selector ব্যবহার করে Element খোজা হয় তবে এটি মিলে যাওয়া সব Element কে NodeList আকারে রিটান করে। 


---

### 2. How do you create and insert a new element into the DOM?
DOM এ Element তৈরি করা HTML Document এ Dynamic ভাবে বসানোর নিয়ম হলো প্রথমে একটা Element তৈরি করে HTML Document এর কোন Element কে ধরে তার Child হিসেবে append করে দেওয়া। 

Step 1. `const newElement = document.createElement('div');`

Step 2. `newElement.innerHTML = "I am a New Element from JS DOM";`

Step 3. `const body = document.getElementById('body');`

Step 4. `body.appendChild(newElement);`


---

### 3. What is Event Bubbling and how does it work?

যদি কোন একটা Element এ Event হয় তখন তা ধীরে ধীরে উপরের দিয়ে যেতে থাকে মানে Child Element থেকে Parent Element তারপর Grandparent Element এইভাবে উপরের দিকে উঠে ইভেন্ট যদি উপরের Element এর মধ্যে একই ইভেন্ট যদি থাকে তাহলে ধীরে ধীরে সেগুলাও ইভেন্ট ও ঘটে এটাই হলো Event Bubbling.


--- 

### 4. What is Event Delegation in JavaScript? Why is it useful?

এটি হলো এক ধরনের Event সেট করার কৌশল যাতে প্রত্যেকটা child element কে না ধরে তাদের  parent কে ধরে তার মধ্যে event যোগ করে সেইখান  থেকে ইভেন্ট controll করা এতে লুপ ব্যবহার করা লাগে না জন্য তার পারফরমেন্স ভালো হয় এবং কোড ও কম লাগে। 

---

### 5. What is the difference between preventDefault() and stopPropagation() methods?

preventDefault() এটি দিয়ে কোন Element এর ডিফল্ট আচরণ বন্ধ করতে ব্যবহার করা হয় যেমন Form এর Default আচরণ হলো রিলোড নেওয়া যদি কেউ সাবমিট বাটনে ক্লিক করে এই রিলোড করে বন্ধ করা যায় এটি দ্বারা। 

stopPropagation() এটি দিয়ে Event Bubbling control কারা হয় যদি এটি কল করা থাকে তাহলে সেই Eleement এর ইভেন্ট টা ঘটে ওই খানেই শেষ হবে তার parent element এর কাছে যাবে না। 