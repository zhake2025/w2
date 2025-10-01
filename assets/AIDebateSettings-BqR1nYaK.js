import"./ListSubheader-nlAWGOdJ.js";import{t as e}from"./folder-open-B32LmMvY.js";import{t}from"./plus-2xvXFUu6.js";import{$c as n,Cc as r,Ds as i,Es as a,Go as o,Ls as s,Ns as ee,Os as c,Sc as l,Wo as u,Xs as te,Yo as d,ac as f,bc as ne,bs as p,c as m,cc as h,ec as g,fc as _,fu as v,gl as y,iu as re,jc as b,lc as x,ls as ie,lu as ae,oc as S,pc as C,rr as oe,tc as se,uc as w,uu as T,vc as E,vu as D,xc as O,xs as ce}from"./index-CPmokYSd.js";import{t as le}from"./DropdownModelSelector-CFSyjygb.js";var k=D(v()),A=D(y()),j={MAX_ROUNDS:5,MAX_TOKENS_PER_ROUND:1e3,TIMEOUT_MINUTES:10,MODERATOR_ENABLED:!0,SUMMARY_ENABLED:!0},M=()=>{let v=re(),y=ae(),D=T(e=>e.settings.providers||[]),M=T(e=>e.settings.showAIDebateButton??!0),N=D.flatMap(e=>e.models.filter(e=>e.enabled).map(t=>({...t,providerName:e.name}))),[P,F]=(0,k.useState)({enabled:!1,maxRounds:j.MAX_ROUNDS,autoEndConditions:{consensusReached:!0,maxTokensPerRound:j.MAX_TOKENS_PER_ROUND,timeoutMinutes:j.TIMEOUT_MINUTES},roles:[],moderatorEnabled:j.MODERATOR_ENABLED,summaryEnabled:j.SUMMARY_ENABLED}),[I,L]=(0,k.useState)([]),[ue,R]=(0,k.useState)(!1),[z,B]=(0,k.useState)(null),[V,H]=(0,k.useState)(``),[U,W]=(0,k.useState)(``),[de,G]=(0,k.useState)(!1),[K,q]=(0,k.useState)(null),[J,Y]=(0,k.useState)({name:``,description:``,systemPrompt:``,modelId:``,color:`#2196f3`,stance:`pro`}),X=[{name:`正方辩手`,description:`支持观点的辩论者`,systemPrompt:`你是一位专业的正方辩论者，具有以下特点：

🎯 **核心职责**
- 坚定支持和论证正方观点
- 提供有力的证据和逻辑论证
- 反驳对方的质疑和攻击

💡 **辩论风格**
- 逻辑清晰，论证有力
- 引用具体事实、数据和案例
- 保持理性和专业的态度
- 语言简洁明了，重点突出

📋 **回应要求**
- 每次发言控制在150-200字
- 先明确表达立场，再提供论证
- 适当反驳对方观点
- 结尾要有力且令人信服

请始终站在正方立场，为你的观点据理力争！`,stance:`pro`,color:`#4caf50`},{name:`反方辩手`,description:`反对观点的辩论者`,systemPrompt:`你是一位犀利的反方辩论者，具有以下特点：

🎯 **核心职责**
- 坚决反对正方观点
- 揭示对方论证的漏洞和问题
- 提出有力的反驳和质疑

💡 **辩论风格**
- 思维敏锐，善于发现问题
- 用事实和逻辑拆解对方论证
- 提出替代方案或反面证据
- 保持批判性思维

📋 **回应要求**
- 每次发言控制在150-200字
- 直接指出对方观点的问题
- 提供反面证据或案例
- 语气坚定但保持礼貌

请始终站在反方立场，用理性和事实挑战对方观点！`,stance:`con`,color:`#f44336`},{name:`中立分析师`,description:`客观理性的分析者`,systemPrompt:`你是一位客观中立的分析师，具有以下特点：

🎯 **核心职责**
- 客观分析双方观点的优缺点
- 指出论证中的逻辑问题或亮点
- 提供平衡的视角和见解

💡 **分析风格**
- 保持绝对中立，不偏向任何一方
- 用理性和逻辑评估论证质量
- 指出可能被忽视的角度
- 寻找双方的共同点

📋 **回应要求**
- 每次发言控制在150-200字
- 平衡评价双方观点
- 指出论证的强弱之处
- 提出新的思考角度

请保持中立立场，为辩论提供客观理性的分析！`,stance:`neutral`,color:`#ff9800`},{name:`辩论主持人`,description:`控制节奏的主持人`,systemPrompt:`你是一位专业的辩论主持人，具有以下职责：

🎯 **核心职责**
- 引导辩论方向和节奏
- 总结各方要点和分歧
- 判断讨论是否充分
- 决定何时结束辩论

💡 **主持风格**
- 公正中立，不偏向任何一方
- 善于总结和归纳要点
- 能够发现讨论的关键问题
- 控制辩论节奏和质量

📋 **回应要求**
- 每次发言控制在150-200字
- 总结前面的主要观点
- 指出需要进一步讨论的问题
- 推动辩论深入进行

⚠️ **重要：结束辩论的条件**
只有在以下情况下才明确说"建议结束辩论"：
1. 已经进行了至少3轮完整辩论
2. 各方观点出现明显重复
3. 讨论已经非常充分，没有新的观点
4. 达成了某种程度的共识

在前几轮中，请专注于推动讨论深入，而不是急于结束！`,stance:`moderator`,color:`#9c27b0`},{name:`法律专家`,description:`从法律角度分析问题`,systemPrompt:`你是一位资深法律专家，从法律角度参与辩论：

🎯 **专业视角**
- 从法律法规角度分析问题
- 引用相关法条和判例
- 分析法律风险和合规性
- 考虑法律实施的可行性

💡 **专业特长**
- 熟悉各类法律法规
- 了解司法实践和判例
- 能够识别法律漏洞和风险
- 具备严谨的法律思维

📋 **发言要求**
- 每次发言150-200字
- 引用具体法条或判例
- 分析法律层面的利弊
- 保持专业和严谨

请从法律专业角度为辩论提供有价值的见解！`,stance:`neutral`,color:`#795548`},{name:`经济学家`,description:`从经济角度评估影响`,systemPrompt:`你是一位经济学专家，从经济角度参与辩论：

🎯 **专业视角**
- 分析经济成本和收益
- 评估市场影响和效率
- 考虑宏观和微观经济效应
- 预测长期经济后果

💡 **专业特长**
- 掌握经济学理论和模型
- 了解市场运行机制
- 能够量化分析影响
- 具备数据分析能力

📋 **发言要求**
- 每次发言150-200字
- 提供经济数据或理论支撑
- 分析成本效益
- 考虑经济可持续性

请从经济学角度为辩论提供专业的分析和建议！`,stance:`neutral`,color:`#607d8b`},{name:`技术专家`,description:`从技术可行性角度分析`,systemPrompt:`你是一位技术专家，从技术角度参与辩论：

🎯 **专业视角**
- 分析技术可行性和难度
- 评估技术风险和挑战
- 考虑技术发展趋势
- 预测技术实现的时间和成本

💡 **专业特长**
- 掌握前沿技术发展
- 了解技术实现的复杂性
- 能够评估技术方案
- 具备工程思维

📋 **发言要求**
- 每次发言150-200字
- 提供技术事实和数据
- 分析实现的技术路径
- 指出技术限制和可能性

请从技术专业角度为辩论提供切实可行的分析！`,stance:`neutral`,color:`#3f51b5`},{name:`社会学者`,description:`从社会影响角度思考`,systemPrompt:`你是一位社会学专家，从社会角度参与辩论：

🎯 **专业视角**
- 分析社会影响和后果
- 考虑不同群体的利益
- 评估社会公平性
- 关注文化和价值观影响

💡 **专业特长**
- 了解社会结构和动态
- 关注弱势群体权益
- 具备人文关怀
- 能够预测社会反应

📋 **发言要求**
- 每次发言150-200字
- 关注社会公平和正义
- 考虑不同群体的感受
- 分析社会接受度

请从社会学角度为辩论提供人文关怀的视角！`,stance:`neutral`,color:`#e91e63`},{name:`总结分析师`,description:`专门负责辩论总结分析`,systemPrompt:`你是一位专业的辞论总结分析师，具有以下特点：

🎯 **核心职责**
- 客观分析整个辩论过程
- 总结各方的核心观点和论据
- 识别争议焦点和共识点
- 提供平衡的结论和建议

💡 **分析风格**
- 保持绝对客观和中立
- 深度分析论证逻辑和质量
- 识别辩论中的亮点和不足
- 提供建设性的思考和启发

📋 **总结要求**
- 结构化呈现分析结果
- 平衡评价各方表现
- 指出论证的强弱之处
- 提供深度思考和建议
- 避免偏向任何一方

请为辩论提供专业、深入、平衡的总结分析！`,stance:`summary`,color:`#607d8b`},{name:`魔鬼代言人`,description:`专门提出反对意见`,systemPrompt:`你是"魔鬼代言人"，专门提出反对和质疑：

🎯 **核心职责**
- 对任何观点都提出质疑
- 寻找论证中的薄弱环节
- 提出极端或边缘情况
- 挑战常规思维

💡 **思维特点**
- 批判性思维极强
- 善于发现问题和漏洞
- 不怕提出不受欢迎的观点
- 推动深度思考

📋 **发言要求**
- 每次发言150-200字
- 必须提出质疑或反对
- 指出可能的风险和问题
- 挑战主流观点

请扮演好魔鬼代言人的角色，为辩论带来更深层的思考！`,stance:`con`,color:`#424242`},{name:`实用主义者`,description:`关注实际操作和效果`,systemPrompt:`你是一位实用主义者，关注实际可操作性：

🎯 **核心关注**
- 实际操作的可行性
- 实施成本和效果
- 现实条件和限制
- 短期和长期的实用性

💡 **思维特点**
- 务实理性，不空谈理论
- 关注具体实施细节
- 重视成本效益分析
- 追求实际效果

📋 **发言要求**
- 每次发言150-200字
- 关注实际操作层面
- 分析实施的难点和方法
- 提供具体可行的建议

请从实用主义角度为辩论提供务实的见解！`,stance:`neutral`,color:`#8bc34a`}];(0,k.useEffect)(()=>{(()=>{try{let e=localStorage.getItem(`aiDebateConfig`);if(e){let t=JSON.parse(e);F(t)}let t=localStorage.getItem(`aiDebateConfigGroups`);if(t){let e=JSON.parse(t);L(e)}}catch(e){console.error(`加载AI辩论配置失败:`,e)}})()},[]);let Z=e=>{try{localStorage.setItem(`aiDebateConfig`,JSON.stringify(e)),F(e)}catch(e){console.error(`保存AI辩论配置失败:`,e)}},Q=e=>{try{localStorage.setItem(`aiDebateConfigGroups`,JSON.stringify(e)),L(e)}catch(e){console.error(`保存分组配置失败:`,e)}},fe=()=>{B(null),H(``),W(``),R(!0)},pe=e=>{B(e),H(e.name),W(e.description),R(!0)},me=()=>{if(!V.trim())return;let e=Date.now(),t;if(z)t=I.map(t=>t.id===z.id?{...t,name:V.trim(),description:U.trim(),updatedAt:e}:t);else{let n={id:`group_${e}`,name:V.trim(),description:U.trim(),config:JSON.parse(JSON.stringify(P)),createdAt:e,updatedAt:e};t=[...I,n]}Q(t),R(!1)},he=e=>{if(window.confirm(`确定要删除这个配置分组吗？此操作不可撤销。`)){let t=I.filter(t=>t.id!==e);Q(t)}},ge=e=>{F(JSON.parse(JSON.stringify(e.config))),Z(e.config)},_e=e=>{let t=I.map(t=>t.id===e?{...t,config:JSON.parse(JSON.stringify(P)),updatedAt:Date.now()}:t);Q(t),m.success(`分组配置已更新！`,`更新成功`)},ve=()=>{v(`/settings`)},ye=()=>{q(null),Y({name:``,description:``,systemPrompt:``,modelId:``,color:`#2196f3`,stance:`pro`}),G(!0)},be=e=>{q(e),Y(e),G(!0)},xe=e=>{let t={...P,roles:P.roles.filter(t=>t.id!==e)};Z(t)},Se=()=>{if(!J.name||!J.systemPrompt)return;let e={id:K?.id||`role_${Date.now()}`,name:J.name,description:J.description||``,systemPrompt:J.systemPrompt,modelId:J.modelId,color:J.color||`#2196f3`,stance:J.stance||`pro`},t;t=K?P.roles.map(t=>t.id===K.id?e:t):[...P.roles,e];let n={...P,roles:t};Z(n),G(!1)},Ce=e=>{Y({...J,...e})},$=e=>{let t=[],n=N.length>0?N[0].id:``;switch(e){case`basic`:t=[X.find(e=>e.name===`正方辩手`),X.find(e=>e.name===`反方辩手`),X.find(e=>e.name===`辩论主持人`)];break;case`professional`:t=[X.find(e=>e.name===`正方辩手`),X.find(e=>e.name===`反方辩手`),X.find(e=>e.name===`中立分析师`),X.find(e=>e.name===`辩论主持人`)];break;case`expert`:t=[X.find(e=>e.name===`法律专家`),X.find(e=>e.name===`经济学家`),X.find(e=>e.name===`技术专家`),X.find(e=>e.name===`辩论主持人`)];break;case`comprehensive`:t=[X.find(e=>e.name===`正方辩手`),X.find(e=>e.name===`反方辩手`),X.find(e=>e.name===`中立分析师`),X.find(e=>e.name===`法律专家`),X.find(e=>e.name===`经济学家`),X.find(e=>e.name===`辩论主持人`)];break}let r=t.map((e,t)=>({id:`role_${Date.now()}_${t}`,name:e.name,description:e.description,systemPrompt:e.systemPrompt,modelId:n,color:e.color,stance:e.stance})),i={...P,enabled:!0,roles:r};Z(i);let a=e===`basic`?`基础辩论`:e===`professional`?`专业辩论`:e===`expert`?`专家论坛`:`全面分析`,o=N.length>0?N[0].name:`无可用模型`;m.success(`已成功配置"${a}"场景！包含 ${r.length} 个角色，已自动配置默认模型：${o}`,`场景配置成功`,{duration:8e3})};return(0,A.jsxs)(C,{sx:{flexGrow:1,display:`flex`,flexDirection:`column`,height:`100vh`,bgcolor:e=>e.palette.mode===`light`?n(e.palette.primary.main,.02):n(e.palette.background.default,.9)},children:[(0,A.jsx)(ne,{position:`fixed`,elevation:0,sx:{zIndex:e=>e.zIndex.drawer+1,bgcolor:`background.paper`,color:`text.primary`,borderBottom:1,borderColor:`divider`,backdropFilter:`blur(8px)`},children:(0,A.jsxs)(i,{children:[(0,A.jsx)(r,{edge:`start`,color:`inherit`,onClick:ve,"aria-label":`back`,sx:{color:e=>e.palette.primary.main},children:(0,A.jsx)(ce,{size:20})}),(0,A.jsx)(O,{variant:`h6`,component:`div`,sx:{flexGrow:1,fontWeight:600,backgroundImage:`linear-gradient(90deg, #9333EA, #754AB4)`,backgroundClip:`text`,color:`transparent`},children:`AI辩论设置`})]})}),(0,A.jsxs)(C,{sx:{flexGrow:1,overflowY:`auto`,p:{xs:1,sm:2},mt:8,"&::-webkit-scrollbar":{width:{xs:`4px`,sm:`6px`}},"&::-webkit-scrollbar-thumb":{backgroundColor:`rgba(0,0,0,0.1)`,borderRadius:`3px`}},children:[(0,A.jsxs)(b,{elevation:0,sx:{mb:2,borderRadius:2,border:`1px solid`,borderColor:`divider`,overflow:`hidden`,bgcolor:`background.paper`,boxShadow:`0 4px 12px rgba(0,0,0,0.05)`},children:[(0,A.jsxs)(C,{sx:{p:{xs:1.5,sm:2},bgcolor:`rgba(0,0,0,0.01)`},children:[(0,A.jsxs)(O,{variant:`subtitle1`,sx:{fontWeight:600,fontSize:{xs:`1rem`,sm:`1.1rem`},display:`flex`,alignItems:`center`},children:[(0,A.jsx)(p,{size:20,color:`#06b6d4`}),`基本设置`]}),(0,A.jsx)(O,{variant:`body2`,color:`text.secondary`,sx:{fontSize:{xs:`0.8rem`,sm:`0.875rem`}},children:`配置AI辩论功能的基础参数和选项`})]}),(0,A.jsx)(f,{}),(0,A.jsxs)(C,{sx:{p:{xs:1.5,sm:2}},children:[(0,A.jsx)(g,{control:(0,A.jsx)(c,{checked:P.enabled,onChange:e=>Z({...P,enabled:e.target.checked})}),label:`启用AI辩论功能`,sx:{mb:2}}),(0,A.jsx)(g,{control:(0,A.jsx)(c,{checked:M,onChange:e=>y(oe(e.target.checked))}),label:`在输入框显示AI辩论按钮`,sx:{mb:2}}),(0,A.jsxs)(C,{sx:{display:`grid`,gridTemplateColumns:{xs:`1fr`,md:`1fr 1fr`},gap:2},children:[(0,A.jsx)(a,{label:`最大辩论轮数`,value:P.maxRounds,onChange:e=>{let t=e.target.value;if(t===``)Z({...P,maxRounds:0});else{let e=parseInt(t);isNaN(e)||Z({...P,maxRounds:e})}},helperText:`输入数字，建议1-20轮`}),(0,A.jsx)(a,{label:`每轮最大Token数`,value:P.autoEndConditions.maxTokensPerRound,onChange:e=>{let t=e.target.value;if(t===``)Z({...P,autoEndConditions:{...P.autoEndConditions,maxTokensPerRound:0}});else{let e=parseInt(t);isNaN(e)||Z({...P,autoEndConditions:{...P.autoEndConditions,maxTokensPerRound:e}})}},helperText:`输入数字，建议100-4000`})]}),(0,A.jsxs)(C,{sx:{mt:2},children:[(0,A.jsx)(g,{control:(0,A.jsx)(c,{checked:P.moderatorEnabled,onChange:e=>Z({...P,moderatorEnabled:e.target.checked})}),label:`启用主持人角色`}),(0,A.jsx)(g,{control:(0,A.jsx)(c,{checked:P.summaryEnabled,onChange:e=>Z({...P,summaryEnabled:e.target.checked})}),label:`自动生成辩论总结`,sx:{ml:2}})]})]})]}),(0,A.jsxs)(b,{elevation:0,sx:{mb:2,borderRadius:2,border:`1px solid`,borderColor:`divider`,overflow:`hidden`,bgcolor:`background.paper`,boxShadow:`0 4px 12px rgba(0,0,0,0.05)`},children:[(0,A.jsxs)(C,{sx:{p:{xs:1.5,sm:2},bgcolor:`rgba(0,0,0,0.01)`},children:[(0,A.jsxs)(O,{variant:`subtitle1`,sx:{fontWeight:600,fontSize:{xs:`1rem`,sm:`1.1rem`},display:`flex`,alignItems:`center`},children:[(0,A.jsx)(p,{size:20,color:`#8b5cf6`}),`快速配置`]}),(0,A.jsx)(O,{variant:`body2`,color:`text.secondary`,sx:{fontSize:{xs:`0.8rem`,sm:`0.875rem`}},children:`为新手用户提供一键配置，快速创建完整的辩论场景`})]}),(0,A.jsx)(f,{}),(0,A.jsx)(C,{sx:{p:{xs:1.5,sm:2}},children:(0,A.jsxs)(C,{sx:{display:`grid`,gridTemplateColumns:{xs:`1fr`,md:`repeat(2, 1fr)`},gap:2},children:[(0,A.jsxs)(_,{variant:`outlined`,onClick:()=>$(`basic`),sx:{p:2,textAlign:`left`,flexDirection:`column`,alignItems:`flex-start`},children:[(0,A.jsx)(O,{variant:`subtitle1`,sx:{fontWeight:600,mb:.5},children:`🎯 基础辩论`}),(0,A.jsx)(O,{variant:`caption`,color:`text.secondary`,children:`正方 + 反方 + 主持人（3角色）`})]}),(0,A.jsxs)(_,{variant:`outlined`,onClick:()=>$(`professional`),sx:{p:2,textAlign:`left`,flexDirection:`column`,alignItems:`flex-start`},children:[(0,A.jsx)(O,{variant:`subtitle1`,sx:{fontWeight:600,mb:.5},children:`🏛️ 专业辩论`}),(0,A.jsx)(O,{variant:`caption`,color:`text.secondary`,children:`正方 + 反方 + 中立分析师 + 主持人（4角色）`})]}),(0,A.jsxs)(_,{variant:`outlined`,onClick:()=>$(`expert`),sx:{p:2,textAlign:`left`,flexDirection:`column`,alignItems:`flex-start`},children:[(0,A.jsx)(O,{variant:`subtitle1`,sx:{fontWeight:600,mb:.5},children:`🎓 专家论坛`}),(0,A.jsx)(O,{variant:`caption`,color:`text.secondary`,children:`法律专家 + 经济学家 + 技术专家 + 主持人（4角色）`})]}),(0,A.jsxs)(_,{variant:`outlined`,onClick:()=>$(`comprehensive`),sx:{p:2,textAlign:`left`,flexDirection:`column`,alignItems:`flex-start`},children:[(0,A.jsx)(O,{variant:`subtitle1`,sx:{fontWeight:600,mb:.5},children:`🌟 全面分析`}),(0,A.jsx)(O,{variant:`caption`,color:`text.secondary`,children:`6个不同角色的全方位辩论`})]})]})})]}),(0,A.jsxs)(b,{elevation:0,sx:{mb:2,borderRadius:2,border:`1px solid`,borderColor:`divider`,overflow:`hidden`,bgcolor:`background.paper`,boxShadow:`0 4px 12px rgba(0,0,0,0.05)`},children:[(0,A.jsx)(C,{sx:{p:{xs:1.5,sm:2},bgcolor:`rgba(0,0,0,0.01)`},children:(0,A.jsxs)(C,{sx:{display:`flex`,justifyContent:`space-between`,alignItems:`center`},children:[(0,A.jsxs)(C,{children:[(0,A.jsx)(O,{variant:`subtitle1`,sx:{fontWeight:600,fontSize:{xs:`1rem`,sm:`1.1rem`}},children:`辩论角色管理`}),(0,A.jsx)(O,{variant:`body2`,color:`text.secondary`,sx:{fontSize:{xs:`0.8rem`,sm:`0.875rem`}},children:`创建和管理AI辩论中的各种角色`})]}),(0,A.jsx)(_,{variant:`contained`,startIcon:(0,A.jsx)(t,{size:16}),onClick:ye,sx:{background:`linear-gradient(90deg, #9333EA, #754AB4)`,fontWeight:600,"&:hover":{background:`linear-gradient(90deg, #8324DB, #6D3CAF)`}},children:`添加角色`})]})}),(0,A.jsx)(f,{}),(0,A.jsx)(C,{sx:{p:{xs:1.5,sm:2}},children:P.roles.length===0?(0,A.jsx)(l,{severity:`info`,sx:{mb:2},children:`还没有配置任何辩论角色。点击"添加角色"开始配置。`}):(0,A.jsx)(C,{sx:{display:`flex`,flexDirection:`column`,gap:1},children:P.roles.map(e=>(0,A.jsxs)(C,{sx:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,p:1.5,border:1,borderColor:`divider`,borderLeft:`4px solid ${e.color||`#2196f3`}`,borderRadius:1,bgcolor:`background.paper`,transition:`all 0.2s ease`,"&:hover":{bgcolor:`action.hover`,borderColor:`primary.main`}},children:[(0,A.jsxs)(C,{sx:{display:`flex`,alignItems:`center`,flexGrow:1,minWidth:0},children:[(0,A.jsx)(p,{size:16,color:e.color||`#2196f3`}),(0,A.jsxs)(C,{sx:{minWidth:0,flexGrow:1},children:[(0,A.jsxs)(C,{sx:{display:`flex`,alignItems:`center`,gap:1,mb:.5},children:[(0,A.jsx)(O,{variant:`body2`,sx:{fontWeight:600},children:e.name}),(0,A.jsx)(E,{label:e.stance===`pro`?`正方`:e.stance===`con`?`反方`:e.stance===`neutral`?`中立`:e.stance===`moderator`?`主持人`:`总结`,size:`small`,sx:{bgcolor:e.color||`#2196f3`,color:`white`,fontWeight:600,height:`20px`,fontSize:`0.7rem`}})]}),(0,A.jsxs)(O,{variant:`caption`,color:`text.secondary`,sx:{display:`block`},children:[e.description,` • `,e.modelId?N.find(t=>t.id===e.modelId)?.name||`未知模型`:`默认模型`]})]})]}),(0,A.jsxs)(C,{sx:{display:`flex`,alignItems:`center`,gap:.5,ml:2},children:[(0,A.jsx)(r,{size:`small`,onClick:()=>be(e),title:`编辑角色`,children:(0,A.jsx)(o,{size:16})}),(0,A.jsx)(r,{size:`small`,onClick:()=>xe(e.id),color:`error`,title:`删除角色`,children:(0,A.jsx)(u,{size:16})})]})]},e.id))})})]}),(0,A.jsxs)(b,{elevation:0,sx:{mb:2,borderRadius:2,border:`1px solid`,borderColor:`divider`,overflow:`hidden`,bgcolor:`background.paper`,boxShadow:`0 4px 12px rgba(0,0,0,0.05)`},children:[(0,A.jsx)(C,{sx:{p:{xs:1.5,sm:2},bgcolor:`rgba(0,0,0,0.01)`},children:(0,A.jsxs)(C,{sx:{display:`flex`,justifyContent:`space-between`,alignItems:`center`},children:[(0,A.jsxs)(C,{children:[(0,A.jsx)(O,{variant:`subtitle1`,sx:{fontWeight:600,fontSize:{xs:`1rem`,sm:`1.1rem`}},children:`配置分组管理`}),(0,A.jsx)(O,{variant:`body2`,color:`text.secondary`,sx:{fontSize:{xs:`0.8rem`,sm:`0.875rem`}},children:`保存和管理不同用途的辩论配置`})]}),(0,A.jsx)(_,{variant:`contained`,startIcon:(0,A.jsx)(t,{size:16}),onClick:fe,sx:{background:`linear-gradient(90deg, #f59e0b, #d97706)`,fontWeight:600,"&:hover":{background:`linear-gradient(90deg, #d97706, #b45309)`}},children:`新建分组`})]})}),(0,A.jsx)(f,{}),(0,A.jsx)(C,{sx:{p:{xs:1.5,sm:2}},children:I.length===0?(0,A.jsx)(l,{severity:`info`,children:`还没有保存任何配置分组。点击"新建分组"开始创建。`}):(0,A.jsx)(C,{sx:{display:`flex`,flexDirection:`column`,gap:1},children:I.map(t=>(0,A.jsxs)(C,{sx:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,p:1.5,border:1,borderColor:`divider`,borderRadius:1,bgcolor:`background.paper`,transition:`all 0.2s ease`,"&:hover":{bgcolor:`action.hover`,borderColor:`primary.main`}},children:[(0,A.jsxs)(C,{sx:{display:`flex`,alignItems:`center`,flexGrow:1,minWidth:0},children:[(0,A.jsx)(e,{size:16,color:`text.secondary`}),(0,A.jsxs)(C,{sx:{minWidth:0,flexGrow:1},children:[(0,A.jsx)(O,{variant:`body2`,sx:{fontWeight:600,mb:.5},children:t.name}),(0,A.jsxs)(O,{variant:`caption`,color:`text.secondary`,sx:{display:`block`},children:[t.config.roles.length,` 个角色 • `,new Date(t.updatedAt).toLocaleDateString()]})]})]}),(0,A.jsxs)(C,{sx:{display:`flex`,alignItems:`center`,gap:.5,ml:2},children:[(0,A.jsx)(_,{size:`small`,onClick:()=>ge(t),variant:`outlined`,sx:{minWidth:`auto`,px:1},children:`加载`}),(0,A.jsx)(r,{size:`small`,onClick:()=>pe(t),title:`编辑`,children:(0,A.jsx)(o,{size:16})}),(0,A.jsx)(r,{size:`small`,onClick:()=>_e(t.id),title:`保存当前配置到此分组`,color:`primary`,children:(0,A.jsx)(d,{size:16})}),(0,A.jsx)(r,{size:`small`,onClick:()=>{B(null),H(`${t.name} - 副本`),W(`基于 ${t.name} 创建的副本`),R(!0)},title:`复制`,children:(0,A.jsx)(ie,{size:16})}),(0,A.jsx)(r,{size:`small`,onClick:()=>he(t.id),color:`error`,title:`删除`,children:(0,A.jsx)(u,{size:16})})]})]},t.id))})})]})]}),(0,A.jsxs)(w,{open:de,onClose:()=>G(!1),maxWidth:`md`,fullWidth:!0,children:[(0,A.jsx)(S,{children:K?`编辑角色`:`添加新角色`}),(0,A.jsxs)(h,{children:[!K&&(0,A.jsxs)(C,{sx:{mb:3},children:[(0,A.jsx)(O,{variant:`subtitle2`,sx:{mb:1},children:`快速模板：`}),(0,A.jsx)(C,{sx:{display:`flex`,gap:1,flexWrap:`wrap`},children:X.map((e,t)=>(0,A.jsx)(E,{label:e.name,onClick:()=>Ce(e),sx:{bgcolor:e.color,color:`white`}},t))}),(0,A.jsx)(f,{sx:{my:2}})]}),(0,A.jsxs)(C,{sx:{display:`grid`,gap:2},children:[(0,A.jsx)(a,{label:`角色名称`,value:J.name||``,onChange:e=>Y({...J,name:e.target.value}),required:!0}),(0,A.jsx)(a,{label:`角色描述`,value:J.description||``,onChange:e=>Y({...J,description:e.target.value}),multiline:!0,rows:2}),(0,A.jsxs)(se,{sx:{mb:2},children:[(0,A.jsx)(te,{children:`角色立场`}),(0,A.jsxs)(ee,{value:J.stance||`pro`,onChange:e=>Y({...J,stance:e.target.value}),children:[(0,A.jsx)(s,{value:`pro`,children:`正方`}),(0,A.jsx)(s,{value:`con`,children:`反方`}),(0,A.jsx)(s,{value:`neutral`,children:`中立`}),(0,A.jsx)(s,{value:`moderator`,children:`主持人`}),(0,A.jsx)(s,{value:`summary`,children:`总结`})]})]}),(0,A.jsxs)(C,{sx:{mb:2},children:[(0,A.jsx)(O,{variant:`subtitle2`,sx:{mb:1},children:`指定模型（可选）`}),(0,A.jsx)(le,{selectedModel:N.find(e=>e.id===J.modelId)||null,availableModels:N,handleModelSelect:e=>Y({...J,modelId:e?.id||``})}),(0,A.jsx)(O,{variant:`caption`,color:`text.secondary`,sx:{mt:.5,display:`block`},children:`留空则使用默认模型`})]}),(0,A.jsx)(a,{label:`系统提示词`,value:J.systemPrompt||``,onChange:e=>Y({...J,systemPrompt:e.target.value}),multiline:!0,rows:6,required:!0,helperText:`定义这个AI角色的行为、立场和回应风格`}),(0,A.jsxs)(C,{children:[(0,A.jsx)(O,{variant:`subtitle2`,sx:{mb:1},children:`角色颜色`}),(0,A.jsx)(`input`,{type:`color`,value:J.color||`#2196f3`,onChange:e=>Y({...J,color:e.target.value}),style:{width:`100%`,height:`40px`,border:`none`,borderRadius:`4px`}})]})]})]}),(0,A.jsxs)(x,{children:[(0,A.jsx)(_,{onClick:()=>G(!1),children:`取消`}),(0,A.jsx)(_,{onClick:Se,variant:`contained`,disabled:!J.name||!J.systemPrompt,children:`保存`})]})]}),(0,A.jsxs)(w,{open:ue,onClose:()=>R(!1),maxWidth:`sm`,fullWidth:!0,children:[(0,A.jsx)(S,{children:z?`编辑配置分组`:`新建配置分组`}),(0,A.jsx)(h,{children:(0,A.jsxs)(C,{sx:{display:`grid`,gap:2,mt:1},children:[(0,A.jsx)(a,{label:`分组名称`,value:V,onChange:e=>H(e.target.value),required:!0,placeholder:`例如：学术辩论、商业分析、技术讨论`}),(0,A.jsx)(a,{label:`分组描述`,value:U,onChange:e=>W(e.target.value),multiline:!0,rows:3,placeholder:`描述这个配置分组的用途和特点`}),!z&&(0,A.jsx)(l,{severity:`info`,children:`将保存当前的所有配置（包括角色设置、轮数限制等）到这个分组中。`})]})}),(0,A.jsxs)(x,{children:[(0,A.jsx)(_,{onClick:()=>R(!1),children:`取消`}),(0,A.jsx)(_,{onClick:me,variant:`contained`,disabled:!V.trim(),startIcon:(0,A.jsx)(d,{size:20}),children:z?`保存修改`:`创建分组`})]})]})]})};export{M as default};