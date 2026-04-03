const n=e=>({messages:[{content:`You are an emoji expert who selects the most appropriate emoji to represent concepts, emotions, or topics.

Rules:
- Output ONLY a single emoji (1-2 characters maximum)
- Focus on the CONTENT meaning, not the language it's written in
- Choose an emoji that best represents the core topic, activity, or subject matter
- Prioritize topic-specific emojis over generic emotion emojis (e.g., for sports, use 🏃 instead of 😅)
- For work/projects, use work-related emojis (💼, 🚀, 💪) not cultural symbols
- For pure emotions without specific topics, use face emojis (happy: 🎉, sad: 😢, thinking: 🤔)
- For activities or subjects, use object or symbol emojis that represent the main topic
- No explanations or additional text`,role:"system"},{content:"I am a copywriting master who helps name design and art works with literary depth",role:"user"},{content:"✒️",role:"assistant"},{content:"I am a code wizard who converts JavaScript code to TypeScript",role:"user"},{content:"🧙‍♂️",role:"assistant"},{content:"I just got a promotion at work",role:"user"},{content:"🎉",role:"assistant"},{content:"I am a business plan expert who helps with startup strategies and marketing",role:"user"},{content:"🚀",role:"assistant"},{content:e,role:"user"}]}),o=(e,t)=>({messages:[{content:`你是一名擅长起名的起名大师，名字需要有文学内涵，注重精炼和赋子意境，你需要将用户的描述总结为 10 个字以内的角色，并翻译为目标语言。格式要求如下：
输入: {文本作为JSON引用字符串} [locale]
输出: {角色名}`,role:"system"},{content:"输入: {你是一名文案大师，帮我为一些设计 / 艺术作品起名，名字需要有文学内涵，注重精炼和赋子意境，表达作品的情景氛国，使名称既简洁又富有诗意。} [zh-CN]",role:"user"},{content:"输入: {你是一名 UX Writer，擅长将平平无奇的描述转换为精妙的表达。接下来用户会输入一段文本，你需要转成更加棒的表述方式，长度不超过40个字。} [ru-RU]",role:"user"},{content:"Творческий редактор UX",role:"assistant"},{content:"输入: {你是一名前端代码专家，请将下面的代码转成 ts，不要修改实现。如果原本 js 中没有定义的全局变量，需要补充 declare 的类型声明。} [en-US]",role:"user"},{content:"TS Transformer",role:"assistant"},{content:"输入: {Improve my English language use by replacing basic A0-level expressions with more sophisticated, advanced-level phrases while maintaining the conversation's essence. Your responses should focus solely on corrections and enhancements, avoiding additional explanations.} [zh-CN]",role:"user"},{content:"邮件优化助理",role:"assistant"},{content:`输入: {${e}} [${t}]`,role:"user"}]}),s=(e,t)=>({messages:[{content:`你是一名擅长技能总结的助理，你需要将用户的输入的内容总结为一个角色技能简介，不超过 20 个字。内容需要确保信息清晰、逻辑清晰，并有效地传达角色的技能和经验，需要并翻译为目标语言:${t}。格式要求如下：
输入: {文本作为JSON引用字符串} [locale]
输出: {简介}`,role:"system"},{content:"输入: {你是一名文案大师，帮我为一些设计 / 艺术作品起名，名字需要有文学内涵，注重精炼和赋子意境，表达作品的情景氛国，使名称既简洁又富有诗意。} [zh-CN]",role:"user"},{content:"擅长文创艺术作品起名",role:"assistant"},{content:"输入: {你是一名创业计划撰写专家，可以提供包括创意名称、简短的标语、目标用户画像、用户痛点、主要价值主张、销售/营销渠道、收入流、成本结构等计划生成。} [en-US]",role:"user"},{content:"Good at business plan writing and consulting",role:"assistant"},{content:"输入: {You are a frontend expert. Please convert the code below to TS without modifying the implementation. If there are global variables not defined in the original JS, you need to add type declarations using declare.} [zh-CN]",role:"user"},{content:"擅长 ts 转换和补充类型声明",role:"assistant"},{content:`输入: {
用户正常书写面向开发者的 API 用户使用文档。你需要从用户的视角来提供比较易用易读的文档内容。

一个标准的 API 文档示例如下：

\`\`\`markdown
---
title: useWatchPluginMessage
description: 监听获取 LobeChat 发过来的插件消息
nav: API
---

\`useWatchPluginMessage\` 是 Chat Plugin SDK 封装一个的 React Hook，用于监听从 LobeChat 发过来的插件消息。
} [ru-RU]`,role:"user"},{content:"Специализируется на создании хорошо структурированной и профессиональной документации README для GitHub с точными техническими терминами",role:"assistant"},{content:"输入: {你是一名创业计划撰写专家，可以提供包括创意名称、简短的标语、目标用户画像、用户痛点、主要价值主张、销售/营销渠道、收入流、成本结构等计划生成。} [zh-CN]",role:"user"},{content:"擅长创业计划撰写与咨询",role:"assistant"},{content:`输入: {${e}} [${t}]`,role:"user"}],temperature:0}),a=(e,t)=>({messages:[{content:"你是一名擅长会话标签总结的助理，你需要将用户的输入的内容提炼出分类标签，使用`,`分隔，不超过 5 个标签，并翻译为目标语言。 格式要求如下：\n输入: {文本作为JSON引用字符串} [locale]\n输出: {标签}",role:"system"},{content:"输入: {你是一名文案大师，帮我为一些设计 / 艺术作品起名，名字需要有文学内涵，注重精炼和赋子意境，表达作品的情景氛国，使名称既简洁又富有诗意。} [zh-CN]",role:"user"},{content:"起名,写作,创意",role:"assistant"},{content:"输入: {You are a professional translator proficient in Simplified Chinese, and have participated in the translation work of the Chinese versions of The New York Times and The Economist. Therefore, you have a deep understanding of translating news and current affairs articles. I hope you can help me translate the following English news paragraphs into Chinese, with a style similar to the Chinese versions of the aforementioned magazines.} [zh-CN]",role:"user"},{content:"翻译,写作,文案",role:"assistant"},{content:"输入: {你是一名创业计划撰写专家，可以提供包括创意名称、简短的标语、目标用户画像、用户痛点、主要价值主张、销售/营销渠道、收入流、成本结构等计划生成。} [en-US]",role:"user"},{content:"entrepreneurship,planning,consulting",role:"assistant"},{content:`输入: {${e}} [${t}]`,role:"user"}]});export{o as a,s as b,n as c,a as d};
