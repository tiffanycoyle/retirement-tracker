// ═══════════════════════════════════════════
// 1. CONTENT CONFIGURATION (Edit your text here)
// ═══════════════════════════════════════════
const projectContent = {
    // General Buttons
    btnNext: "Next",
    btnContinue: "Continue",
    btnStart: "Let's do it",
    btnShowResults: "Show me where I stand",

    // Screen 0: Opener
    openerContext: "Marcus Cole &middot; Before your call",
    openerTitle: "Are you on track<br>for retirement?",
    openerBody: "Put in your numbers. I'll do the math.",
    metaTime: "Under 2 minutes",
    metaQuestions: "4 questions",

    // Screen 1: Gut Check
    q1Eyebrow: "Gut check",
    q1Heading: "Before we look at any numbers, how are you feeling about retirement right now?",
    q1Helper: "There's no wrong answer here. I ask because it's useful to know where your head is before the math shows up.",
    moodOptions: [
        { id: "behind", emoji: "😟", label: "Behind" },
        { id: "unsure", emoji: "🤔", label: "Not sure" },
        { id: "ontrack", emoji: "😌", label: "On track" }
    ],

    // Screen 2: Age (Sentence Completion)
    q2Progress: "<span class='current-num'>1</span> of 4",
    q2Part1: "I'm",
    q2Part2: "years old.",
    q2Part3: "I'd like to stop working at",
    q2Part4: ".",
    q2Helper: "These two numbers set the timeline. Everything else is built on top of how many years you have between now and when you want to stop.",

    // Screen 3: Interstitial
    interstitialTitle: "Good. Now I need<br>three numbers.",
    interstitialBody: "Your income, what you've saved so far, and what you're putting away each month. That's all the math needs. If you don't know the exact amounts, a rough estimate is fine. I'd rather have a ballpark than nothing.",

    // Screen 4: Income
    q3Progress: "<span class='current-num'>2</span> of 4",
    q3Heading: "What does your household bring in each year?",
    q3Helper: "Before taxes. Round to the nearest ten thousand if you're not sure.",

    // Screen 5: Savings
    q4Progress: "<span class='current-num'>3</span> of 4",
    q4Heading: "What have you saved for retirement so far?",
    q4Helper: "Add it all up: 401(k), IRA, that Roth you opened and forgot about, any brokerage accounts earmarked for retirement. One number, everything together.",

    // Screen 6: Monthly
    q5Progress: "<span class='current-num'>4</span> of 4",
    q5Heading: "How much are you putting away each month?",
    q5Helper: "Include your own contributions and any employer match. If your company puts in 4% and you put in 6%, add both. A rough number works here.",

    // Screen 7: Loading
    loadingText: "Running your numbers...",

    // Screen 8: Results - Explainer & Headers
    printHeaderTitle: "Your Retirement Readiness Summary",
    printHeaderSub: "Prepared before your call with Marcus Cole",
    ringLabel: "funded",
    explainerTitle: "Your starting point",
    calcLabelIncome: "Annual income",
    calcLabelSavings: "Annual savings at your current pace",
    calcLabelExpenses: "Estimated annual spending",
    calcLabelTarget: "Retirement target (25x your spending)",
    calcLabelProjected: "Projected savings by retirement",

    // Screen 8: Results - Verdict (Ahead of Target)
    verdictAheadTitle: "You're ahead of where you need to be.",
    verdictAheadBodyOnTrack: "You walked in thinking you were in good shape, and your numbers point in that direction. If you keep saving at this rate, you'll end up with more than your retirement target by the time you stop working. So the question isn't whether you're going to make it. It's what you want to do with the extra room: retire earlier, spend more freely, or leave something behind.",
    verdictAheadBodyUnsure: "You weren't sure where you stood. That's the most common answer I get, by the way, even from people who are doing well. The math puts you ahead of your retirement target. That means the years of saving and not touching it have actually added up to something real. \"Ahead\" by itself doesn't tell you what to do next, though. That's where the conversation starts.",
    verdictAheadBodyBehind: "You came in feeling behind, and I get why. Most of my clients feel that way the first time we sit down, even the ones whose math looks like yours. But based on what you entered, you're actually ahead of your retirement target. People carry the worry around for years, then they finally look at the actual number and it's better than they thought. That's worth understanding, and it's where we'll start.",

    // Screen 8: Results - Verdict (On Track)
    verdictOnTrackTitle: "You're on track.",
    verdictOnTrackBodyOnTrack: "Your gut was right. Based on what you entered, you're close to your retirement target, which is a better position than most people your age are in. You don't need a dramatic change to get there. The real question is whether \"close\" is close enough for the life you actually want to live, and whether small adjustments would give you more breathing room without changing how you live today.",
    verdictOnTrackBodyUnsure: "You weren't sure, and now you have a number. If you keep saving at this rate, you'll land near your retirement target. That puts you ahead of most people I sit down with for the first time. The question isn't really whether you'll make it. It's whether the target itself is right for the kind of retirement you actually want.",
    verdictOnTrackBodyBehind: "I know you came in feeling behind, but the math tells a different story. Running the numbers forward, you're close to your retirement target. That gap between how it feels and what the numbers say usually comes from not having looked at all the pieces together in one place before. Now you have.",

    // Screen 8: Results - Verdict (Meaningful Shortfall)
    verdictShortfallTitle: "You're not there yet.",
    verdictShortfallBodyOnTrack: "I want to be straight with you, because that's how I'd want someone to be with me. Based on what you entered, you're on pace for about {{projected}}. Your current target is {{target}}. That's a meaningful shortfall. Most calculators would show you that number and leave you sitting with it, and that's where people close the tab. I'm not going to do that. Below are three things that would actually move your number.",
    verdictShortfallBodyUnsure: "Now you know. If you keep saving at this rate, you'll end up with around {{projected}} in your retirement fund by the time you stop working. From the answers you gave, your target should be around {{target}}. That's a big difference between where you're headed and where you need to be, but you just took the first step in closing it by getting to know your actual numbers. Three ways to move them are below.",
    verdictShortfallBodyBehind: "You had a feeling, and your numbers point in that direction. Running the numbers forward, you're on pace for about {{projected}}. Your current target is {{target}}. That's a meaningful shortfall. But this is the part most calculators get wrong: they show you the gap and leave you there. People close the tab and don't come back. I'd rather show you what closing the gap actually looks like. Three ways to move it are below.",

    // Screen 8: Results - Strategies
    strategySectionTitle: "Here's what would change it.",
    strategyCardSaveTitle: "Save more each month",
    strategyCardTimeTitle: "Give it more time",
    strategyCardPartTimeTitle: "Work part-time in retirement",
    sliderSaveLabel: "Monthly savings",
    sliderTimeLabel: "Retirement age",
    sliderPartTimeLabel: "Part-time annual income",
    sliderPartTimeHelper: "This is the lever most people don't think about. Even a modest income in retirement, part-time consulting, teaching a class, working a few days a week, means you need a lot less saved on day one.",

    // Screen 8: Results - Summary Card
    summaryCardTitle: "Your adjusted picture",
    summaryLabelCurrent: "Current monthly savings",
    summaryLabelOriginalAge: "Original retirement age",
    summaryLabelAdjSav: "Adjusted savings",
    summaryLabelAdjAge: "Adjusted retirement age",
    summaryLabelAdjPt: "Part-time income",
    summaryLabelResult: "Projected result",

    // Screen 8: Results - Fine Print
    finePrintToggle: "How the math works",
    finePrintProjected: "If nothing changes, you'll have",
    finePrintTarget: "What you need",
    finePrintGapDef: "The difference",
    finePrintReturnLabel: "Assumed annual return",
    finePrintReturnValue: "7%",
    finePrintMethodLabel: "Method",
    finePrintMethodValue: "25x annual spending",

    // Screen 8: Results - Actions & Send Form
    actionsSectionTitle: "Bring this to the call.",
    actionsSectionIntro: "You've got a real number now instead of a feeling. Two ways to make sure we use it when we sit down.",
    actionCardSaveTitle: "Save your plan",
    actionCardSaveDesc: "Print this page or save it as a PDF. Bring your numbers to the meeting so we're both looking at the same thing.",
    actionCardSendTitle: "Send it to Marcus",
    actionCardSendDesc: "I'll have your numbers before you walk in. We skip the recap and get straight to planning.",
    sendFormTitle: "Send your numbers ahead of the call",
    sendFormIntro: "I get your numbers before we meet, you skip the recap, and we get straight to planning.",
    sendFormNameLabel: "Your name",
    sendFormEmailLabel: "Your email",
    sendFormNoteLabel: "Anything you want to make sure we cover on the call? <span style='color:var(--ink-tertiary)'>(optional)</span>",
    sendFormCancel: "Cancel",
    sendFormSubmit: "Send to Marcus",
    sendSuccessText: "Done. I'll have your numbers before the call.",

    // Screen 8: Results - Footer
    ctaBody: "This is a starting answer, not a final one. The real planning happens when we sit down, and it goes a lot faster now that you already know where you stand.",
    ctaReady: "You're ready for the call."
};