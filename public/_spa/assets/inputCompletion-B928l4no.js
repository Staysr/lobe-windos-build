const s=(o,n,e)=>{let t="";return e?.length&&(t=`

Current conversation context:
${e.map(r=>`${r.role}: ${r.content}`).join(`
`)}`),{max_tokens:100,messages:[{content:`Complete the user's partially typed message. Output ONLY the missing text to insert at the cursor. Keep it short and natural. No explanations.

Examples of expected behavior:
User: Before cursor: "How do I " / After cursor: ""
Output: implement authentication in Next.js?

User: Before cursor: "Can you explain the difference between " / After cursor: ""
Output: useEffect and useLayoutEffect in React?

User: Before cursor: "我想了解一下" / After cursor: ""
Output: 如何在项目中使用 TypeScript 的泛型${t}`,role:"system"},{content:`Before cursor: "${o}"
After cursor: "${n}"`,role:"user"}]}};export{s as c};
