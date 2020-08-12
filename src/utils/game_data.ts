//Game images imports

const main_header = require("../assets/game/main_header.png");
const school_header = require("../assets/game/ttl-story-02.png");
const bond_header = require("../assets/game/ttl-story-03.png");
const theater_header = require("../assets/game/ttl-story-04.png");

const game_1 = require("../assets/game/game_1.png");
const game_2 = require("../assets/game/system_img-story-02.png");
const game_3 = require("../assets/game/system_img-story-03.png");
const game_4 = require("../assets/game/system_img-story-04.png");

//Revue images imports

const revue_header = require("../assets/game/revue/ttl-revue-01.png");
const revue2_header = require("../assets/game/revue/ttl-revue-02.png");
const revue3_header = require("../assets/game/revue/ttl-revue-03.png");
const revue4_header = require("../assets/game/revue/ttl-revue-04.png");
const revue5_header = require("../assets/game/revue/ttl-revue-05.png");

const revue_1 = require("../assets/game/revue/system_img-revue-01.png");
const revue_2 = require("../assets/game/revue/system_img-revue-02.png");
const revue_3 = require("../assets/game/revue/system_img-revue-03.png");
const revue_4 = require("../assets/game/revue/system_img-revue-04.png");
const revue_5 = require("../assets/game/revue/system_img-revue-05.png");

//Growth files imports

const growth_1 = require("../assets/game/growth/system_img-training-01.png");
const growth_2 = require("../assets/game/growth/system_img-training-02.png");
const growth_3 = require("../assets/game/growth/system_img-training-03.png");
const growth_4 = require("../assets/game/growth/system_img-training-04.png");
const growth_5 = require("../assets/game/growth/system_img-training-05.png");

const growth_header = require("../assets/game/growth/ttl-training-01.png");
const growth2_header = require("../assets/game/growth/ttl-training-02.png");
const growth3_header = require("../assets/game/growth/ttl-training-03.png");
const growth4_header = require("../assets/game/growth/ttl-training-04.png");
const growth5_header = require("../assets/game/growth/ttl-training-05.png");

export interface GameArray {
  id: number;
  type: string;
  header1: string;
  header2: string;
  header3: string;
  header4: string;
  header5?: string;
  photo_1: string;
  photo_2: string;
  photo_3: string;
  photo_4: string;
  photo_5?: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5?: string;
}

export const gameData: GameArray[] = [
  {
    id: 1,
    type: "Story",
    header1: main_header.default,
    header2: school_header.default,
    header3: bond_header.default,
    header4: theater_header.default,
    photo_1: game_1.default,
    photo_2: game_2.default,
    photo_3: game_3.default,
    photo_4: game_4.default,
    text1:
      "Revue Starlight Re LIVE tells the story of 24 Stage Girls. Featuring a fully voiced original story, you'll unravel the mysteries of why the play 'Starlight' is disappearing from memory, and the 'Revues', which pit Stage Girls of different schools against one another. Completing stages will unlock new chapters of the story. ",
    text2:
      "In the School Stories, you can see the story for each individual school. These unlock as you progress in the Main Story, and shed light on the girls' relationships and reasons for performing in the auditions. ",
    text3:
      "Present Gifts to a Stage Girl to increase her Bond Level and unlock Bond Stories. Bond Stories will depict a special story that focuses on that Stage Girl. ",
    text4:
      "Theater Stories randomly appear in My Theater. These stories will show different aspects of the girls in their daily lives. You may even uncover some unexpected character quirks! ",
  },
  {
    id: 2,
    type: "Revues",
    header1: revue_header.default,
    header2: revue2_header.default,
    header3: revue3_header.default,
    header4: revue4_header.default,
    header5: revue5_header.default,
    photo_1: revue_1.default,
    photo_2: revue_2.default,
    photo_3: revue_3.default,
    photo_4: revue_4.default,
    photo_5: revue_5.default,
    text1:
      "Select Acts until the point total reaches six. Attacks that have a high cost are powerful but slow. Strategize against your opponent and choose carefully! ",
    text2:
      "Use skills and attacks to build up the Brilliance Gauge, enter into a Climax Revue, and perform a Revue Song. You can perform powerful Climax Acts when in a Climax Revue. If two or more Stage Girls use a Climax Act, they can perform an additional Finishing Act! Think carefully about when to activate! ",
    text3:
      "Some Stage Girl have Acts that inflict effects such as reducing the enemy's attack power or damaging an enemy over time. Keep an eye on your girls' status! ",
    text4:
      "Stage Girls and the Korosu each have one of the following Elements: Flower, Wind, Snow, Moon, Space, Cloud, and Dream. These Elements can help or hinder you depending on the opponent. Keep them in mind when choosing your lineup for a Revue! ",
    text5:
      "Normal Defense and Special Defense affect how much damage is taken from different Act Types. Try attacking an enemy with high Normal Defense with a Special type. Considering Act types as well as Elements is your key to victory! ",
  },
  {
    id: 3,
    type: "Growth",
    header1: growth_header.default,
    header2: growth2_header.default,
    header3: growth3_header.default,
    header4: growth4_header.default,
    header5: growth5_header.default,
    photo_1: growth_1.default,
    photo_2: growth_2.default,
    photo_3: growth_3.default,
    photo_4: growth_4.default,
    photo_5: growth_5.default,
    text1:
      "By spending Lesson Tickets and Coins, you can level up your Stage Girls and increase their Power Scores. You might have a favorite Stage Girl, but also make sure to level up a tank who can stand in front to defend the others! There are also Lesson Ticket Hunts in the Events screen that give a ton of Lesson Tickets! ",
    text2:
      "Use Pieces and Coins to unlock Skill Panels and boost your Stage Girls' stats. Complete Revues to collect Pieces or purchase them in the Shop! Unlock eight Skill Panels to rank up your Stage Girls, and shoot to get them to Rank 9! ",
    text3:
      "If you don't have enough Pieces and can't unlock Skill Panels, don't worry! You can select Stages to get Pieces from the Skill Panel. By using the Skip function, you can collect Pieces quickly. ",
    text4:
      "Collecting Potential Crystals will really let a Stage Girl's talents bloom! This will raise her rarity level, unlock her level cap, and allow her stats to go even higher. You can obtain Potential Crystals via Potential Crystal Hunts, Events, and in the Shop. ",
    text5:
      "Raise a Stage Girl's Bond Level by giving her Gifts. You can obtain various rewards or stat increases when the Bond Level goes up. Different Stage Girls like different things, so figure out what Gifts to give to maximize the Bond Level! ",
  },
];
