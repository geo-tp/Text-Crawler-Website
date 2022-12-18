export const SourcePage = () => {
  const database = [
    "Mangos 1.2 Quests templates",
    "Mangos 1.2 NPC text",
    "WDB 0.5.5 Quests",
    "WDB 0.5.5 Creatures",
    "WDB 0.5.3 Quests",
    "WDB 0.5.3 GameObjects",
    "WDB 0.5.3 Creatures",
    "WoWPython 2004 Creatures spawn",
    "Allakhazam 2004 Creature details",
    "Allakhazam 2004 Quests details",
    "Allakhazam 2004 Items details",
    "Broadcast texts from classic",
    "Creatures 2004 sniff",
  ];

  const text = [
    "GenCon 2003",
    "E3 2003",
    "Blizzard Q&A 2003-2004",
    "Alpha Patch Notes",
    "Alpha Testers Reports",
    "WorldOfWar News & Articles 2004",
    "WorldOfWar Press Deck 2004",
    "WorldOfWar Players Journals 2004",
    "Allakhazam Guides 2004",
    "WoWVault News & Articles 2003-2004",
    "WoWVault GuideBook 2004",
    "WarCry News & Articles 2002-2004",
    "WarCry Beta Journals 2004",
    "WarCry E3 2003 Coverage",
  ];

  const website = [
    "WorldOfWar.net 2003-2004 (Partial)",
    "Allakhazam 2004 (Partial)",
    "WoWVault 2004 (Partial)",
  ];

  const forum = [
    "WoW Official Forum 2003 2004",
    "WoWVault Topics Of The Week 2004",
  ];

  const various = ["Nothing for now"];

  return (
    <div className="source-page">
      <h1>List of sources : </h1>

      <h2>Database</h2>
      {database.map((source, index) => (
        <p key={`db-${index}`}>{source}</p>
      ))}

      <h2>Text</h2>
      {text.map((source, index) => (
        <p key={`text-${index}`}>{source}</p>
      ))}

      <h2>Website</h2>
      {website.map((source, index) => (
        <p key={`ste-${index}`}>{source}</p>
      ))}

      <h2>Forum</h2>
      {forum.map((source, index) => (
        <p key={`forum-${index}`}>{source}</p>
      ))}

      <h2>Various</h2>
      {various.map((source, index) => (
        <p key={`various-${index}`}>{source}</p>
      ))}
    </div>
  );
};
