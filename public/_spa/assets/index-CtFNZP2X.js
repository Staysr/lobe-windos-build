import{ho as N,hp as j,hq as T}from"./index-BmW5CTHd.js";import{hr as we,hs as ve,ht as Te,hu as xe,hv as Se,hw as Ae,hx as _e,hy as Pe,hz as Re,hA as Ie,hB as Ce,hC as De,hD as Ne,hE as je,hF as qe,hG as Oe,hH as Me,hI as Ee,hJ as Fe,hK as Ue,hL as Be,hM as Le,hN as Ye,hO as ze,hP as Ge,hQ as He,hR as We,hS as Ke,hT as Je,hU as Qe,hV as Xe,hW as Ve,hX as Ze,hY as et,hZ as tt,h_ as st,h$ as ot,i0 as nt,i1 as rt,i2 as it,i3 as at,i4 as ct,i5 as ut,i6 as lt,i7 as pt,i8 as dt,i9 as mt,ia as ht,ib as ft,ic as gt,ex as $t,id as yt,ie as kt,ig as bt,ih as wt,ii as vt,ij as Tt,ik as xt,il as St,im as At,io as _t}from"./index-BmW5CTHd.js";import{c as Rt}from"./inputCompletion-B928l4no.js";import{c as Ct,a as Dt,b as Nt,d as jt}from"./summaryTags-BWUWtn5U.js";import{D as Ot,c as Mt}from"./rewriteQuery-DGNwLALL.js";import{c as Ft}from"./summaryGenerationTitle-Cwv9EMri.js";import"../vendor/vendor-motion-DRC1LdIk.js";import"../vendor/vendor-emotion-D2wYcXAj.js";import"../i18n/i18n-zh-CN-CCQe7Zp1.js";import"../i18n/i18n-en-US-vCwQO2Oi.js";import"../vendor/vendor-es-toolkit-O0KSByiM.js";import"../vendor/vendor-icons-Bjz-9Gdp.js";import"./providerConfig-DdZ8yyMi.js";const te=e=>({messages:[{content:`You are a summarization expert. Generate a concise summary from the provided text chunk.

Rules:
- Output ONLY the summary text itself, nothing else
- NO labels, prefixes, or meta-text (like "Summary:", "摘要:", etc.)
- NO explanations, commentary, or additional context
- MUST be 1-2 complete sentences maximum (count carefully!)
- MUST use the SAME language as the input text
- Preserve technical terms, proper nouns, and code identifiers exactly as they appear
- Focus on capturing the main topic or key information
- Keep it concise and direct

<examples>
<input>React is a JavaScript library for building user interfaces...</input>
<output>React is a JavaScript library developed by Facebook for building interactive user interfaces with declarative views.</output>

<input>The useState hook in React allows you to add state...</input>
<output>The useState hook in React enables functional components to manage state using a state variable and setter function.</output>

<input>深度学习是机器学习的一个分支...</input>
<output>深度学习是机器学习的一个分支，使用多层神经网络学习数据表示，在图像识别、自然语言处理等领域取得突破。</output>
</examples>
`,role:"system"},{content:e,role:"user"}]}),se=({context:e,knowledge:s,question:t})=>{const r=e.filter(i=>i.trim());return{messages:[{content:r.length>0?`You are a helpful assistant specialized in ${s.join("/")}. Your task is to answer questions based on the provided context passages.

IMPORTANT RULES:
- First, check if the context is relevant to the question topic
- If the context is about a COMPLETELY DIFFERENT topic than the question:
  * State what topic the context is about
  * Clearly state "The provided context does not contain information about [question topic]"
  * Do NOT answer using your general knowledge
- If the context is related to the question topic (even if information is limited):
  * ALWAYS use the context information as a foundation
  * You SHOULD supplement with your general knowledge to provide a complete, helpful answer
  * For "how to" questions, MUST provide practical, actionable steps combining context + your expertise
  * The context provides the topic relevance - you provide the comprehensive answer
  * Example: If context mentions "Docker is for containerization", and question is "How to deploy with Docker?", you should explain deployment steps using your knowledge
- Answer in the same language as the question
- Use markdown formatting for better readability

The provided context passages:

<context>
${r.join(`
`)}
</context>

Question to answer:

${t}`:`You are a helpful assistant specialized in ${s.join("/")}. Please answer the following question using your knowledge.

Answer in the same language as the question and use markdown formatting for better readability.

Question to answer:

${t}`,role:"user"}]}},oe=e=>{const s=e.map(t=>`=== ${t.filename} ===
${t.content}`).join(`

`);return`Read ${e.length} file(s):

${s}`},q=e=>!e||e.length===0?"":`<group_members>
${e.map(t=>`  <member id="${t.id}" title="${t.title}" />`).join(`
`)}
</group_members>`,O=({baseSystemRole:e="",agentId:s,groupMembers:t,targetId:r,instruction:u})=>{const i=q(t),a=t.find(c=>c.id===s)?.title||"Agent",h=["Guidelines:","",...[`Stay in character as ${s} (${a})`,"Be concise and natural, behave like a real person","The group supervisor will decide whether to send it privately or publicly, so you just need to say the actuall content, even it's a DM to a specific member. Do not pretend you've sent it.","Be collaborative and build upon others' responses when appropriate","Keep your responses concise and relevant to the ongoing discussion"].map(c=>`- ${c}`)].join(`
`),n=[e,h];i&&n.push(i);const d=r||"the group publicly",o=`Now it's your turn to respond. ${u?`SUPERVISOR INSTRUCTION: ${u}`:""} You are sending message to ${d}. Please respond as this agent would, considering the full conversation history provided above. Directly return the message content, no other text. You do not need add author name or anything else.`.trim();return n.push(o),n.filter(Boolean).join(`

`).trim()},M=e=>!e||e.length===0?"":`<todo_list>
${JSON.stringify(e&&e.length>0?e:[],null,2)}
</todo_list>`,E=({allowDM:e=!0,scene:s="productive",availableAgents:t,conversationHistory:r,todoList:u,systemPrompt:i,userName:a})=>{const h=[{id:"user",name:a||"User",role:"user"},...t.map(o=>({id:o.id,name:o.title||o.id,role:"assistant"}))].map(o=>`  <member id="${o.id}" name="${o.name}" />`).join(`
`),n=s==="productive"?M(u):"";return`
You are a conversation supervisor for a group chat with multiple AI agents. Your role is to orchestrate a group of agents to make user feel natural and interactive.

<group_role>
${i||""}
</group_role>

<group_members>
${h}
</group_members>

<conversation_history>
${r}
</conversation_history>

${n}

RULES:

- Do not forcing user to respond, only ask for information for one time before you get the information you need.
- Make the group conversation feels like a real conversation.

WHEN ASKING AGENTS TO SPEAK:

- Only reference agents from the member list. Never invent new IDs.
- Do not excessivly gathering information from user, you should only ask for information when it's necessary.
- If need many information from user, make single agent to ask for all.
${e?`- To send a private message, use "trigger_agent_dm" and set "target" to the recipient agent id or "user".
- Use public messages by default; choose DM only when the message MUST be private.`:""}

${s==="productive"?`WHEN GENERATING TODOS:

- Only use Todo for complex tasks.
- Break down the main objective into logical, sequential tasks.
- Be concise and to the point. Each todo should no longer than 10 words. Do not create more than 5 todos.
- Match user's message language.
- By only assigning todo will not tirgger agent response you still need to use trigger tool if needed.
- Keep todo items synchronized with the context. Finish or create todos as progress changes.`:""}
`.trim()},F={buildGroupChatSystemPrompt:O,buildSupervisorPrompt:E},U=e=>`<chunk fileId="${e.fileId}" fileName="${e.fileName}" similarity="${e.similarity}" ${e.pageNumber?` pageNumber="${e.pageNumber}" `:""}>${e.text}</chunk>`,B=e=>e.length===0?"":`<retrieved_chunks>
<retrieved_chunks_docstring>here are retrived chunks you can refer to:</retrieved_chunks_docstring>
${e.map(t=>U(t)).join(`
`)}
</retrieved_chunks>`.trim(),L=e=>`<knowledge id="${e.id}" name="${e.name}" type="${e.type}"${e.fileType?` fileType="${e.fileType}" `:""}>${e.description||""}</knowledge>`,Y=e=>(e||[]).length===0?"":`<knowledge_bases>
<knowledge_bases_docstring>here are the knowledge base scope we retrieve chunks from:</knowledge_bases_docstring>
${e?.map(t=>L(t)).join(`
`)}
</knowledge_bases>`.trim(),z=(e,s)=>`<user_query>
<user_query_docstring>to make result better, we may rewrite user's question.If there is a rewrite query, it will be wrapper with \`rewrite_query\` tag.</user_query_docstring>

<raw_query>${e.trim()}</raw_query>
${s?`<rewrite_query>${s.trim()}</rewrite_query>`:""}
<user_query>`,ne=({chunks:e,knowledge:s,userQuery:t,rewriteQuery:r})=>(e||[])?.length===0?"":`<knowledge_base_qa_info>
You are also a helpful assistant good answering questions related to ${(s||[]).map(i=>i.name).join("/")}. And you'll be provided with a question and several passages that might be relevant. And currently your task is to provide answer based on the question and passages.
<knowledge_base_anwser_instruction>
- Note that passages might not be relevant to the question, please only use the passages that are relevant.
- if there is no relevant passage, please answer using your knowledge.
- Answer should use the same original language as the question and follow markdown syntax.
</knowledge_base_anwser_instruction>
${Y(s)}
${e?B(e):""}
${z(t,r)}
</knowledge_base_qa_info>`;function re(e){return e.length===0?"<conversation/>":`<conversation>
${e.map(s=>`<${s.role}>${s.content}</${s.role}>`).join(`
`)}
</conversation>`}const G=e=>{const s=[`id="${e.id}"`];return e.username&&s.push(`username="${e.username}"`),e.nickname&&s.push(`nickname="${e.nickname}"`),e.avatar&&s.push(`avatar="${e.avatar}"`),`<speaker ${s.join(" ")} />`},ie=(e,s)=>`${G(e)}
${s}`,v=e=>{switch(e){case 1:return"urgent";case 2:return"high";case 3:return"normal";case 4:return"low";default:return"-"}},y=e=>{switch(e){case"backlog":return"○";case"running":return"●";case"paused":return"◐";case"completed":return"✓";case"failed":return"✗";case"canceled":return"⊘";default:return"?"}},H=e=>`${e.identifier} ${y(e.status)} ${e.status}  ${e.name||"(unnamed)"}  [${v(e.priority)}]`,ae=e=>{const s=[`Task created: ${e.identifier} "${e.name}"`,`  Status: ${y(e.status)} ${e.status}`,`  Priority: ${v(e.priority)}`];return e.parentLabel&&s.push(`  Parent: ${e.parentLabel}`),s.push(`  Instruction: ${e.instruction}`),s.join(`
`)},ce=(e,s,t)=>{if(e.length===0){const r=t?` with status "${t}"`:"";return`No subtasks found under ${s}${r}.`}return[`${e.length} task(s) under ${s}:`,...e.map(r=>`  ${H(r)}`)].join(`
`)},ue=e=>{const s=[`${e.identifier} ${e.name||"(unnamed)"}`,`Status: ${y(e.status)} ${e.status}     Priority: ${v(e.priority)}`,`Instruction: ${e.instruction}`];if(e.agentId&&s.push(`Agent: ${e.agentId}`),e.parent&&s.push(`Parent: ${e.parent.identifier}`),e.topicCount&&s.push(`Topics: ${e.topicCount}`),e.createdAt&&s.push(`Created: ${e.createdAt}`),e.dependencies&&e.dependencies.length>0&&s.push(`Dependencies: ${e.dependencies.map(t=>`${t.type}: ${t.dependsOn}`).join(", ")}`),e.subtasks&&e.subtasks.length>0){s.push(""),s.push("Subtasks:");for(const t of e.subtasks){const r=t.blockedBy?` ← blocks: ${t.blockedBy}`:"";s.push(`  ${t.identifier} ${y(t.status)} ${t.status} ${t.name||"(unnamed)"}${r}`)}}if(s.push(""),e.checkpoint&&Object.keys(e.checkpoint).length>0?s.push(`Checkpoint: ${JSON.stringify(e.checkpoint)}`):s.push("Checkpoint: (not configured, default: onAgentRequest=true)"),s.push(""),e.review&&Object.keys(e.review).length>0){const t=e.review.rubrics;if(s.push(`Review (maxIterations: ${e.review.maxIterations||3}):`),t)for(const r of t)s.push(`  - ${r.name} [${r.type}]${r.threshold?` ≥ ${Math.round(r.threshold*100)}%`:""}`)}else s.push("Review: (not configured)");if(e.workspace&&e.workspace.length>0){const t=i=>i.reduce((a,p)=>a+1+(p.children?t(p.children):0),0),r=t(e.workspace);s.push(""),s.push(`Workspace (${r}):`);const u=(i,a,p)=>{for(let h=0;h<i.length;h++){const n=i[h],d=n.fileType==="custom/folder",g=h===i.length-1,o=d?"📁":"📄",c=p?g?"└── ":"├── ":"",l=n.sourceTaskIdentifier?` ← ${n.sourceTaskIdentifier}`:"",m=!d&&n.size?`  ${n.size} chars`:"";if(s.push(`${a}${c}${o} ${n.title||"Untitled"} (${n.documentId})${l}${m}`),n.children){const f=p?a+(g?"    ":"│   "):a;u(n.children,f,!0)}}};u(e.workspace,"  ",!1)}if(e.activities&&e.activities.length>0){s.push(""),s.push("Activities:");for(const t of e.activities){const r=t.id?`  ${t.id}`:"";if(t.type==="topic"){const u=t.status||"completed";s.push(`  💬 ${t.time||""} Topic #${t.seq||"?"} ${t.title||"Untitled"} ${y(u)} ${u}${r}`)}else if(t.type==="brief"){const u=t.resolvedAction?` ✏️ ${t.resolvedAction}`:"",i=t.priority?` [${t.priority}]`:"";s.push(`  ${A(t.briefType||"")} ${t.time||""} Brief [${t.briefType}] ${t.title}${i}${u}${r}`)}else if(t.type==="comment"){const u=t.agentId?"🤖 agent":"👤 user",i=t.content||"",a=i.length>80?i.slice(0,80)+"...":i;s.push(`  💭 ${t.time||""} ${u} ${a}`)}}}return s.join(`
`)},le=(e,s)=>`Task ${e} updated:
  ${s.join(`
  `)}`,pe=(e,s)=>`Dependency added: ${e} now blocks on ${s}.
${e} will not start until ${s} is completed.`,de=(e,s)=>`Dependency removed: ${e} no longer blocks on ${s}.`,me=e=>`Brief created (${e.type}, ${e.priority}):
  "${e.title}"
  ${e.summary}

Brief ID: ${e.id}`,he=e=>`Checkpoint created. Task is now paused and waiting for user review.

Reason: ${e}

The user will see this as a "decision" brief and can resume the task after review.`,b=(e,s)=>{const t=new Date(e),u=(s||new Date).getTime()-t.getTime(),i=Math.floor(u/6e4);if(i<1)return"just now";if(i<60)return`${i}m ago`;const a=Math.floor(i/60);return a<24?`${a}h ago`:`${Math.floor(a/24)}d ago`},A=e=>{switch(e){case"decision":return"📋";case"result":return"✅";case"insight":return"💡";case"error":return"❌";default:return"📌"}},fe=(e,s)=>{const{task:t,activities:r,extraPrompt:u,workspace:i,parentTask:a}=e,p=[];u&&p.push(`<high_priority_instruction>
${u}
</high_priority_instruction>`);const h=r?.comments?.filter(o=>!o.agentId);if(h&&h.length>0){const o=h.map(c=>{const l=c.createdAt?b(c.createdAt,s):"",m=l?` time="${l}"`:"";return`<comment${c.id?` id="${c.id}"`:""}${m}>${c.content}</comment>`});p.push(`<user_feedback>
${o.join(`
`)}
</user_feedback>`)}const n=["<task>","<hint>This tag contains the complete task context. Do NOT call viewTask to re-fetch it.</hint>",`${t.identifier} ${t.name||t.identifier}`,`Status: ${y(t.status)} ${t.status}     Priority: ${v(t.priority)}`,`Instruction: ${t.instruction}`];t.description&&n.push(`Description: ${t.description}`),t.assigneeAgentId&&n.push(`Agent: ${t.assigneeAgentId}`),t.parentIdentifier&&n.push(`Parent: ${t.parentIdentifier}`);const d=r?.topics?.length??0;if(d>0&&n.push(`Topics: ${d}`),t.dependencies&&t.dependencies.length>0&&n.push(`Dependencies: ${t.dependencies.map(o=>`${o.type}: ${o.dependsOn}`).join(", ")}`),t.subtasks&&t.subtasks.length>0){n.push(""),n.push("Subtasks:");for(const o of t.subtasks){const c=o.blockedBy?` ← blocks: ${o.blockedBy}`:"";n.push(`  ${o.identifier} ${y(o.status)} ${o.status} ${o.name||"(unnamed)"}${c}`)}}if(n.push(""),t.review?.enabled&&t.review.rubrics&&t.review.rubrics.length>0){n.push(`Review (maxIterations: ${t.review.maxIterations||3}):`);for(const o of t.review.rubrics)n.push(`  - ${o.name} [${o.type}]${o.threshold?` ≥ ${Math.round(o.threshold*100)}%`:""}`)}else n.push("Review: (not configured)");if(i&&i.length>0){const o=m=>m.reduce((f,k)=>f+1+(k.children?o(k.children):0),0),c=o(i);n.push(""),n.push(`Workspace (${c}):`);const l=(m,f,k)=>{for(let w=0;w<m.length;w++){const $=m[w],x=$.fileType==="custom/folder",S=w===m.length-1,_=x?"📁":"📄",P=k?S?"└── ":"├── ":"",R=$.sourceTaskIdentifier?` ← ${$.sourceTaskIdentifier}`:"",I=!x&&$.size?`  ${$.size} chars`:"",C=$.createdAt?`  ${b($.createdAt,s)}`:"";if(n.push(`${f}${P}${_} ${$.title||"Untitled"} (${$.documentId})${R}${I}${C}`),$.children){const D=k?f+(S?"    ":"│   "):f;l($.children,D,!0)}}};l(i,"  ",!1)}const g=[];if(r?.topics)for(const o of r.topics){const c=b(o.createdAt,s),l=o.status||"completed",m=o.title||o.handoff?.title||"Untitled",f=o.id?`  ${o.id}`:"";g.push({text:`  💬 ${c} Topic #${o.seq||"?"} ${m} ${y(l)} ${l}${f}`,time:new Date(o.createdAt).getTime()})}if(r?.briefs)for(const o of r.briefs){const c=b(o.createdAt,s);let l="";o.resolvedAt&&o.resolvedAction&&(l=o.resolvedComment?` ✏️ ${o.resolvedComment}`:` ✅ ${o.resolvedAction}`);const m=o.priority?` [${o.priority}]`:"",f=o.id?`  ${o.id}`:"";g.push({text:`  ${A(o.type)} ${c} Brief [${o.type}] ${o.title}${m}${l}${f}`,time:new Date(o.createdAt).getTime()})}if(r?.comments)for(const o of r.comments){const c=o.agentId?"🤖 agent":"👤 user",l=o.createdAt?b(o.createdAt,s):"",m=o.content.length>80?o.content.slice(0,80)+"...":o.content;g.push({text:`  💭 ${l} ${c} ${m}`,time:o.createdAt?new Date(o.createdAt).getTime():0})}if(g.length>0&&(g.sort((o,c)=>o.time-c.time),n.push(""),n.push("Activities:"),n.push(...g.map(o=>o.text))),a){if(n.push(""),n.push(`<parentTask identifier="${a.identifier}" name="${a.name||a.identifier}">`),n.push(`  Instruction: ${a.instruction}`),a.subtasks&&a.subtasks.length>0){n.push(`  Subtasks (${a.subtasks.length}):`);for(const o of a.subtasks){const c=o.blockedBy?` ← blocks: ${o.blockedBy}`:"",l=o.identifier===t.identifier?" ◀ current":"";n.push(`    ${o.identifier} ${y(o.status)} ${o.status} ${o.name||"(unnamed)"}${c}${l}`)}}n.push("</parentTask>")}return n.push("</task>"),p.push(n.join(`
`)),p.join(`

`)},ge=e=>({messages:[{content:`You are a task execution summarizer. A topic (one round of agent execution) has just completed within a task. Generate a handoff summary for the next topic to read.

Output a JSON object with these fields:
- "title": A concise title summarizing what this topic accomplished (max 50 chars, same language as content)
- "summary": A 1-3 sentence summary of what was done and the key outcome
- "keyFindings": An array of key findings or decisions made (optional, max 5 items)
- "nextAction": What the next topic should do (optional, 1 sentence)

Rules:
- Focus on WHAT WAS ACCOMPLISHED, not what was asked
- Use the same language as the content
- Keep title short and specific (e.g. "制定8章书籍大纲" not "完成任务")
- summary should capture the essential outcome a new topic needs to know
- Output ONLY the JSON object, no markdown fences or explanations`,role:"system"},{content:`Task: ${e.taskName}
Task instruction: ${e.taskInstruction}

Last assistant response:
${e.lastAssistantContent}`,role:"user"}]}),$e={additionalProperties:!1,properties:{keyFindings:{items:{type:"string"},type:"array"},nextAction:{type:"string"},summary:{type:"string"},title:{type:"string"}},required:["title","summary"],type:"object"},ye=({allowDM:e,scene:s,systemPrompt:t,availableAgents:r,todoList:u,userName:i,messages:a})=>{const p=N(a),h=F.buildSupervisorPrompt({allowDM:e,availableAgents:r.filter(d=>d.id),conversationHistory:p,scene:s,systemPrompt:t,todoList:u,userName:i}),n=j.filter(d=>d.name===T.trigger_agent_dm?e:[T.finish_todo,T.create_todo].includes(d.name)?s==="productive":!0).map(d=>({function:d,type:"function"}));return{messages:[{content:h,role:"user"}],temperature:.3,tools:n}};export{we as BuiltinSystemRolePrompts,Ot as DEFAULT_REWRITE_QUERY,T as SupervisorToolName,j as SupervisorTools,$e as TASK_TOPIC_HANDOFF_SCHEMA,ve as apiPrompt,Te as availableToolPrompt,xe as availableToolsPrompts,O as buildGroupChatSystemPrompt,Se as buildGroupMembersXml,Ae as buildResourcesTreeText,E as buildSupervisorPrompt,fe as buildTaskRunPrompt,te as chainAbstractChunkText,se as chainAnswerWithContext,_e as chainCompressContext,Rt as chainInputCompletion,Pe as chainLangDetect,Ct as chainPickEmoji,Mt as chainRewriteQuery,Dt as chainSummaryAgentName,Nt as chainSummaryDescription,Ft as chainSummaryGenerationTitle,Re as chainSummaryHistory,jt as chainSummaryTags,Ie as chainSummaryTitle,ge as chainTaskTopicHandoff,Ce as chainTranslate,De as chatHistoryPrompts,Ne as compressContextSystemPrompt,je as compressContextUserPrompt,qe as consolidateGroupChatHistory,ye as contextSupervisorMakeDecision,re as conversationToText,Oe as crawlResultsPrompt,Me as devicePrompt,Ee as escapeXml,Fe as escapeXmlAttr,Ue as escapeXmlContent,Be as filesPrompts,Le as filterMessagesForAgent,Ye as formatAgentProfile,ze as formatBotPlatformContext,me as formatBriefCreated,he as formatCheckpointCreated,Ge as formatCommandOutput,He as formatCommandResult,pe as formatDependencyAdded,de as formatDependencyRemoved,We as formatDiscordContext,Ke as formatEditResult,Je as formatFileContent,Qe as formatFileList,Xe as formatFileSearchResults,Ve as formatGlobResults,Ze as formatGrepResults,et as formatGroupMembers,tt as formatKillResult,st as formatMemorySearchResults,ot as formatMoveResults,oe as formatMultipleFiles,nt as formatPageContentContext,rt as formatPageSelections,it as formatRenameResult,at as formatSearchResults,ie as formatSpeakerMessage,G as formatSpeakerTag,ae as formatTaskCreated,ue as formatTaskDetail,le as formatTaskEdited,H as formatTaskLine,ce as formatTaskList,ct as formatTodoStateSummary,ut as formatWriteResult,F as groupChatPrompts,lt as groupContextTemplate,pt as groupMemeberSpeakingPrompts,N as groupSupervisorPrompts,dt as historySummaryPrompt,ne as knowledgeBaseQAPrompts,mt as marketToolsResultsPrompt,ht as modelsResultsPrompt,ft as officialToolsResultsPrompt,gt as onlineDevicesPrompt,$t as pluginPrompts,v as priorityLabel,yt as promptAgentKnowledge,kt as promptFileContents,bt as promptNoSearchResults,wt as promptUserMemory,vt as resourcesTreePrompt,Tt as searchResultsPrompt,xt as skillPrompt,St as skillsPrompts,y as statusIcon,At as toolPrompt,_t as toolsPrompts};
