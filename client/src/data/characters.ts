export interface Character {
  name: string;
  av: string;
  bg: string;
  verse: string;
  reflection: string;
  disc: string;
  qualities: string[];
  clues: Array<{
    b: string;
    t: string;
  }>;
}

export const characters: Character[] = [
  {
    name: "David",
    av: "D",
    bg: "#7F77DD",
    verse: "1 Samuel 17 · 2 Samuel 11 · Psalms",
    qualities: ["Brave", "Creative", "Passionate", "Repentant"],
    reflection:
      "David was brave, creative, and passionate — a man after God's own heart. Yet he also was prideful, committed adultery, and arranged a murder. His story shows that even the most gifted people fail deeply. But David has left us a model of true repentance: he never ran from God after his sin — he ran back to Him.",
    disc: "David pressed on after his worst failures because he knew God's mercy was greater than his sin. How does the cross of Jesus make it possible for us to press on after we fail?",
    clues: [
      {
        b: "#AFA9EC",
        t: 'I am brave, creative, and deeply passionate. I have always faced every challenge with faith — not in my own strength, but in God\'s.',
      },
      {
        b: "#5DCAA5",
        t: "I had already been fighting lions and bears for years before I faced my greatest enemy. I had never given up on the flock God gave me to protect.",
      },
      {
        b: "#EF9F27",
        t: "Even after my greatest failures, I never gave up on God. I have been pressing on in repentance and faith my whole life. I am known as a humble man after God's own heart.",
      },
      {
        b: "#ED93B1",
        t: "I have written more songs to God than anyone else in history. I was a shepherd, a warrior, and a king. I never let my sin define me — I always moved on with God's grace.",
      },
    ],
  },
  {
    name: "Esther",
    av: "E",
    bg: "#D4537E",
    verse: "Esther 4:14 · 'For such a time as this'",
    qualities: ["Courageous", "Loyal", "Strategic", "Selfless"],
    reflection:
      "Esther was courageous, loyal, and strategic. She could have used her position for personal comfort and safety, but she chose to risk everything for her people. She has shown every generation that obedience to God often requires stepping forward when fear says stay back.",
    disc: "Esther was placed in the palace 'for such a time as this.' God had been preparing her without her knowing it. How does this reflect the way Jesus — sent 'in the fullness of time' — was God's ultimate plan to save His people?",
    clues: [
      {
        b: "#AFA9EC",
        t: "I am brave, loyal, and deeply strategic. I have always put the needs of others before my own comfort and safety.",
      },
      {
        b: "#5DCAA5",
        t: "I had been living in a royal palace and had been hiding my true identity for a long time before God called me to act.",
      },
      {
        b: "#EF9F27",
        t: "I did not give up when I was terrified. I chose to move forward with courage, saying: 'If I perish, I perish.' I have been carrying on in faith ever since.",
      },
      {
        b: "#ED93B1",
        t: "I have shown the world that one courageous and faithful person, placed by God at exactly the right moment, can save an entire nation from destruction.",
      },
    ],
  },
  {
    name: "Paul",
    av: "P",
    bg: "#1D9E75",
    verse: "Philippians 3:14 · 4:13 · Acts 9",
    qualities: ["Determined", "Passionate", "Persistent", "Transformed"],
    reflection:
      "Paul was determined, passionate, and intellectually gifted. But before his conversion, he was violent, prideful, and self-righteous — he persecuted and killed Christians. His transformation is one of the greatest in history. He has taught us that no past is too dark for God's grace.",
    disc: "Paul said 'I press on toward the goal' and 'I can do all things through Christ.' He never let his dark past define him — he moved on and carried on. How does knowing that Jesus paid for our worst moments free us to keep pressing on?",
    clues: [
      {
        b: "#AFA9EC",
        t: "I am determined, passionate, and persistent. I have kept up my work for God through prison, shipwrecks, beatings, and great suffering.",
      },
      {
        b: "#5DCAA5",
        t: "I had been persecuting and killing Christians before a blinding light on a road changed everything. I had never imagined I would become the very thing I hated.",
      },
      {
        b: "#EF9F27",
        t: "I have never given up, even in chains. I have always pressed on toward the prize of the high calling in Christ Jesus. I never let my terrible past stop me from moving forward.",
      },
      {
        b: "#ED93B1",
        t: "I have written letters that changed the world — and I have been carrying on the mission of Jesus even from a prison cell. To live is Christ, to die is gain.",
      },
    ],
  },
  {
    name: "Joseph",
    av: "J",
    bg: "#BA7517",
    verse: "Genesis 37–50 · 'You intended harm — God intended good'",
    qualities: ["Faithful", "Patient", "Honest", "Forgiving"],
    reflection:
      "Joseph was faithful, patient, and honest. He suffered betrayal, slavery, and false imprisonment — yet he never became bitter or resentful. He has modeled for us what it looks like to trust God's plan even when it makes no sense. His ability to forgive completely is extraordinary.",
    disc: "Joseph told his brothers: 'You intended to harm me, but God intended it for good.' This is a picture of Jesus — betrayed, rejected, and killed, yet God used it all to save the world. How does Joseph's story point us to Christ?",
    clues: [
      {
        b: "#AFA9EC",
        t: "I am patient, honest, and faithful. I have always trusted God's plan, even during years of slavery and false imprisonment.",
      },
      {
        b: "#5DCAA5",
        t: "I had been working faithfully as a servant and had been sitting in prison for years before God suddenly raised me to the highest position in the land.",
      },
      {
        b: "#EF9F27",
        t: "I never fell behind in my work and never gave up my integrity, even when I was falsely accused and forgotten in a dark prison.",
      },
      {
        b: "#ED93B1",
        t: "I have forgiven the brothers who sold me into slavery. I have risen from the pit to the palace. I have learned that God's plan is always better than my pain.",
      },
    ],
  },
  {
    name: "Ruth",
    av: "R",
    bg: "#3B6D11",
    verse: "Ruth 1:16 · Matthew 1:5 — Part of the lineage of Christ",
    qualities: ["Loyal", "Hardworking", "Selfless", "Faithful"],
    reflection:
      "Ruth was loyal, hardworking, and selfless. She gave up her homeland, her people, and her future security to stay with her mother-in-law. There is no record of her ever complaining. She has become one of the greatest examples of covenant love in the entire Bible — and God honored her by placing her in the family line of Jesus.",
    disc: "Ruth's steadfast love — even when she had nothing to gain — is a reflection of God's own loyal love (hesed) for us. How does Ruth's story point to the way Jesus left His 'homeland' in heaven to come and save us?",
    clues: [
      {
        b: "#AFA9EC",
        t: "I am loyal, hardworking, and deeply selfless. I have always put love for family above my own comfort, security, and future.",
      },
      {
        b: "#5DCAA5",
        t: "I had left my homeland, my family, and everything I had ever known. I had been walking toward an uncertain future with nothing but faith and love.",
      },
      {
        b: "#EF9F27",
        t: "I have never given up even through grief, poverty, and uncertainty. I never fell behind in my faithfulness. Where you go, I will go — your God will be my God.",
      },
      {
        b: "#ED93B1",
        t: "I have kept up faithful work every single day, and my loyalty came along with the most unexpected blessings. God had been preparing a place for me in the very family line of Jesus Himself.",
      },
    ],
  },
  {
    name: "Moses",
    av: "M",
    bg: "#185fa5",
    verse: "Exodus 3–14 · Numbers 12:3 · Hebrews 11:24–27",
    qualities: ["Humble", "Obedient", "Intercessive", "Leader"],
    reflection:
      "Moses was humble, obedient, and intercessive — he regularly prayed and pleaded for the people even when they deserved judgment. But he also was insecure, made excuses, and let anger get the best of him. He has shown us that God uses broken, reluctant people — not just naturally confident heroes.",
    disc: "Moses stood between God's wrath and the people, interceding for them. How is this a picture of what Jesus does for us — standing between us and the judgment we deserve?",
    clues: [
      {
        b: "#AFA9EC",
        t: "I am the most humble person ever to walk the earth, according to the Bible itself. I have led an entire nation out of slavery, but I never sought glory for myself.",
      },
      {
        b: "#5DCAA5",
        t: "I had been living as a shepherd in the desert for 40 years before God appeared to me in a burning bush. I had already fled from a great palace and a powerful identity.",
      },
      {
        b: "#EF9F27",
        t: "Even when the people constantly complained, I never gave up interceding for them. I have been carrying on God's mission despite my own fear, insecurity, and failures.",
      },
      {
        b: "#ED93B1",
        t: "I have spoken face to face with God like a friend. I had been leading two million people through a wilderness for 40 years. I never made it to the Promised Land — but I pressed on until my last breath.",
      },
    ],
  },
  {
    name: "Daniel",
    av: "D",
    bg: "#533089",
    verse: "Daniel 1 · 6 · 'He has rescued me from the lions'",
    qualities: ["Disciplined", "Courageous", "Faithful", "Integrity"],
    reflection:
      "Daniel was disciplined, courageous, and faithful from his teenage years to old age. He never once compromised his faith, even when threatened with death. He was not arrogant about his gifts — he consistently gave God all the glory. He has set one of the most consistent examples of integrity in the entire Bible.",
    disc: "Daniel kept praying even when it was made illegal — he would not stop talking to God. How does Daniel's story challenge us to keep pressing on in our faith even when it costs us something?",
    clues: [
      {
        b: "#AFA9EC",
        t: "I am disciplined, faithful, and deeply courageous. I have never compromised my faith — not even under threat of death in a foreign country.",
      },
      {
        b: "#5DCAA5",
        t: "I had been praying three times a day my entire life. Even when a new law made it illegal, I had already decided long before that nothing would make me stop.",
      },
      {
        b: "#EF9F27",
        t: "I never gave up on God even in the lions' den. I have been keeping up my devotion to God since I was a teenager, and I never let fear make me fall behind in my faith.",
      },
      {
        b: "#ED93B1",
        t: "I have interpreted dreams for kings and have served faithfully in the most powerful governments of my time — always giving God the credit. My integrity has never wavered.",
      },
    ],
  },
  {
    name: "Mary",
    av: "M",
    bg: "#9b5a9b",
    verse: "Luke 1:38 · 'Let it be to me according to your word'",
    qualities: ["Humble", "Obedient", "Courageous", "Faithful"],
    reflection:
      "Mary was humble, obedient, and courageous. When the angel came, she did not understand everything — but she said yes anyway. Saying yes cost her reputation, her comfort, and eventually her heart, as she watched her son die. She has shown us what it looks like to trust God's plan even when we cannot see the whole picture.",
    disc: "Mary said 'Let it be to me according to your word' — she submitted to God's plan even though it would cost her everything. How does Mary's willingness to say yes to God point us to Jesus, who also said yes to God's plan even though it led to the cross?",
    clues: [
      {
        b: "#AFA9EC",
        t: "I am humble, obedient, and deeply courageous. I have said yes to God's plan even when I did not understand it, even when it cost me everything.",
      },
      {
        b: "#5DCAA5",
        t: "I had been a young, ordinary woman when an angel appeared to me. I had never imagined that my life would be turned upside down by God's calling.",
      },
      {
        b: "#EF9F27",
        t: "I never gave up on God, even as I watched my son suffer and die. I have been carrying on in faith through the deepest pain a mother could know.",
      },
      {
        b: "#ED93B1",
        t: "I have been blessed among all women because I said yes to God. My son is the Savior of the world. I have pondered all these things in my heart.",
      },
    ],
  },
  {
    name: "Abraham",
    av: "A",
    bg: "#C67C4E",
    verse: "Genesis 12:1–3 · Hebrews 11:8–10 · 'Father of Faith'",
    qualities: ["Faithful", "Obedient", "Hopeful", "Trusting"],
    reflection:
      "Abraham was called 'the father of faith' because he left everything he knew and followed God into an unknown land. He did not see the fulfillment of God's promises during his lifetime, yet he never stopped believing. He has shown us what true faith looks like — trusting God when we cannot see the outcome.",
    disc: "Abraham believed God and it was credited to him as righteousness. He is a picture of all who believe in Jesus — we are justified by faith, not by our works. How does Abraham's faith point us to faith in Christ?",
    clues: [
      {
        b: "#AFA9EC",
        t: "I am faithful, obedient, and deeply hopeful. I have left my homeland, my family, and everything I knew to follow God into an unknown future.",
      },
      {
        b: "#5DCAA5",
        t: "I had been living a comfortable life when God called me to move on. I had never seen the land God promised me, yet I had already decided to trust Him completely.",
      },
      {
        b: "#EF9F27",
        t: "I never gave up on God's promise, even though I waited decades for a son. I have been pressing on in faith my entire life, and I have never let doubt make me fall behind.",
      },
      {
        b: "#ED93B1",
        t: "I have become the father of many nations. God has blessed me beyond measure. I have shown the world that faith in God is the foundation of everything.",
      },
    ],
  },
  {
    name: "Deborah",
    av: "D",
    bg: "#D4A574",
    verse: "Judges 4–5 · 'A mother to Israel'",
    qualities: ["Wise", "Courageous", "Leader", "Faithful"],
    reflection:
      "Deborah was a judge, a prophetess, and a military leader in Israel. She was wise, courageous, and deeply faithful. She did not wait for a man to lead — she stepped forward when God called her. She has shown us that God uses women powerfully and that courage comes from trusting in God's strength, not our own.",
    disc: "Deborah led Israel to victory against overwhelming odds. She trusted God completely and encouraged others to do the same. How does Deborah's leadership reflect the way Jesus calls us to trust in His power rather than our own?",
    clues: [
      {
        b: "#AFA9EC",
        t: "I am wise, courageous, and deeply faithful. I have led an entire nation to victory, and I have never doubted God's power to deliver us.",
      },
      {
        b: "#5DCAA5",
        t: "I had been serving as a judge and prophetess for years before God called me to lead Israel into battle. I had already proven my faithfulness in smaller things.",
      },
      {
        b: "#EF9F27",
        t: "I never gave up even when the odds seemed impossible. I have been carrying on God's mission with courage and conviction. I have shown Israel that God fights for His people.",
      },
      {
        b: "#ED93B1",
        t: "I have led Israel to a great victory. I have written a song of praise that has lasted for thousands of years. I have proven that God's strength is made perfect in our weakness.",
      },
    ],
  },
  {
    name: "Job",
    av: "J",
    bg: "#8B6F47",
    verse: "Job 1–42 · 'Though He slay me, yet will I trust Him'",
    qualities: ["Patient", "Faithful", "Persevering", "Trusting"],
    reflection:
      "Job suffered more than almost anyone in the Bible — he lost his children, his wealth, his health, and his reputation. Yet he never cursed God. He questioned God, he was confused, but he never abandoned his faith. He has shown us that faith is not about understanding everything — it is about trusting God even in the darkness.",
    disc: "Job's suffering points us to Jesus, who suffered innocently to save us. Job's faith in the midst of suffering shows us what it means to trust God even when life makes no sense. How does Job's story prepare us to understand Jesus's suffering?",
    clues: [
      {
        b: "#AFA9EC",
        t: "I am patient, faithful, and deeply trusting. I have endured suffering beyond measure, yet I have never stopped believing that God is good.",
      },
      {
        b: "#5DCAA5",
        t: "I had been the richest man in the East, and I had been blessed with a large family. Then, in a single day, I had lost everything — my children, my wealth, my health.",
      },
      {
        b: "#EF9F27",
        t: "I never gave up on God, even in my deepest pain. I have been pressing on through suffering that seemed endless. Though He slay me, yet will I trust Him.",
      },
      {
        b: "#ED93B1",
        t: "I have learned that God's ways are higher than my ways. God has restored me and blessed me even more than before. I have become a symbol of faith through suffering.",
      },
    ],
  },
  {
    name: "Jonah",
    av: "J",
    bg: "#6B8E99",
    verse: "Jonah 1–4 · 'A sign of resurrection'",
    qualities: ["Reluctant", "Obedient", "Transformed", "Faithful"],
    reflection:
      "Jonah ran from God, was swallowed by a great fish, repented, and then preached to Nineveh — leading the entire city to turn from their sin. But then he became angry that God showed mercy. Jonah has shown us that even when we run from God, He pursues us. And even when we obey, we must learn to have God's heart of compassion.",
    disc: "Jesus said that the sign of Jonah — three days in the belly of the fish — points to His own resurrection. Jonah's story is a picture of death and resurrection through Jesus. How does Jonah's deliverance point us to Christ?",
    clues: [
      {
        b: "#AFA9EC",
        t: "I am reluctant, but I have learned obedience. I ran from God, but He pursued me. I have been transformed by God's mercy, and I have learned to trust His plan.",
      },
      {
        b: "#5DCAA5",
        t: "I had been running away from God when a great storm came. I had been thrown into the sea and swallowed by a great fish. I had spent three days in darkness.",
      },
      {
        b: "#EF9F27",
        t: "I never gave up, even in the belly of the fish. I have been pressing on after my deliverance. I have preached to Nineveh, and the entire city has turned from their sin.",
      },
      {
        b: "#ED93B1",
        t: "I have learned that God's mercy is greater than my anger. I have been transformed from a reluctant servant into a faithful messenger. My story points to the resurrection of Jesus.",
      },
    ],
  },
  {
    name: "Peter",
    av: "P",
    bg: "#C85A54",
    verse: "Matthew 16:18 · 'On this rock I will build my church'",
    qualities: ["Impulsive", "Faithful", "Courageous", "Transformed"],
    reflection:
      "Peter was impulsive, passionate, and often made mistakes. He denied Jesus three times, yet Jesus restored him completely. Peter became the rock upon which Jesus built His church. He has shown us that our failures do not define us — God's grace and restoration do.",
    disc: "Jesus said 'Peter, on this rock I will build my church.' Peter's transformation from a fearful denier to a bold apostle is a picture of what Jesus does for all of us — He takes our weakness and builds His kingdom through it.",
    clues: [
      {
        b: "#AFA9EC",
        t: "I am impulsive, passionate, and deeply faithful. I have walked on water, I have cut off a servant's ear, and I have denied knowing Jesus three times.",
      },
      {
        b: "#5DCAA5",
        t: "I had been a simple fisherman when Jesus called me. I had left my nets and my family to follow Him. I had been learning from the greatest teacher who ever lived.",
      },
      {
        b: "#EF9F27",
        t: "I never gave up after my denial of Jesus. I have been carrying on His mission with boldness and courage. I have been pressing on even when it meant facing persecution and death.",
      },
      {
        b: "#ED93B1",
        t: "I have become the rock upon which Jesus built His church. I have preached to thousands, and I have written letters that guide believers to this day. Jesus has restored me completely.",
      },
    ],
  },
  {
    name: "Samson",
    av: "S",
    bg: "#A0522D",
    verse: "Judges 13–16 · 'One final act of faith'",
    qualities: ["Strong", "Impulsive", "Redeemed", "Faithful"],
    reflection:
      "Samson had incredible strength but terrible judgment. He made foolish choices, fell into temptation, and was captured by his enemies. Blinded and imprisoned, he finally turned back to God. In his final act, he prayed for strength one last time and brought down the temple, saving Israel. He has shown us that God can redeem even our greatest failures.",
    disc: "Samson's final act of faith — praying to God even after all his failures — points to Jesus, who redeems us completely. No matter how far we have fallen, God can restore us and use us for His purposes.",
    clues: [
      {
        b: "#AFA9EC",
        t: "I am strong, but I have been impulsive and foolish. I have made terrible choices, and I have been captured by my enemies. Yet I have learned to trust God.",
      },
      {
        b: "#5DCAA5",
        t: "I had been given incredible strength by God. I had been blinded and imprisoned for my foolishness. I had spent years in darkness, grinding grain for my captors.",
      },
      {
        b: "#EF9F27",
        t: "I never gave up on God, even in my darkest moment. I have been pressing on toward one final act of faith. I have prayed to God for strength one last time.",
      },
      {
        b: "#ED93B1",
        t: "I have brought down the temple of the Philistines and saved Israel. I have learned that God's grace is greater than my failures. My final act is remembered as an act of faith.",
      },
    ],
  },
  {
    name: "Rahab",
    av: "R",
    bg: "#D4A5A5",
    verse: "Joshua 2 · Matthew 1:5 — Part of the lineage of Christ",
    qualities: ["Wise", "Courageous", "Faithful", "Redeemed"],
    reflection:
      "Rahab was a prostitute in Jericho, but she recognized God's power and chose to help the Israelite spies. She risked her life to hide them. God honored her faith and saved her and her entire family. She was included in the lineage of Jesus. She has shown us that God sees our hearts and that no one is beyond His redemption.",
    disc: "Rahab, a Gentile prostitute, is included in the family line of Jesus. This shows that God's grace extends to everyone — no matter our past, no matter our background. How does Rahab's story show us the radical inclusivity of God's redemption?",
    clues: [
      {
        b: "#AFA9EC",
        t: "I am wise, courageous, and deeply faithful. I have recognized God's power, and I have risked everything to help His people.",
      },
      {
        b: "#5DCAA5",
        t: "I had been living as a prostitute in Jericho. I had heard about the God of Israel, and I had believed that He was the true God. I had hidden the Israelite spies in my home.",
      },
      {
        b: "#EF9F27",
        t: "I never gave up on my faith, even though I lived in a city that was about to be destroyed. I have been carrying on with courage and conviction. I have moved on from my past.",
      },
      {
        b: "#ED93B1",
        t: "I have been saved, along with my entire family. I have married an Israelite and become part of God's people. I am in the family line of Jesus Himself.",
      },
    ],
  },
  {
    name: "John",
    av: "J",
    bg: "#4169E1",
    verse: "John 1:1 · 'In the beginning was the Word'",
    qualities: ["Contemplative", "Faithful", "Loving", "Wise"],
    reflection:
      "John was the beloved disciple — the one who leaned on Jesus's chest at the Last Supper. He was contemplative, deeply faithful, and he wrote the most profound gospel. He lived longer than the other apostles and continued to teach and write. He has shown us what it means to be loved by Jesus and to respond with a lifetime of faithful service.",
    disc: "John wrote 'In the beginning was the Word, and the Word was with God, and the Word was God.' John's gospel reveals Jesus as the eternal Word of God. How does John's contemplative approach to faith deepen our understanding of who Jesus is?",
    clues: [
      {
        b: "#AFA9EC",
        t: "I am contemplative, faithful, and deeply loving. I have leaned on Jesus's chest, and I have known His love in a way that has shaped my entire life.",
      },
      {
        b: "#5DCAA5",
        t: "I had been a fisherman when Jesus called me. I had been learning from Him for three years. I had witnessed His death, His resurrection, and His ascension.",
      },
      {
        b: "#EF9F27",
        t: "I never gave up on Jesus, even when He was crucified. I have been carrying on His mission for decades. I have been pressing on in faith and love.",
      },
      {
        b: "#ED93B1",
        t: "I have written a gospel that reveals Jesus as the eternal Word of God. I have lived longer than the other apostles and continued to teach and write. I have shown the world what it means to be loved by Jesus.",
      },
    ],
  },
  {
    name: "Gideon",
    av: "G",
    bg: "#8B7355",
    verse: "Judges 6–8 · 'The Lord is with you'",
    qualities: ["Humble", "Faithful", "Courageous", "Obedient"],
    reflection:
      "Gideon was afraid, full of doubt, and the least in his father's house. Yet God called him to lead Israel against the Midianites. Gideon asked for signs, and God patiently showed him. With only 300 men, Gideon defeated an army of thousands. He has shown us that God uses the weak and the fearful to accomplish His purposes.",
    disc: "Gideon's victory with only 300 men points to the way Jesus defeated Satan and sin through His weakness on the cross. God's power is made perfect in weakness. How does Gideon's story prepare us to understand the power of the cross?",
    clues: [
      {
        b: "#AFA9EC",
        t: "I am humble, faithful, and deeply courageous. I have been afraid, but I have learned to trust God's strength rather than my own.",
      },
      {
        b: "#5DCAA5",
        t: "I had been the least in my father's house when God called me. I had been threshing wheat in secret when the angel appeared to me. I had asked for signs because I was full of doubt.",
      },
      {
        b: "#EF9F27",
        t: "I never gave up on God, even when my faith was weak. I have been pressing on with only 300 men against an army of thousands. I have learned that God's strength is all I need.",
      },
      {
        b: "#ED93B1",
        t: "I have led Israel to a great victory. I have proven that God uses the weak and the fearful to accomplish His purposes. My story shows that faith is more powerful than numbers.",
      },
    ],
  },
];
