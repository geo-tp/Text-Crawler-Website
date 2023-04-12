export const SourcePage = () => {
  const database = [
    "Mangos 1.2 Quests templates",
    "Mangos 1.2 NPC text",
    "WDB 0.5.3 Quests, Creatures",
    "WDB 0.5.5 Quests, Creatures, GameObjects",
    "WDB 0.6 Creatures",
    "WDB 0.11 Creatures",
    "WoWPython 2004 Creatures spawn",
    "WoWPython 2004 Items details",
    "Allakhazam 2004 Creatures details",
    "Allakhazam 2004 Quests details",
    "Allakhazam 2004 Items details",
    "WoWCentral 2004 NPC location list",
    "WoWCentral 2004 Quests details",
    "WoWCentral 2004 Atlas",
    "WorldOfWar 2004 Items details",
    "Mmhell 2004 NPC & mobs location list",
    "Mmhell 2004 Items details",
    "InWoW 2004 professions recipes",
    "InWoW 2004 mobs by zone",
    "WCLegacy 2004 Blacksmith recipes",
    "WarcraftStrategy quest details June 2004",
    "WarcraftStrategy creatures list June 2004",
    "WarcraftStrategy items details June 2004",
    "WoWVault quests details April 2004",
    "WoWVault items details April 2004",
    "Broadcast texts from classic",
    "Creatures 2004 sniff",
  ];

  const text = [
    "GenCon 2003",
    "E3 2003",
    "Blizzard Q&A 2003-2004",
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
    "Mmhell Guides 2004",
    "Mmhell Beta diary 2004",
    "Mmhell News & Articles 2003-2004",
    "WarcraftCentral Articles 2001-2004",
    "WcLegacy News & Articles 2004",
    "WCLegacy Guides 2004",
    "WarcraftStrategy 2004 News & Articles",
    "WarcraftStrategy 2004 Guides",
    "WoWGuru 2004 Druid Guide",
  ];

  const website = [
    "WorldOfWar 2003-2004 (Partial)",
    "Allakhazam 2004 (Partial)",
    "WoWVault 2004 (Partial)",
    "GoblinFactory 2004 (Partial)",
    "Thottbot Beta 2004 (Partial)",
    "WoWGuru 2004 (Partial)",
    "Gamona 2004 (Partial)",
    "Warcry 2004 (Partial)",
    "Infoceptor 2004 (Partial)",
    "UltimateGamers 2004 (Partial)",
    "KingOfAzeroth 2004 (Partial)"
  ];

  const forum = [
    "WoW Official Forum 2003 2004",
    "WoW Beta Official Forum 2004",
    "WoWVault Forum 2004",
    "Infoceptor Beta Journals Forum 2004",
    "Allakhazam Forum 2004",
    "LurkerLounge Forum 2004",
    "TheSafeHouse Forum 2004",
    "TheDruidGrove Forum 2004",
    "WarCry Forum 2004"
  ];

  const patchnote = [
    "Patch notes from 0.5.3 to 1.2",
    "Unofficial Alpha Patch Notes",
    "Unofficial Beta Patch Notes",
  ];

  return (
    <div className="source-page">
      <h1>List of sources : </h1>

      <h2>Database</h2>
      {database.map((source, index) => (
        <ul>
          <li key={`db-${index}`}>{source}</li>
        </ul>
      ))}

      <h2>Text</h2>
      {text.map((source, index) => (
        <ul>
          <li key={`text-${index}`}>{source}</li>
        </ul>
      ))}

      <h2>Website</h2>
      {website.map((source, index) => (
        <ul>
          <li key={`site-${index}`}>{source}</li>
        </ul>
      ))}

      <h2>Forum</h2>
      {forum.map((source, index) => (
        <ul>
          <li key={`forum-${index}`}>{source}</li>
        </ul>
      ))}
      <h2>Patch Note</h2>
      {patchnote.map((source, index) => (
        <ul>
          <li key={`patch-note-${index}`}>{source}</li>
        </ul>
      ))}

      <h2>Image</h2>
      <ul>
        <li>Screenshots from Alpha Archive</li>
      </ul>

    </div>
  );
};
