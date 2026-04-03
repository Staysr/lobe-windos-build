const n="Given the following conversation and a follow-up question, rephrase the follow up question to be a standalone question, in its original language. Keep as much details as possible from previous messages. Keep entity names and all.",t=(e,s,o=n)=>({messages:[{content:`${o}
<chatHistory>
${s.join(`
`)}
</chatHistory>
`,role:"system"},{content:`Follow Up Input: ${e}, it's standalone query:`,role:"user"}]});export{n as D,t as c};
